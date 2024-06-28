import React from 'react'
import { ScrollView } from 'react-native'
import { Background, SafeContainer, styles } from '../../utils/constants'
import { SearchCategories } from './components/SearchCategories'
import { SearchInput } from './components/SearchInput'

export const SearchScreen = () => {
   return (
      <Background
         className="flex-1 bg-white h-full"
         style={styles.paddingGlobal}
      >
         <SafeContainer>
            <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
               <SearchInput />
               <SearchCategories />
            </ScrollView>
         </SafeContainer>
      </Background>
   )
}
