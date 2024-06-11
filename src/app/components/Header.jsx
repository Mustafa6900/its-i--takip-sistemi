import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="lg:px-12 px-4 lg:py-3 flex flex-wrap items-center bg-slate-200 rounded-full m-6">
        <div className="flex-1 flex justify-between items-center">
        <Link href="/" className="text-4xl font-black">
                    ITS
        </Link>
        </div>

        <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
      <svg className="fill-current text-gray-900"
        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
            <nav>
                <ul className="md:flex items-center justify-between text-lg text-gray-900 font-bold pt-4 md:pt-0">
                    <li><a className="md:p-4 py-3 px-0 block" href="#">Hesap Ayarları</a></li>
                    <li><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#">Çıkış Yap</a></li>
                </ul>
            </nav>
        </div>
    </header>
    );
};

export default Header;
