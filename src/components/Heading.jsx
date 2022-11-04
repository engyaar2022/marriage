import React from "react";
import { Carousel } from "react-responsive-carousel";
import img1 from "../images/1.jpg";
import img2 from "../images/2.JPG";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.JPG";
import img7 from "../images/7.JPG";

const Heading = () => {
  return (
    <div>
      <div className="parent__text-box">
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span
              className="heading-primary--main"
              style={{ fontSize: "5rem" }}
            >
              Sayantan & Ashulika
            </span>
          </h1>
          <hr />
          <a
            href="/#"
            style={{
              color: "white",
              fontSize: "1.5rem",
              wordSpacing: "1rem",
              textDecoration: "none",
            }}
          >
            WE'RE GETTING MARRIED
          </a>
          <hr />
        </div>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          showStatus={false}
          stopOnHover={false}
          showThumbs={false}
          interval={2000}
        >
          <div>
            <img
              src={img1}
              alt="img1"
              style={{ height: "40rem", width: "auto" }}
            />
          </div>
          <div>
            <img
              src={img2}
              alt="img2"
              style={{ height: "40rem", width: "auto" }}
            />
          </div>
          <div>
            <img
              src={img3}
              alt="img3"
              style={{ height: "40rem", width: "auto" }}
            />
          </div>
          <div>
            <img
              src={img4}
              alt="img4"
              style={{ height: "40rem", width: "auto" }}
            />
          </div>
          <div>
            <img
              src={img5}
              alt="img5"
              style={{ height: "40rem", width: "auto" }}
            />
          </div>
          <div>
            <img
              src={img6}
              alt="img6"
              style={{ height: "40rem", width: "auto" }}
            />
          </div>          
          <div>
            <img
              src={img7}
              alt="img7"
              style={{ height: "40rem", width: "auto" }}
            />
          </div>  
                  
        </Carousel>
      </div>

      {/* <header className="header" style={{ color: "white" }}>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span
              className="heading-primary--main"
              style={{ fontSize: "5rem" }}
            >
              Sayantan & Ashulika
            </span>
          </h1>
          <hr />
          <a
            href="/#"
            style={{
              color: "white",
              fontSize: "1.5rem",
              wordSpacing: "1rem",
              textDecoration: "none",
            }}
          >
            WE'RE GETTING MARRIED
          </a>
          <hr />
        </div>
      </header> */}
    </div>
  );
};

export default Heading;
