import allData from "../../data/data";
import SectionTitle from "../SectionTitle/SectionTitle";

const WorkExperience = () => {
   return (
      <>
         <div className="max-w-4xl mx-auto">
            <SectionTitle serial="01" title="Work Experience" />
            <div className="max-w-3xl mx-auto">
               <div className="mb-6 max-w-4xl mx-auto  p-4  rounded-sm ">
                  {allData.workExperiences.map((work, index) => (
                     <div className="md:flex pb-4">
                        <span className="mr-24 text-primary text-sm font-normal capitalize min-w-[100px]   hover:text-primary transition-colors duration-300 ">
                           {work.companyName}
                        </span>
                        <div className="div">
                           <h1 className="text-primary font-display text-sm pb-1 uppercase  ">
                              {work.title}
                           </h1>
                           <h2 className="text-accent font-display text-sm pb-1">
                              <a className="text-primary" href={work.companyUrl} target="_blank">&#127760; {work.companyUrl}</a>
                           </h2>
                           <h3 className=" font-display text-xs font-semibold text-primary pb-1">
                              {work.date}
                           </h3>
                           <p className="text-neutral font-display  text-sm font-medium ">
                              <span className="text-primary">&#x022B3; </span>
                              {work.description}
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </>
   );
};

export default WorkExperience;