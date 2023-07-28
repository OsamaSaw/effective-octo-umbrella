"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import classNames from 'classnames';

export default function Home() {
    const [activeImage, setActiveImage] = useState(0);
    const [fade, setFade] = useState(false);
    const carouselImages = [
        'https://images.unsplash.com/photo-1593642532400-2682810df593',
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
        'https://images.unsplash.com/photo-1531251445707-1f000e1e87d0',
    ];
    const carouselTexts = ['Welcome to Our Ironworks Company', 'High Quality Fridges and Freezers', 'Custom Storage Solutions'];

    useEffect(() => {
        const timer = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setActiveImage((prevIndex) => (prevIndex + 1) % carouselImages.length);
                setFade(false);
            }, 250); // 500ms for the fade out, then change image
        }, 3000); // Change image every 3 seconds

        return () => {
            clearInterval(timer);
        };
    }, []);

    const fadeInOut = classNames({
        'transition-opacity duration-250': true,
        'opacity-0': fade,
        'opacity-100': !fade,
    });

    return (
        <main className="p-6">
            <div className="flex items-center justify-around mb-6">
                <h1 className="text-3xl font-semibold mr-4">Ironworks Company</h1>
                <Image
                    src="https://lh3.googleusercontent.com/QOM4I1unraRFRK27DBBUxrMh_KYvmRS7q_HDm4xWpn9fTDyYjQws-uNE8HU5Jtg404YXGEUJ5AQCqdn2DE-NJ5kTRKXVSx3ScGNul-lFaokf7t_z-mkgtvL5mxs2n-qdQPxMk-Pv" // path to your logo file
                    alt="Company Logo"
                    width={150} // adjust these values as necessary
                    height={50} // adjust these values as necessary
                />
            </div>

            <div className="relative h-96 mb-6">
                <Image
                    src={carouselImages[activeImage]}
                    alt="carousel"
                    layout="fill"
                    objectFit="cover"
                    className={`opacity-60 ${fadeInOut}`}
                />
                <div className={`absolute inset-0 flex items-center justify-center text-white text-2xl text-center px-6 ${fadeInOut}`}>
                    {carouselTexts[activeImage]}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                <Link href="/products/fridges">
                    <div className="border border-gray-200 p-6 cursor-pointer hover:border-blue-500 hover:shadow-lg transition duration-300">
                        <div className="relative h-[300px] w-full"> {/* Specify the height here */}
                            <Image
                                src="https://images.unsplash.com/photo-1601599561213-832382fd07ba"
                                alt="fridge"
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                            />
                        </div>
                        <h2 className="text-2xl font-semibold mt-4">Shop Fridges</h2>
                        <p>Discover our range of high quality, commercial fridges.</p>
                    </div>
                </Link>

                <Link href="/products/freezers">
                    <div className="border border-gray-200 p-6 cursor-pointer hover:border-blue-500 hover:shadow-lg transition duration-300">
                        <div className="relative h-[300px] w-full"> {/* Specify the height here */}
                            <Image
                                src="https://images.unsplash.com/photo-1657462216514-d16d2717c373"
                                alt="freezer"
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                            />
                        </div>
                        <h2 className="text-2xl font-semibold mt-4">Shop Freezers</h2>
                        <p>Keep your products fresh with our state-of-the-art freezers.</p>
                    </div>
                </Link>
            </div>
        </main>
    )
}
