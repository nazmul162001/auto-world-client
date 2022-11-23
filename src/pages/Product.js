import { Button } from '@material-tailwind/react'
import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'

const Product = ({ data }) => {
  const {
    createdDay,
    createdTime,
    carName,
    img,
    mileage,
    location,
    engine,
    transmission,
    price,
  } = data
  return (
    <div className='my-card p-5 bg-white rounded'>
      <div className='car-name flex justify-between'>
        <div className='car-info'>
          <p>
            {createdDay}, <span>{createdTime}</span>
          </p>
          <h4 className='font-bold'>{carName}</h4>
        </div>
        <div className='flex justify-center items-center rounded bg-secondary text-primary px-4'>
          <AiOutlineStar className='' />
        </div>
      </div>
      {/* car image  */}
      <div className='car-image my-3'>
        <img className='h-full w-full' src={img} alt='' />
      </div>
      {/* more info  */}
      <div className='flex justify-between text-[12px]'>
        <div>
          <p className='mb-2 text-[14px] lg:text-[11px]'>
            Mileage: <span className='font-bold'>{mileage}</span>{' '}
          </p>
          <p className='mb-2 text-[14px] lg:text-[11px]'>
            Engine: <span className='font-bold'>{engine}</span>{' '}
          </p>
        </div>
        <div>
          <p className='mb-2 text-[14px] lg:text-[11px]'>
            Location: <span className='font-bold'>{location}</span>{' '}
          </p>
          <p className='mb-2 text-[14px] lg:text-[11px]'>
            Transmission: <span className='font-bold'>{transmission}</span>{' '}
          </p>
        </div>
      </div>
      {/* price  */}
      <div className='flex justify-between items-center mt-2'>
        <h2 className='font-bold'>{price}$</h2>
        <Button className='bg-primary'>More Details</Button>
      </div>
    </div>
  )
}

export default Product
