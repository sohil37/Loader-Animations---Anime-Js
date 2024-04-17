import anime from "animejs";
import { useEffect, useRef, useState } from "react";

import styles from "./circleLoop7.module.css";

function CircleLoop7(props: {
  circleSize: number;
  circle1Color: string;
  circle2Color: string;
  circle3Color: string;
  circle4Color: string;
  easing: string;
}) {
  const containerRef = useRef(null);
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);
  const circle3Ref = useRef(null);
  const circle4Ref = useRef(null);

  const [removedCircle, setRemovedCircle] = useState<null | HTMLDivElement>(
    null
  );
  const [firstCircle, setFirstCircle] = useState<null | HTMLDivElement>(null);
  const [secondCircle, setSecondCircle] = useState<null | HTMLDivElement>(null);
  const [thirdCircle, setThirdCircle] = useState<null | HTMLDivElement>(null);

  useEffect(() => {
    try {
      setFirstCircle(circle1Ref.current);
      setSecondCircle(circle2Ref.current);
      setThirdCircle(circle3Ref.current);
      setRemovedCircle(circle4Ref.current);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    let animation: anime.AnimeInstance;

    function bringFirstCircle() {
      const animation = anime({
        targets: removedCircle,
        duration: 500,
        height: [0, props.circleSize],
        width: [0, props.circleSize],
        opacity: 1,
        easing: props.easing,
        begin: () => {
          translateFirstCircle();
          translateSecondCircle();
          removeThirdCircle();
        },
        complete: () => {},
      });
      return animation;
    }

    function translateFirstCircle() {
      anime({
        targets: firstCircle,
        duration: 500,
        left: 0,
        easing: props.easing,
      });
    }
    function translateSecondCircle() {
      anime({
        targets: secondCircle,
        duration: 500,
        left: props.circleSize + props.circleSize / 2,
        easing: props.easing,
      });
    }
    function removeThirdCircle() {
      anime({
        targets: thirdCircle,
        duration: 500,
        height: 0,
        width: 0,
        opacity: 0,
        easing: props.easing,
        complete: () => {
          const prevFirst = firstCircle;
          const prevSecond = secondCircle;
          const prevThird = thirdCircle;

          setFirstCircle(removedCircle);
          setSecondCircle(prevFirst);
          setThirdCircle(prevSecond);
          setRemovedCircle(prevThird);
        },
      });
    }

    if (removedCircle) {
      removedCircle.style.opacity = "0";
      removedCircle.style.left = `${-(
        props.circleSize +
        props.circleSize / 2
      )}px`;
      animation = bringFirstCircle();
    }

    return () => {
      try {
        if (animation) animation.pause();
      } catch (error) {
        console.error(error);
      }
    };
  }, [removedCircle]);

  return (
    <div
      className={styles.container}
      style={{ gap: props.circleSize }}
      ref={containerRef}
    >
      <div
        className={styles.circle}
        style={{
          backgroundColor: props.circle1Color,
          height: props.circleSize,
          width: props.circleSize,
          left: -(props.circleSize + props.circleSize / 2),
        }}
        ref={circle1Ref}
      ></div>
      <div
        className={styles.circle}
        style={{
          backgroundColor: props.circle2Color,
          height: props.circleSize,
          width: props.circleSize,
        }}
        ref={circle2Ref}
      ></div>
      <div
        className={styles.circle}
        style={{
          backgroundColor: props.circle3Color,
          height: props.circleSize,
          width: props.circleSize,
          left: props.circleSize + props.circleSize / 2,
        }}
        ref={circle3Ref}
      ></div>
      <div
        className={styles.circle}
        style={{
          backgroundColor: props.circle4Color,
          height: props.circleSize,
          width: props.circleSize,
          opacity: 0,
        }}
        ref={circle4Ref}
      ></div>
    </div>
  );
}

export default CircleLoop7;
