import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import jsImage from "../assets/img/skills/js.png";
import cssImage from "../assets/img/skills/css.png";
import reactImage from "../assets/img/skills/react.png";
import bootstrapImage from "../assets/img/skills/bootstrap.png";
import jQueryImage from "../assets/img/skills/jquery.png";
import ajaxImage from "../assets/img/skills/ajax.png";
import mongodbImage from "../assets/img/skills/mongodb.png";
import websocketsImage from "../assets/img/skills/websocket.png";
import sassImage from "../assets/img/skills/sass.png";
import nodeImage from "../assets/img/skills/node.png";
import reduxImage from "../assets/img/skills/redux.png";
import htmlImage from "../assets/img/skills/html.png";
import phpImage from "../assets/img/skills/php.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const CarouselItems = [
    {
      title: 'Node.js',
      imgSrc: nodeImage,
    },
    {
      title: 'React',
      imgSrc: reactImage,
    },
    {
      title: 'Mongodb',
      imgSrc: mongodbImage,
    },
    {
      title: 'Redux',
      imgSrc: reduxImage,
    },
    {
      title: 'Sass',
      imgSrc: sassImage,
    },
    {
      title: 'Javascript',
      imgSrc: jsImage,
    },
    {
      title: 'CSS',
      imgSrc: cssImage,
    },
    {
      title: 'HTML5',
      imgSrc: htmlImage,
    },
    {
      title: 'php',
      imgSrc: phpImage,
    },
    {
      title: 'Bootstrap',
      imgSrc: bootstrapImage,
    },
    {
      title: 'jQuery',
      imgSrc: jQueryImage,
    },
    {
      title: 'AJAX',
      imgSrc: ajaxImage,
    },
    {
      imgSrc: websocketsImage,
      title: 'Websockets',
    },
  ];


  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>About Skills</h2>
              <p>I have learned different programming languages ​​so far and as far as my skills are concerned<br></br></p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

                {CarouselItems.map((item, index) => (
                  <div key={index} className="item">

                    <div>
                      <img src={item.imgSrc} alt="" />
                    </div>
                    <span>
                      <h5>{item.title}</h5>
                    </span>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
