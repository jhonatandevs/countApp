import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FAB } from './components/FAB';

export default function App() {
  const [count, setCount]= useState(10);
  return (
    <View style={[styles.container, { backgroundColor: '#f0f0f0' }]}>
      <Text style={styles.texHuge}>{count}</Text>
      <FAB label={`+1`} onPress={()=>setCount(count+1)} onLongPress={()=>setCount(0)} position='right'/>
      <FAB label={`-1`} onPress={()=>setCount(count-1)} onLongPress={()=>setCount(0)} position='left'/>
      <StatusBar style="dark" />
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
  texHuge: {
    fontSize: 120,
    fontWeight: '100',
  },
  floatingButtonR: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#65558f',
    padding: 20,
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
  },
   floatingButtonL: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: '#4a90e2',
    padding: 20,
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
  },
});
