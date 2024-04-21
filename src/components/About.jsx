import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({index, title, icon}) =>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-full shadow-card"
      >
        <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className="bg-tertiary py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt="service img" className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a passionate fullstack developer with solid
        experience in PHP, Python, and JavaScript. Throughout my career, I've
        had the privilege of working on a wide range of projects, from web
        applications to complex systems, always seeking innovative and efficient
        solutions. My expertise spans the use of industry-leading frameworks and
        technologies. On the server-side, I adeptly navigate Django and Laravel,
        leveraging their power and flexibility to build robust and scalable
        applications. In the front-end realm, I'm a React enthusiast and have
        worked with Node.js to develop end-to-end applications. Additionally, I
        have a deep understanding of tools like Tailwind CSS, enabling me to
        create modern and stylized interfaces with ease. I'm a firm believer in
        agile development and the adoption of industry best practices to ensure
        quality and efficiency in every project I undertake. I'm constantly
        seeking new challenges and opportunities for professional growth. I'm
        always eager to collaborate on exciting projects and contribute my
        expertise to achieve set goals. I look forward to bringing my passion
        and skills to your next project!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service,index)=>(
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
