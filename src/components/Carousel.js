import Carousel from "react-bootstrap/Carousel";

import image1 from "../data/image16.avif";
import image2 from "../data/image12.jpg";
import image3 from "../data/image11.jpg";

function UncontrolledExample() {
  return (
    <div className="container d-flex justify-content-center">
      <Carousel data-bs-theme="dark" style={{ height: "auto", width: "50%" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="First slide"
            style={{ width: "auto", height: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white" }}
          >
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="Second slide"
            style={{
              width: "auto",
              height: "500px",
              objectFit: "cover",
            }}
          />
          <Carousel.Caption
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white" }}
          >
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
            style={{ width: "auto", height: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white" }}
          >
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;
