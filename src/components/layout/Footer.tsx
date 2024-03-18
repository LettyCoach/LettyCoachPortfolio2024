import { Icon } from '@iconify/react';
import { footerSection, socialSection } from '../../constants';

const Footer = () => {
  const visibleContactInfo = import.meta.env.VITE_VISIBLE_COTACT_INFO;
  const { socialLinks } = socialSection;
  return (
    <footer className="max-w-lg mx-auto mb-5 font-mono text-xs text-center">
      <ul className="flex justify-center gap-3 mb-3 md:hidden">
        {visibleContactInfo !== 'visible'
          ? null
          : socialLinks.map(({ icon, url }) => (
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
      <a
        href={footerSection.link}
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-accent"
      >
        {footerSection.title}
      </a>
    </footer>
  );
};

export default Footer;
