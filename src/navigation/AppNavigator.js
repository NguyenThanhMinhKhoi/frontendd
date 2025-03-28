import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StudentList from '../screens/StudentList';
import AddStudent from '../screens/AddStudent';
import EditStudent from '../screens/EditStudent';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="StudentList" component={StudentList} options={{ title: 'Danh Sách Sinh Viên' }} />
        <Stack.Screen name="AddStudent" component={AddStudent} options={{ title: 'Thêm Sinh Viên' }} />
        <Stack.Screen name="EditStudent" component={EditStudent} options={{ title: 'Sửa Sinh Viên' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
