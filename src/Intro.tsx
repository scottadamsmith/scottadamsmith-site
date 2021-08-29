
import './Intro.scss';
import IntroImage from './Intro.jpeg';

export default function Intro() {
  return (
    <section className="intro">
      <div className="intro-accent-bg" />
      <div className="heading">
        <h1 className="name">Scott Smith</h1>
        <div className="image-container">
          <img src={IntroImage} alt="Me At Red Rocks Amphitheatre" title="Me At Red Rocks Amphitheatre" />
        </div>
        <h2 className="description">
          Software Engineer that loves problem solving and seeing others benefit from the 
          things I build or fix. My professional experience includes backend, data, and devops, 
          but my passion and focus in recent years has been in the frontend.
        </h2>
      </div>
    </section>
  );
}