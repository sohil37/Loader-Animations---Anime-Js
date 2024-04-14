import anime from "animejs";
import { useEffect, useRef } from "react";

import styles from "./coloredSquareLoop.module.css";

function ColoredSquareLoop(props: {
  squareSize: number;
  square1: { color: string };
  square2: { color: string };
  square3: { color: string };
  square4: { color: string };
}) {
  const blueSquareRef = useRef(null);
  const greenSquareRef = useRef(null);
  const yellowSquareRef = useRef(null);
  const redSquareRef = useRef(null);

  useEffect(() => {
    try {
      const targets = [
        blueSquareRef.current,
        greenSquareRef.current,
        yellowSquareRef.current,
        redSquareRef.current,
      ];

      const movePixels = props.squareSize + props.squareSize / 2;

      let animation = anime.timeline({
        loop: true,
        duration: 750,
        easing: "easeInOutExpo",
        opacity: 0,
      });

      animation
        .add({
          targets: blueSquareRef.current,
          opacity: [0, 1],
        })
        .add({
          targets: greenSquareRef.current,
          translateX: movePixels,
          opacity: [0, 1],
        })
        .add({
          targets: yellowSquareRef.current,
          translateX: [movePixels, movePixels],
          translateY: [0, movePixels],
          opacity: [0, 1],
        })
        .add({
          targets: redSquareRef.current,
          translateY: [movePixels, movePixels],
          translateX: [movePixels, 0],
          opacity: [0, 1],
        })
        .add({
          targets: targets,
          opacity: 0,
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.square}
        style={{
          backgroundColor: props.square1.color,
          height: props.squareSize,
          width: props.squareSize,
          top: -(props.squareSize + props.squareSize / 4),
          left: -(props.squareSize + props.squareSize / 4),
        }}
        ref={blueSquareRef}
      ></div>
      <div
        className={styles.square}
        style={{
          backgroundColor: props.square2.color,
          height: props.squareSize,
          width: props.squareSize,
          top: -(props.squareSize + props.squareSize / 4),
          left: -(props.squareSize + props.squareSize / 4),
        }}
        ref={greenSquareRef}
      ></div>
      <div
        className={styles.square}
        style={{
          backgroundColor: props.square3.color,
          height: props.squareSize,
          width: props.squareSize,
          top: -(props.squareSize + props.squareSize / 4),
          left: -(props.squareSize + props.squareSize / 4),
        }}
        ref={yellowSquareRef}
      ></div>
      <div
        className={styles.square}
        style={{
          backgroundColor: props.square4.color,
          height: props.squareSize,
          width: props.squareSize,
          top: -(props.squareSize + props.squareSize / 4),
          left: -(props.squareSize + props.squareSize / 4),
        }}
        ref={redSquareRef}
      ></div>
    </div>
  );
}

export default ColoredSquareLoop;
