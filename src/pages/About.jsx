import "./about.scss";

const me =
  "https://raw.githubusercontent.com/kurniawan2805/portfolio-react/master/src/img/adi2.png";

const About = () => {
  return (
    <section className="about" id="about">
      <h4 className="section-title">This is me...</h4>
      <div className="container about__wrapper">
        <img className="about__image" src={me} alt={"hi! This is Adi"} />
        <div className="about__label">
          <p>
            Hi! My name is Adi Kurniawan. You can call me Adi. I live in
            Jakarta. I am an Electronics Engineer. I have good experience in
            design electronics system on microcontroller, espesially based on
            Arduino. I am not an artist or designer, but occassionally, I like
            to improve my creativity by playing with Inkscape to design a logo
            or poster. I found great passion to learn more about Front End
            Development.
          </p>
          <p>Let's get connected.</p>
        </div>
      </div>
    </section>
  );
};
export default About;
