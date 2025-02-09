import Slider from "react-slick";
import Card from "@components/Card";
import { certifications } from "@data/certifications";

import "./certifications.css"; // Import CSS module

export const Certifications = () => {
  return (
    <div className={"sliderContainer"}>
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={3}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
        responsive={[
          {
            breakpoint: 1024,
            settings: { slidesToShow: 2, slidesToScroll: 1 },
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 1, slidesToScroll: 1 },
          },
        ]}
      >
        {certifications.map((cert, index) => (
          <div key={index} className={"cardWrapper"}>
            <Card
              image={cert.src}
              description={cert.alt}
              className={"cardComponent"}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
