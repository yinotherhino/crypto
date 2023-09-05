import React from "react";
import { COMPANY_NAME } from "../constants";

const About = () => {
   return (
      <div className="py-[3rem] px-[4rem] text-white text-justify bg-[#102C57]">
         <h1 className="text-2xl text-white font-roboto font-bold text-center mb-[2rem]">About {COMPANY_NAME}</h1>
         <p>
            At {COMPANY_NAME}, we believe in the transformative power of cryptocurrencies and their
            potential to revolutionize the world of finance. Established with the vision of empowering individuals to
            take control of their financial futures, we are dedicated to providing a secure, user-friendly platform that
            opens the doors to the dynamic realm of crypto investments.
         </p>
         <h3 className="text-xl font-roboto my-[1.2rem]">Our Mission</h3>
         <p>
            Our mission is to democratize access to cryptocurrency investments and provide a comprehensive platform that
            caters to both newcomers and experienced investors. We strive to bridge the gap between traditional
            financial systems and the innovative world of blockchain technology, making the process of investing in
            cryptocurrencies simple, secure, and rewarding.
         </p>

         <h3 className="text-xl font-roboto my-[1.2rem]">Experienced Insights, Informed Decisions</h3>
         <p>
            Backed by a team of seasoned crypto enthusiasts and market analysts, we offer a wealth of insights and
            expert perspectives to guide your investment journey. We understand that the world of cryptocurrencies can
            be complex and ever-changing, which is why we are committed to offering accurate, up-to-date information
            that empowers you to make informed decisions.
         </p>
         <h3 className="text-xl font-roboto my-[1.2rem]">Security First</h3>
         <p>
            Security is at the core of everything we do. We employ state-of-the-art security measures to safeguard your
            investments and personal information. Our commitment to protecting your assets is unwavering, and we
            continuously update our security protocols to stay ahead of potential threats.
         </p>
         <h3 className="text-xl font-roboto my-[1.2rem]">Education and Empowerment</h3>
         <p>
            We believe that knowledge is key to successful investing. Our platform is not just a place to invest; it's a
            space for learning and growth. Explore our library of educational resources, from beginner's guides to
            advanced trading strategies, designed to empower you with the knowledge needed to navigate the crypto
            landscape with confidence.
         </p>
         <h3 className="text-xl font-roboto my-[1.2rem]">Join Us in Shaping the Future</h3>
         <p>
            By choosing {COMPANY_NAME}, you're not just choosing an investment platform – you're
            becoming a part of a movement that's shaping the future of finance. We invite you to embark on this journey
            with us, explore the limitless potential of cryptocurrencies, and seize the opportunities that lie ahead.
         </p>
         <h3 className="text-xl font-roboto my-[1.2rem]">Please Note</h3>
         <p>
            While we strive to provide the best information and tools, cryptocurrency investments inherently carry
            risks. It's important to conduct your own research and consider your risk tolerance before investing. 
            {COMPANY_NAME} provides a platform for exploration and investment, but we cannot
            guarantee profits. Your financial well-being is our priority, and we encourage responsible and informed
            investing at all times.
         </p>
      </div>
   );
};

export default About;
