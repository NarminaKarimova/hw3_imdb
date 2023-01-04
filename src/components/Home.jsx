import "./Home.css";
import Atlas from "./Atlas.jpg";
import Narmina from "./Narmina.png"
import Nurhan from "./Nurhan.png"


export default function Home() {

  return (
    <div className="main">
      <center>

        <br />



        <div className="responsive-container-block outer-container">
          <div className="responsive-container-block inner-container">
            <p className="text-blk section-head-text">
              Our Team
            </p>
            <p className="text-blk section-subhead-text">Hello, our dear guest. Welcome to our site created by Narmina Karimova, Atlas Hamzayeva and Nurhan Aliyev ! This site is about showing
              our projects, Movies from imdb dataset and Contact me pages. You can view our personal
              websites that contains our projects individually. In a nutshell, we have done personal website, weather app
              and digital bussiness card projects during Web And Mobile 1 course.
            </p>
            <div className="responsive-container-block">
              <div className="swiper team-swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="card">
                      <div className="img-wrapper">
                        <img src={Atlas} />
                      </div>
                      <div className="card-content">
                        <a className="text-blk name" href="https://atlashamzali.github.io/hw1/" target="_blank" without rel="noreferrer"> Atlas Hamzali
                        </a>
                        <p className="text-blk position">Junior IT Student
                        </p>
                        <p className="text-blk testimonial">Eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Clear understanding of problems and training in programming. Motivated to learn.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card">
                      <div className="img-wrapper">
                        <img src={Narmina} />
                      </div>
                      <div className="card-content">
                        <a className="text-blk name" href="https://narminakarimova.github.io/Portfolio/" target="_blank" without rel="noreferrer"> Narmina Karimova
                        </a>
                        <p className="text-blk position">Junior IT Student
                        </p>
                        <p className="text-blk testimonial">Nothing much, besides my major in technical field, I am currenly taking a second career path in Business Administration.Trying myself in different fields: from learning UI/UX design to playing a guitar and crocheting.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card">
                      <div className="img-wrapper">
                        <img src={Nurhan} />
                      </div>
                      <div className="card-content">
                        <a className="text-blk name" href="https://nurhanaliyev6.github.io/My_personal_website/" target="_blank" without rel="noreferrer"> Nurhan Aliyev
                        </a>
                        <p className="text-blk position">Senior CS Student
                        </p>
                        <p className="text-blk testimonial">Like to investigate my courses deeply. My passion is about Data Science. I am fond of swimming, walking, praying and smoking
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>







      </center>
    </div>
  )
}




  
