
interface ProjectProps {
  imgUrl:string,
  title:string,
  description:string,
  projectUrl:string,
  skills: string[]
}

const Project= ({ imgUrl, title, description, projectUrl, skills }:ProjectProps) => {
  return (
    <div className="w-full bg-[#3d3d3d] rounded-[8px] p-4 mb-4 flex flex-col sm:flex-row items-center">
      {/* Image */}
      <div className="flex justify-center items-center sm:w-[180px] md:w-[260px] h-[180px] md:h-[220px] mb-4 sm:mb-0 sm:mr-4">
        <img
          src={imgUrl}
          alt="project image"
          className="w-full h-full object-cover object-center rounded-[8px]"
        />
      </div>

      {/* Text content */}
      <div className="flex flex-col justify-start flex-1">
        <h1 className="text-lg md:text-2xl text-lime-400 underline mb-2">
          <a href={projectUrl} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h1>
        <p className="text-md md:text-[17px] text-white mb-2">{description}</p>
        
        {/* Skills */}
        <div className="flex flex-wrap">
          {skills.map((skill:string, index:number) => (
            <span
              key={index}
              className="bg-[#1f1f1f] text-white text-xs md:text-sm px-3 py-1 rounded-full mr-2 mb-2"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;