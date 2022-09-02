import work from '../data/work.json';
import styles from '../styles/components/Work.module.scss';

export default function Work() {
  const workData = work;

  const getWorkItem = (item, index) => {
    if (item.activate) {
      return (
        <div className={ styles['work__item'] } key={ index }>
          <a href={ item.live ? item.projectUrl : '/' } target="_blank" rel="noreferrer noopener">
            <p className={`raleway ${ styles['work__item-name'] }`}
              style={ item.color ? { 
                backgroundImage: `-webkit-linear-gradient(0deg, ${ item.color }, #fff)` 
              } : {} }>
              { item.projectName }
            </p>
            { item.suffix ? <span className={`raleway ${ styles['work__suffix'] } `}>{ item.suffix }</span> : ''}
          </a>  
          <div className={ styles['work__stack'] }>
            { item.stack.map((stack, index) =>  
              <p className={ styles['work__stack-item'] } key={ index }>
                { stack }
                { item.stack.length > (index + 1) ? ' - ' : '' }
              </p>
            )}
          </div>
          <div className={`raleway ${ styles['work__link'] } `}>
            { item.live ? (
              <a href={ item.projectUrl } target="_blank" rel="noreferrer noopener">
                Visit website
                <span className={ styles['work__link-icon'] }>&#x25BA;</span>
              </a>
            ) : (
              <a href="/">Not live yet</a>
            )}
          </div>
        </div>
      ) 
    } else {
      return null;
    }
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