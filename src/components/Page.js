import React from 'react'
import './Page.css'
import mole from '../mole.png'
function Page() {
    return (
        <div className="div">
            <div className="first">
            <div className="intro">
            <header>
                <h1 id="header">
               <span id="p">P</span>
               <span id="o1">o</span>
               <span id="r">r</span>
               <span id="t">t</span>
               <span id="f">f</span>
               <span id="o2">o</span>
               <span id="l">l</span>
               <span id="i">i</span>
               <span id="o">o</span>
               <span id="end">!</span>
                
                </h1>
            </header>
                  <span>Hey my name is <strong>Atif Khan</strong></span>
                   <span>I am a<strong> Full Stack Developer</strong>, I live in Kolkata.</span>
                   <span>I have completed my BSC degree with Computer Science.</span>
                   <span> I likes to focus on writing clean, elegant and efficient code.</span>
                    
                    <span>UI UX designer with a passion for designing beautiful and functional user experience  </span>
                    <span> with my skills of Frontend as well as Backend.</span>
                    
            </div>
            <div className="img"></div>
            </div>
            <div id="wrap">
            <div className="list">
                <h2 className="list" id="para">Skills and Tools</h2>
                <li className="list">Java</li>
                <li className="list">Data Structure And Algorithm</li>
                <li className="list">HTML</li>
                <li className="list">CSS</li>
                <li className="list">SCSS</li>
                <li className="list">JavaScript</li>
                <li className="list">React JS</li>
                <li className="list">Node JS</li>
                <li className="list">Express</li>
                <li className="list">Mongo DB</li>
                <li className="list">Vercel</li>
                <li className="list">Git/Github</li>
            </div>
            </div>
            <h2 className="works">Projects and Works</h2>

            <div className="projects">

            <div className="innerdiv"> 
            <a href="https://whac-a-mole.vercel.app/">
               <img src="https://i.ytimg.com/vi/vzQnKKV2nXo/maxresdefault.jpg"  width="50" height="60"></img> 
            </a>
            <span><h3>Mole game</h3></span>
            <span>Single player game.</span>
            <span>Grab a mallet and see if you can </span>
            <span>pop the mole back into its hole.</span>
            </div>
            <div className="innerdiv">
            <a href="https://unsplash-clone-navy.vercel.app/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdh-231pU2HwfbW8NQskwzvN4R7q-_tj6etg&usqp=CAU"  width="50" height="60"></img>
            </a>
            <span><h3>Image gallery</h3></span>
            <span>Users can search any type of image.</span>
            <span>Search image and display image.</span>
            </div>
            <div className="innerdiv">
            <a href="https://tic-tac-toe-alpha-sandy.vercel.app/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJzA-MH6Vc7WUUyHE1mD2bEMTUykM-j8xNTQ&usqp=CAU"  width="50" height="60"></img>
            </a>
            <span><h3>Tic Tac Toe</h3></span>
            <span>A highly popular fun game</span>
            </div>
            <div className="innerdiv">
            <a href="https://analogue-clock-two.vercel.app/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_fuD_l1Dc1FmgoYfaa4wl-qQfEQeAQ9I1mg&usqp=CAU"  width="50" height="60"></img>
           
            </a>
            <span><h3>Analogue Clock</h3></span>
            <span>A eye catching decent wall clock.</span>
            </div>
            <div className="innerdiv">
            <a href="https://todo-list-cyan.vercel.app/">
            <img src="https://sathyanand.files.wordpress.com/2015/09/to-do-list1.jpg"  width="50" height="60"></img>
            </a>
            <span><h3>Todo List</h3></span>
            <span>User can add every tasks for the whole day.</span>
            <span>It allows you to prioritize the </span>
            <span> that are more important.</span>
            </div>
            <div className="innerdiv">
            <a href="https://box-shadow-generator-ten.vercel.app/">
            <img src="https://www.tonytextures.com/wp-content/uploads/2010/08/Photoshop_Shadow_Generator.jpg"  width="50" height="60"></img>
            </a>
            <span><h3>Shadow generator</h3></span>
            <span>Adds shadow effects around an element's frame.</span>
            <span>Used to set length of x axis and y axis, </span>
            <span>set color and blur as needed.</span>
            </div>
            <div className="innerdiv">
            <a href="https://stopwatch-neon.vercel.app/">
            <img src="https://c.tadst.com/gfx/750w/fb-stopwatch2.png?1"  width="50" height="60"></img>
            </a>
            <span><h3>Stop Watch</h3></span>
            <span>Used to measure the time interval of an event.</span>
            </div>
            <div className="innerdiv">
            <a href="https://weather-forecast-three.vercel.app/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjT6qT60Ns8K0OPrWFu5oBQaRFIWi01ycSlw&usqp=CAU"  width="50" height="60"></img>
            </a>
            <span><h3>Weather Forecast</h3></span>
            <span>Used to fetch any city's weather at any time.</span>
            <span>Involves predicting thing cloud cover,</span>
            <span>rain or snow, wind speed, and temperature before they happen.</span>
            </div>
            <div className="innerdiv">

            <a href="https://first-project-zeta.vercel.app/">
            <img id="food"  width="50" height="60"></img>
            </a>
            <span><h3>Online Food Center</h3></span>
            <span>Created User Interface for the application.</span>
            </div>
            
            </div>
            <div id="last">
            <div id="fb"></div>
            <div id="insta"></div>
            <div id="tweet"></div>
            </div>
        </div>
    )
}

export default Page
