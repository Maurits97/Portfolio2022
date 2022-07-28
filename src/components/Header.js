import styles from '../styles/components/Header.module.scss';
import SkewVelocity from './SkewVelocity';

export default function Header() {
  return (
    <header className={`grid container ${ styles.header }`}>
      <div className={ `col-12 ${ styles['header-container'] }` }>
        <SkewVelocity>
          <span className={ `${ styles['header__start'] }` }>I am an</span>
          <h1 className={ `${ styles['header__title'] }` }>
            <span className={ `${ styles['header__outline'] }` }>Enthousiastic</span>
            Front-end developer
          </h1>
          <div className={ styles['header__paragraph-wrapper'] }>
            <p className={`raleway ${ styles['header__paragraph']}`}>with a passion for design.</p>
          </div>

        </SkewVelocity>
      </div>
    </header>
  )
}