import Carousel from "react-bootstrap/Carousel";

function Caros() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="./rectang.png" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="./rectang.png" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="./rectang.png" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Caros;
