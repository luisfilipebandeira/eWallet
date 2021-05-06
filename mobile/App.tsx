import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Dashboard} from './src/pages/Dashboard';

import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });
  
  if(!fontsLoaded){ 
    return (
      <AppLoading/>
    )
  }
  return (
    <Dashboard />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
