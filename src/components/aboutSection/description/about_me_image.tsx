import Image from "next/image";
import Aos from "aos";
import { FC, useEffect } from "react";
import "aos/dist/aos.css";

const AboutMeImage: FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="flex justify-center my-5 aos-init aos-animate" data-aos="fade-up">
      <Image
        src="/florian-de-ghellinck.jpg"
        width={350}
        height={300}
        alt="Profile Picture"
        className="rounded-lg object-cover touch-pinch-zoom aspect-[8/7]"
      />
    </div>
  );
};
export default AboutMeImage;
