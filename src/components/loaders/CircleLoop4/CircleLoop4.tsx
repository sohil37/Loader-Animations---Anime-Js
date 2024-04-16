import anime from "animejs";
import { useEffect, useRef } from "react";

import styles from "./circleLoop4.module.css";

function CircleLoop4(props: {
  circleSize: number;
  circle1Color: string;
  circle2Color: string;
  circle3Color: string;
  circle4Color: string;
  revolutionSize: number;
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    try {
      const circleAnimation = anime({
        rotate: 360,
        duration: 1500,
        targets: containerRef.current,
        loop: true,
        easing: "linear",
      });

      return () => {
        try {
          circleAnimation.pause();
        } catch (error) {
          console.error(error);
        }
      };
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div
      className={styles.container}
      ref={containerRef}
      style={{ height: props.revolutionSize, width: props.revolutionSize }}
    >
      <div
        className={styles.circle}
        style={{
          backgroundColor: props.circle1Color,
          height: props.circleSize,
          width: props.circleSize,
          top: -props.circleSize / 2,
          left: -props.circleSize / 2,
        }}
      ></div>
      <div
        className={styles.circle}
        style={{
          backgroundColor: props.circle2Color,
          height: props.circleSize,
          width: props.circleSize,
          top: -props.circleSize / 2,
          right: -props.circleSize / 2,
        }}
      ></div>
      <div
        className={styles.circle}
        style={{
          backgroundColor: props.circle3Color,
          height: props.circleSize,
          width: props.circleSize,
          bottom: -props.circleSize / 2,
          right: -props.circleSize / 2,
        }}
      ></div>
      <div
        className={styles.circle}
        style={{
          backgroundColor: props.circle4Color,
          height: props.circleSize,
          width: props.circleSize,
          bottom: -props.circleSize / 2,
          left: -props.circleSize / 2,
        }}
      ></div>
    </div>
  );
}

export default CircleLoop4;
