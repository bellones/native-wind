import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Pressable, Text } from 'react-native'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { SearchFormType } from '../../../types/search/search_pass_form_type'
import {
   Input,
   InputContainer,
   Inputbox,
   styles
} from '../../../utils/constants'
import { SCHEMA } from '../../create-account/validations'

export const SearchInput = () => {
   const { control, handleSubmit, formState } = useForm<SearchFormType>({
      resolver: yupResolver(SCHEMA) as any,
   })

   return (
      <InputContainer className="flex mt-1">
         <Inputbox className="flex-row bg-neutral-100 items-center rounded-xl mb-4 h-12 justify-center">
            <Controller
               control={control}
               render={({ field: { onChange, value } }) => (
                  <>
                     <Input
                        className="flex-1 pl-2 text-black"
                        keyboardType="default"
                        autoCapitalize="none"
                        onChangeText={onChange}
                        placeholderTextColor={'gray'}
                        value={value}
                        placeholder="Buscar Profissionais..."
                        style={[styles.poppinsRegular, styles.normaltext]}
                     />
                    <Pressable>
                        <MagnifyingGlassIcon style={styles.rigthIcon} />
                    </Pressable>
                        
                  </>
               )}
               name="searchText"
               defaultValue=""
            />
         </Inputbox>
         {!!formState.errors.searchText && (
            <Text style={styles.errorMessage}>
               {formState.errors.searchText.message}
            </Text>
         )}
      </InputContainer>
   )
}
