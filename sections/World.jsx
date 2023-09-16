'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track Friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-full"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 sm:w-[70px] sm:h-[70px] w-[45px] h-[45px] p-[6px] rounded-full bg-[#5d6680] shadow-2xl shadow-blue-300 ">
          <img src="people-01.png" alt="people" className="w-full h-full " />
        </div>
        <div className="absolute top-10 left-20 sm:w-[70px] sm:h-[70px] w-[45px] h-[45px] p-[6px] rounded-full bg-[#5d6680] shadow-2xl shadow-blue-300">
          <img src="people-05.svg" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] sm:w-[70px] sm:h-[70px] w-[45px] h-[45px] p-[6px] rounded-full bg-[#5d6680] shadow-2xl shadow-blue-300">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-[10%] right-[30%] sm:w-[70px] sm:h-[70px] w-[45px] h-[45px] p-[6px] rounded-full bg-[#5d6680] shadow-2xl shadow-blue-300">
          <img src="people-04.svg" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute bottom-[25%] left-[15%] sm:w-[70px] sm:h-[70px] w-[45px] h-[45px] p-[6px] rounded-full bg-[#5d6680] shadow-2xl shadow-blue-300">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-[12%] left-[45%] sm:w-[70px] sm:h-[70px] w-[45px] h-[45px] p-[6px] rounded-full bg-[#5d6680] shadow-2xl shadow-blue-300">
          <img src="people-06.svg" alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
