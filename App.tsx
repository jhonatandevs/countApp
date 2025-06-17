import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [count, setCount]= useState(10);
  return (
    <View style={[styles.container, { backgroundColor: '#f0f0f0' }]}>
      <Text style={styles.texHuge}>{count}</Text>
      <Pressable  onPress={() => setCount(val=>val + 1)} onLongPress={()=>setCount(0)} style={styles.floatingButtonR}  >
        <Text style={[{color:'#fff'}]}>+1</Text>
      </Pressable>
      <TouchableOpacity onPress={() => setCount(val => val - 1)} onLongPress={()=>setCount(0)} style={styles.floatingButtonL}>
        <Text>-1</Text> 
      </TouchableOpacity>
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
