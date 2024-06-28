import React from 'react'

import { Facebook, Instagram } from 'react-content-loader/native'
import { Container } from '../../../utils/constants'
export const HomeLoading: React.FC = () => {
   return (
      <Container className="mx-4">
         <Facebook />
         <Instagram />
         <Instagram />
      </Container>
   )
}
