import React from 'react'
import { Pressable } from 'react-native'
import { MapPinIcon } from 'react-native-heroicons/outline'
import useAddressStore from '../../../stores/address/useAddressStore'
import {
   Container,
   NormalText,
   Row,
   Title,
   backgroundColorAmber,
   styles,
} from '../../../utils/constants'

export const AddressHomeTile: React.FC = () => {
   const {selectedAddress, setVisible} = useAddressStore();
   const formatedAddress = `${selectedAddress?.street}, ${selectedAddress?.number}`
   const formatedNeighborhood = `${selectedAddress?.neighborhood}, ${selectedAddress?.city} - ${selectedAddress?.state}`
   const handleVisible = () => {
      setVisible(true)
   }

   return (
      <Pressable onPress={handleVisible}>
         <Row className="flex-row mb-4 items-center mx-2 mt-2">
            <MapPinIcon color={backgroundColorAmber} size={24} />
            <Container style={styles.normalWidth}>
               <Title className="text-black ml-2" style={styles.poppinsBold}>
                  {formatedAddress ?? 'Endereço não encontrado'}
               </Title>
               <NormalText
                  className="text-xs ml-2 text-neutral-500"
                  style={styles.poppinsRegular}
               >
                  {formatedNeighborhood ?? 'Bairro não encontrado'}
               </NormalText>
            </Container>
         </Row>
      </Pressable>
   )
}
