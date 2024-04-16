import anime from "animejs";
import { useEffect, useRef } from "react";

import styles from "./circleLoop3.module.css";

function CircleLoop3(props: {
  circleSize: number;
  circle1Color: string;
  circle2Color: string;
  circle3Color: string;
  circleBorderWidth: number;
}) {
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);
  const circle3Ref = useRef(null);

  useEffect(() => {
    try {
      const circle1Animation = anime({
        rotate: 360,
        duration: 1000,
        targets: circle1Ref.current,
        loop: true,
        easing: "linear",
      });
      const circle2Animation = anime({
        rotate: 360,
        duration: 900,
        targets: circle2Ref.current,
        loop: true,
        easing: "linear",
      });
      const circle3Animation = anime({
        rotate: 360,
        duration: 700,
        targets: circle3Ref.current,
        loop: true,
        easing: "linear",
      });

      return () => {
        try {
          circle1Animation.pause();
          circle2Animation.pause();
          circle3Animation.pause();
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
          borderRightColor: props.circle1Color,
          borderBottomColor: props.circle1Color,
          borderWidth: props.circleBorderWidth,
          height: props.circleSize,
          width: props.circleSize,
          top: -props.circleSize / 2,
          left: -props.circleSize / 2,
        }}
        ref={circle1Ref}
      ></div>
      <div
        className={styles.circle}
        style={{
          borderBottomColor: props.circle2Color,
          borderLeftColor: props.circle2Color,
          borderWidth: props.circleBorderWidth,
          height: props.circleSize - (props.circleSize * 40) / 100,
          width: props.circleSize - (props.circleSize * 40) / 100,
          top: -(props.circleSize - (props.circleSize * 40) / 100) / 2,
          left: -(props.circleSize - (props.circleSize * 40) / 100) / 2,
        }}
        ref={circle2Ref}
      ></div>
      <div
        className={styles.circle}
        style={{
          borderLeftColor: props.circle3Color,
          borderTopColor: props.circle3Color,
          borderWidth: props.circleBorderWidth,
          height: props.circleSize - (props.circleSize * 80) / 100,
          width: props.circleSize - (props.circleSize * 80) / 100,
          top: -(props.circleSize - (props.circleSize * 80) / 100) / 2,
          left: -(props.circleSize - (props.circleSize * 80) / 100) / 2,
        }}
        ref={circle3Ref}
      ></div>
    </div>
  );
}

export default CircleLoop3;
