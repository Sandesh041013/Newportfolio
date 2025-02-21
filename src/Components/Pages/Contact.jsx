
// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { toast } from "react-toastify";
// import { ContactSchema } from "../Schema/ContactSchema";

// // Icons
// import { FiUser, FiMail, FiMessageSquare, FiMapPin, FiPhone } from "react-icons/fi";

// const Contact = () => {
//   const URL = "https://api.durlavparajuli.com.np/api/form/contact";

//   const postMessage = async (values) => {
//     try {
//       const response = await fetch(URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(values),
//       });
//       if (response.ok) {
//         toast.success("Message submitted successfully!");
//       } else {
//         toast.error("Failed to submit message.");
//       }
//     } catch (error) {
//       toast.error("Server error. Please try again later.");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="bg-black min-h-screen w-full lg:h-screen flex justify-center items-center">
//       {/* MAIN CONTACT SECTION */}
//       <section id="contact" className="flex flex-col items-center justify-center px-5 pt-4 pb-16 ">
//         {/* Title / Subtitle */}
//         <div className="text-center space-y-2 mb-8">
//           <h1 className="text-5xl md:text-5xl font-bold text-blue-600">CONTACT ME</h1>
//           <p className="text-lg md:text-2xl font-light text-white opacity-80 max-w-2xl mx-auto">
//             I would love to hear from you ! Feel free to reach out.
//           </p>
//         </div>

//         {/* WRAPPER for LEFT (Info) & RIGHT (Form) with fixed height/width */}
//         <div className="flex flex-col lg:flex-row items-center justify-center  max-w-6xl gap-14  lg:w-[1600px] ">
//         <div className="w-full lg:w-1/2 h-auto lg:h-[500px] bg-white bg-opacity-10  rounded-2xl shadow-2xl p-4 sm:p-8 flex flex-col">
//   <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex justify-center items-center lg:mt-6">
//     My Contact Information
//   </h2>
//   {/* Arrange the cards vertically */}
//   <div className="flex flex-col gap-4 flex-grow">
//     {/* Location Card */}
//     <div className="flex items-center w-full bg-gray-800 p-3 sm:p-4 rounded-xl shadow-md shadow-gray-700">
//       <div className="flex items-center justify-center bg-blue-500 rounded-full h-10 w-10 sm:h-12 sm:w-12 mr-3 flex-shrink-0 hover:bg-white text-white hover:text-blue-400">
//         <FiMapPin className=" text-lg sm:text-xl" />
//       </div>
//       <div>
//         <h1 className="text-base sm:text-xl font-semibold text-white">Location</h1>
//         <p className="text-sm sm:text-lg text-gray-300">Palpa, Nepal</p>
//       </div>
//     </div>
//     {/* Email Card */}
//     <div className="flex items-center w-full bg-gray-800 p-3 sm:p-4 rounded-xl shadow-md shadow-gray-700">
//       <div className="flex items-center justify-center bg-blue-500 rounded-full h-10 w-10 sm:h-12 sm:w-12 mr-3 flex-shrink-0  hover:bg-white text-white hover:text-blue-400">
//         <FiMail className=" text-lg sm:text-xl" />
//       </div>
//       <div>
//         <h1 className="text-base sm:text-xl font-semibold text-white">Email</h1>
//         <p className="text-sm sm:text-lg text-gray-300">sandeshacharya2003@gmail.com</p>
//       </div>
//     </div>
//     {/* Phone Card */}
//     <div className="flex items-center w-full bg-gray-800 p-3 sm:p-4 rounded-xl shadow-md shadow-gray-700">
//       <div className="flex items-center justify-center bg-blue-500 rounded-full h-10 w-10 sm:h-12 sm:w-12 mr-3 flex-shrink-0  hover:bg-white text-white hover:text-blue-400">
//         <FiPhone className=" text-lg sm:text-xl" />
//       </div>
//       <div>
//         <h1 className="text-base sm:text-xl font-semibold text-white">Phone</h1>
//         <p className="text-sm sm:text-lg text-gray-300">+977-9843707440</p>
//       </div>
//     </div>
//   </div>
// </div>

