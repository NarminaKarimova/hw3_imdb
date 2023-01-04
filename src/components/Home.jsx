import "./Home.css";
import Atlas from "./Atlas.jpg";
import Narmina from "./Narmina.png"
import Nurhan from "./Nurhan.png"


export default function Home() {

  return (
    <div className="main">
      <center>

        <br />

        <div className="outer-container">
          <div className="responsive-card inner-container">
            <p className="blok head">
              Our Team
            </p>
            <p className="blok subhead">Hello, our dear guest. Welcome to our site created by Narmina Karimova, Atlas Hamzali and Nurhan Aliyev ! This site is about showing
              our projects, Movies from imdb dataset and Contact me pages. You can view our personal
              websites that contains our projects individually. In a nutshell, we have done personal website, weather app
              and digital bussiness card projects during Web And Mobile 1 course.
            </p>
            <div className="responsive-card
">
              <div className="swiper team-swiper">
                <div className="wrapper">
                  <div className="slide">
                    <div className="card">
                      <div className="image">
                        <img src={Atlas} />
                      </div>
                      <div className="card-content">
                        <a className="blok name" href="https://atlashamzali.github.io/hw1/" target="_blank" without rel="noreferrer"> Atlas Hamzali
                        </a>
                        <p className="blok year">Junior IT Student
                        </p>
                        <p className="blok info">Eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Clear understanding of problems and training in programming. Motivated to learn.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="slide">
                    <div className="card">
                      <div className="image">
                        <img src={Narmina} />
                      </div>
                      <div className="card-content">
                        <a className="blok name" href="https://narminakarimova.github.io/Portfolio/" target="_blank" without rel="noreferrer"> Narmina Karimova
                        </a>
                        <p className="blok year">Junior IT Student
                        </p>
                        <p className="blok info">Nothing much, besides my major in technical field, I am currenly taking a second career path in Business Administration.Trying myself in different fields: from learning UI/UX design to playing a guitar and crocheting.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="slide">
                    <div className="card">
                      <div className="image">
                        <img src={Nurhan} />
                      </div>
                      <div className="card-content">
                        <a className="blok name" href="https://nurhanaliyev6.github.io/My_personal_website/" target="_blank" without rel="noreferrer"> Nurhan Aliyev
                        </a>
                        <p className="blok year">Senior CS Student
                        </p>
                        <p className="blok info">Like to investigate my courses deeply. My passion is about Data Science. I am fond of swimming, walking, praying and smoking
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




  
