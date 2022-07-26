import styles from '../styles/components/Header.module.scss';

function Header() {
  return (
    <header className={ styles['header-animation'] }>
      <div className="grid container">
        <div className={ `col-12 ${ styles['header-container'] }` }>
          <span className={ `${ styles['header__start'] }` }>I am an</span>
          <h1 className={ `${ styles.header }` }>
            <span className={ `${ styles['header__outline'] }` }>Enthousiastic</span>
            Front-end developer
          </h1>
          <div className={ styles['header__paragraph-wrapper'] }>
            <p className={`raleway ${ styles['header__paragraph']}`}>with a passion for design.</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;