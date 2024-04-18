import anime from "animejs";
import { useEffect, useRef } from "react";

import styles from "./circleLoop2.module.css";

function CircleLoop2(props: {
  circleSize: number;
  circle1: { color: string };
  circle2: { color: string };
  circle3: { color: string };
  circle4: { color: string };
  easing: string;
}) {
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);
  const circle3Ref = useRef(null);
  const circle4Ref = useRef(null);
  const revolutionSize = props.circleSize * 2;

  useEffect(() => {
    try {
      const targets = [
        circle1Ref.current,
        circle2Ref.current,
        circle3Ref.current,
        circle4Ref.current,
      ];

      var path = anime.path("circle");

      let animation = anime.timeline({
        loop: true,
        easing: props.easing,
        opacity: 0,
      });

      animation
        .add({
          targets: targets,
          translateX: path("x"),
          translateY: path("y"),
          rotate: path("angle"),
          duration: 1500,
          delay: anime.stagger(375),
          opacity: [0, 1],
        })
        .add({
          targets: targets,
          opacity: 0,
          duration: 375,
          endDelay: 375,
        });

      return () => {
        try {
          animation.pause();
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
          backgroundColor: props.circle1.color,
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
          backgroundColor: props.circle2.color,
          height: props.circleSize,
          width: props.circleSize,
          top: -props.circleSize / 2,
          left: -props.circleSize / 2,
        }}
        ref={circle2Ref}
      ></div>
      <div
        className={styles.circle}
        style={{
          backgroundColor: props.circle3.color,
          height: props.circleSize,
          width: props.circleSize,
          top: -props.circleSize / 2,
          left: -props.circleSize / 2,
        }}
        ref={circle3Ref}
      ></div>
      <div
        className={styles.circle}
        style={{
          backgroundColor: props.circle4.color,
          height: props.circleSize,
          width: props.circleSize,
          top: -props.circleSize / 2,
          left: -props.circleSize / 2,
        }}
        ref={circle4Ref}
      ></div>

      {/* SVG to define revolution path for circles */}
      <svg
        width={revolutionSize}
        height={revolutionSize}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          r={revolutionSize / 2}
          cx={revolutionSize / 2}
          cy={revolutionSize / 2}
          fill="none"
        />
        {/* <path
          d={`M25 0
           a ${props.circleSize} ${props.circleSize} 0 0 1 0 ${revolutionSize}
           a ${props.circleSize} ${props.circleSize} 0 0 1 0 -${revolutionSize}`}
          fill="none"
          stroke="black"
          strokeWidth={3}
        /> */}
      </svg>
    </div>
  );
}

export default CircleLoop2;
