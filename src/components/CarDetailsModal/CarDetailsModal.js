import React from 'react'
import { Fragment, useState } from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react'

const CarDetailsModal = ({size, handleOpen}) => {
  return (
    <>
      <Fragment>
        <Dialog open={size === 'xxl'} size={size || 'md'} handler={handleOpen}>
          <DialogHeader>Its a simple dialog.</DialogHeader>
          <DialogBody divider>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ad reprehenderit omnis perspiciatis aut odit! Unde architecto
            perspiciatis, dolorum dolorem iure quia saepe autem accusamus eum
            praesentium magni corrupti explicabo!
          </DialogBody>
          <DialogFooter>
            <Button
              variant='text'
              color='red'
              onClick={() => handleOpen(null)}
              className='mr-1'
            >
              <span>Cancel</span>
            </Button>
            <Button
              variant='gradient'
              color='green'
              onClick={() => handleOpen(null)}
            >
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </Fragment>
    </>
  )
}

export default CarDetailsModal
