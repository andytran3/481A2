import React from 'react';
import NavigationStack from './src/components/NavigationStack';

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <NavigationStack/>
    </NavigationContainer>
  );
}
