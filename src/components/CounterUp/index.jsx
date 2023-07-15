import React from 'react';
import { useSpring, animated } from 'react-spring';

const CounterUp = ({ end }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: end,
    delay: 500, // Delay before the counter starts
    config: { duration: 4000 }, // Duration of the counter animation
  });

  return (
    <div>
      <h2  >
        <animated.span>{number.interpolate((val) => Math.floor(val))}</animated.span>
      </h2>
    </div>
  );
};

export default CounterUp;
