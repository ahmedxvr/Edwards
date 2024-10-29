import React from 'react';
import { useSiteConfig } from '@querys/useSiteConfig';
import SwitchLink from '../links/switchLink';
import { SanityImage } from '../sanity/sanityImage';
import { Link } from 'gatsby';

export const Footer = ({ toggleForm, linkText, linkUrl }) => {
  const { footer } = useSiteConfig();
  const { address, phone, email, socialLinks, footerLinks } = footer || {};

  return (
    <footer className='px-gutter lg:px-14 text-white bg-red pb-10 pt-14'>
      <div className='flex items-start flex-col-reverse lg:flex-row gap-y-20 justify-between'>
        <div>
          <span className='block mb-4 blockH8'>
            Edwards Lifesciences (New Zealand) Ltd
          </span>
          {address.map((line, i) => (
            <span key={i} className='block blockH9'>
              {line}
            </span>
          ))}
          {phone && (
            <span className='block blockH9'>
              Phone: <a href={`tel:${phone}`}>{phone}</a>
            </span>
          )}
          {email && (
            <span className='block blockH9'>
              Email: <a href={`mailto:${email}`}>{email}</a>
            </span>
          )}
          <div className='mt-4 flex gap-x-4'>
            {socialLinks.map(({ icon, url }, i) => (
              <a key={i} href={url} target='_blank' rel='noreferrer'>
                <SanityImage image={icon} className='w-8 h-8' />
              </a>
            ))}
          </div>
        </div>
        <div className=' lg:mr-0'>
          <Link
            className='btn-white  inline-block'
            to={linkUrl ?? '/health-quiz'}
          >
            {linkText ?? 'Take our heart health quiz'}
          </Link>
        </div>
      </div>

      <div className='mt-16 lg:mt-20 blockH9'>
        <div className='flex items-center gap-x-4'>
          {footerLinks?.map((link, i) => (
            <SwitchLink key={i} {...link} />
          ))}
        </div>
        <p className='opacity-50 mt-3'>
          listentoyourheart.co.nz is a trademark of Edwards Lifesciences
          Corporation. All other trademarks are the property of their respective
          owners.
        </p>
        <p className='mt-2 lg:mt-0 opacity-50'>
          ©{new Date().getFullYear()} Edwards Lifesciences Corporation. All
          rights reserved. NZ-2021-133 Rev 01.
        </p>
      </div>
    </footer>
  );
};
