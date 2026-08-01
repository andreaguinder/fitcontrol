import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2026 FitControl. Todos los derechos reservados.</p>
      <p>Diseño y desarrollo por <a href="https://andreaguinder.com/" target="_blank" rel="noopener noreferrer">Andrea Guinder</a></p>
    </footer>
  )
}

export default Footer;
