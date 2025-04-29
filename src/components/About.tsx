import myImage from "../assets/my-image.jpg";
import DownloadResume from "./DownloadResume";
const About = () => {
   return (
     <div className='bg-[#1f1f1f]  w-full relative z-10 mt-4 rounded-[8px] p-5' id="about">
       <img src={myImage} alt="Description" className="w-[150px] md:w-[200px] rounded-[400px]"/>
       <p className="text-sm md:text-[18px] font-[600] text-white mt-2">// ABOUT ME</p>
       <h1 className="text-3xl  md:text-5xl text-white font-bold">Front-End Developer</h1>
       <p className="text-gray-300 md:text-xl mt-2">Hi! I'm Emanuele, an 18-year-old front-end developer based in Spain. I focus on creating responsive, modern websites using React, JavaScript, HTML, CSS, and Tailwind CSS.</p>
        <p className="text-gray-300 md:text-xl mt-2">I’m currently looking for opportunities to gain experience, whether it’s through internships, freelance work, or junior roles. I’m excited to grow, contribute to real-world projects, and keep pushing myself to the next level.</p>
        <DownloadResume/>
     </div>
   );
 };
 export default About