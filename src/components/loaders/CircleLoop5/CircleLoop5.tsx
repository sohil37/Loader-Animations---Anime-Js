import anime from "animejs";
import { useEffect, useRef } from "react";

import styles from "./circleLoop5.module.css";

function CircleLoop5(props: {
  circleSize: number;
  circleColor: string;
  circleBorderWidth: number;
}) {
  const circleRef = useRef(null);

  useEffect(() => {
    try {
      const circle1Animation = anime({
        rotate: 360,
        duration: 1000,
        targets: circleRef.current,
        loop: true,
        easing: "linear",
      });

      return () => {
        try {
          circle1Animation.pause();
        } catch (error) {
          console.error(error);
        }
      };
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.circle}
        style={{
          borderRightColor: props.circleColor,
          borderLeftColor: props.circleColor,
          borderWidth: props.circleBorderWidth,
          height: props.circleSize,
          width: props.circleSize,
          top: -props.circleSize / 2,
          left: -props.circleSize / 2,
        }}
        ref={circleRef}
      ></div>
    </div>
  );
}

export default CircleLoop5;
