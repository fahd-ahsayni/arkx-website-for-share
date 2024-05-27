import { faqs } from "../../../constants";
import Heading from "../../elements/Heading";
import Section from "../../global/Section";

const Faqs = () => {
  return (
    <Section
      crosses
      crossesOffset="lg:translate-y-[.25rem]"
      customPaddings
      id="faq"
      className="relative md:py-20 md:px-28 px-4"
    >
      <div className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <Heading
            title="Frequently asked questions"
            text="If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you."
          />
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="body-1 text-gray-200 font-medium">
                      {faq.question}
                    </h3>
                    <p className="mt-4 body-2 text-n-2">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Faqs;
