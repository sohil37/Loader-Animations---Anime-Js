import anime from "animejs";
import { useEffect, useRef } from "react";

import styles from "./squareLoop1.module.css";

function SquareLoop1(props: {
  squareSize: number;
  square1: { color: string };
  square2: { color: string };
  square3: { color: string };
  square4: { color: string };
}) {
  const square1Ref = useRef(null);
  const square2Ref = useRef(null);
  const square3Ref = useRef(null);
  const square4Ref = useRef(null);

  useEffect(() => {
    try {
      const targets = [
        square1Ref.current,
        square2Ref.current,
        square3Ref.current,
        square4Ref.current,
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
          targets: square1Ref.current,
          opacity: [0, 1],
        })
        .add({
          targets: square2Ref.current,
          translateX: movePixels,
          opacity: [0, 1],
        })
        .add({
          targets: square3Ref.current,
          translateX: [movePixels, movePixels],
          translateY: [0, movePixels],
          opacity: [0, 1],
        })
        .add({
          targets: square4Ref.current,
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
        className={styles.square}
        style={{
          backgroundColor: props.square1.color,
          height: props.squareSize,
          width: props.squareSize,
          top: -(props.squareSize + props.squareSize / 4),
          left: -(props.squareSize + props.squareSize / 4),
        }}
        ref={square1Ref}
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
        ref={square2Ref}
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
        ref={square3Ref}
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
        ref={square4Ref}
      ></div>
    </div>
  );
}

export default SquareLoop1;
