import work from '../data/work.json';
import styles from '../styles/components/Work.module.scss';

export default function Work() {
  const workData = work;

  const getWorkItem = (item, index) => {
    return (
      <div className={ styles['work__item'] } key={ index }>
        <p className={`raleway ${ styles['work__item-name'] }`}
          style={ item.color ? { 
            backgroundImage: `-webkit-linear-gradient(0deg, ${ item.color }, #fff)` 
          } : {}}>
          { item.projectName }
        </p>
        { item.suffix ? <span className={`raleway ${ styles['work__suffix'] } `}>{ item.suffix }</span> : ''}
      </div>
    )
  }
  
  return (
    <section className={`grid container ${ styles.work }`}>
      <div className='col-12'>
        <div className={ styles['work-wrapper'] }>
          <h2 className={`h2 ${ styles.header }`}>Projects</h2>
          
          { workData.work.map((workItem, index) => {
            return getWorkItem(workItem, index); 
          })}
        </div>
        <div className={ styles['work-wrapper'] }>
          <h2 className={`h2 ${ styles.header }`}>Freelance / personal projects</h2>

          { workData.freelance.map((workItem, index) => {
            return getWorkItem(workItem, index); 
          })}
        </div>
      </div>
    </section>
  )
}