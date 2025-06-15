'use client'

import { useEffect, useRef } from "react";
import SVGImage from "./Image";
import LegendsList from "./LegendsList";
import styles from "./styles.module.css";

// function appendClassAttr(obj: SVGSVGElement) {
//   for (let item of obj.children) {
//     console.log(item);
//     item.setAttribute('onClick', 'console.log(23)');
//     item.classList.add(styles.test);
//   }
// }

const Index = () => {
  const image = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (image.current) {
      // appendClassAttr(image.current);
    }
  }, []);

  return (
    <>
      <h2>
        <span className={styles.bright}>4</span> Этаж
      </h2>
      <div className={styles.wrapper}>
        <div className={styles.svgWrapper}>
          <svg
            ref={image}
            className={styles.svg}
            preserveAspectRatio="xMidYMid slice"
            width="1561"
            height="434"
            viewBox="0 0 1561 434"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <SVGImage></SVGImage>
          </svg>
        </div>
      </div>
      <LegendsList></LegendsList>
    </>
  );
};

export default Index;
