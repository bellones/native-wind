/* eslint-disable prettier/prettier */
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { CartScreen } from '../../pages/cart/CartScreen';
import { CategoriesScreen } from '../../pages/categories/CategoryScreen';
import { CreateAccountScreen } from '../../pages/create-account/CreateAccountScreen';
import { ForgotPasswordScreen } from '../../pages/forgot-password/ForgotPasswordScreen';
import { HomeScreen } from '../../pages/home/HomeScreen';
import { LoginScreen } from '../../pages/login/LoginScreen';
import { OrderScreen } from '../../pages/order/OrderScreen';
import { ProfileScreen } from '../../pages/profile/ProfileScreen';
import { SplashScreen } from '../../pages/splash/SplashScreen';
import { TabsScreen } from '../../pages/tabs/TabsScreen';

const options: NativeStackNavigationOptions = {gestureEnabled: false};

const routes = {
  Splash: {
    component: SplashScreen,
    props: {},
    options: {headerShown: false, ...options},
  },
  Login: {
    component: LoginScreen,
    props: {},
    options: {headerShown: false, ...options},
  },
  CreateAccount: {
    component: CreateAccountScreen,
    props: {},
    options: {headerShown: false, ...options},
  },
  ForgotPass: {
    component: ForgotPasswordScreen,
    props: {},
    options: {headerShown: false, ...options},
  },
  Cart: {
    component: CartScreen,
    props: {},
    options: {headerShown: false, ...options},
  },
  Categories: {
    component: CategoriesScreen,
    props: {},
    options: {headerShown: false, ...options},
  },
  Home: {
    component: HomeScreen,
    props: {},
    options: {headerShown: false, ...options},
  },
  Order: {
    component: OrderScreen,
    props: {},
    options: {headerShown: false, ...options},
  },
  Profile: {
    component: ProfileScreen,
    props: {},
    options: {headerShown: false, ...options},
  },
  Search: {
    component: CartScreen,
    props: {},
    options: {headerShown: false, ...options},
  },
  Tabs: {
    component: TabsScreen,
    props: {},
    options: {headerShown: false, ...options},
  },
};

export default routes;
