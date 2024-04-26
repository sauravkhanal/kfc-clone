import React from 'react'
import ProductCard from './ProductCard'

function ProductGroup({itemArray, groupTitle}) {
  return (
    <div className='flex flex-col gap-5 px-20 py-5 bg-slate-50 items-center justify-center'>
        <p className='font-bold text-3xl font-national'>{groupTitle}</p>
        <div className='flex flex-wrap  justify-center'>
            {itemArray.map((itemDetail)=> <ProductCard {...itemDetail}/>
        )}
        </div>
    </div>
  )
}

export default ProductGroup