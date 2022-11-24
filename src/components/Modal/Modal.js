import React from 'react'
import { Fragment } from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  DialogBody,
} from '@material-tailwind/react'

const Modal = ({ open, handleOpen }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.carName.value
  }

  return (
    <>
      <Fragment>
        <Dialog open={open} handler={handleOpen}>
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
                    type='text'
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
