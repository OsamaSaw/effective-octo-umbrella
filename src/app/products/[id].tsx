import { useRouter } from 'next/router'
import Image from 'next/image'

export default function Product() {
    const router = useRouter()

    // If the id isn't available yet, return a loading state
    if (!router.query.id) {
        return <div>Loading...</div>
    }

    const { id } = router.query

    // Fetch product data from an API or database here using the id

    const product = {
        id,
        name: `Product ${id}`,
        image: 'https://via.placeholder.com/200', // Placeholder image URL
    }

    return (
        <div className="p-6">
            <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                objectFit="cover"
                objectPosition="center"
            />
            <h1 className="text-2xl font-semibold mt-4">{product.name}</h1>

            {/* Add more product details here */}
        </div>
    )
}
