import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from "react-tooltip";

// import { BallCanvas } from '../canvas';
import { Skill } from '../atoms/Skill';
import { SectionWrapper } from '../../hoc';
import { technologies } from '../../constants';
import { fadeIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';

const Tech = () => {
  const theme = 'dark';

  return (
    // <>
    //   <div className="flex flex-row flex-wrap justify-center gap-10">
    //     {technologies.map(technology => (
    //       <div className="h-28 w-28" key={technology.title}>
    //         {/* <BallCanvas icon={technology.icon} /> */}
    //       </div>
    //     ))}
    //   </div>
    // </>

    <>
      <Header useMotion={true} {...config.sections.about} />

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
        {config.sections.about.content}
      </motion.p>

      <article
        className={`h-auto rounded-2xl p-16 pt-32 grid grid-cols-5 gap-8 relative z-10 max-lg:w-full max-lg:grid-cols-2 max-lg:p-4 max-lg:pt-32 ${
          theme === 'dark' ? 'bg-[--blackblue] dark-mode-shadow' : 'bg-[--icewhite] dark-shadow'
        }`}
      >
        <div
          className={`absolute top-10 left-1/2 transform -translate-x-1/2 px-4 py-2  rounded-t-xl `}
        >
          <p className="font-semibold	text-3xl">
            <span className="text-[--orange]">&lt;</span>
            Web Development
            <span className="text-[--orange]">/&gt;</span>
          </p>
        </div>
        {technologies.map(technology => (
          <Skill skill={technology} />
        ))}
      </article>

      <ReactTooltip
        place="top"
        id="my-tooltip"
        style={{
          fontSize: '1.5rem',
          zIndex: 10,
          backgroundColor: 'var(--orange)',
        }}
      />
    </>
  );
};

export default SectionWrapper(Tech, 'tech');
