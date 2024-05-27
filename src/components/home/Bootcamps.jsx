import { check, logoAw } from "../../assets";
import { bootcamps, collabApps } from "../../constants";
import Section from "../global/Section";
import { LeftCurve, RightCurve } from "../design/Collaboration";
import SimpleButton from "../elements/SimpleButton";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const Collaboration = () => {
  const circleRef = useRef(null);
  useGSAP(() => {
    gsap.to(circleRef.current, {
      scrollTrigger: {
        scrub: 2,
      },
      rotate: 760,
    });
  });
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            Propulsez votre carrière dans le développement web
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {bootcamps.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-2">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <SimpleButton
            text="Embark with us"
            className="bg-gradient-to-br from-color-9 to-[#ff8000]"
          />
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-2 md:mb-16 lg:mb-32 lg:w-[35rem] lg:mx-auto">
            Libérez votre potentiel avec notre bootcamp, spécialisé en
            Full-Stack JavaScript et Full-Stack Java/Angular. Rejoignez-nous
            pour maîtriser les technologies de pointe et propulser votre
            carrière dans le développement web !
          </p>
          <div className="flex w-full lg:h-full h-96 items-center justify-center relative">
            <div className="absolute flex items-center justify-center w-full h-full rounded-full">
              <img src={logoAw} alt="" className="w-16" />
            </div>
            <div
              ref={circleRef}
              className="absolute flex w-[22rem] aspect-square border border-n-6 rounded-full scale:75 md:scale-100"
            >
              <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                <div className="w-[6rem] aspect-square m-auto p-[0.2rem] rounded-full"></div>
              </div>

              <ul>
                {collabApps.map((app, index) => (
                  <li
                    key={app.id}
                    className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                      index * 45
                    }`}
                  >
                    <div
                      className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                        index * 45
                      }`}
                    >
                      <img
                        className="m-auto"
                        width={app.width}
                        height={app.height}
                        alt={app.title}
                        src={app.icon}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
