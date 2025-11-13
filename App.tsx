
import React, { createContext, useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './pages/LandingScreen';
import LoginScreen from './pages/LoginScreen';
import CusHomeScreen from './pages/Customer/CusHomeScreen';
import CustomerMenuScreen from './pages/Customer/MenuScreen';
import ItemCustomize from './pages/Customer/ItemCustomize';
import PayScreen from './pages/Customer/PayScreen';
import PickupScreen from './pages/Customer/PickupScreen';
import CartScreen from './pages/Customer/CartScreen';
import Dashboard from './pages/ShopOwner/Dashboard';

const Stack = createNativeStackNavigator();

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  ice: string;
  milk: string;
  size: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems(prevItems => [...prevItems, item]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="CusHome" component={CusHomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Menu" component={CustomerMenuScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ItemCustomize" component={ItemCustomize} options={{ headerShown: false }} />
          <Stack.Screen name="Pay" component={PayScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Pickup" component={PickupScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
