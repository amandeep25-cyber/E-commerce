import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';

const Collection = () => {

  const { products } =useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t mx-6'>
      {/* Filter options */}
      <div className="min-w-60">
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90': ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 mt-6 py-3 ${showFilter ? '': 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className='flex gap-2'>
              <input type="checkbox" value={'Men'} className='w-3' /> Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" value={'Women'} className='w-3' /> Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" value={'Kids'} className='w-3' /> Kids
            </p>
          </div>

        </div>
        {/* Subcategory filter */}
          <div className={`border border-gray-300 pl-5 my-5 py-3 ${showFilter ? '': 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className='flex gap-2'>
              <input type="checkbox" value={'Topwear'} className='w-3' /> Topwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" value={'Bottomwear'} className='w-3' /> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" value={'Winterwear'} className='w-3' /> Winterwear
            </p>
          </div>

        </div>
      </div>
      {/* Right side */}

    </div>
  )
}

export default Collection