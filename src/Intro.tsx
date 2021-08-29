
import './Intro.scss';
import IntroImage from './Intro.jpeg';

export default function Into() {
  return (
    <section className="intro">
      <div className="intro-accent-bg" />
      <h1 className="heading">
        <div className="name">Scott Smith</div>
        <div className="image-container">
          <img src={IntroImage} alt="Me At Red Rocks Amphitheatre" title="Me At Red Rocks Amphitheatre" />
        </div>
        <div className="description">
          <h2>I am a Software Engineer focusing on frontend, but comfortable working throughout the stack.
          My professional experience includes backend, data, and devops, but my passion
          and focus in recent years has been in the frontend.</h2>
        </div>
      </h1>
    </section>
  );
}