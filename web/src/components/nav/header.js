import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Headroom from 'react-headroom';
import cx from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';
import { useSiteConfig } from '@querys/useSiteConfig';
import SwitchLink from '@components/links/switchLink';
import Logo from '@images/logo.png';
import LogoRed from '@images/logo-red.png';
import Arrow from '@svg/arrow.svg';
import { NavToggle } from './navToggle';
import { NavModal } from './navModal';

export const Header = ({ reverseHeader, toggleForm, toggleQuizOpen }) => {
  const [isPinned, setIsPinned] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleNav = () => setNavOpen((prev) => !prev);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const { header } = useSiteConfig();

  // close nav dropdown on scroll
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setDropdownOpen(false);
    });
  }, []);

  return (
    <>
      <Headroom
        style={{ zIndex: '50' }}
        onPin={() => setIsPinned(true)}
        onUnpin={() => setIsPinned(false)}
        onUnfix={() => setIsPinned(false)}
      >
        <div
          className={cx(
            'py-6 px-gutter xl:pl-16 xl:pr-20 flex justify-between items-center transition-all ease-in-out duration-300',
            {
              'bg-white': isPinned && !navOpen,
            }
          )}
        >
          {navOpen ? (
            <img
              className='max-w-[100px] xl:max-w-[175px] w-full'
              alt='Logo'
              src={Logo}
            />
          ) : (
            <div>
              <Link to='/'>
                {!reverseHeader || isPinned ? (
                  <img
                    className='max-w-[100px] xl:max-w-[175px] w-full'
                    src={LogoRed}
                    alt='Logo'
                  />
                ) : (
                  <img
                    className='max-w-[100px] xl:max-w-[175px] w-full'
                    src={Logo}
                    alt='Logo'
                  />
                )}
              </Link>
            </div>
          )}
          <div
            className={cx(
              'hidden xl:flex flex-col h-full gap-y-7  blockH7 transition-all ease-in-out duration-300',
              {
                'text-red': !reverseHeader || isPinned,
                'text-white': !isPinned && reverseHeader,
              }
            )}
          >
            <AnchorLink
              to='/#info-form-block'
              className={cx(
                'transition-all ease-in-out duration-300 w-fit self-end',
                {
                  'btn-red-blue': isPinned,
                  'btn-white': !isPinned,
                }
              )}
            >
              Order a free info pack
            </AnchorLink>
            <div className='flex gap-x-9 2xl:gap-x-16'>
              {header?.mainMenu?.map((link, i) => (
                <SwitchLink key={i} {...link} />
              ))}
              <div className='relative'>
                <div
                  className='flex gap-x-2 items-center cursor-pointer'
                  onClick={toggleDropdown}
                >
                  <p>{header?.dropdownMenuTitle}</p>
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: dropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Arrow className='w-4 h-4 rotate-90' />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: 1, y: 10 }}
                      exit={{ opacity: 0, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className='bg-white text-black text-center rounded-[20px] w-[207px] py-5 absolute top-12 -left-9 z-10 flex flex-col gap-y-3'
                    >
                      {header?.dropdownMenu?.map((link, i) => (
                        <SwitchLink
                          className='hover:text-red '
                          key={i}
                          {...link}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <NavToggle
            toggleNav={toggleNav}
            isPinned={isPinned}
            navOpen={navOpen}
            reverseHeader={reverseHeader}
          />
        </div>
      </Headroom>
      <NavModal
        navOpen={navOpen}
        toggleNav={toggleNav}
        toggleForm={toggleForm}
        toggleQuizOpen={toggleQuizOpen}
      />
    </>
  );
};
