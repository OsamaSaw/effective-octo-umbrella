"use client";

import Image from 'next/image'
import Link from 'next/link'

export default function Products() {
    const products = new Array(20).fill(0).map((_, i) => ({
        id: i,
        name: `Product ${i + 1}`,
        image: 'https://via.placeholder.com/200', // Placeholder image URL
    }));

    return (
        <div className="p-6 grid grid-cols-3 gap-6">
            <aside className="col-span-1">
                <h2 className="text-2xl font-semibold mb-4">Filters</h2>

                {/* Placeholder for filter options */}
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Price range</label>
                    <input type="range" min="0" max="1000" className="slider w-full"></input>
                </div>

                {/* Placeholder for search bar */}
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Search</label>
                    <input type="text" placeholder="Search products..." className="px-3 py-2 border border-gray-300 rounded w-full"></input>
                </div>
            </aside>

            <main className="col-span-2 grid grid-cols-2 gap-6">
                {products.map(product => (
                    <Link href={`/products/${product.id}`} key={product.id}>
                        <div className="border border-gray-200 p-6 cursor-pointer hover:border-blue-500 hover:shadow-lg transition duration-300">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={200}
                                height={200}
                                objectFit="cover"
                                objectPosition="center"
                            />
                            <h2 className="text-2xl font-semibold mt-4">{product.name}</h2>
                        </div>
                    </Link>
                ))}
            </main>
        </div>
    );
}
