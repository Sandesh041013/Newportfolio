import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast } from "react-toastify";
import { ContactSchema } from "../Schema/ContactSchema";
const Contact = () => {
  const URL = "https://api.durlavparajuli.com.np/api/form/contact";

  const postMessage = async (values) => {
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
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
    <div className="bg-black h-screen w-full p-5" id="contact">
      <div className="grid items-center text-center justify-center space-y-8 pt-2">
        <div>
        <p className="text-5xl font-bold max-w-full text-center text-blue-600">
          Contact Me <span className="text-red-500 text-4xl font-Londrina">.</span> <span className="text-yellow-500 text-4xl font-Londrina">.</span> <span className="text-green-700 text-4xl font-Londrina">.</span>
        </p>
        <p className="max-w-2xl text-xl text-white font-light opacity-80">
          Let’s connect! If you have an exciting opportunity or simply want to discuss ideas, don’t hesitate to get in touch.
        </p>
        </div>
      
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={ContactSchema}
        onSubmit={(values, { resetForm }) => {
          postMessage(values);
          resetForm();
        }}
      >
        {() => (
          <Form className="lg:w-[600px] w-[390px] lg:h-max-full rounded-lg grid p-5 lg:p-4 bg-[#111827]">
            <div className="grid p-5 lg:p-0 ">
              <div className="h-24  text-start">
                <label htmlFor="name" className="text-indigo-600 text-xl space-y-2">Full name:</label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-12 p-4 rounded-md text-xl outline hover:outline-green-400 outline-2 bg-slate-200"
                />
                <ErrorMessage name="name" component="div" className="text-red-600 text-sm" />
              </div>

              <div className="h-24 text-start">
                <label htmlFor="email" className="block text-indigo-600 text-xl">Email:</label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  className="w-full h-12 p-4 rounded-md text-xl outline hover:outline-green-400 outline-2 bg-slate-200"
                />
                <ErrorMessage name="email" component="div" className="text-red-600 text-sm" />
              </div>

              <div className=" text-start">
                <label htmlFor="message" className="block text-indigo-500 text-xl">Message:</label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows="4"
                  className="w-full p-4 rounded-md text-xl outline hover:outline-green-400 outline-2 bg-slate-200"
                />
                <ErrorMessage name="message" component="div" className="text-red-600 text-sm" />
              </div>

              <div className="flex items-center justify-center p-10 lg:p-4">
                <button
                  type="submit"
                  className="bg-indigo-600 py-3 px-14 text-white hover:scale-105 transition-transform bg-gradient-to-l from-blue-600 to-cyan-500 hover:bg-gradient-to-r from-blue-600 to-cyan-500 duration-75 rounded-lg text-xl font-semibold"
                >
                  Submit
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      </div>
    </div>
  );
};

export default Contact;
