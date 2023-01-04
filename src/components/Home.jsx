import "./Home.css";
import Atlas from "./Atlas.jpg";
import Narmina from "./Narmina.png"
import Nurhan from "./Nurhan.png"


export default function Home() {

  return (
    <div classNameName="centered">
      <center>


        <h3>AGENDA</h3>
        <br />

        <p >Hello, our dear guest. Welcome to our site created by Narmina Karimova, Atlas Hamzayeva and Nurhan Aliyev ! This site is about showing
          our projects, Movies from imdb dataset and Contact me pages. You can view our personal
          websites that contains our projects individually. In a nutshell, we have done personal website, weather app
          and digital bussiness card projects during Web And Mobile 1 course.   </p>

        <div className="container text-center mt-5 mb-2">
          <h1 className="mb-0">Meet our team</h1>
        </div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-3">
              <div className="bg-white p-3 text-center rounded box"><img className="img-responsive rounded-circle" src={Atlas} width="90" alt="Atlas"></img>
                <h5 className="mt-3 name">Atlas Hamzali</h5><span className="work d-block">IT student</span><span className="work d-block">Junior</span>
                <div className="mt-4 about"><span>Eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Clear understanding of problems and training in programming. &nbsp; Motivated to learn.</span></div>
                <div className="mt-4">
                  <a href="https://atlashamzali.github.io/hw1/" target="_blank" without rel="noreferrer">View Profile</a><br />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="bg-white p-3 text-center rounded box"><img className="img-responsive rounded-circle" src={Narmina} width="90" alt="Narmina" ></img>
                <h5 className="mt-3 name">Narmina Karimova</h5><span className="work d-block">IT student</span><span className="work d-block">Junior</span>
                <div className="mt-4 about"><span>Nothing much, besides my major in technical field, I am currenly taking a second career path in Business Administration.&nbsp;Trying myself in different fields: from learning UI/UX design to playing a guitar and crocheting.</span></div>
                <div className="mt-4">
                  <a href="https://narminakarimova.github.io/Portfolio/" target="_blank" without rel="noreferrer">View Profile</a> <br />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="bg-white p-3 text-center rounded box"><img className="img-responsive rounded-circle" src={Nurhan} width="90" alt="Nurhan"></img>
                <h5 className="mt-3 name">Nurhan Aliyev</h5><span className="work d-block">CS student</span><span className="work d-block">Senior</span>
                <div className="mt-4 about"><span>Like to investigate my courses deeply. My passion is about Data Science.&nbsp; I am fond of swimming, walking, praying and smoking</span></div>
                <div className="mt-4">
                  <a href="https://nurhanaliyev6.github.io/My_personal_website/" target="_blank" without rel="noreferrer">View Profile</a><br />
                </div>
              </div>
            </div>
          </div>
        </div>






      </center>
    </div>
  )
}


  
