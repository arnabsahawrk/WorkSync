import {
  FaCloud,
  FaCreditCard,
  FaFileInvoiceDollar,
  FaLaptop,
} from "react-icons/fa";
import { CiDollar } from "react-icons/ci";
import { TbRotateClockwise2 } from "react-icons/tb";
import { FaHandHoldingDollar, FaHeartCirclePlus } from "react-icons/fa6";
import { LiaSearchPlusSolid } from "react-icons/lia";
import {
  MdAppRegistration,
  MdEmojiSymbols,
  MdOutlineInventory2,
} from "react-icons/md";
import { GrGroup } from "react-icons/gr";

const Products = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      {/* HR Cloud  */}
      <div className="border border-gray-400 dark:border-darkPrimary cursor-pointer hover:shadow-2xl dark:shadow-darkPrimary">
        <div className="border-t-4 border-b border-t-secondary border-b-gray-400 bg-white dark:bg-darkPrimary p-4 space-y-2">
          <p>
            <FaCloud className="text-secondary text-4xl" />
          </p>
          <h1 className="font-bold text-darkPrimary dark:text-common text-2xl">
            HR Cloud
          </h1>
          <p className="text-gray-500">
            Award-winning HR software built to help you easily scale from 2 to
            2,000+ employees.
          </p>
        </div>
        <div className="bg-primaryBg">
          <div className="grid grid-cols-2">
            <div className="flex items-center gap-3 p-4">
              <p className="bg-primary p-2 rounded">
                <CiDollar className="text-secondary text-4xl" />
              </p>
              <p className="font-bold text-base md:text-xl">Payroll</p>
            </div>
            <div className="flex items-center gap-3 border-l border-gray-400 p-4">
              <p className="bg-primary p-2 rounded">
                <FaHeartCirclePlus className="text-secondary text-4xl" />
              </p>
              <p className="font-bold text-base md:text-xl">Benefits</p>
            </div>
          </div>
        </div>
        <div className="bg-primaryBg">
          <div className="grid grid-cols-2">
            <div className="flex items-center gap-3 border-y border-y-gray-400 p-4">
              <p className="bg-primary p-2 rounded">
                <TbRotateClockwise2 className="text-secondary text-4xl" />
              </p>
              <p className="font-bold text-base md:text-xl">T&A</p>
            </div>
            <div className="flex items-center gap-3 border-l border-gray-400 border-y border-y-gray-400 p-4">
              <p className="bg-primary p-2 rounded">
                <LiaSearchPlusSolid className="text-secondary text-4xl" />
              </p>
              <p className="font-bold text-base md:text-xl">Recruiting</p>
            </div>
          </div>
        </div>
        <div className="bg-primaryBg">
          <div className="grid grid-cols-2">
            <div className="flex items-center gap-3 p-4">
              <p className="bg-primary p-2 rounded">
                <MdEmojiSymbols className="text-secondary text-4xl" />
              </p>
              <p className="font-bold text-base md:text-xl">Pulse</p>
            </div>
            <div className="flex items-center gap-3 border-l border-gray-400 p-4">
              <p className="bg-primary p-2 rounded">
                <GrGroup className="text-secondary text-4xl" />
              </p>
              <p className="font-bold text-base md:text-xl">PEO</p>
            </div>
          </div>
        </div>
      </div>
      {/* IT Cloud  */}
      <div className="border border-gray-400 dark:border-darkPrimary cursor-pointer hover:shadow-2xl dark:shadow-darkPrimary">
        <div className="border-t-4 border-b border-t-primary border-b-gray-400 bg-white dark:bg-darkPrimary p-4 space-y-2">
          <p>
            <FaCloud className="text-primary text-4xl" />
          </p>
          <h1 className="font-bold text-darkPrimary dark:text-common text-2xl">
            IT Cloud
          </h1>
          <p className="text-gray-500">
            Easily set up, secure, and manage your people&apos;s devices and
            apps-100% remotely.
          </p>
        </div>
        <div className="bg-primaryBg p-4">
          <div className="flex items-center gap-3">
            <p className="bg-primary p-2 rounded">
              <MdAppRegistration className="text-secondary text-4xl" />
            </p>
            <p className="font-bold text-base md:text-xl">App Management</p>
          </div>
        </div>
        <div className="bg-primaryBg border-y border-y-gray-400 p-4">
          <div className="flex items-center gap-3">
            <p className="bg-primary p-2 rounded">
              <FaLaptop className="text-secondary text-4xl" />
            </p>
            <p className="font-bold text-base md:text-xl">Device Management</p>
          </div>
        </div>
        <div className="bg-primaryBg p-4">
          <div className="flex items-center gap-3">
            <p className="bg-primary p-2 rounded">
              <MdOutlineInventory2 className="text-secondary text-4xl" />
            </p>
            <p className="font-bold text-base md:text-xl">
              Inventory Management
            </p>
          </div>
        </div>
      </div>
      {/* Finance Cloud  */}
      <div className="border border-gray-400 dark:border-darkPrimary cursor-pointer hover:shadow-2xl dark:shadow-darkPrimary">
        <div className="border-t-4 border-b border-t-rareColor border-b-gray-400 bg-white dark:bg-darkPrimary p-4 space-y-2">
          <p>
            <FaCloud className="text-rareColor text-4xl" />
          </p>
          <h1 className="font-bold text-darkPrimary dark:text-common text-2xl">
            Finance Cloud
          </h1>
          <p className="text-gray-500">
            Manage and report on all of your company&apos;s spend-in one place.
          </p>
        </div>
        <div className="bg-primaryBg p-4">
          <div className="flex items-center gap-3">
            <p className="bg-primary p-2 rounded">
              <FaCreditCard className="text-secondary text-4xl" />
            </p>
            <p className="font-bold text-base md:text-xl">Corporate Cards</p>
          </div>
        </div>
        <div className="bg-primaryBg border-y border-y-gray-400 p-4">
          <div className="flex items-center gap-3">
            <p className="bg-primary p-2 rounded">
              <FaHandHoldingDollar className="text-secondary text-4xl" />
            </p>
            <p className="font-bold text-base md:text-xl">Expense Management</p>
          </div>
        </div>
        <div className="bg-primaryBg p-4">
          <div className="flex items-center gap-3">
            <p className="bg-primary p-2 rounded">
              <FaFileInvoiceDollar className="text-secondary text-4xl" />
            </p>
            <p className="font-bold text-base md:text-xl">Bill Pay</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
