import work from '../data/work.json';
import styles from '../styles/components/Work.module.scss';

export default function Work() {
  const workData = work;
  
  return (
    <section className={`grid container ${ styles.work }`}>
      <div className='col-12'>
        <div className={ styles['work-projects'] }>
          <h2 className={`h2 ${ styles.header }`}>Projects</h2>
          { workData.work.map((workItem, index) => 
            <p key={ index }>{ workItem.projectName }</p>
          )}

        </div>
        <div className={ styles['freelance-projects'] }>
          <h2 className={`h2 ${ styles.header }`}>Freelance / personal projects</h2>

          { workData.freelance.map((workItem, index) => 
            <p key={ index }>{ workItem.projectName }</p>
          )}
        </div>
      </div>
    </section>
  )
}