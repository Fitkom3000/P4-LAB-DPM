import React from 'react';
import { View } from 'react-native';
import ParentComponent from './src/components/ParentComponent';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <ParentComponent />
    </View>
  );
};

export default App;
