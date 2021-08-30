
// eslint-disable-next-line import/no-webpack-loader-syntax
import 'github-calendar/dist/github-calendar-responsive.css';
import styles from './Github.module.scss';
// @ts-ignore
import GitHubCalendar from 'github-calendar';
import { useEffect } from 'react';

export default function Github() {
  useEffect(() => {
    GitHubCalendar(".github-container-component", "scottadamsmith", { 
      responsive: true,
      tooltips: true,
      global_stats: true
    });
  }, []);
  
  return (
    <div className={`github-container-component ${styles.container}`} />
  );
}