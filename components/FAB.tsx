import React from 'react'
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

interface propsFAB{
    label?: string;
    position?: 'left'|'right';
    onPress?: () => void;
    onLongPress?: () => void;

}
export const FAB = ({label, onLongPress,onPress,position='right'}:propsFAB) => {

  return (
     <Pressable  
     onPress={onPress} 
     onLongPress={onLongPress} style={[styles.floatingButton,position=='right'?styles.positionRight:styles.positionLeft]}>
           <Text style={[{color:'#fff'}]}>{label}</Text>
         </Pressable>
  )
}
const styles = StyleSheet.create({
 
   positionRight: {
    right: 20,
    backgroundColor: '#65558f',

  },
  positionLeft: {
    left: 20,
    backgroundColor: '#4a90e2',

  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    padding: 20,
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
  },
});