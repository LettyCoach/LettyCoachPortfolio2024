import { Tooltip as ReactTooltip } from 'react-tooltip';

import { Skill } from '../atoms/Skill';
import { SectionWrapper } from '../../hoc';
import { technologies } from '../../constants';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';

const Tech = () => {
  const theme = 'dark';

  return (
    <>
      <Header useMotion={true} {...config.sections.tech} />

      <div className="mt-20">
        <article
          className={`h-auto rounded-2xl p-16 pt-32 grid grid-cols-5 gap-8 relative z-10 max-lg:w-full max-lg:grid-cols-2 max-lg:p-4 max-lg:pt-32 ${
            theme === 'dark' ? 'bg-[--blackblue] dark-mode-shadow' : 'bg-[--icewhite] dark-shadow'
          }`}
        >
          <div
            className={`absolute top-10 left-1/2 transform -translate-x-1/2 px-4 py-2  rounded-t-xl `}
          >
            <p className="font-semibold	text-2xl break-normal">
              <span className="text-[--orange]">&lt;</span>
              WebDevelopment
              <span className="text-[--orange]">/&gt;</span>
            </p>
          </div>
          {technologies.map(technology => (
            <Skill skill={technology} />
          ))}
        </article>
      </div>

      <div className="mt-20">
        <article
          className={`h-auto rounded-2xl p-16 pt-32 grid grid-cols-5 gap-8 relative z-10 max-lg:w-full max-lg:grid-cols-2 max-lg:p-4 max-lg:pt-32 ${
            theme === 'dark' ? 'bg-[--blackblue] dark-mode-shadow' : 'bg-[--icewhite] dark-shadow'
          }`}
        >
          <div
            className={`absolute top-10 left-1/2 transform -translate-x-1/2 px-4 py-2  rounded-t-xl `}
          >
            <p className="font-semibold	text-2xl break-normal">
              <span className="text-[--orange]">&lt;</span>
              Blockchain
              <span className="text-[--orange]">/&gt;</span>
            </p>
          </div>
          {technologies.map(technology => (
            <Skill skill={technology} />
          ))}
        </article>
      </div>
      
      <div className="mt-20">
        <article
          className={`h-auto rounded-2xl p-16 pt-32 grid grid-cols-5 gap-8 relative z-10 max-lg:w-full max-lg:grid-cols-2 max-lg:p-4 max-lg:pt-32 ${
            theme === 'dark' ? 'bg-[--blackblue] dark-mode-shadow' : 'bg-[--icewhite] dark-shadow'
          }`}
        >
          <div
            className={`absolute top-10 left-1/2 transform -translate-x-1/2 px-4 py-2  rounded-t-xl `}
          >
            <p className="font-semibold	text-2xl break-normal">
              <span className="text-[--orange]">&lt;</span>
              Infrastructure
              <span className="text-[--orange]">/&gt;</span>
            </p>
          </div>
          {technologies.map(technology => (
            <Skill skill={technology} />
          ))}
        </article>
      </div>

      <ReactTooltip
        place="top"
        id="my-tooltip"
        style={{
          fontSize: '1rem',
          zIndex: 10,
          backgroundColor: 'var(--orange)',
        }}
      />
    </>
  );
};

export default SectionWrapper(Tech, 'tech');
