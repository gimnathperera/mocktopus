import { GithubIcon } from '@/components/icons';
import { ThemeSwitch } from '@/components/theme-switch';
import { siteConfig } from '@/config/site';
import { Link } from '@nextui-org/link';
import { NavbarBrand, NavbarContent, NavbarItem, Navbar as NextUINavbar } from '@nextui-org/navbar';
import Image from 'next/image';
import NextLink from 'next/link';
import { FC } from 'react';
import logo from '../../public/logo.png';

export const Navbar: FC = () => {
  return (
    <NextUINavbar maxWidth='full' position='sticky'>
      <NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
        <NavbarBrand as='li' className='gap-3 max-w-fit'>
          <NextLink className='flex justify-start items-center gap-1 font-bold text-xl' href='/'>
            <Image src={logo} alt='logo' width={24} height={24} />
            Mocktopus
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex basis-1/5 sm:basis-full' justify='end'>
        <NavbarItem className='hidden sm:flex gap-2'>
          <Link isExternal href={siteConfig.links.repository} aria-label='Github'>
            <GithubIcon className='text-default-500' />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className='sm:hidden basis-1 pl-4' justify='end'>
        <Link isExternal href={siteConfig.links.repository} aria-label='Github'>
          <GithubIcon className='text-default-500' />
        </Link>
        <ThemeSwitch />
      </NavbarContent>
    </NextUINavbar>
  );
};
