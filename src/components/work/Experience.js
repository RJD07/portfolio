import React, { useEffect } from "react";
import "swiper/css";
import Swiper from "swiper/bundle";
import Style from "./Experience.scss";
import Education from '../../img/school.png';
import Job1 from '../../img/job1.png';
import Job2 from '../../img/job2.png';
import { Link } from 'react-router-dom';


const BlogSlider = () => {
  useEffect(() => {
    const swiper = new Swiper(".blog-slider", {
      spaceBetween: 30,
      effect: "fade",
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: ".blog-slider__pagination",
        clickable: true,
      },
    });

    // Clean up Swiper instance when component unmounts
    return () => {
      swiper.destroy();
    };
  }, []);

  

  return (
    <div className="blog-slider">
      <div className="blog-slider__wrp swiper-wrapper">
        <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">
            <img
              src={Education}
            />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">September 2020</span>
            <div className="blog-slider__title">NEUST</div>
            <div className="blog-slider__text">
            Between surviving caffeine highs and lows on taking BSIT, I managed to snag a degree that says I'm officially knowledgeable about Programming. But it's not just about surviving textbooks and lectures; I sprinkled my academic journey with a dash of excitement through creating my first mobile android application.{" "}
            </div>      
          </div>
        </div>
        <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">
            <img
              src={Job1}
            />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">April 2021 - September 2021</span>
            <div className="blog-slider__title">24Task</div>
            <div className="blog-slider__text">
            I contributed to creating fastpaper website where clean UI/UX design. This experience reinforced my commitment to staying at the forefront of frontend technologies and methodologies. My expertise lies in wielding the power of HTML, CSS, and JavaScript to breathe life into designs. From conceptualization to execution, I've been part of projects that demanded not just code but creativity.
            </div>
     
          </div>
        </div>
        <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">
            <img
              src={Job2}
            />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">September 2021 - February 2022</span>
            <div className="blog-slider__title">DList</div>
            <div className="blog-slider__text">
            One highlight from my freelance escapades is creating website, graphic design, school thesis and drawing sketches. These experiences have not only honed my technical skills but also sharpened my communication and project management prowess.
            </div>
        
          </div>
        </div>
      </div>
      <div className="blog-slider__pagination"></div>
    </div>
  );
};

export default BlogSlider;
