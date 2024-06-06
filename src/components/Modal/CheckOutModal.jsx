import { Dialog } from "@material-tailwind/react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PropTypes from "prop-types";
import { useState } from "react";
import PaymentCheckOutForm from "../Form/PaymentCheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_paymentGatewayPK);
const CheckOutModal = ({ staff }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <div>
      <button
        disabled={!staff?.isVerified}
        onClick={handleOpen}
        className={`rounded p-1 ${
          staff?.isVerified
            ? "bg-secondary"
            : "bg-[#fdb71c80] text-[#F5F5F5CC] cursor-not-allowed"
        }`}
      >
        Pay
      </button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none lg:ml-64"
      >
        {/* Stripe Integration  */}
        <div className="bg-primary rounded-lg shadow-lg p-6">
          <Elements stripe={stripePromise}>
            <PaymentCheckOutForm staff={staff} handleClose={handleOpen} />
          </Elements>
        </div>
      </Dialog>
    </div>
  );
};

CheckOutModal.propTypes = {
  staff: PropTypes.object.isRequired,
};

export default CheckOutModal;
