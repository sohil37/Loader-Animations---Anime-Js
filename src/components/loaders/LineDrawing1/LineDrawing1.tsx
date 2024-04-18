import anime from "animejs";
import { useEffect } from "react";

// This is a line drawing of a maze, hence it has maze related props.
function LineDrawing1(props: {
  borderColor: string;
  correctPathColor: string;
  dividerColor: string;
  size: number;
  easing: string;
}) {
  useEffect(() => {
    try {
      const animation = anime({
        targets: [".mazeSVG rect", ".mazeSVG path"],
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: props.easing,
        duration: 1500,
        delay: function (_, i) {
          return i * 100;
        },
        loop: true,
        direction: "alternate",
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 103 103"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      className="mazeSVG"
      height={props.size}
      width={props.size}
    >
      <rect
        width="100"
        height="100"
        rx="0"
        ry="0"
        transform="translate(1.5 1.5)"
        fill="none"
        stroke={props.borderColor}
        strokeWidth="3"
      />
      <path
        d="M1.5,16.769597h18.561922v14.598464h13.30259v-20.972221h25.540974v41.104157h-31.607347v15.857978h-18.5939v13.676505h36.11212v-14.598517h14.598516v26.099204h12.549602v-34.807091h12.549602v18.696346h11.292043v-35.343777h-17.694901v-15.879088h-10.756802v-12.805717h21.257489v18.972221h12.88809"
        transform="translate(.000002 0.000003)"
        fill="none"
        stroke={props.correctPathColor}
        strokeWidth="3"
      />
      <path
        d="M8.704242,21.162505l-.000001,12"
        transform="translate(2 2)"
        fill="none"
        stroke={props.dividerColor}
        strokeWidth="3"
      />
      <path
        d="M8.704242,21.162505l-.000001,15"
        transform="translate(27 36)"
        fill="none"
        stroke={props.dividerColor}
        strokeWidth="3"
      />
      <path
        d="M1.500002,41.080648h43.316359v-25.311048"
        transform="translate(.000002 1)"
        fill="none"
        stroke={props.dividerColor}
        strokeWidth="3"
      />
      <path
        d="M8.704241,57.728079h11.357683"
        transform="translate(.000001-2)"
        fill="none"
        stroke={props.dividerColor}
        strokeWidth="3"
      />
      <path
        d="M8.704241,91.53517h40"
        transform="translate(-1 0)"
        fill="none"
        stroke={props.dividerColor}
        strokeWidth="3"
      />
      <path
        d="M71.964479,49.274703h20"
        transform="translate(-5 0)"
        fill="none"
        stroke={props.dividerColor}
        strokeWidth="3"
      />
      <path
        d="M101.5,87.225895l-19-.126119"
        transform="translate(.000001 2.000001)"
        fill="none"
        stroke={props.dividerColor}
        strokeWidth="3"
      />
    </svg>
  );
}

export default LineDrawing1;
