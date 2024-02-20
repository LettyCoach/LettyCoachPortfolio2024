import { author } from '../../constants';

import { Sidebar } from '../../components';

const Email = () => {
  return (
    <Sidebar side="right">
      <a
        href={`mailto:${author.email}?Subject=I'd like to have a interview with you.`}
        target="_blank"
        className={`block text-sm p-2.5 hover:text-accent hover:-translate-y-1 focus:outline-none focus:text-accent focus:-translate-y-1 duration-200 [writing-mode:vertical-lr] font-mono tracking-widest text-base`}
      >
        {author.email}
      </a>
    </Sidebar>
  );
};

export default Email;
