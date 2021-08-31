import Github from './Github';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <div>
      <p className={styles.home}>
        Software Engineer that loves problem solving and seeing others benefit from the 
        things I build or fix. My professional experience includes backend, data, and devops, 
        but my passion and focus in recent years has been in the frontend.
      </p>
      <Github />
    </div>    
  );
}