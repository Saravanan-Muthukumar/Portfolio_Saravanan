import React from 'react'

const Contact = () => {

  const handleSubmit = (e) => {
    // allow Getform to receive the data
    setTimeout(() => {
      e.target.reset(); // clears all inputs
    }, 100);
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/b98dbe38-50bf-4613-8f45-e0b9665c07aa"
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full items-center"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Please submit the form or email me at msarvanm@gmail.com
          </p>
        </div>

        <input
          className="p-2 bg-[#ccd6f6] w-full"
          type="text"
          placeholder="Name"
          name="name"
          required
        />

        <input
          className="my-4 p-2 bg-[#ccd6f6] w-full"
          type="email"
          placeholder="Email"
          name="email"
          required
        />

        <textarea
          className="bg-[#ccd6f6] p-2 w-full"
          name="message"
          rows="10"
          placeholder="Message"
          required
        />

        <button
          type="submit"
          className="text-white border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-pink-600 hover:border-pink-600"
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
