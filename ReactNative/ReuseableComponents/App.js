import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './components/AppButton';
import AppTextInput from './components/AppTextInput';

export default function App() {
  return (
    <View style={styles.container}>
      <AppTextInput />
      <AppButton title='log in'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10
  },
});
