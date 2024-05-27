import Heading from "../../../elements/Heading";
import Footer from "../../../global/Footer";
import Section from "../../../global/Section";


export default function Blog3() {
  return (
    <>
      <Section>
        <div className="relative overflow-hidden py-16">
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-prose text-lg">
              <span>
                <span className="block text-center text-lg text-color-9">
                  Introducing
                </span>
                <Heading
                  title="JavaScript for Beginners"
                  className="text-center"
                />
              </span>
              <p className="mt-8 body-1 text-n-2">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                id at vitae feugiat egestas ac. Diam nulla orci at in viverra
                scelerisque eget. Eleifend egestas fringilla sapien.
              </p>
            </div>
            <div className="prose body-2 prose-lg prose-indigo mx-auto mt-6">
              <p className=" text-n-2">
                Faucibus commodo massa rhoncus, volutpat.{" "}
                <strong className="text-n-2">Dignissim</strong> sed{" "}
                <strong className="text-n-2">eget risus enim</strong>. Mattis
                mauris semper sed amet vitae sed turpis id. Id dolor praesent
                donec est. Odio penatibus risus viverra tellus varius sit neque
                erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim
                sed eget risus enim.{" "}
                <a className="text-color-8" href="#">
                  Mattis mauris semper
                </a>{" "}
                sed amet vitae sed turpis id.
              </p>
              <ul role="list" className="text-n-2">
                <li>Quis elit egestas venenatis mattis dignissim.</li>
                <li>
                  Cras cras lobortis vitae vivamus ultricies facilisis tempus.
                </li>
                <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
              </ul>
              <p className="text-n-2">
                Quis semper vulputate aliquam venenatis egestas sagittis quisque
                orci. Donec commodo sit viverra aliquam porttitor ultrices
                gravida eu. Tincidunt leo, elementum mattis elementum ut nisl,
                justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis.
                Amet, duis sed elit interdum dignissim.
              </p>
              <h2 className="text-gray-100">
                From beginner to expert in 30 days
              </h2>
              <p className="text-n-2">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
                vitae interdum mauris enim, consequat vulputate nibh. Maecenas
                pellentesque id sed tellus mauris, ultrices mauris. Tincidunt
                enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p>
              <blockquote>
                <p className="text-gray-200">
                  Sagittis scelerisque nulla cursus in enim consectetur quam.
                  Dictum urna sed consectetur neque tristique pellentesque.
                  Blandit amet, sed aenean erat arcu morbi.
                </p>
              </blockquote>
              <p className="text-n-2">
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit.
              </p>
              <figure>
                <img
                  className="w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                  alt=""
                  width={1310}
                  height={873}
                />
                <figcaption className="text-n-2">
                  Sagittis scelerisque nulla cursus in enim consectetur quam.
                </figcaption>
              </figure>
              <h2 className="text-gray-100">
                Everything you need to get up and running
              </h2>
              <p className="text-n-2">
                Purus morbi dignissim senectus mattis{" "}
                <a className="text-color-8" href="#">
                  adipiscing
                </a>
                . Amet, massa quam varius orci dapibus volutpat cras. In amet eu
                ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
                viverra ridiculus non molestie. Gravida quis fringilla amet eget
                dui tempor dignissim. Facilisis auctor venenatis varius nunc,
                congue erat ac. Cras fermentum convallis quam.
              </p>
              <p className="text-n-2">
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}
