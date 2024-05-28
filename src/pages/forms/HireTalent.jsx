import React from "react";
import Section from "../../components/global/Section";
import Footer from "../../components/global/Footer";

const HireTalent = () => {
  return (
    <>
      <Section>
        <div className="w-full h-screen bg-black pt-20">
          <iframe
          className="-mt-[10rem]"
            aria-label="Hire talent"
            style={{ height: "100%", width: "100%", border: "none" }}
            src="https://forms.zohopublic.com/digital29/form/Hiretalent/formperma/IvZdiDYgOE_auqAdsrO1LtSyM_j3fFeBVRLGbc_Da9M"
          ></iframe>
        </div>
      </Section>
      <Footer />
    </>
  );
};

export default HireTalent;
