/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  ScreenA: undefined;
  ScreenB: undefined;
  ScreenC: undefined;
};

type ScreenAProps = {
  navigation: import('@react-navigation/native-stack').NativeStackNavigationProp<
    RootStackParamList,
    'ScreenA'
  >;
};

type ScreenBProps = {
  navigation: import('@react-navigation/native-stack').NativeStackNavigationProp<
    RootStackParamList,
    'ScreenB'
  >;
};

function ScreenA({ navigation }: ScreenAProps) {
  console.log('state a', navigation.getState());
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen A</Text>
      <Button
        title="Go to Screen B"
        onPress={() => navigation.navigate('ScreenB')}
      />
      <Button
        title="Preload Screen C"
        onPress={() => navigation.preload('ScreenC')}
      />
    </View>
  );
}

function ScreenB({ navigation }: ScreenBProps) {
  console.log('state b', navigation.getState());
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen B</Text>
      <Button
        title="Go to Screen C"
        onPress={() => navigation.navigate('ScreenC')}
      />
    </View>
  );
}

function ScreenC() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen C</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScreenA">
        <Stack.Screen
          name="ScreenA"
          component={ScreenA}
          options={{
            title: 'Screen A',
            gestureEnabled: true,
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="ScreenB"
          component={ScreenB}
          options={{
            title: 'Screen B',
            gestureEnabled: true,
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="ScreenC"
          component={ScreenC}
          options={{
            title: 'Screen C',
            gestureEnabled: false,
            animation: 'none',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});
