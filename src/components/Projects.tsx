
import Project from './Project'
import MyPokemon from '../assets/pokemon.jpg'
import MyTodo from '../assets/todo.jpg'
import MyRestaurant from '../assets/MyRestaurant.jpg'
import MyEcommerce from '../assets/ecommerce.jpg'

const Projects = () => {
   const pokemonUrl:string = "https://emanuelo06.github.io/pokemon-finder/";
   const todoUrl:string = "https://react-todo-tan-five.vercel.app";
   const restaurantUrl:string = "https://restaurant-landing-page-9232.vercel.app"
   const ecommerceUrl:string = "https://ecommerce-lvbfycsbe-emanuelo06s-projects.vercel.app"
   const pokemonDescription:string = "This is a vanilla JavaScript project using API's";
   const todoDescription:string = "This is a simple React project, it uses prop lifting and components";
   const restaurantDescription:string ="This is a landing page for a restaurant, it showcases some of the dishes, the chef, and some reviews"
   const ecommerceDescription:string = "This is a simple e-commerce website, it uses React and TypeScript, it has a cart and some sample products, it also has a contact form and an about page";
    const pokemonSkills:string[] = ["JavaScript", "Bootstrap", "Html", "Css"]
    const todoSkills:string[] = ["React.js", "JavaScript", "Tailwind", "Html", "Css"];
    const restaurantSkills:string[] = ["React.js","TypeScript", "JavaScript", "Tailwind", "Html", "Css"];
    const ecommerceSkills:string[] = ["React.js", "TypeScript", "JavaScript", "Tailwind", "Html", "Css"];
  return (
   <div className='bg-[#1f1f1f]  w-full h-fit relative z-10 mt-4 rounded-[8px] p-5' id='projects'>
      <h1 className='text-sm md:text-[18px] font-[600] text-white mb-2'>//PROJECTS</h1>
         <Project imgUrl={MyEcommerce} title="E-commerce Website" description={ecommerceDescription} projectUrl={ecommerceUrl} skills={ecommerceSkills}/>
         <Project imgUrl={MyRestaurant} title="Restaurant Landing-Page" description={restaurantDescription} projectUrl={restaurantUrl} skills={restaurantSkills}/>
         <Project imgUrl={MyPokemon} title="Pokemon Finder" description={pokemonDescription} projectUrl={pokemonUrl} skills={pokemonSkills}/>
         <Project imgUrl={MyTodo} title="Todo List" description={todoDescription} projectUrl={todoUrl} skills={todoSkills}/>
   </div>
  )
}

export default Projects