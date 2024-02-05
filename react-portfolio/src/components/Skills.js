// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3,  faFigma,  faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import photoShop from '../assets/img/adobephotoshop.svg'
import illustrator from '../assets/img/adobeillustrator.svg'
import premiere from '../assets/img/adobepremierepro.svg'


export const Skills = () => {
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

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Tool Kit</h2>
                        <p>The languages and software I use to create any desired application, website, or design from start to finish.<br></br> As a life-long learner and software lover, I am always looking for new skills to add to my arsenal.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                            <FontAwesomeIcon icon={faHtml5} color='#f06529' className='lang-icon'/>
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                            <FontAwesomeIcon icon={faCss3} color='#28a4d9' className='lang-icon' />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                            <FontAwesomeIcon icon={faJsSquare} color='#efd81d' className='lang-icon' />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                            <FontAwesomeIcon icon={faReact} color='#5ef4f4' className='lang-icon' />
                                <h5>React</h5>
                                </div>
                                <div>
                            <FontAwesomeIcon icon={faFigma} color='#777777' className='lang-icon figma-icon' />
                                <h5>Figma</h5>
                                </div>
                                <div>
                            <img src={photoShop} className='lang-icon' />
                                <h5>Adobe Photoshop</h5>
                                </div>
                                <div>
                            <img src={illustrator} className='lang-icon' />
                                <h5>Adobe Illustrator</h5>
                                </div>
                                <div>
                            <img src={premiere} className='lang-icon' />
                                <h5>Adobe Premiere Pro</h5>
                                </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}