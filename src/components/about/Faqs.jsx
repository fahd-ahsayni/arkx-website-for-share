import Heading from "../elements/Heading";
import Section from "../global/Section";

const faqs = [
  [
    {
      question: "Does TaxPal handle VAT?",
      answer:
        "Well no, but if you move your company offshore you can probably ignore it.",
    },
    {
      question: "Can I pay for my subscription via purchase order?",
      answer: "Absolutely, we are happy to take your money in all forms.",
    }
  ],
  [
    {
      question: "What was that testimonial about tax fraud all about?",
      answer:
        "TaxPal is just a software application, ultimately your books are your responsibility.",
    },
    {
      question:
        "TaxPal sounds horrible but why do I still feel compelled to purchase?",
      answer:
        "This is the power of excellent visual design. You just can’t resist it, no matter how poorly it actually functions.",
    }
  ],
  [
    {
      question: "How do you generate reports?",
      answer:
        "You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.",
    },
    {
      question: "Can we expect more inventory features?",
      answer: "In life it’s really better to never expect anything at all.",
    }
  ],
];

export function Faqs() {
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
}
