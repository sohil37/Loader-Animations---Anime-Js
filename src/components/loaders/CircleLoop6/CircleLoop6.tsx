import anime from "animejs";
import { useEffect, useRef } from "react";

import styles from "./circleLoop6.module.css";

function CircleLoop6(props: {
  circleMinSize: number;
  circleMaxSize: number;
  circleColor: string;
  circleBorderWidth: number;
  easing: string;
}) {
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);

  useEffect(() => {
    try {
      let anim2: anime.AnimeInstance;

      function animation1() {
        const anim = anime({
          targets: circle1Ref.current,
          duration: 1000,
          height: [props.circleMinSize, props.circleMaxSize],
          width: [props.circleMinSize, props.circleMaxSize],
          opacity: [1, 0],
          easing: props.easing,
          update: function () {
            if (Math.round(anim.progress) === 50) {
              anim2 = animation2();
            }
          },
          complete: () => {
            anim.pause();
          },
        });
        return anim;
      }

      function animation2() {
        const anim = anime({
          targets: circle2Ref.current,
          duration: 1000,
          height: [props.circleMinSize, props.circleMaxSize],
          width: [props.circleMinSize, props.circleMaxSize],
          opacity: [1, 0],
          easing: props.easing,
          update: function () {
            if (Math.round(anim.progress) === 50) {
              animation1();
            }
          },
          complete: () => {
            anim.pause();
          },
        });
        return anim;
      }

      const anim1 = animation1();

      return () => {
        try {
          anim1.pause();
          if (anim2) anim2.pause();
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
          borderColor: props.circleColor,
          borderWidth: props.circleBorderWidth,
        }}
        ref={circle1Ref}
      ></div>
      <div
        className={styles.circle}
        style={{
          borderColor: props.circleColor,
          borderWidth: props.circleBorderWidth,
        }}
        ref={circle2Ref}
      ></div>
    </div>
  );
}

export default CircleLoop6;
