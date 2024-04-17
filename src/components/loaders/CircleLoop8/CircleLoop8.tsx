import anime from "animejs";
import { useEffect, useRef } from "react";

import styles from "./circleLoop8.module.css";

function CircleLoop8(props: {
  centreCircle: {
    color: string;
    size: number;
  };
  eclipse: {
    eclipse1: {
      color: string;
      borderWidth: number;
      size: number;
    };
    eclipse2: {
      color: string;
      borderWidth: number;
      size: number;
    };
    eclipse3: {
      color: string;
      borderWidth: number;
      size: number;
    };
  };
  easing: string;
}) {
  const eclipse1Ref = useRef<null | HTMLDivElement>(null);
  const eclipse2Ref = useRef<null | HTMLDivElement>(null);
  const eclipse3Ref = useRef<null | HTMLDivElement>(null);
  const circleRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    try {
      const circleAnimation = anime({
        targets: circleRef.current,
        opacity: [0, 1],
        direction: "alternate",
        loop: true,
        duration: 1000,
        easing: props.easing,
      });

      const eclipse1Animation = anime({
        targets: eclipse1Ref.current,
        update: () => {
          (
            eclipse1Ref.current as HTMLDivElement
          ).style.transform = `rotateX(65deg) rotateY(50deg) rotateZ(${
            3.6 * Math.round(eclipse1Animation.progress)
          }deg)`;
        },
        loop: true,
        duration: 900,
        easing: props.easing,
      });

      const eclipse2Animation = anime({
        targets: eclipse2Ref.current,
        update: () => {
          (
            eclipse2Ref.current as HTMLDivElement
          ).style.transform = `rotateX(-65deg) rotateY(50deg) rotateZ(${
            3.6 * Math.round(eclipse2Animation.progress)
          }deg)`;
        },
        loop: true,
        duration: 700,
        easing: props.easing,
      });

      const eclipse3Animation = anime({
        targets: eclipse3Ref.current,
        update: () => {
          (
            eclipse3Ref.current as HTMLDivElement
          ).style.transform = `rotateX(-75deg) rotateY(0deg) rotateZ(${
            3.6 * Math.round(eclipse3Animation.progress)
          }deg)`;
        },
        loop: true,
        duration: 500,
        easing: props.easing,
      });

      return () => {
        try {
          circleAnimation.pause();
          eclipse1Animation.pause();
          eclipse2Animation.pause();
          eclipse3Animation.pause();
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
          backgroundColor: props.centreCircle.color,
          height: props.centreCircle.size,
          width: props.centreCircle.size,
        }}
        ref={circleRef}
      ></div>
      <div
        className={styles.eclipse}
        style={{
          borderRightColor: props.eclipse.eclipse1.color,
          borderBottomColor: props.eclipse.eclipse1.color,
          borderLeftColor: props.eclipse.eclipse1.color,
          borderWidth: props.eclipse.eclipse1.borderWidth,
          height: props.eclipse.eclipse1.size,
          width: props.eclipse.eclipse1.size,
        }}
        ref={eclipse1Ref}
      ></div>
      <div
        className={styles.eclipse}
        style={{
          borderRightColor: props.eclipse.eclipse2.color,
          borderBottomColor: props.eclipse.eclipse2.color,
          borderLeftColor: props.eclipse.eclipse2.color,
          borderWidth: props.eclipse.eclipse2.borderWidth,
          height: props.eclipse.eclipse2.size,
          width: props.eclipse.eclipse2.size,
        }}
        ref={eclipse2Ref}
      ></div>
      <div
        className={styles.eclipse}
        style={{
          borderRightColor: props.eclipse.eclipse3.color,
          borderBottomColor: props.eclipse.eclipse3.color,
          borderLeftColor: props.eclipse.eclipse3.color,
          borderWidth: props.eclipse.eclipse3.borderWidth,
          height: props.eclipse.eclipse3.size,
          width: props.eclipse.eclipse3.size,
        }}
        ref={eclipse3Ref}
      ></div>
    </div>
  );
}

export default CircleLoop8;
