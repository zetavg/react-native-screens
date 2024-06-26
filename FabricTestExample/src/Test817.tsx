import React from 'react';
import { View, Text, Button } from 'react-native';

import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{
            header: () => <Text>Hello!</Text>,
            headerRight: () => <Text>Some other text</Text>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function Home({
  navigation,
}: {
  navigation: NativeStackNavigationProp<ParamListBase>;
}) {
  return (
    <View>
      <Button
        title="Navigate"
        onPress={() => navigation.navigate('Notifications')}
      />
    </View>
  );
}

function Notifications() {
  return <View />;
}

export default App;
