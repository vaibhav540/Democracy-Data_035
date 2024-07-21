import React from "react";

export default function HomePage() {
  return (
    <>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item " data-bs-interval="3000">
            <img
              src="https://visitmyholidays.com/wp-content/uploads/2022/06/Yatra-Holidays-Slider-2.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>TOURS & TRAVEL</h5>
              <h1 className="slider-page1-h1">
                Let's Discover The World Together
              </h1>
            </div>
          </div>
          <div className="carousel-item active" data-bs-interval="3000">
            <img
              src="https://visitmyholidays.com/wp-content/uploads/2022/06/Yatra-Holidays-Slider-1.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Finding magic in every moment</h5>
              <h1 className="slider-page1-h1">
                Discover Amazing Places With Us
              </h1>
            </div>
          </div>
          <div className="carousel-item " data-bs-interval="3000">
            <img
              src="https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/14/b2c0d335db76d814aba3d16c468a4724_1000x1000.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Adventure Awaits</h5>
              <h1 className="slider-page1-h1">
                Embrace the thrill of the weekend
              </h1>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="about-us-banner-main-div container-fluid">
        <div className="about-us-banner container mt-5 d-flex">
          <div className="about-us-banner-img"></div>
          <div className="about-us-banner-text-maindiv">
            <div className="about-us-banner-text-maindiv-inner-div">
              <div>
                <h5>ABOUT US</h5>
                <h1>We Provide Best Tour Packages In Your Budget</h1>
                <p>
                  At Wanderlust Travels, we design personalized travel
                  experiences to make your dreams come true. With over a decade
                  in the industry, our team excels at crafting unique
                  itineraries for beach getaways Let us turn your travel dreams
                  into reality with exceptional service and expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
