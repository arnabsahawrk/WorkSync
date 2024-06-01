import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const ManagementCountUp = () => {
  const [countOn, setCountOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => {
        setCountOn(true);
      }}
      onExit={() => {
        setCountOn(false);
      }}
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center text-common">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold">
            {countOn && <CountUp start={13} end={43} duration={5} delay={0} />}%
          </h2>
          <p className="text-sm font-medium">Fewer work accidents</p>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-semibold">
            {countOn && <CountUp start={17} end={37} duration={5} delay={0} />}%
          </h2>
          <p className="text-sm font-medium">Higher profitability</p>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-semibold">
            {countOn && <CountUp start={11} end={61} duration={5} delay={0} />}%
          </h2>
          <p className="text-sm font-medium">Less rework needed</p>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-semibold">
            {countOn && <CountUp start={15} end={85} duration={5} delay={0} />}%
          </h2>
          <p className="text-sm font-medium">Higher employee satisfaction</p>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default ManagementCountUp;
