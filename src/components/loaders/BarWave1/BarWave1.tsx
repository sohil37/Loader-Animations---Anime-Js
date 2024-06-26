import anime from "animejs";
import { MutableRefObject, useEffect, useRef } from "react";

import styles from "./barWave1.module.css";

function BarWave1(props: {
  barMaxHeight: number;
  barMinHeight?: number;
  barWidth: number;
  noOfBars: number;
  colors: string[];
  easing: string;
}) {
  let barRefs: MutableRefObject<HTMLDivElement | null>[] = [];

  for (let index = 0; index < props.noOfBars; index++) {
    barRefs.push(useRef(null));
  }

  useEffect(() => {
    try {
      var targets: (HTMLDivElement | null)[] = [];
      for (let index = 0; index < props.noOfBars; index++) {
        targets.push(barRefs[index].current);
      }

      const animation = anime({
        targets: targets,
        height: [
          props.barMinHeight ? props.barMinHeight : 10,
          props.barMaxHeight,
          props.barMinHeight ? props.barMinHeight : 10,
        ],
        easing: props.easing,
        duration: 700,
        delay: anime.stagger(100),
        loop: true,
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
    <div
      className={styles.container}
      style={{ height: props.barMaxHeight, gap: props.barWidth * 2 }}
    >
      {barRefs.map((barRef, index) => {
        return (
          <div
            style={{
              backgroundColor: props.colors[index % props.colors.length],
              width: props.barWidth,
              height: props.barMinHeight ? props.barMinHeight : 10,
            }}
            ref={barRef}
            key={index}
          ></div>
        );
      })}
    </div>
  );
}

export default BarWave1;
