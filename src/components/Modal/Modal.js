import React from 'react'
import { Fragment } from 'react'
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Input,
  DialogBody,
} from '@material-tailwind/react'

const Modal = ({ open, handleOpen }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.carName.value;
    const img = e.target.url.value;
    const mileage = e.target.mileage.value;
    const location = e.target.location.value;
    const engine = e.target.engine.value;
    const transmission = e.target.transmission.value;
    const price = e.target.price.value;
  
    // post data to database here
    console.log(name, transmission, price, img, mileage, location, engine)

    // close modal
    handleOpen()
  }

  return (
    <>
      <Fragment>
        <Dialog size='md' open={open} handler={handleOpen}>
          <h2 className='text-center mt-5 text-2xl'>Sell Your Dream Car</h2>
          <DialogBody>
            <form onSubmit={handleSubmit} className='w-full'>
              <Card className='w-full'>
                <CardBody className='flex flex-col gap-4'>
                  <Input
                    label='Car Name'
                    type='text'
                    name='carName'
                    size='lg'
                    required
                  />
                  <Input
                    label='Img URL'
                    type='text'
                    name='url'
                    size='lg'
                    required
                  />
                  <Input
                    label='Mileage'
                    type='number'
                    name='mileage'
                    size='lg'
                    required
                  />
                  <Input
                    label='location'
                    type='text'
                    name='location'
                    size='lg'
                    required
                  />
                  <Input
                    label='engine'
                    type='text'
                    name='engine'
                    size='lg'
                    required
                  />
                  <Input
                    label='transmission'
                    type='text'
                    name='transmission'
                    size='lg'
                    required
                  />
                  <Input
                    label='price'
                    type='number'
                    name='price'
                    size='lg'
                    required
                  />
                </CardBody>
                <CardFooter className='pt-0'>
                  <Button
                    type='submit'
                    className='bg-secondary text-primary'
                    fullWidth
                  >
                    Add a Car
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </DialogBody>
        </Dialog>
      </Fragment>
    </>
  )
}

export default Modal
