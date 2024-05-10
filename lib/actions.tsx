

export const getCategories = async () => {
    const categories = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`)
    return await categories.json()
}


export const getProducts = async () => {
    const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`)
    return await products.json()
}