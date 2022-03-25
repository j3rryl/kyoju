import './about.scss'
const About = () => {
  return (
    <div className="about-page">
      <div className="about-image vision">
        <span className="about-span">
          <h5 className="about-title">
            Vision.
          </h5>
        </span>
      </div>
      <div className="about-text dark-themed">
        <h5>Life is Good</h5>
        <p>     
The Life is Good brand is about more than spreading optimism — although, with uplifting T-shirt slogans like "Seas The Day" and "Forecast: Mostly Sunny," it's hard not to crack a smile.
        </p>
      </div>
      <div className="about-image house-now">
        <span className="about-span">
          <h5 className="about-title">
            House Now.
          </h5>
        </span>
      </div>
      <div className="about-text light-themed">
      <h5>Make your dream home now.</h5>
        <p>
        Move to What Moves You. Where Dreams Come Home.
        </p>
        <button className="shop-now-btn">Book Now</button>
      </div>
      <div className="about-image developers">
        <span className="about-span">
          <h5 className="about-title">
            Developers.
          </h5>
        </span>
      </div>
      <div className="about-text dark-themed">
      <h5>Meet the geniuses behind the curtains.</h5>
        <p>
          Hello There.
        </p>
      </div>
    </div>
  )
}

export default About