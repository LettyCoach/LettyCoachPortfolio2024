import { Icon } from '@iconify/react';
import { Sidebar } from '../../components';

import { socialSection } from '../../constants';

const Social = () => {
  const { socialLinks } = socialSection;
  return (
    <Sidebar>
      <ul>
        {socialLinks.map(({ icon, url }) => (
          <li>
            <a
              href={url}
              target="_blank"
              className={`block text-sm p-2.5 hover:text-accent hover:-translate-y-1 focus:outline-none focus:text-accent focus:-translate-y-1 duration-200`}
            >
              <Icon icon={icon} width={24} height={24} />
            </a>
          </li>
        ))}
      </ul>
    </Sidebar>
  );
};

export default Social;
