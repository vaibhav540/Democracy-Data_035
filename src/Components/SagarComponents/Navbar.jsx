import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

function Navbar(){
  return(
    <div className="container">

        <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <img src="https://i.pinimg.com/originals/5d/48/ca/5d48ca330a35603adaabb7a4071b4116.jpg" alt="" width={"100px"} style={{objectFit:"cover", width:"100px", height:"50px"}} />
    <form class="d-flex gap-3" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
      <button class="btn btn-primary" type="submit">Login</button>
      <button class="btn btn btn-dark" type="submit">Signup</button>
    </form>
  </div>  
</nav>

        <Carousel interval={2000}>
        <Carousel.Item>
        <img style={{width:"100vw", height:"75vh", objectFit:"cover"}}
          className="d-block w-100"
          src="https://miro.medium.com/v2/resize:fit:999/0*IpPuhvq5GoR0znBc.jpg"
          alt="First slide"
        />
        <div class="carousel-caption d-none d-md-block">
        <h5 class="d-inline-block px-5 py-2 mb-2 bg-black bg-opacity-50 rounded-pill">Taj Mahal</h5>
        <p>A UNESCO World Heritage Site, the Taj Mahal is an iconic symbol of love and one of the most beautiful architectural masterpieces in the world. Built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, this stunning white marble mausoleum is a must-visit for its breathtaking beauty and historical significance.</p>
      </div>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:"100vw", height:"75vh", objectFit:"cover"}}
          className="d-block w-100"
          src="https://static.vecteezy.com/system/resources/previews/024/614/133/non_2x/famous-monument-minaret-illuminated-at-dusk-showcasing-ancient-architecture-generated-by-ai-free-photo.jpg"
          alt="Fifth slide"
        />
        <div class="carousel-caption d-none d-md-block">
        <h5 class="d-inline-block px-5 py-2 mb-2 bg-black bg-opacity-50 rounded-pill">Charminar</h5>
        <p>The Charminar, located in Hyderabad, India, is an iconic 16th-century mosque renowned for its stunning Indo-Islamic architecture. This historical monument, featuring four grand arches and minarets, serves as a symbol of the city and a vibrant cultural hub for tourists.</p>
      </div>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:"100vw", height:"75vh", objectFit:"cover"}}
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/architecture-ancient-monument-world-heritage-day-celebration_23-2151297159.jpg"
          alt="Fourth slide"
        />
        <div class="carousel-caption d-none d-md-block">
        <h5 class="d-inline-block px-5 py-2 mb-2 bg-black bg-opacity-50 rounded-pill">India Gate</h5>
        <p>India Gate is a majestic war memorial located in the heart of New Delhi, India. It commemorates the 70,000 Indian soldiers who lost their lives during World War I and serves as a popular tourist attraction and a symbol of national pride.</p>
      </div>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:"100vw", height:"75vh", objectFit:"cover"}}
          className="d-block w-100"
          src="https://www.fabhotels.com/blog/wp-content/uploads/2019/02/Red-Fort.jpg"
          alt="Second slide"
        />
        <div class="carousel-caption d-none d-md-block">
        <h5 class="d-inline-block px-5 py-2 mb-2 bg-black bg-opacity-50 rounded-pill">The Red Fort</h5>
        <p>located in Delhi, India, is a historic fortification and a UNESCO World Heritage Site. Built by Mughal Emperor Shah Jahan in the 17th century, it is renowned for its massive red sandstone walls, stunning architecture, and significant historical importance. A visit to the Red Fort offers a glimpse into India's rich Mughal heritage and serves as a testament to the grandeur of the Mughal era.</p>
      </div>
        
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:"100vw", height:"75vh", objectFit:"cover"}}
          className="d-block w-100"
          src="https://e0.pxfuel.com/wallpapers/83/21/desktop-wallpaper-gateway-of-india-gallery.jpg"
          alt="Third slide"
        />
        <div class="carousel-caption d-none d-md-block">
        <h5 class="d-inline-block px-5 py-2 mb-2 bg-black bg-opacity-50 rounded-pill">Gateway of India</h5>
        <p>The Gateway of India, located in Mumbai, is an iconic arch monument built during the 20th century. It serves as a majestic entrance to the city and is a popular tourist attraction, offering stunning views of the Arabian Sea and a rich historical significance.</p>
      </div>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
export default Navbar;