import React from "react";
import Section from "../../components/global/Section";
import Footer from "../../components/global/Footer";

const ForFreelance = () => {
  return (
    <>
      <Section>
        <div className="w-full h-screen bg-black pt-20">
          <iframe
            className="-mt-[10rem]"
            aria-label="Hire talent"
            style={{ height: "100%", width: "100%", border: "none" }}
            src="'https://forms.zohopublic.com/digital29/form/Embarkwithus1/formperma/3KwCsZcf--_GkdLCBWMFxBA_6NHZs_8R_v0VTBUUFSo"
          ></iframe>
        </div>
      </Section>
      <Footer />
    </>
  );
};

export default ForFreelance;
