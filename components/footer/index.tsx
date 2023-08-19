import { Link } from '@nextui-org/link';
import { FC } from 'react';

type Props = {};

const Footer: FC<Props> = ({}) => {
  return (
    <footer className='w-full flex items-center justify-center py-3'>
      <Link
        isExternal
        className='flex items-center gap-1 text-current'
        href='https://nextui-docs-v2.vercel.app?utm_source=next-app-template'
        title='nextui.org homepage'
      >
        <span className='text-default-600'>Powered by</span>
        <p className='text-primary'>NextUI</p>
      </Link>
    </footer>
  );
};

export default Footer;
