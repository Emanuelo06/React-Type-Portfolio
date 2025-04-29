

const Navbar = () => {
  return (
    <div className="relative z-10 w-full flex justify-center md:justify-start md:fixed md:top-4 md:left-0 md:h-screen md:w-48 md:p-4">
      {/* Left Navbar */}
      <nav className="sticky top-4 self-start w-full md:w-full bg-[#1f1f1f] p-4 rounded-xl shadow-lg md:p-7">
        <ul className="flex justify-between md:block md:space-y-4">
          <li>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300 md:text-lg">About Me</a>
          </li>
          <li>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300 md:text-lg">Projects</a>
          </li>
          <li>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300 md:text-lg">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar