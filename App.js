import Tabs from './src/components/Tabs';
import NavigationStack from './src/components/NavigationStack';

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <NavigationStack/>
      {/* <Tabs/> */}
    </NavigationContainer>
  );
}
