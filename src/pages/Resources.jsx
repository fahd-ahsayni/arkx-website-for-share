import Heading from "../components/elements/Heading";
import Section from "../components/global/Section";
import Footer from "../components/global/Footer";
import { blogs } from "../components/pages/resources/data";
import BlogCard from "../components/pages/resources/BlogCard";

const Resources = () => {
  return (
    <>
      <Section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
        <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col">
          <Heading
            title="All Resources"
            text="Explore a collection of events, webinars, blogs, whitepapers, case studies, videos, and press releases overing various topics within the tech industry."
          />
          <div className="mt-[50px] flex flex-col gap-[30px] space-y-4">
            {blogs.map((item, index) => (
              <BlogCard key={`insight-${index}`} {...item} />
            ))}
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
};

export default Resources;
