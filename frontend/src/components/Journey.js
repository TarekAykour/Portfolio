import React from "react";
import useWindowSize from './useWindowSize'
import {Parallax, ParallaxLayer} from "@react-spring/parallax"

function Journey(){
    const size = useWindowSize();  


    if(size.width <= 600){
        return(
            <div className="journey">
                <h2 className="journey-title">The Journey <div className="underline"></div></h2>
                
                <div className="stories">
        
                {/* january */}
                <div className="january story">
                    <div className="pointer">
                        <div className="circle-point">
                            <div className="inner-circle"></div>
                        </div>
                        <div className="line"></div>
                    </div>
                    <div className="content">
                    <h2>January 2020- March 2020</h2>
                    <p >I came to know about web development when i was trying to startup a small ecommerce company. I wanted to build a website so i could sell my products and so i looked up "how to create a website/webshop" on YouTube.
                         The first things that popped up were HTML Tutorials.
                          I got spooked by how complex it looked (what a weakling) i then tried the easier route and looked up alternative websites where  you could build a webshop. Wordpress popped up, but then i saw that i had to pay for its service i inmediately reconsidered my decision to learn web development. 
                          after all it's  a powerful skill i could acquire and would teach me a lot of stuff such as: problem solving, web design, programming in general, etc. The book $100 startup also inspired me to learn new skills, it would give me more options if i ever feel stuck with a job i don't like and 
                         so i learning web development. I started with HTML and CSS and it appeared that i actually enjoyed it and that it wasn't as complex as i thought it would be (until later on). I continued practicing for about 3 months . I build things like: our beautiful solar system, a logistics website, simple dropdown menus and so on. The others aren't worth mentioning. It will most likely damage your eyes. </p>
                    <div className="jan-images story-image">
                        <img src="../../static/images/html.png" width="200px"></img>
                        <img className="second-image" src="../../static/images/css.png" width="150px"></img>
                    </div>
                    </div>
                </div>
                
                {/* march */}
                
                <div className="march story">
                <div className="pointer">
                    <div className="circle-point">
                        <div className="inner-circle"></div>
                    </div>
                    <div className="line"></div>
                </div>
                <div className="content">
                <h2>March 2020- July 2020</h2>
                <p>
                I started learning a real programming language in March 2020,
                 i chose to learn Javascript, because it was adviced by the professionals.
                  And since i am a newbie i listened to them. Also i had to learn it, 
                  because i was still learning frontend development and hadn't learned about the backend yet. 
                  I started off by following following an Udemy course made by Colt steele & Stephen Grider (not sponsored btw) which covered plain JS and NodeJS. 
                  I learned about the basics such as: strings, objects, functions, etc.
                   and eventually learned about DOM, APIS, etc. which blew my mind as a newbie.
                   It felt like i was using magic. 
                   I followed the course until around July 2020, 
                   where i closed off the course with a finalproject. 
                   It was an ecommerce application, 
                which was exactly what i wanted to make from the start. 
                </p>
                <div className="march-images story-image">
                <img src="../../static/images/javscript.png" width="200px"></img>
                </div>
                </div>
                
                
                
                
                    
                </div>
                
                {/* july */}
                
                <div className="july story">
                    <div className="pointer">
                        <div className="circle-point">
                            <div className="inner-circle"></div>
                        </div>
                        <div className="line"></div>
                    </div>
                    <div className="content">
                    <h2>July 2020- November 2020</h2>
                    <p>This is where it kind of went wrong. 
                        After completing the ecommerce project from the Udemy cousre, 
                        i wanted to create a fully functional  ecommerce website. 
                        So what i did (the smart guy i am) is copying the code from a React ecommerce tutorial.
                         This itself is already huge no go. 
                         To make things worse, i didn't even pratice with plain Javscript enough and i didn't even learn React.
                          And after 2 days or so i gave up (what a suprise). 
                          I then realized that i might need to learn the basics of React first and then create projects such as an ecommerce webapp,
                           which is one of the biggest webapp projects you could create as a beginner.
                            After learning the basics and creating simple projects such as: a todo list, carasoul slider, responsive navigation i jumped back to the tutorial. Yes, you read it right, i went back to the same tutorial and copied the code AGAIN. But this time i kind of knew what i was doing. But due to the lack of problem solving skills (because i didn't practice enough by writing my own code) , i had a hard time solving some problems that i encountered. Heck, i couldn't even implement a simple filter function, which would filter the products by either: their size, name or price. Not considering my lack of problem solving skills, i pushed my self too hard and gave myself until the end of October to finish the project, eventhough i started the project at the beginning of September. And then, it happened... A Burn-out. The Burn-out send me straight to the core of the earth. 
                        So i learned a big lesson here. Be patient and analyze where your faults lie. </p>
                    <div className="july-images story-image">
                    <img src="../../static/images/react.png" style={{transform: 'translateX(100%)'}} width="200px"></img>
                    </div>
                    </div>
                </div>
               
                {/* March 2022 */}
                <div className="march2022 story">
                    <div className="pointer">
                        <div className="circle-point">
                            <div className="inner-circle"></div>
                        </div>
                        <div className="line"></div>
                    </div>
                    <div className="content">
                    <h2>March 2022 - May 2022</h2>
                    <p> 
                        A year and 3 months later and i wanted to try it again.
                        I regained motivation to start learning programming again and this time
                        i was more patient. I picked up Python and familiarized myself with it's syntax.
                        Later i made a really good decision... i started creating projects on my own and guess what. 
                        I made great progress and got more comfortable creating my own projects. I finally understood what
                        it means to be a programmer. Creating your own things and trying (cuz stackoverflow is the shit) to solve your own problems.
                        I continued to make small programs like: a "guess the word" game, story adventure game, random password generator, a quiz game, etc.
                        I then dove a tiny bit into the world of GUI development and started using tkinter to create two applications.
                        The first one was a simple weather app and the second one an employee database app where you could Edit and add employees into the database. 
                        I continued practicing with tkinter until aroun the end of April. Where i then started learning Django and made my first Django applications. which
                        were... can you guess it? A Todo App and weather app! What a suprise!
    
                    </p>
                    <div className="march2022-images story-image">
                    <img src="../../static/images/python.png"  width="200px"></img>
                    </div>
                    </div>
                </div>

                {/* may 2022 */}
                <div className="may2022 story">
                <div className="pointer">
                    <div className="circle-point">
                        <div className="inner-circle"></div>
                    </div>
                    <div className="line"></div>
                </div>
                <div className="content">
                <h2>May 2022 - August 2022</h2>
                <p> 
                    After learning some basics of Django and creating two small webapps. I looked up on the internet for some good 
                    web development courses/ bootcamps and one that came across was the Odin Project, which was one of the favourites. But then i started to See
                    people mentioning CS50 as well and i got interested. I went to the edux site and saw all kinds of courses that taught computer science, web dev, AI dev, etc.
                    And the best part. It was all free! I got excited and asked around which courses i should learn to get better at web development and programming in general.Most people
                    recommmended me to follow CS50X, so i did. I started with CS50X and inmediately loved its structure, visualization and the way of teaching. Professor David Malan is the 
                    best teacher i have encountered so far (in my opinion ofcourse)! I struggled a lot with it's exercises, but learned a ton as well. It took me about 2 months to complete the course plus the
                    final project (<a href="/portfolio">astrotravel</a>). It was also a great introduction to datastructures and algorithms which helped me understanding the concept better. The final 2 weeks of the projects
                    were more focused on web development, which was also my favourite part. I made some small webapps like a homepage to a website where you could buy, sell and view stocks. 

                </p>
                <div className="may2022-images story-image">
                <img src="../../static/images/django.png"  width="200px"></img>
                <img src="../../static/images/C.png"  width="200px"></img>
                <img style={{
                    transform: 'translate(-250%, 50%)'
                }} src="../../static/images/flask.png"  width="200px"></img>
                </div>
                </div>
                
            </div>

            {/* august 2022 */}
            <div className="august2022 story">
            <div className="pointer">
                    <div className="circle-point">
                        <div className="inner-circle"></div>
                    </div>
                    <div className="line"></div>
                </div>
                <div className="content" style={{transform: 'translateX(-5%)'}}>
                <h2>August 2022 - October 2022</h2>
                <p> 
                   After completing CS50X, i inmediately started following CS50W and rushed through it, because i understood most things like: HTML, CSS, JS, GIT, Django, etc. 
                   Still had some problems with the <a href="/portfolio">commerce</a> project, but it was all worth it, because i learned a lot from it.
                   I did all the projects in CS50W and made my final project in November 2022 which was my <a href="/portfolio">Bank app</a>.
                   I learned to integrate React with Django as well as working with SQL Database and finally deploying django applications. After some extra practice with small react-django projects
                   i finally felt like i was ready to get into business. 

                </p>
                <div className="august2022-images story-image">
                <img src="../../static/images/django.png"  width="200px"></img>
                <img className="second-image" style={{transform:"translate(35%, -35%)"}} src="../../static/images/react.png"  width="200px"></img>
                
                </div>
                </div>
                
            </div>
                
                </div>
            </div>
        )
    }
    else {
    return(
        <div className="journey">
            <h2 className="journey-title">The Journey <div className="underline"></div></h2>
            
            <div className="stories">
    
            {/* january */}
            <div className="january story">
                <div className="pointer">
                    <div className="circle-point">
                        <div className="inner-circle"></div>
                    </div>
                    <div className="line"></div>
                </div>
                <div className="content">
                <h2>January 2020- March 2020</h2>
                <p >I came to know about web development when i was trying to startup a small ecommerce company. I wanted to build a website so i could sell my products and so i looked up "how to create a website/webshop" on YouTube.
                         The first things that popped up were HTML Tutorials.
                          I got spooked by how complex it looked (what a weakling) i then tried the easier route and looked up alternative websites where  you could build a webshop. Wordpress popped up, but then i saw that i had to pay for its service i inmediately reconsidered my decision to learn web development. 
                          after all it's  a powerful skill i could acquire and would teach me a lot of stuff such as: problem solving, web design, programming in general, etc. The book $100 startup also inspired me to learn new skills, it would give me more options if i ever feel stuck with a job i don't like and 
                         so i learning web development. I started with HTML and CSS and it appeared that i actually enjoyed it and that it wasn't as complex as i thought it would be (until later on). I continued practicing for about 3 months . I build things like: our beautiful solar system, a logistics website, simple dropdown menus and so on. The others aren't worth mentioning. It will most likely damage your eyes. </p>
                <div className="jan-images story-image">
                    <img src="../../static/images/html.png" width="200px"></img>
                    <img className="second-image" src="../../static/images/css.png" width="150px"></img>
                </div>
                </div>
            </div>
            
            {/* march */}
            
            <div className="march story">
            <div className="content">
            <h2>March 2020- July 2020</h2>
            <p>
            I started learning a real programming language in March 2020,
             i chose to learn Javascript, because it was adviced by the professionals.
              And since i am a newbie i listened to them. Also i had to learn it, 
              because i was still learning frontend development and hadn't learned about the backend yet. 
              I started off by following following an Udemy course made by Colt steele & Stephen Grider (not sponsored btw) which covered plain JS and NodeJS. 
              I learned about the basics such as: strings, objects, functions, etc.
               and eventually learned about DOM, APIS, etc. which blew my mind as a newbie.
               It felt like i was using magic. 
               I followed the course until around July 2020, 
               where i closed off the course with a finalproject. 
               It was an ecommerce application, 
            which was exactly what i wanted to make from the start. 
            </p>
            <div className="march-images story-image">
            <img src="../../static/images/javscript.png" width="200px"></img>
            </div>
            </div>
            <div className="pointer">
                <div className="circle-point">
                    <div className="inner-circle"></div>
                </div>
                <div className="line"></div>
            </div>
            
            
            
                
            </div>
            
            {/* july */}
            
            <div className="july story">
                <div className="pointer">
                    <div className="circle-point">
                        <div className="inner-circle"></div>
                    </div>
                    <div className="line"></div>
                </div>
                <div className="content">
                <h2>July 2020- November 2020</h2>
                <p>This is where it kind of went wrong. 
                    After completing the ecommerce project from the Udemy cousre, 
                    i wanted to create a fully functional  ecommerce website. 
                    So what i did (the smart guy i am) is copying the code from a React ecommerce tutorial.
                     This itself is already huge no go. 
                     To make things worse, i didn't even pratice with plain Javscript enough and i didn't even learn React.
                      And after 2 days or so i gave up (what a suprise). 
                      I then realized that i might need to learn the basics of React first and then create projects such as an ecommerce webapp,
                       which is one of the biggest webapp projects you could create as a beginner.
                        After learning the basics and creating simple projects such as: a todo list, carasoul slider, responsive navigation i jumped back to the tutorial. Yes, you read it right, i went back to the same tutorial and copied the code AGAIN. But this time i kind of knew what i was doing. But due to the lack of problem solving skills (because i didn't practice enough by writing my own code) , i had a hard time solving some problems that i encountered. Heck, i couldn't even implement a simple filter function, which would filter the products by either: their size, name or price. Not considering my lack of problem solving skills, i pushed my self too hard and gave myself until the end of October to finish the project, eventhough i started the project at the beginning of September. And then, it happened... A Burn-out. The Burn-out send me straight to the core of the earth. 
                    So i learned a big lesson here. Be patient and analyze where your faults lie. </p>
                <div className="july-images story-image">
                <img src="../../static/images/react.png" style={{transform: 'translateX(100%)'}} width="200px"></img>
                </div>
                </div>
            </div>
           
            {/* March 2022 */}
            <div className="march2022 story">
                <div className="pointer">
                    <div className="circle-point">
                        <div className="inner-circle"></div>
                    </div>
                    <div className="line"></div>
                </div>
                <div className="content">
                <h2>March 2022 - May 2022</h2>
                <p> 
                    A year and 3 months later and i wanted to try it again.
                    I regained motivation to start learning programming again and this time
                    i was more patient. I picked up Python and familiarized myself with it's syntax.
                    Later i made a really good decision... i started creating projects on my own and guess what. 
                    I made great progress and got more comfortable creating my own projects. I finally understood what
                    it means to be a programmer. Creating your own things and trying (cuz stackoverflow is the shit) to solve your own problems.
                    I continued to make small programs like: a "guess the word" game, story adventure game, random password generator, a quiz game, etc.
                    I then dove a tiny bit into the world of GUI development and started using tkinter to create two applications.
                    The first one was a simple weather app and the second one an employee database app where you could Edit and add employees into the database. 
                    I continued practicing with tkinter until aroun the end of April. Where i then started learning Django and made my first Django applications. which
                    were... can you guess it? A Todo App and weather app! What a suprise!

                </p>
                <div className="march2022-images story-image">
                <img src="../../static/images/python.png"  width="200px"></img>
                </div>
                </div>
            </div>

            {/* May 2022 */}
            <div className="may2022 story">
                <div className="pointer">
                    <div className="circle-point">
                        <div className="inner-circle"></div>
                    </div>
                    <div className="line"></div>
                </div>
                <div className="content">
                <h2>May 2022 - August 2022</h2>
                <p> 
                    After learning some basics of Django and creating two small webapps. I looked up on the internet for some good 
                    web development courses/ bootcamps and one that came across was the Odin Project, which was one of the favourites. But then i started to See
                    people mentioning CS50 as well and i got interested. I went to the edux site and saw all kinds of courses that taught computer science, web dev, AI dev, etc.
                    And the best part. It was all free! I got excited and asked around which courses i should learn to get better at web development and programming in general.Most people
                    recommmended me to follow CS50X, so i did. I started with CS50X and inmediately loved its structure, visualization and the way of teaching. Professor David Malan is the 
                    best teacher i have encountered so far (in my opinion ofcourse)! I struggled a lot with it's exercises, but learned a ton as well. It took me about 2 months to complete the course plus the
                    final project (<a href="/portfolio">astrotravel</a>). It was also a great introduction to datastructures and algorithms which helped me understanding the concept better. The final 2 weeks of the projects
                    were more focused on web development, where we learned HTML, CSS, JS and flask which was also my favourite part. I made some small webapps like a homepage to a website where you could buy, sell and view stocks. 

                </p>
                <div className="may2022-images story-image">
                <img src="../../static/images/django.png"  width="200px"></img>
                <img className="second-image" style={{transform:"translate(35%, -35%)"}} src="../../static/images/C.png"  width="200px"></img>
                <img style={{transform:"translate(-250%, 25%)"}} src="../../static/images/flask.png"  width="200px"></img>
                </div>
                </div>
            </div>
             
             {/* august 2022 */}
            <div className="august2022 story">
                <div className="content" style={{transform: 'translateX(-15%)'}}>
                <h2>August 2022 - October 2022</h2>
                <p> 
                   After completing CS50X, i inmediately started following CS50W and rushed through it, because i understood most things like: HTML, CSS, JS, GIT, Django, etc. 
                   Still had some problems with the <a href="/portfolio">commerce</a> project, but it was all worth it, because i learned a lot from it.
                   I did all the projects in CS50W and made my final project in November 2022 which was my <a href="/portfolio">Bank app</a>.
                   I learned to integrate React with Django as well as working with SQL Database and finally deploying django applications. After some extra practice with small react-django projects
                   i finally felt like i was ready to get into business. 

                </p>
                <div className="august2022-images story-image">
                <img src="../../static/images/django.png"  width="200px"></img>
                <img className="second-image" style={{transform:"translate(35%, -35%)"}} src="../../static/images/react.png"  width="200px"></img>
                
                </div>
                </div>
                <div className="pointer">
                    <div className="circle-point">
                        <div className="inner-circle"></div>
                    </div>
                    <div className="line"></div>
                </div>
            </div>
            
            </div>
        </div>
    )
}

}


export default Journey