// eslint-disable-next-line prettier/prettier
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// eslint-disable-next-line prettier/prettier
import React, { ComponentType } from 'react';
import routes from '../routes';

const screenOptions = {
  cardStyle: {backgroundColor: 'white'},
  headerShown: false,
};
const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="Splash">
      {Object.entries({
        ...routes,
      }).map(([name, props]) => {
        return (
          <Stack.Screen
            key={name}
            name={name}
            getComponent={() => {
              const cmp = props.component as ComponentType;
              return cmp;
            }}
            options={props.options}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default MainStack;
