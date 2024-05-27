import { companyLogos } from "../../constants";

const CompanyLogos = () => (
  <div className="">
    <div className="container m-auto px-6 space-y-4 md:px-12 lg:px-56">
      <div className="m-auto text-center lg:w-8/12">
        <h2 className="h3">Initiative soutenue par</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {companyLogos.map((img, index) => (
          <div key={index} className="p-2">
            <img src={img} className="" alt="" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default CompanyLogos;
