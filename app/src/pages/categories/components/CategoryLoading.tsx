import { Facebook, Instagram } from 'react-content-loader/native'
import { Container } from '../../../utils/constants'

export const CategoryLoading = () => {
   return (
      <Container className="mx-4">
         <Facebook />
         <Instagram />
      </Container>
   )
}
