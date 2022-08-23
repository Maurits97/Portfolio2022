import { useEffect } from 'react';
import styles from '../styles/components/Contact.module.scss';

function copyToClipboard(event) {
  const eventData = event.target.dataset.email;

  // Check if origin is secure, otherwise copy will not work.
  if (window.isSecureContext) {
    // Copy to clipboard, success.
    navigator.clipboard.writeText(eventData);
    event.target.innerHTML = '&#10003; Copied!';
  } else {
    // Copy failed
    event.target.innerHTML = '&#10005; Copy failed';
    console.log(`
      Copy failed because of insecure origin.
      Needs to be HTTPS or localhost.
    `)
  }

  setTimeout(() => {
    event.target.innerHTML = 'Copy Email';
  }, 1500)
}

export default function Contact() {
  useEffect(() => {
    const buttonCopy = document.querySelector('.js-button-copy');
    buttonCopy.addEventListener('click', (event) => {
      copyToClipboard(event);
    })
  });

  return (
    <section className={`grid container ${ styles['contact'] }`}>
      <div className="col-12">
        <h2 className={`h2 ${ styles['contact__header'] }`}>Contact</h2>
        <p className={ styles['contact__email'] }>mauritsbrouwer@outlook.com</p>
        <div className={ styles['contact__button-wrapper'] }>
          <button className="button button--primary js-button-copy" data-email="mauritsbrouwer@outlook.com">Copy Email</button>
          <a className="button button--secondary" href="mailto:mauritsbrouwer@outlook.com" target="_blank" rel="noreferrer noopener">Open mail program</a>
        </div>
      </div>
    </section>
  )
}