import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-5 border-t light:border-gray-900/10 dark:border-[#333]">
      <div className="font-montserrat m-auto max-w-md block py-1 px-3 rounded-full text-center built-by" data-cslp="menu.blt787be50a3867cfeb.en.built_by">
        <p>
          Built with <a href="https://www.contentstack.com/headless-cms" target="_blank" className="text-contentstack font-semibold ">Contentstack</a>
          . Hosted on <a href="https://www.contentstack.com/launch" target="_blank" className="text-contentstack font-semibold ">Launch</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;