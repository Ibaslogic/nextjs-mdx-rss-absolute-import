import Header from '@components/Header';
import Footer from '@components/Footer';

import styles from '@styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner__wrapper}>
        <Header />
        <main className={styles.content}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
