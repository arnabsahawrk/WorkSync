import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./PaymentCheckOutForm.css";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { MonthPicker, MonthInput } from "react-lite-month-picker";
import useAxiosSecure from "../../hooks/fetch/useAxiosSecure";
import { ImSpinner10 } from "react-icons/im";
import { LiaRupeeSignSolid } from "react-icons/lia";
import toast from "react-hot-toast";

const PaymentCheckOutForm = ({ staff, handleClose }) => {
  const [selectedMonthData, setSelectedMonthData] = useState({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [cardError, setCardError] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  const axiosSecure = useAxiosSecure();

  const stripe = useStripe();
  const elements = useElements();

  //create the payment intent
  useEffect(() => {
    const getClientSecret = async () => {
      const salary = staff?.salary;
      if (salary > 0) {
        const { data } = await axiosSecure.post("/create-payment-intent", {
          salary,
        });
        setClientSecret(data.clientSecret);
      }
    };
    getClientSecret();
  }, [staff?.salary, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const isPayment = {
      inputDate: {
        month: selectedMonthData.month,
        year: selectedMonthData.year,
      },
      uid: staff?.uid,
    };

    const { data } = await axiosSecure.post(`/salaries/isPayment`, isPayment);

    if (data.isPayment) {
      setCardError("Already Payment For This Month.");
      setProcessing(false);
      return;
    }

    if (!stripe || !elements) {
      setProcessing(false);
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      setProcessing(false);
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
      setProcessing(false);
      return;
    } else {
      setCardError(null);
    }

    //confirm payment
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: staff?.name,
            email: staff?.email,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      setProcessing(false);
      return;
    }

    if (confirmError) {
      setCardError(confirmError.message);
      setProcessing(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      const paymentInfo = {
        date: new Date().toLocaleString(),
        inputDate: {
          month: selectedMonthData.month,
          year: selectedMonthData.year,
        },
        ...staff,
        transactionId: paymentIntent.id,
      };
      delete paymentInfo._id, paymentInfo.id;

      try {
        //save DB
        await axiosSecure.post("/salaries", paymentInfo);
        setProcessing(false);
        handleClose();

        toast.success("Payment Successful.", {
          style: {
            border: "2px solid #866674",
            padding: "16px",
            color: "#F5F5F5",
            background: "#502D3C",
          },
          iconTheme: {
            primary: "#fdb71c",
            secondary: "#F5F5F5",
          },
        });
      } catch {
        setProcessing(false);
        handleClose();

        toast.error("Payment Failed, Try Again.", {
          style: {
            border: "2px solid #866674",
            padding: "16px",
            color: "#F5F5F5",
            background: "#502D3C",
          },
          iconTheme: {
            primary: "#CD2728",
            secondary: "#F5F5F5",
          },
        });
      }
    }
  };

  return (
    <>
      <div className="flex flex-col gap-2 font-bold">
        <p className="text-common flex items-center gap-1">
          Salary: {staff?.salary} <LiaRupeeSignSolid />
        </p>
        <div className="z-30">
          <MonthInput
            selected={selectedMonthData}
            setShowMonthPicker={setIsPickerOpen}
            showMonthPicker={isPickerOpen}
            size="small"
            textColor="#aab7c4"
          />
          {isPickerOpen ? (
            <MonthPicker
              setIsOpen={setIsPickerOpen}
              selected={selectedMonthData}
              onChange={setSelectedMonthData}
              size="small"
              bgColorPicker="#402530"
              bgColorMonthActive="#fdb71c"
              bgColorMonthHover="#fdb71c"
              textColor="#F5F5F5"
            />
          ) : null}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {cardError && <p className="text-red-500 italic">{cardError}</p>}
        <button
          type="submit"
          disabled={!stripe || !clientSecret || processing}
          className={`rounded py-1 px-2 font-bold ${
            !stripe || !clientSecret
              ? "bg-[#fdb71c80] text-[#F5F5F5CC]"
              : "bg-secondary text-common"
          }`}
        >
          {processing ? (
            <ImSpinner10 className="animate-spin mx-auto" size={26} />
          ) : (
            "Pay"
          )}
        </button>
      </form>
    </>
  );
};

PaymentCheckOutForm.propTypes = {
  staff: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default PaymentCheckOutForm;
