import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Recommendation.css";

import Destination1 from "/src/assets/uttarakhand.jpg";
import Destination2 from "/src/assets/Maharashtra.jpg";
import Destination3 from "/src/assets/delhi.webp";
import Destination4 from "/src/assets/Mady-Pradesh.webp";
import Destination5 from "/src/assets/Himachal-pradesh.webp";
import Destination6 from "/src/assets/Gujrat.webp";

import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Service from "./Service";
import "../Styles/Footer.module.css";
import "../Styles/Hero.module.css";
import "../Styles/NavBar.module.css";
import "../Styles/Services.module.css";
import "../Styles/Testimonials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faTrain,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
function Recommendation() {
  const [active, setActive] = useState();
  const navigate = useNavigate();

  const data = [
    {
      image: Destination1,
      title: "Uttarakhand",
      subTitle:
        "Uttarakhand the 27th state of Republic of India lies between 28o 44' & 31o 28' N Latitude and 77o 35' & 81o 01' East longitude. It was carved out of UP on 9th November 2000. The geographical area of the state is 53483 sq. km and the terrain and topography of the state is largely hilly with  ",
      cost: "38,800",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination2,
      title: "Maharashtra",
      subTitle:
        "Maharashtra the 27th state of Republic of India lies between 28o 44' & 31o 28' N Latitude and 77o 35' & 81o 01' East longitude. It was carved out of UP on 9th November 2000. The geographical area of the state is 53483 sq. km and the terrain and topography of the state is largely hilly with",
      cost: "54,200",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination3,
      title: "Delhi",
      subTitle:
        "Delhi the 27th state of Republic of India lies between 28o 44' & 31o 28' N Latitude and 77o 35' & 81o 01' East longitude. It was carved out of UP on 9th November 2000. The geographical area of the state is 53483 sq. km and the terrain and topography of the state is largely hilly with",

      cost: "45,500",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination4,
      title: "Madhya-Pradesh",
      subTitle:
        "Madhya-Pradesh the 27th state of Republic of India lies between 28o 44' & 31o 28' N Latitude and 77o 35' & 81o 01' East longitude. It was carved out of UP on 9th November 2000. The geographical area of the state is 53483 sq. km and the terrain and topography of the state is largely hilly with",

      cost: "24,100",
      duration: "Approx 1 night trip",
    },
    {
      image: Destination5,
      title: "Himachal-Pradesh",
      subTitle:
        "Himachal-Pradesh the 27th state of Republic of India lies between 28o 44' & 31o 28' N Latitude and 77o 35' & 81o 01' East longitude. It was carved out of UP on 9th November 2000. The geographical area of the state is 53483 sq. km and the terrain and topography of the state is largely hilly with",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
    },
    {
      image: Destination6,
      title: "Gujrat",
      subTitle:
        "Gujrat the 27th state of Republic of India lies between 28o 44' & 31o 28' N Latitude and 77o 35' & 81o 01' East longitude. It was carved out of UP on 9th November 2000. The geographical area of the state is 53483 sq. km and the terrain and topography of the state is largely hilly with",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
  ];

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  const handleImageClick = () => {
    navigate(`/bookplace`);
  };

  return (
    <div className="container">
      <Service />
      <section id="recommendation" className="recommendation">
        <div className="title">
          <h1>Plan a trip with Weekend Planner</h1>
          <div className="CategoryBar">
            <ul>
              {packages.map((pkg, index) => (
                <li
                  key={index}
                  className={active === index + 1 ? "Active" : ""}
                  onClick={() => setActive(index + 1)}
                >
                  {pkg}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="recommendationBox">
          {data.map((item) => (
            <div
              className="box"
              key={item.title}
              onClick={() => handleImageClick(item.title)}
            >
              <div className="image">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.subTitle}</p>
              <div className="price">
                <div id="icons">
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="1.5x" />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faTrain} size="1.5x" />
                  </span>
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faPlane} size="1.5x" />
                  </span>
                </div>
                <p style={{ fontSize: "20px" }}>₹{item.cost}</p>
              </div>
              <div className="details">
                <p>1500 kms</p>
                <p>{item.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Recommendation;
