import styles from '@/styles/styles.module.css';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Contenido from '@/components/contenido';
import Owl from '@/components/owl';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <Contenido/>
      <Owl/>
      <Footer />
    </div>
  );
}
