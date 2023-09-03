const Contact = () => {

    function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        //Maybe some way of sending data to the email or a backend.
        // console.log(formData);
        window.alert("Message has been sent!")
        e.currentTarget.reset();

    }

  return (
    <div className="w-full h-auto lg:pl-[150px] lg:pr-[150px] px-12 py-8">
      <h3 className="text-center text-5xl font-semibold font-['Noto'] mb-12">Contact Us</h3>
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2">
          <article>
            <span className="font-semibold">Mobile No:</span> <a href="tel:8064417584">+234 806 441 7586</a>
          </article>
          <article>
            <span className="font-semibold">Email:</span> <a href="erobagacollins@gmail.com" target="_blank">erobagacollins@gmail.com</a>
          </article>
          <div className="py-4 w-full">{/*form container */}
            <h4 className="text-center text-3xl font-['Noto']">Send a message</h4>
            <form className="w-full" onSubmit={handleSubmit}>
              <label htmlFor="name" className=" font-semibold">Name:</label>
              <input 
              type="text" 
              id="name" 
              name="name"
              className="outline-none block border-gray-400 border-b md:w-[70%] w-[85%] mb-2" />
              <label htmlFor="email" className=" font-semibold">Email:</label>
              <input 
              type="email" 
              id="email" 
              name="email"
              className="outline-none block border-gray-400 border-b md:w-[70%] w-[85%] mb-2" />
              <label htmlFor="message" className=" font-semibold">Message:</label>
              <textarea 
              id="message" 
              name="message"
              className="outline-none block resize-none border-gray-400 border-b md:w-[70%] w-[85%] mb-4"></textarea>
              <button 
              className="bg-black text-white pt-2 pb-2 pl-4 pr-4 text-lg">Send</button>
            </form>
          </div>
        </div>{/*for the email, tel */}
        <div className="w-full md:w-1/2 flex justify-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15858.2546639132!2d3.4230332378017607!3d6.450021068675701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4c4c84b52bb%3A0x5faec50ebdf1a1ea!2sIkoyi!5e0!3m2!1sen!2sng!4v1693727319574!5m2!1sen!2sng" width="400" height="300" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>{/*for the map */}
      </div>
    </div>
  )
}
export default Contact