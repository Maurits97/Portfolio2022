import { gsap } from "gsap";
import { useEffect } from "react";

import styles from '../styles/components/Showcase.module.scss';

function activateGsap() {
  gsap.timeline({
    scrollTrigger: {
      trigger: '.js-showcase-container',
      start: 'center center',
      end: 'bottom center',
      scrub: true,
      pin: '.js-showcase-pin',
      anticipatePin: 1,
      // markers: true,
    }
  })
  .to(".js-center-image", { scale: 0.3, duration: 2 })
  .to(".js-center-image", { duration: 1 })
}


export default function Showcase() {
  useEffect(() => { activateGsap() });

  return (
    <section className={`grid container js-showcase-container ${ styles.showcase }`}>
      <div className="col-12 js-showcase-pin">
        <div className={`js-center-image ${ styles['showcase__image']} `}>
          <img className='image' src='./img/maurits-brouwer-2022-portfolio.jpg' alt="Maurits Brouwer with sunglasses and a cap" /> 
        </div>
      </div>
    </section>
  )
}