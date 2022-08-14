import links from '../data/links.json'
import styles from '../styles/components/Links.module.scss';


export default function Links() {
  const linksData = links;
  return (
    <section className={`grid container ${ styles['links'] }`}>
      <div className="col-12">
        <h2 className={`h2 ${ styles['links__header'] }`}>Links</h2>
        { linksData.links.map((link, index) => 
          <div>
            <a className={`raleway ${ styles['links__link'] }`} href={ link.link } target="_blank" rel="noreferrer noopener" key={ index }>{ link.label }</a>
          </div>
        )}
      </div>
    </section>
  )
}