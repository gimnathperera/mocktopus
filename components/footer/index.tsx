import { siteConfig } from '@/config/site';
import { Link } from '@nextui-org/link';
import { FC } from 'react';

type Props = {};

const Footer: FC<Props> = ({}) => {
  return (
    <footer className='w-full flex items-center justify-center py-3'>
      <Link
        isExternal
        className='flex items-center gap-1 text-current'
        href={siteConfig.links.github}
        title='nextui.org homepage'
      >
        <span className='text-default-600'>Made with 💖 by</span>
        <p className='text-primary'>Gimnath</p>
      </Link>
    </footer>
  );
};

export default Footer;
