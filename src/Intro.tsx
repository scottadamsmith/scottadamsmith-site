
import styles from './Intro.module.scss';
import IntroImage from './Intro.jpeg';
import Github from './Github';

export default function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles["intro-accent-bg"]} aria-hidden />
      <div className={styles.heading}>
        <h1 className={styles.name}>Scott Smith</h1>
        <div className={styles["image-container"]}>
          <img src={IntroImage} alt="Me At Red Rocks Amphitheatre" title="Me At Red Rocks Amphitheatre" />
        </div>
        <p className={styles.description}>
          Software Engineer that loves problem solving and seeing others benefit from the 
          things I build or fix. My professional experience includes backend, data, and devops, 
          but my passion and focus in recent years has been in the frontend.
        </p>
        <Github />
      </div>
    </section>
  );
}