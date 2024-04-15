import anime from "animejs";
import { useEffect, useRef } from "react";

import styles from "./circleLoop1.module.css";

function CircleLoop1(props: {
  circleSize: number;
  circle1: { color: string };
  circle2: { color: string };
  circle3: { color: string };
  circle4: { color: string };
}) {
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);
  const circle3Ref = useRef(null);
  const circle4Ref = useRef(null);

  useEffect(() => {
    try {
      const targets = [
        circle1Ref.current,
        circle2Ref.current,
        circle3Ref.current,
        circle4Ref.current,
      ];

      const movePixels = props.circleSize + props.circleSize / 2;

      let animation = anime.timeline({
        loop: true,
        duration: 750,
        easing: "easeInOutExpo",
        opacity: 0,
      });

      animation
        .add({
          targets: circle1Ref.current,
          opacity: [0, 1],
        })
        .add({
          targets: circle2Ref.current,
          translateX: movePixels,
          opacity: [0, 1],
        })
        .add({
          targets: circle3Ref.current,
          translateX: [movePixels, movePixels],
          translateY: [0, movePixels],
          opacity: [0, 1],
        })
        .add({
          targets: circle4Ref.current,
          translateY: [movePixels, movePixels],
          translateX: [movePixels, 0],
          opacity: [0, 1],
        })
        .add({
          targets: targets,
          opacity: 0,
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
          top: -(props.circleSize + props.circleSize / 4),
          left: -(props.circleSize + props.circleSize / 4),
        }}
        ref={circle1Ref}
      ></div>
      <div
        className={styles.circle}
        style={{
          backgroundColor: props.circle2.color,
          height: props.circleSize,
          width: props.circleSize,
          top: -(props.circleSize + props.circleSize / 4),
          left: -(props.circleSize + props.circleSize / 4),
        }}
        ref={circle2Ref}
      ></div>
      <div
        className={styles.circle}
        style={{
          backgroundColor: props.circle3.color,
          height: props.circleSize,
          width: props.circleSize,
          top: -(props.circleSize + props.circleSize / 4),
          left: -(props.circleSize + props.circleSize / 4),
        }}
        ref={circle3Ref}
      ></div>
      <div
        className={styles.circle}
        style={{
          backgroundColor: props.circle4.color,
          height: props.circleSize,
          width: props.circleSize,
          top: -(props.circleSize + props.circleSize / 4),
          left: -(props.circleSize + props.circleSize / 4),
        }}
        ref={circle4Ref}
      ></div>
    </div>
  );
}

export default CircleLoop1;
