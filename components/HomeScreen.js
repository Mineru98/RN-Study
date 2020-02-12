import React, { Component } from 'react';
import { Button } from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <Button
      title="Go to Jane's Home"
      onPress={() => navigation.navigate('Home', {name: 'Jane'})}
    />
  );
}