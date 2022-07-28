import SkewVelocity from './SkewVelocity';
import styles from '../styles/components/Intro.module.scss';

export default function Intro() {
  return (
    <section className={`grid container ${ styles.intro }`}>
      <div className='col-12 col-s10 col-m8'>
        <SkewVelocity>
          <p>Hi, my name is Maurits Brouwer, an ethousiastic and creative front-end developer with a passion for design. I make cool digital products and make sure the end-user always has the right experience.</p>

          <p>I studied Communication &amp; Multimedia Design at The Hague University.</p>
        </SkewVelocity>
      </div>
    </section>
  )
}