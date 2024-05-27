import Heading from "../../elements/Heading";
import Section from "../../global/Section";

const ContactUs = () => {
  return (
    <Section crosses>
      <div className="mx-auto -my-20 container px-6 lg:flex lg:items-center lg:px-12">
        <div className="lg:w-0 lg:flex-1">
          <Heading
            title="Contact Us"
            text="We'd love to hear from you! Whether you have questions or need more information, feel free to reach out."
          />
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form className="sm:flex">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email-address"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-md border border-transparent px-5 py-3 placeholder-neutral-300 bg-gradient-to-br from-neutral-950 to-neutral-900 sm:max-w-xs ring-1 ring-n-2/30"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-br from-color-9 to-[#ff8000] px-5 py-3 text-base font-medium text-white"
              >
                Notify me
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactUs;
