import { gsap } from "gsap";
import { useEffect } from "react";
import work from '../data/work.json';

import styles from '../styles/components/Showcase.module.scss';

function activateGsap() {
  // Responsive properties for scrolltrigger timeline
  const centerImageProps = () => {
    if (window.screen.width < 721) {
      return { scale: 0.5, duration: 2, transformOrigin: "right" }
    } else {
      return { scale: 0.3, duration: 2 }
    }
  }
  const sideImagePropsObject = {
    mobile: [
      { autoAlpha: 1, y: -20, duration: 2 },
      { autoAlpha: 1, y: -30, duration: 3, delay: .5 },
      { autoAlpha: 1, y: -40, duration: 2, delay: 1 },
      { autoAlpha: 1, y: -20, duration: 2, delay: 3 }
    ],
    desktop: [
      { autoAlpha: 1, y: -40, duration: 2 },
      { autoAlpha: 1, y: 60, duration: 3, delay: .5 },
      { autoAlpha: 1, y: -40, duration: 2, delay: 2 },
      { autoAlpha: 1, y: -20, duration: 2, delay: 3 }
    ]
  };
  const sideImageProps = (index) => {
    if (window.screen.width < 721) {
      return sideImagePropsObject.mobile[index]
    } else {
      return sideImagePropsObject.desktop[index]
    }
  }
  // Center image
  gsap.timeline({
    scrollTrigger: {
      trigger: '.js-showcase-container',
      start: 'center center',
      end: 'center+=800px center',
      scrub: true,
      pin: '.js-center-image',
      anticipatePin: 1,
      // markers: true,
    }
  })
  .to(".js-center-image", centerImageProps() )
  .to(".js-center-image", { duration: 1 })
  .to(".js-center-image", { duration: 1 })
  // Force load images
  .progress(1).progress(0)

  // scale: 0.5 transformOrigin:"bottom"

  // side images
  gsap.timeline({
    scrollTrigger: {
      trigger: '.js-showcase-container',
      start: 'center center',
      end: 'center+=400px center',
      scrub: true,
      pin: '.js-showcase-side-pin',
      anticipatePin: 1,
      // markers: true,
    }
  })
  .add('start')
  .fromTo(".js-side-image--one", { autoAlpha: 0 }, sideImageProps(0), 'start')
  .fromTo(".js-side-image--two", { autoAlpha: 0 }, sideImageProps(1), 'start')
  .fromTo(".js-side-image--three", { autoAlpha: 0 }, sideImageProps(2), 'start')
  .fromTo(".js-side-image--four", { autoAlpha: 0 }, sideImageProps(3), 'start')
  // Force load images
  .progress(1).progress(0)
}




export default function Showcase() {
  useEffect(() => { activateGsap() });
  const workData = work;

  return (
    <section className={`grid container js-showcase-container ${ styles.showcase }`}>
      <div className={`col-12 js-showcase-pin ${ styles['showcase-wrapper'] }`}>
        <div className={`js-center-image ${ styles['showcase__image']} `}>
          <img src='./img/maurits-brouwer-2022-portfolio.jpg' alt="Maurits Brouwer with sunglasses and a cap" /> 
        </div>

        <div className={`js-showcase-side-pin ${ styles['showcase__side-images'] }`}>
          <div className={`js-side-image--one ${ styles['showcase__side-image'] } ${ styles['showcase__side-image--one'] }`}>
            <a href={ workData.work[0].projectUrl } rel="noreferrer noopener" target='_blank'>
              <img src='./img/work/oaky-maurits-brouwer.png' alt="Project oaky" />
            </a>
          </div>
          <div className={`js-side-image--two ${ styles['showcase__side-image'] } ${ styles['showcase__side-image--two'] }`}>
            <a href={ workData.work[1].projectUrl } rel="noreferrer noopener" target='_blank'>
              <img src='./img/work/oaky-maurits-brouwer.png' alt="Project oaky" /> 
            </a>
          </div>
          <div className={`js-side-image--three ${ styles['showcase__side-image'] } ${ styles['showcase__side-image--three'] }`}>
            <a href={ workData.freelance[1].projectUrl } rel="noreferrer noopener" target='_blank'>
              <img src='./img/work/fivides-maurits-brouwer.png' alt="Project oaky" /> 
            </a>
          </div>
          <div className={`js-side-image--four ${ styles['showcase__side-image'] } ${ styles['showcase__side-image--four'] }`}>
            <a href={ workData.freelance[0].projectUrl } rel="noreferrer noopener" target='_blank'>
              <img src='./img/work/crypto-maurits-brouwer.png' alt="Project oaky" /> 
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}