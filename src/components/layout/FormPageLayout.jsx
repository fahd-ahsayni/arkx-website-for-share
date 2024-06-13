import Footer from "../global/Footer";
import Section from "../global/Section";

const FormPageLayout = ({src}) => {
  return (
    <div className="w-screen h-screen bg-black">
      <Section>
        <div className="w-full h-screen pt-20">
          <iframe
            className="-mt-[10rem]"
            aria-label="Hire talent"
            style={{ height: "100%", width: "100%", border: "none" }}
            src={src}
          ></iframe>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export default FormPageLayout;
