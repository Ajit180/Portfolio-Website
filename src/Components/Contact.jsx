import { FaEnvelope, FaMapMarked, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { motion } from "motion/react";
import { fadein } from "../varients";


const Contact = () => {
  return (
    <motion.div className="py-5" id="Contact"
        variants={fadein("up",0.2)}
     initial="hidden"
     whileInView={"show"}
     viewport={{once:false , amount:0.7}}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
         
          <div className="flex-1">
               <h3 >Let's Talk</h3>
               <p>Feel free to reach out if you have any questions, collaboration ideas, or just want to say hello!</p>
               <div className="mb-4 mt-8">
                   <FaEnvelope className="inline-block text-green-400 mr-2"></FaEnvelope>
                   <a href="yajit1908@gmail.com" className="hover:underline">
                    yajit1908@gmail.com
                   </a>
               </div>
               <div className="mb-4">
                   <FaPhone className="inline-block text-green-400 mr-2"></FaPhone>
                   <span>+91 7262990723</span>
               </div>
               <div className="mb-4">
                   <FaMapMarkedAlt className="inline-block text-green-400 mr-2"></FaMapMarkedAlt>
                   <span>Nashik , Maharashtra , India</span>
               </div>
          </div>
          <div className="flex-1 w-full ">
             <form className="space-y-4" action="https://formspree.io/f/mnnblnky" method="post">
                <div>
                  <label htmlFor="name" className="block mb-2">Your Name</label>
                  <input type="text" 
                   name="name"
                   className="w-full p-2 rounded bg-gray-800 border border-gray-600 
                   focus:outline-none focus:border-green-400"
                   placeholder="Enter Your Name"
                   required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">Your Email</label>
                  <input type="text" 
                   name="email"
                   className="w-full p-2 rounded bg-gray-800 border border-gray-600 
                   focus:outline-none focus:border-green-400"
                   placeholder="Enter Your Email"
                   required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <textarea type="text" 
                  name="message"
                   className="w-full p-2 rounded bg-gray-800 border border-gray-600 
                   focus:outline-none focus:border-green-400"
                   rows={5}
                   placeholder="Enter Your Message"
                   required
                  />
                </div>
                <div>
                         <button
                          type="submit"
                          className='bg-gradient-to-r from-green-400 to-blue-500  md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full' >Send</button>
                </div>
               
                
             </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
