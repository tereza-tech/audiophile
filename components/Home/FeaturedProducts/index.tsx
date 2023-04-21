import { Grid } from '@mui/material'
import React from 'react'
import SecondaryProducts from '../SecondaryProducts'
import MainFeatured from "./MainFeatured"

type Props = {}

const FeaturedProducts = (props: Props) => {
  return (
    <>
      <MainFeatured />
      <SecondaryProducts />
    </>
  )
}

export default FeaturedProducts
