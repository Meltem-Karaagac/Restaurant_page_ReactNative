import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import { CityList, RestaurantDetail, RestaurantList } from './pages'

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Cities"
                    component={CityList}
                    options={{ headerShown: true }}
                />
                <Stack.Screen
                    name="Restaurants"
                    component={RestaurantList}
                    options={{ headerShown: true }}

                />
                <Stack.Screen
                    name="Details"
                    component={RestaurantDetail}
                    options={{ headerShown: true }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;