//           {/* RIGHT BOX: Contact Form */}
//           <div className="w-full lg:w-1/2 h-auto lg:h-[500px] bg-white bg-opacity-10  rounded-2xl shadow-2xl p-8 flex flex-col justify-center">
//             <Formik
//               initialValues={{ name: "", email: "", message: "" }}
//               validationSchema={ContactSchema}
//               onSubmit={(values, { resetForm }) => {
//                 postMessage(values);
//                 resetForm();
//               }}
//             >
//               {() => (
//                 <Form>
//                   <div className="space-y-6">
//                     {/* Name Input */}
//                     <div className="relative">
//                       <FiUser className="absolute left-4 top-4 text-blue-400 text-xl" />
//                       <Field
//                         name="name"
//                         type="text"
//                         placeholder="Your Name"
//                         className="w-full h-12 pl-12 pr-4 rounded-md text-white text-lg bg-transparent border border-white/30 outline-none focus:border-blue-400 transition"
//                       />
//                       <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
//                     </div>

//                     {/* Email Input */}
//                     <div className="relative">
//                       <FiMail className="absolute left-4 top-4 text-blue-400 text-xl" />
//                       <Field
//                         name="email"
//                         type="email"
//                         placeholder="Your Email"
//                         className="w-full h-12 pl-12 pr-4 rounded-md text-white text-lg bg-transparent border border-white/30 outline-none focus:border-blue-400 transition"
//                       />
//                       <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
//                     </div>

//                     {/* Message Input */}
//                     <div className="relative">
//                       <FiMessageSquare className="absolute left-4 top-4 text-blue-400 text-xl" />
//                       <Field
//                         as="textarea"
//                         name="message"
//                         placeholder="Your Message"
//                         rows="4"
//                         className="w-full p-4 pl-12 rounded-md text-white text-lg bg-transparent border border-white/30 outline-none focus:border-blue-400 transition"
//                       />
//                       <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
//                     </div>

//                     {/* Submit Button */}
//                     <div className="flex justify-center">
//                       <button
//                         type="submit"
//                         className="w-full py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:scale-105 transition-transform duration-200 hover:bg-blue-600"
//                       >
//                         Send Message
//                       </button>
//                     </div>
//                   </div>
//                 </Form>
//               )}
//             </Formik>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import { ContactSchema } from "../Schema/ContactSchema";

// Icons
import { FiUser, FiMail, FiMessageSquare, FiMapPin, FiPhone } from "react-icons/fi";

