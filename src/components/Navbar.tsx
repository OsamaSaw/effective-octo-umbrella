import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const [isProductsMenuOpen, setProductsMenuOpen] = useState(false);

    const handleProductsMenuToggle = () => {
        setProductsMenuOpen(!isProductsMenuOpen);
    };

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" passHref>
                            <span className="text-white cursor-pointer">Logo</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="/" passHref>
                <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                  Home
                </span>
                            </Link>
                            <div
                                className="relative"
                                onMouseEnter={handleProductsMenuToggle}
                                onMouseLeave={handleProductsMenuToggle}
                            >
                <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                  Products
                </span>
                                {isProductsMenuOpen && (
                                    <div className="absolute z-10 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
                                        <Link href="/products/category1" passHref>
                      <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Category 1
                      </span>
                                        </Link>
                                        <Link href="/products/category2" passHref>
                      <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Category 2
                      </span>
                                        </Link>
                                    </div>
                                )}
                            </div>
                            <Link href="/about" passHref>
                <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                  About
                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
