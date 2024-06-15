/* eslint-disable prettier/prettier */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from 'react-native-heroicons/outline';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { HomeScreen } from '../../../pages/home/HomeScreen';
import { OrderScreen } from '../../../pages/order/OrderScreen';
import { ProfileScreen } from '../../../pages/profile/ProfileScreen';
import { SearchScreen } from '../../../pages/search/SearchScreen';

export const TabsContainer: React.FC = () => {
  const Tab = createBottomTabNavigator();
  const tabItemOptions = {
    headerShown: false,
    backgroundColor: 'white',
    showIcon: true,
    showLabel: false,
  };
  const tabBarOptions = (size: number, color: string, routeName: string) => {
    switch (routeName) {
      case 'Home':
        return <SimpleLineIcons name={'home'} size={size} color={color} />;
      case 'Buscar':
        return <MagnifyingGlassIcon size={size} color={color} />;
      case 'Pedidos':
        return <ShoppingBagIcon size={size} color={color} />;
      case 'Perfil':
        return <Feather name={'user'} size={size} color={color} />;
      default:
        return <SimpleLineIcons name={'home'} size={size} color={color} />;
    }
  };

  const containerStyle = {
    backgroundColor: 'white',
  };

  return (
    <Tab.Navigator
      initialRouteName="Splash"
      sceneContainerStyle={containerStyle}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => tabBarOptions(size, color, route.name),
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name={'Home'}
        component={HomeScreen}
        options={tabItemOptions}
      />
      <Tab.Screen
        name={'Buscar'}
        component={SearchScreen}
        options={tabItemOptions}
      />
      <Tab.Screen
        name={'Pedidos'}
        component={OrderScreen}
        options={tabItemOptions}
      />
      <Tab.Screen
        name={'Perfil'}
        component={ProfileScreen}
        options={tabItemOptions}
      />
    </Tab.Navigator>
  );
};
