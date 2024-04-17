import anime from "animejs";
import { MutableRefObject, useEffect, useRef } from "react";

import styles from "./barRandom1.module.css";

function BarRandom1(props: {
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

      function randomValues() {
        const animation = anime({
          targets: targets,
          height: function () {
            return anime.random(
              props.barMinHeight ? props.barMinHeight : 0,
              props.barMaxHeight
            );
          },
          easing: props.easing,
          duration: 300,
          start: "center",
          complete: () => {
            try {
              animation.pause();
              randomValues();
            } catch (error) {
              console.error(error);
            }
          },
        });
        return animation;
      }

      const animation = randomValues();

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
            }}
            ref={barRef}
            key={index}
          ></div>
        );
      })}
    </div>
  );
}

export default BarRandom1;
