import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import { siteConfig } from '@/config/site';
import NextLink from 'next/link';
import { ThemeSwitch } from '@/components/theme-switch';
import { GithubIcon } from '@/components/icons';

import { Logo } from '@/components/icons';
import { FC } from 'react';

export const Navbar: FC = () => {
  return (
    <NextUINavbar maxWidth='full' position='sticky' className='px-6'>
      <NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
        <NavbarBrand as='li' className='gap-3 max-w-fit'>
          <NextLink className='flex justify-start items-center gap-1' href='/'>
            <Logo />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex basis-1/5 sm:basis-full' justify='end'>
        <NavbarItem className='hidden sm:flex gap-2'>
          <Link isExternal href={siteConfig.links.github} aria-label='Github'>
            <GithubIcon className='text-default-500' />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className='sm:hidden basis-1 pl-4' justify='end'>
        <Link isExternal href={siteConfig.links.github} aria-label='Github'>
          <GithubIcon className='text-default-500' />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className='mx-4 mt-2 flex flex-col gap-2'></div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
