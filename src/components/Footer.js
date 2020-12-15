import React from 'react';
import Logo from './Logo';
import { IkerLink } from './IkerLink';

const Footer = () => (
  <footer className='footer'>
    <Logo />
    <div className='footer__info'>
      <div className='footer-left'>
        <p className='footer__credits'>
          Designed and coded by{' '}
          <IkerLink to='https://spaceinva.dev' text='spaceinvadev' />
        </p>
      </div>
      <div className='footer-right'>
        <nav className='footer__nav'>
          <a
            className='footer__nav__link'
            href='https://twitter.com/spaceinvadev/'
            rel='noreferrer'
            target='_blank'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='#080808'
              stroke='#080808'
              strokeWidth='1'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'></path>
            </svg>
          </a>
          <a
            className='footer__nav__link'
            href='https://github.com/spaceinvadev/'
            rel='noreferrer'
            target='_blank'
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12 0C5.373 0 0 5.45713 0 12.1879C0 17.8989 3.872 22.6776 9.092 24C9.036 23.8355 9 23.6445 9 23.4079V21.3248C8.513 21.3248 7.697 21.3248 7.492 21.3248C6.671 21.3248 5.941 20.9662 5.587 20.3C5.194 19.5595 5.126 18.4271 4.152 17.7344C3.863 17.5039 4.083 17.2408 4.416 17.2763C5.031 17.4531 5.541 17.8817 6.021 18.5175C6.499 19.1543 6.724 19.2985 7.617 19.2985C8.05 19.2985 8.698 19.2731 9.308 19.1756C9.636 18.3296 10.203 17.5506 10.896 17.1829C6.9 16.7655 4.993 14.7463 4.993 12.0051C4.993 10.8249 5.488 9.68328 6.329 8.72146C6.053 7.76674 5.706 5.81972 6.435 5.07829C8.233 5.07829 9.32 6.26255 9.581 6.58248C10.477 6.27067 11.461 6.09395 12.495 6.09395C13.531 6.09395 14.519 6.27067 15.417 6.58451C15.675 6.26661 16.763 5.07829 18.565 5.07829C19.297 5.82074 18.946 7.77588 18.667 8.72857C19.503 9.68836 19.995 10.8269 19.995 12.0051C19.995 14.7443 18.091 16.7624 14.101 17.1819C15.199 17.7639 16 19.3991 16 20.6311V23.4079C16 23.5135 15.977 23.5897 15.965 23.6801C20.641 22.0154 24 17.5059 24 12.1879C24 5.45713 18.627 0 12 0Z'
                fill='#080808'
              />
            </svg>
          </a>
          <a
            className='footer__nav__link'
            href='https://linkedin.com/mauriciopaterninar/'
            rel='noreferrer'
            target='_blank'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='#080808'
              stroke='#080808'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
              <rect x='2' y='9' width='4' height='12'></rect>
              <circle cx='4' cy='4' r='2'></circle>
            </svg>
          </a>
        </nav>
      </div>
    </div>
  </footer>
);

export default Footer;
