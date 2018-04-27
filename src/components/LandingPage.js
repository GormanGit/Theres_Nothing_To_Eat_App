import React from "react";
import {Carousel,} from "react-bootstrap";
// import {Link} from "react-router-dom"
import {Button} from "react-bootstrap"

const LandingPage = () => {

  return (
    <div>
      <h2 id="list">
        Welcome
        <br/>
        To
      </h2>
      <h1 className="phoneTitle" id="signUpSignIn" style={{color: "black"}}>
        There's Nothing to Eat &copy;
      </h1>
      <div className="container" style={{display: "flex", justifyContent: "center", width: "50%", height: "50%"}}>
        <Carousel>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500"
                 src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c9443baefd581d4e532b6d4f1e7879be&auto=format&fit=crop&w=500&q=60"/>

            <Carousel.Caption>
              <h3> </h3>
              <p> </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500"
                 src="https://images.unsplash.com/photo-1506344618862-917a6fbde2b5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d1d9b03c59bb940eb897be08aeccd16b&auto=format&fit=crop&w=500&q=60"/>
            <Carousel.Caption>
              <h3> </h3>
              <p> </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500"
                 src="https://images.unsplash.com/photo-1490324120634-0fa86c62d6c1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a2ca1d7b355475d8504bdb44b4b8c718&auto=format&fit=crop&w=500&q=60"/>
            <Carousel.Caption>
              <h3> </h3>
              <p> </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500"
                 src="https://images.unsplash.com/photo-1514517315590-0ea51442327c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=022b28360691b74ff84079bc5ed94495&auto=format&fit=crop&w=500&q=60"/>
            <Carousel.Caption>
              <h3> </h3>
              <p> </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500"
                 src="https://images.unsplash.com/photo-1508709145194-8fec9fa2102b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f0651db87a489e855e6d70a687b77722&auto=format&fit=crop&w=500&q=60"/>
            <Carousel.Caption>
              <h3> </h3>
              <p> </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500"
                 src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a963d29c6015992527cc43326e0e2197&auto=format&fit=crop&w=500&q=60"/>
            <Carousel.Caption>
              <h3> </h3>
              <p> </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div id="listSignIn" style={{color: "#9A3014", fontSize: "18px"}}>
        <br/>
        Let's get stoked about cooking!
      </div>
      <div>
        <br/>
        {/*<Button style={{backgroundColor: "#C6CBCC"}}><Link style={{color: "#777777"}} to="/search">Lets Go!</Link></Button>*/}
        <Button style={{backgroundColor: "#C6CBCC"}} href="./search" id="signUpSignIn" type="submit">Lets Go</Button>
      </div>
    </div>


  )

}
export default LandingPage;
