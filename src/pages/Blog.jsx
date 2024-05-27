import Heading from "../components/elements/Heading";
import Section from "../components/global/Section";
import Footer from "../components/global/Footer";
import { blogs } from "../components/blog/data";
import BlogCard from "../components/blog/BlogCard";

export default function Blog() {
  return (
    <>
      <Section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
        <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col">
          <Heading
            title="Insight about metaverse"
            text="Brainwave unlocks the potential of AI-powered applications"
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
}
