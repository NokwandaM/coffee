import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import OnBoarding from './src/screen/OnBoarding'
import * as Font from 'expo-font';

const customFonts ={
  'Nunito-Bold' : require('./fonts/Nunito-Bold.ttf')
}

export default function App() {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  const _loadAssetsAsync = async () => {
    await Font.loadAsync(customFonts);
    setAssetsLoaded(true)
  }

  useEffect(()=>{
    _loadAssetsAsync()
  })

  return (
    <View style={styles.container}>
        { assetsLoaded ? <OnBoarding/> : <ActivityIndicator size="small"> </ActivityIndicator>}
        {/* <OnBoarding></OnBoarding> */}
    </View>
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
