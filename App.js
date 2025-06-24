import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductsProvider } from './src/contexts/ProductsContext';

import ListProductsScreen    from './src/screens/products/ListProductsScreen';
import AddProductScreen      from './src/screens/products/AddProductScreen';
import EditProductScreen     from './src/screens/products/EditProductScreen';
import ProductDetailsScreen  from './src/screens/products/ProductDetailsScreen';
import ProfileScreen         from './src/screens/profile/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ProductsProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ListProducts">
          <Stack.Screen name="ListProducts"    component={ListProductsScreen}    options={{ title: 'Meus Produtos' }}/>
          <Stack.Screen name="AddProduct"      component={AddProductScreen}      options={{ title: 'Adicionar Produto' }}/>
          <Stack.Screen name="EditProduct"     component={EditProductScreen}     options={{ title: 'Editar Produto' }}/>
          <Stack.Screen name="ProductDetails"  component={ProductDetailsScreen}  options={{ title: 'Detalhes' }}/>
          <Stack.Screen name="Profile"         component={ProfileScreen}         options={{ title: 'Perfil' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ProductsProvider>
  );
}
