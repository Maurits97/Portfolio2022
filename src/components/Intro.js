import styles from '../styles/components/Intro.module.scss';

function Intro() {
  return (
    <section className='grid container'>
      <div className={`col-12 ${ styles.intro }`}>
        <p>Hi, my name is Maurits Brouwer, an ethousiastic and creative front-end developer with a passion for design. I make cool digital products and make sure the end-user always has the right experience.</p>

        <p>I studied Communication &amp; Multimedia Design at the Hague University.</p>
      </div>
    </section>
  )
}

export default Intro;