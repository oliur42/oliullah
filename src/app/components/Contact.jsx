import React from "react";

function Contact() {
  return (
    <div id="talal" className="bg-gray-900 py-10">
      <div className="max-w-[1080px] mx-auto text-white px-4">
        <h1 className="text-center text-[28px] font-bold py-3">Contact Me</h1>

        <div className="flex justify-center">
          <div className="bg-gray-800 py-10 px-6 sm:px-10 w-full max-w-[700px] rounded-[10px]">
            <form className="flex flex-col gap-6">
              {/* Name Input */}
              <div>
                <label className="font-bold block mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Write Your Name"
                  className="w-full px-4 py-2 border-2 border-green-600 rounded-[10px] outline-none bg-gray-500 text-white"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="font-bold block mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Write Your Email"
                  className="w-full px-4 py-2 border-2 border-green-600 rounded-[10px] outline-none bg-gray-500 text-white"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label className="font-bold block mb-1">Message</label>
                <textarea
                  placeholder="Write Your Message"
                  className="w-full h-[180px] px-4 py-2 border-2 border-green-600 rounded-[10px] outline-none bg-gray-500 text-white resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-3 text-white bg-green-900 font-bold rounded-[10px] hover:bg-green-600 transition duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
