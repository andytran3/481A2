import Tabs from './src/components/Tabs';
import HomePage from './src/pages/HomePage';

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  );
}
