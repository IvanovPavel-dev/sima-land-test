import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { store } from '$store';
import { CategoriesScreen } from '$screens';
import { SubCategoryLevelTwo } from 'screens/SubCategoryLevelTwo';
import { SubCategoryLevelThree } from 'screens/SubCategoryLevelThree';
import { GoodsList } from 'screens/GoodsList';
import { SubCategoryLevelFour } from 'screens/SubCategoryLevelFour';
import { SubCategoryLevelFive } from 'screens/SubCategoryLevelFive';
import { SubCategoryLevelSix } from 'screens/SubCategoryLevelSix';
import { SubCategoryLevelSeven } from 'screens/SubCategoryLevelSeven';

const Stack = createStackNavigator();

const CategoriesStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="SubCategoryLevelTwo" component={SubCategoryLevelTwo} />
      <Stack.Screen name="SubCategoryLevelThree" component={SubCategoryLevelThree} />
      <Stack.Screen name="SubCategoryLevelFour" component={SubCategoryLevelFour} />
      <Stack.Screen name="SubCategoryLevelFive" component={SubCategoryLevelFive} />
      <Stack.Screen name="SubCategoryLevelSix" component={SubCategoryLevelSix} />
      <Stack.Screen name="SubCategoryLevelSeven" component={SubCategoryLevelSeven} />
      <Stack.Screen name="GoodsList" component={GoodsList} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <CategoriesStack />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
