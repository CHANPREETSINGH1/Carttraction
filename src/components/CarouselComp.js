import { Carousel } from "react-carousel-minimal";
import E1 from "../images/carousel2.png";
import E2 from "../images/carousel3.png";
import E3 from "../images/carousel1.png";

function Car() {
  const data = [
    {
      image: [E3],
    },
    {
      image: [E2],
    },
    {
      image: [E1],
    },
  ];

  return (
    <>
      <Carousel
        data={data}
        time={1500}
        width="100%"
        height="400px"
        radius="10px"
        slideNumber={true}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="fit"
        style={{
          textAlign: "center",
          // maxWidth: "850px",
          maxHeight: "auto",
          margin: "20px auto",
          //marginLeft: "450px",
          //align: "center"
        }}
      />
    </>
  );
}

export default Car;
