import { getProductDetails } from '@/lib/actions'
import React from 'react'

const page = async({params}: {params: {productId: string}}) => {

    const productDetail = await getProductDetails(params.productId)
    

  return (
    <div>
      pro
    </div>
  )
}

export default page
