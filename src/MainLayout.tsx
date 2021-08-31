
import styles from './MainLayout.module.scss';
import MainImage from './MainImage.jpeg';
// import { Link } from 'react-router-dom';

export interface Props {
  renderPageContent: JSX.Element
};

function MainLayout ({ renderPageContent }: Props) {
  return (
    <section className={styles["main-layout"]}> 
      <div className={styles["main-layout-accent-bg"]} aria-hidden />
      <div className={styles["main-layout-heading"]}>
        <h1 className={styles.name}>Scott Smith</h1>
        <div className={styles["image-container"]}>
          <img src={MainImage} alt="Me At Red Rocks Amphitheatre" title="Me At Red Rocks Amphitheatre" />
        </div>
        {renderPageContent}
      </div>
    </section>
  );
}

export default MainLayout;