const Contact = () => {
  // Updated Getform endpoint URL
  const URL = "https://getform.io/f/bkkyydwb";

  const postMessage = async (values) => {
    // Prepare FormData for Getform submission
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("message", values.message);

    try {
      const response = await fetch(URL, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Message submitted successfully!");
      } else {
        toast.error("Failed to submit message.");
      }
    } catch (error) {
      toast.error("Server error. Please try again later.");
      console.error(error);
    }
  };

  return (
    <div className="bg-black min-h-screen w-full lg:h-screen flex justify-center items-center">
      {/* MAIN CONTACT SECTION */}
      <section id="contact" className="flex flex-col items-center justify-center px-5 pt-4 pb-16 ">
        {/* Title / Subtitle */}
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-5xl md:text-5xl font-bold text-blue-600">CONTACT ME</h1>
          <p className="text-lg md:text-2xl font-light text-white opacity-80 max-w-2xl mx-auto">
            I would love to hear from you! Feel free to reach out.
          </p>
        </div>

        {/* WRAPPER for LEFT (Info) & RIGHT (Form) */}
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl gap-14 lg:w-[1600px] ">
          <div className="w-full lg:w-1/2 h-auto lg:h-[500px] bg-white bg-opacity-10 rounded-2xl shadow-2xl p-4 sm:p-8 flex flex-col">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex justify-center items-center lg:mt-6">
              My Contact Information
            </h2>
            {/* Arrange the cards vertically */}
            <div className="flex flex-col gap-4 flex-grow">
              {/* Location Card */}
              <div className="flex items-center w-full bg-gray-800 p-3 sm:p-4 rounded-xl shadow-md shadow-gray-700">
                <div className="flex items-center justify-center bg-blue-500 rounded-full h-10 w-10 sm:h-12 sm:w-12 mr-3 flex-shrink-0 hover:bg-white text-white hover:text-blue-400">
                  <FiMapPin className="text-lg sm:text-xl" />
                </div>
                <div>
                  <h1 className="text-base sm:text-xl font-semibold text-white">Location</h1>
                  <p className="text-sm sm:text-lg text-gray-300">Palpa, Nepal</p>
                </div>
              </div>
              {/* Email Card */}
              <div className="flex items-center w-full bg-gray-800 p-3 sm:p-4 rounded-xl shadow-md shadow-gray-700">
                <div className="flex items-center justify-center bg-blue-500 rounded-full h-10 w-10 sm:h-12 sm:w-12 mr-3 flex-shrink-0 hover:bg-white text-white hover:text-blue-400">
                  <FiMail className="text-lg sm:text-xl" />
                </div>
                <div>
                  <h1 className="text-base sm:text-xl font-semibold text-white">Email</h1>
                  <p className="text-sm sm:text-lg text-gray-300">sandeshacharya2003@gmail.com</p>
                </div>
              </div>
              {/* Phone Card */}
              <div className="flex items-center w-full bg-gray-800 p-3 sm:p-4 rounded-xl shadow-md shadow-gray-700">
                <div className="flex items-center justify-center bg-blue-500 rounded-full h-10 w-10 sm:h-12 sm:w-12 mr-3 flex-shrink-0 hover:bg-white text-white hover:text-blue-400">
                  <FiPhone className="text-lg sm:text-xl" />
                </div>
                <div>
                  <h1 className="text-base sm:text-xl font-semibold text-white">Phone</h1>
                  <p className="text-sm sm:text-lg text-gray-300">+977-9843707440</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT BOX: Contact Form */}
          <div className="w-full lg:w-1/2 h-auto lg:h-[500px] bg-white bg-opacity-10 rounded-2xl shadow-2xl p-8 flex flex-col justify-center">
            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validationSchema={ContactSchema}
              onSubmit={(values, { resetForm }) => {
                postMessage(values);
                resetForm();
              }}
            >
              {() => (
                <Form>
                  <div className="space-y-6">
                    {/* Name Input */}
                    <div className="relative">
                      <FiUser className="absolute left-4 top-4 text-blue-400 text-xl" />
                      <Field
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        className="w-full h-12 pl-12 pr-4 rounded-md text-white text-lg bg-transparent border border-white/30 outline-none focus:border-blue-400 transition"
                      />
                      <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                      <FiMail className="absolute left-4 top-4 text-blue-400 text-xl" />
                      <Field
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        className="w-full h-12 pl-12 pr-4 rounded-md text-white text-lg bg-transparent border border-white/30 outline-none focus:border-blue-400 transition"
                      />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                    </div>

                    {/* Message Input */}
                    <div className="relative">
                      <FiMessageSquare className="absolute left-4 top-4 text-blue-400 text-xl" />
                      <Field
                        as="textarea"
                        name="message"
                        placeholder="Your Message"
                        rows="4"
                        className="w-full p-4 pl-12 rounded-md text-white text-lg bg-transparent border border-white/30 outline-none focus:border-blue-400 transition"
                      />
                      <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="w-full py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:scale-105 transition-transform duration-200 hover:bg-blue-600"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
