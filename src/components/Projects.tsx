
import Project from './Project'
import MyRestaurant from '../assets/MyRestaurant.jpg'
import MyEcommerce from '../assets/ecommerce.jpg'
import MyFinance from "../assets/finance.jpg"
import MyShop from "../assets/construction.jpg"
const Projects = () => {
   const restaurantUrl = "https://restaurant-landing-page-9232.vercel.app"
   const ecommerceUrl = "https://ecommerce-lvbfycsbe-emanuelo06s-projects.vercel.app"
   const financeUrl =  "https://finance-tracker-l5a0st4bg-emanuelo06s-projects.vercel.app"
   const shopUrl = "https://magazin-r2nr.vercel.app"
   const restaurantDescription ="This is a landing page for a restaurant, it showcases some of the dishes, the chef, and some reviews"
   const ecommerceDescription = "A clean and responsive e-commerce website built with React and TypeScript. It features a shopping cart, sample product listings, a contact form, and an about page—ideal for showcasing a simple online store concept.";
   const financeDescription = "A simple and intuitive finance tracker with dashboard, transactions, and budgets pages. Track your expenses, set budgets, and visualize your financial data with interactive graphs and filters."
   const shopDescription = "A simple construction landing page built with React and TypeScript. First freelance Project, it showcases some of the materials and has a contact form for inquiries.";
    const restaurantSkills = ["React.js","TypeScript", "JavaScript", "Tailwind", "Html", "Css"];
    const ecommerceSkills = ["React.js", "TypeScript", "JavaScript", "Tailwind", "Html", "Css"];
    const financeSkills = ["Next.js", "TypeScript", "Tailwind", "Redux.js", "Firebase", "Firestore", "Firebase Auth", "Recharts.js"]
    const shopSkills = ["React.js", "TypeScript", "JavaScript", "Tailwind", "Html", "Css"];
  return (
   <div className='bg-[#1f1f1f]  w-full h-fit relative z-10 mt-4 rounded-[8px] p-5' id='projects'>
      <h1 className='text-sm md:text-[18px] font-[600] text-white mb-2'>//PROJECTS</h1>
         <Project imgUrl={MyFinance} title="Finance Tracker" description={financeDescription} projectUrl={financeUrl} skills={financeSkills}/>
         <Project imgUrl={MyShop} title="Construction Landing-Page" description={shopDescription} projectUrl={shopUrl} skills={shopSkills}/>
         <Project imgUrl={MyEcommerce} title="E-commerce Website" description={ecommerceDescription} projectUrl={ecommerceUrl} skills={ecommerceSkills}/>
         <Project imgUrl={MyRestaurant} title="Restaurant Landing-Page" description={restaurantDescription} projectUrl={restaurantUrl} skills={restaurantSkills}/>
   </div>
  )
}

export default Projects