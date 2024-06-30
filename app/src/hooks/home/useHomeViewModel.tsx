import { useCallback, useEffect, useMemo, useState } from 'react'
import { getAddress } from '../../services/address/addressService'
import { getBanners } from '../../services/banner/bannerService'
import { getCategory } from '../../services/category/categoryService'
import { getProfessionalListHome } from '../../services/professional/professionalService'
import { getUser } from '../../services/user/userService'
import { useCategoryStore } from '../../stores'
import useAddressStore from '../../stores/address/useAddressStore'
import useBannerStore from '../../stores/banner/useBannerStore'
import useUserStore from '../../stores/user/userStore'
import { BannerType } from '../../types/banner/banner_type'
import { CategoryType } from '../../types/category/category_type'

const useHomeViewModel = () => {
   const [isLoading, setIsLoading] = useState<boolean>(true)
   const { setUser, user } = useUserStore()
   const { banners, setBanners } = useBannerStore()
   const { setCategories, categories, setHomeCategories } = useCategoryStore()
   const { addresses, setAddress, setSelectedAddress } = useAddressStore()

   const userData = useCallback(async () => {
      if (user) {
         return
      } else {
         const userItem = await getUser()
         if (userItem) {
            setUser(userItem)
            return
         }
      }
   }, [setUser, user])
   const bannersData = useCallback(async () => {
      if (banners && banners.length > 0) {
         return
      }
      const bannersItem = await getBanners()
      if (bannersItem) {
         setBanners(bannersItem as BannerType[])
         return
      }
   }, [setBanners, banners])

   const getRandomUniqueItems = useMemo(() => {
      return (items: CategoryType[], count: number): CategoryType[] => {
         const uniqueItems: CategoryType[] = []

         while (
            uniqueItems.length < count &&
            uniqueItems.length < items.length
         ) {
            const randomIndex = Math.floor(Math.random() * items.length)
            const selectedItem = items[randomIndex]

            if (!uniqueItems.some((item) => item.id === selectedItem.id)) {
               uniqueItems.push(selectedItem)
            }
         }

         return uniqueItems
      }
   }, [])

   const getProfessionalData = useCallback(
      async (categoriesItem: CategoryType[]) => {
         const updatedCategories = await getProfessionalListHome(categoriesItem)
         setHomeCategories(updatedCategories)
      },
      [],
   )

   const categoriesData = useCallback(async () => {
      const categoriesItem = await getCategory()
      if (categoriesItem) {
         categoriesItem.sort((a, b) => a.name.localeCompare(b.name))
         const addedItens = getRandomUniqueItems(categoriesItem, 5)
         await getProfessionalData(addedItens)
         setCategories(categoriesItem as CategoryType[])
         return
      }
   }, [setHomeCategories, setCategories])

   const addressesData = useCallback(async () => {
      if (addresses && addresses.length > 0) {
         return
      }
      const userItemId = await getUser()
      const address = await getAddress(userItemId?.id as string)
      if (address) {
         setAddress(address)
         const selectedAddress = address.find((item) => item.main === true)
         if (selectedAddress) {
            setSelectedAddress(selectedAddress)
            return
         }
      }
   }, [addresses, setAddress, setSelectedAddress])

   useEffect(() => {
      const initialize = async () => {
         await Promise.all([
            userData(),
            bannersData(),
            categoriesData(),
            addressesData(),
         ])

         setIsLoading(false)
      }
      initialize()
   }, [])

   const handlePress = () => {
      console.log('Button pressed')
   }
   return { handlePress, isLoading, categories }
}
export default useHomeViewModel
