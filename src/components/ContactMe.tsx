

const ContactMe = () => {
  return (
    <div className='bg-[#1f1f1f] text-white p-6 rounded-[12px] ml-0 max-w-[700px] pl-0 w-full mx-auto mt-6 shadow-lg'>
      <h2 className='text-3xl md:text-5xl font-bold mb-6 text-left'>Contact Me</h2>
      <form
        action="https://formspree.io/f/xldbdraa" 
        method="POST"
        className='flex flex-col gap-4'
      >
        <div className='flex flex-col'>
          <label htmlFor="name" className='mb-1 text-sm md:text-lg'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Your Name'
            required
            className='p-3 rounded bg-[#2e2e2e] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white'
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="email" className='mb-1 text-sm md:text-lg'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Your Email'
            required
            className='p-3 rounded bg-[#2e2e2e] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white'
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="message" className='mb-1 text-sm md:text-lg'>Message</label>
          <textarea
            name='message'
            id='message'
            placeholder='Your Message'
            rows={5}
            required
            className='p-3 rounded bg-[#2e2e2e] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white resize-none'
          />
        </div>

        <button
          type='submit'
          className='bg-white text-[#1f1f1f] font-semibold py-2 px-4 rounded hover:bg-gray-300 transition-all w-fit'
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactMe;