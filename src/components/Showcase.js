import { gsap } from "gsap";
import { useEffect } from "react";

import styles from '../styles/components/Showcase.module.scss';

function activateGsap() {
  // Center image
  gsap.timeline({
    scrollTrigger: {
      trigger: '.js-showcase-container',
      start: 'center center',
      end: 'bottom center',
      scrub: true,
      pin: '.js-center-image',
      anticipatePin: 1,
      // markers: true,
    }
  })
  .to(".js-center-image", { scale: 0.3, duration: 2 })
  .to(".js-center-image", { duration: 1 })

  // side images
  gsap.timeline({
    scrollTrigger: {
      trigger: '.js-showcase-container',
      start: '45% center',
      end: 'center top',
      scrub: true,
      pin: '.js-showcase-side-pin',
      anticipatePin: 1,
      // markers: true,
    }
  })
  .add('start')
  .fromTo(".js-side-image--one", { autoAlpha: 0.01 }, { autoAlpha: 1, y: -40, duration: 2 }, 'start')
  .fromTo(".js-side-image--two", { autoAlpha: 0.01 }, { autoAlpha: 1, y: -40, duration: 2, delay: 2 }, 'start')
  .fromTo(".js-side-image--three", { autoAlpha: 0.01 }, { autoAlpha: 1, y: 60, duration: 3, delay: .5 }, 'start')
  .fromTo(".js-side-image--four", { autoAlpha: 0.01 }, { autoAlpha: 1, y: -20, duration: 2, delay: 3 }, 'start')
}


export default function Showcase() {
  useEffect(() => { activateGsap() });

  return (
    <section className={`grid container js-showcase-container ${ styles.showcase }`}>
      <div className={`col-12 js-showcase-pin`}>
        <div className={`js-center-image ${ styles['showcase__image']} `}>
          <img className='image' src='./img/maurits-brouwer-2022-portfolio.jpg' alt="Maurits Brouwer with sunglasses and a cap" /> 
        </div>

        <div className={`${ styles['showcase__side-images'] }`}>
          <div className={`js-side-image js-side-image--one ${ styles['showcase__side-image'] } ${ styles['showcase__side-image--one'] }`}>
            <img className='image' src='./img/work/oaky-maurits-brouwer.png' alt="Project oaky" /> 
          </div>
          <div className={`js-side-image js-side-image--two ${ styles['showcase__side-image'] } ${ styles['showcase__side-image--two'] }`}>
            <img className='image' src='./img/work/fivides-maurits-brouwer.png' alt="Project oaky" /> 
          </div>
          <div className={`js-side-image js-side-image--three ${ styles['showcase__side-image'] } ${ styles['showcase__side-image--three'] }`}>
            <img className='image' src='./img/work/oaky-maurits-brouwer.png' alt="Project oaky" /> 
          </div>
          <div className={`js-side-image js-side-image--four ${ styles['showcase__side-image'] } ${ styles['showcase__side-image--four'] }`}>
            <img className='image' src='./img/work/crypto-maurits-brouwer.png' alt="Project oaky" /> 
          </div>
        </div>
      </div>
    </section>
  )
}