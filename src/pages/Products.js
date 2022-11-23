import { Button } from '@material-tailwind/react'
import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'

const Products = () => {
  return (
    <section className='product p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      <div className='my-card p-8 bg-white rounded'>
        <div className='car-name flex justify-between'>
          <div className='car-info'>
            <p>
              Yesterday, <span>12:45</span>
            </p>
            <h4 className='font-bold'>Ford explorer(2018)</h4>
          </div>
          <div className='flex justify-center items-center rounded bg-secondary text-primary px-4'>
            <AiOutlineStar className='' />
          </div>
        </div>
        {/* car image  */}
        <div className='car-image my-3'>
          <img  className="h-full w-full" src='car.png' alt='' />
        </div>
        {/* more info  */}
        <div className='flex justify-between text-[12px]'>
          <div>
            <p className='mb-2'>
              Mileage: <span className='font-bold'>49 000 KM</span>{' '}
            </p>
            <p className='mb-2'>
              Engine: <span className='font-bold'>305 Diesel</span>{' '}
            </p>
          </div>
          <div>
            <p className='mb-2'>
              Location: <span className='font-bold'>Dnipro</span>{' '}
            </p>
            <p className='mb-2'>
              Transmission: <span className='font-bold'>Machine</span>{' '}
            </p>
          </div>
        </div>
        {/* price  */}
        <div className='flex justify-between items-center mt-2'>
          <h2 className='font-bold'>17 900$</h2>
          <Button className='bg-primary' >More Details</Button>
        </div>
      </div>
    </section>
  )
}

export default Products
