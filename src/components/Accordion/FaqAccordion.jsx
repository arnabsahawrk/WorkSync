import FaqLottie from "../Lottie/FaqLottie";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const FaqAccordion = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 place-items-center">
      <FaqLottie />
      <div>
        <Accordion
          open={open === 1}
          className="mb-2 rounded-lg bg-darkPrimary px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="border-b-0 transition-colors text-common text-lg lg:text-xl hover:text-common"
          >
            <p className="flex items-center gap-3">
              {open === 1 ? <FaMinus /> : <FaPlus />} What is an employee
              management platform?
            </p>
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal text-gray-500">
            An employee management platform is a comprehensive tool designed to
            help companies manage their workforce efficiently. It provides
            functionalities for tracking employee tasks, performance,
            attendance, and payroll, ensuring smooth HR operations.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          className="mb-2 rounded-lg bg-darkPrimary px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="border-b-0 transition-colors text-common text-lg lg:text-xl hover:text-common"
          >
            <p className="flex items-center gap-3">
              {open === 2 ? <FaMinus /> : <FaPlus />} What does an employee
              management platform do?
            </p>
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal text-gray-500">
            An employee management platform streamlines various HR processes
            such as monitoring employee workloads, managing salaries and
            benefits, recording attendance, and facilitating communication
            between employees and HR. It helps in organizing and automating
            routine tasks to improve overall productivity.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 3}
          className="mb-2 rounded-lg bg-darkPrimary px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className="border-b-0 transition-colors text-common text-lg lg:text-xl hover:text-common"
          >
            <p className="flex items-center gap-3">
              {open === 3 ? <FaMinus /> : <FaPlus />} Why use WorkSync for
              performance management?
            </p>
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal text-gray-500">
            WorkSync excels in performance management by offering real-time
            tracking of employee tasks and productivity. It simplifies the
            process of setting and monitoring performance goals, providing
            insights and analytics that help HR and managers make informed
            decisions. Its user-friendly interface and efficient workflows
            ensure a smooth experience for both employees and administrators.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 4}
          className="mb-2 rounded-lg bg-darkPrimary px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className="border-b-0 transition-colors text-common text-lg lg:text-xl hover:text-common"
          >
            <p className="flex items-center gap-3">
              {open === 4 ? <FaMinus /> : <FaPlus />} Key components of
              WorkSync?
            </p>
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal text-gray-500">
            WorkSync includes several key components such as a customizable
            dashboard for quick insights, a task tracker for managing and
            assigning tasks, a payroll manager for handling employee salaries
            and benefits, and various HR tools for monitoring employee
            performance and facilitating communication. It also includes
            features like real-time updates and secure data storage.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5} className="rounded-lg bg-darkPrimary px-4">
          <AccordionHeader
            onClick={() => handleOpen(5)}
            className="border-b-0 transition-colors text-common text-lg lg:text-xl hover:text-common"
          >
            <p className="flex items-center gap-3">
              {open === 5 ? <FaMinus /> : <FaPlus />} Advantages of WorkSync?
            </p>
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal text-gray-500">
            WorkSync stands out with its user-friendly design and responsive
            interface, making it accessible on any device. It offers real-time
            updates and notifications to keep everyone informed and engaged.
            WorkSync also ensures data security and privacy, using advanced
            encryption methods to protect sensitive information. Its
            comprehensive features and efficient workflows make it a superior
            choice over other employee management platforms.
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default FaqAccordion;
