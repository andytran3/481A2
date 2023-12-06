import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

import React from 'react';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const _handlePressLogin = () => {
    navigation.navigate("NavBar")
    console.log('Login Button Pressed');
  }

  const _handlePressRegister = () => {
    navigation.navigate("Register")
    console.log('Register Button Pressed');
  }

  const _handlePressForgot = () => {
    navigation.navigate("Forgot")
    console.log('Forgot Password Text Pressed');
  }

  function CustomInput({ value, setValue, placeholder, secureTextEntry, boardType, maxLength }) {
    return (
      <View style={CustomTextInputStyle.container}>
        <TextInput
          style={CustomTextInputStyle.input}
          value={value}
          onChangeText={setValue}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={boardType}
          maxLength={maxLength}
      />
      </View>
    );
  }

  function CustomButton({ title, onPress, enabled=true }) {
    return enabled ? (
      <TouchableOpacity disabled={!enabled}  underlayColor={'#3b50f3'} style={CustomButtonStyle.container} onPress={onPress} >
          <Text style={CustomButtonStyle.text}>{title}</Text>
      </TouchableOpacity>
    ) : null;
  }

  return (
    <View style={MainContainerStyle.container}>

      <Image 
      style={styles.logo}
      source={require('../res/mealmaster.png')}/>
        <View style={CustomTextInputStyle.container}>
          <TextInput
              style={CustomTextInputStyle.input}
              placeholder='Email'
              value={email}
              onChangeText={setEmail}
          />
        </View>
        <View style={CustomTextInputStyle.container}>
          <TextInput
              style={CustomTextInputStyle.input}
              placeholder='Password'
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
          />
        </View>
        <CustomButton
            title='Login'
            onPress={_handlePressLogin}
        />
        <CustomButton
            title='Register'
            onPress={_handlePressRegister}
        />
        <TouchableOpacity onPress={_handlePressForgot}>
            <Text style={styles.textButton}>
                Forgot Password?
            </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textButton: {
    marginTop: 10,
    marginBottom: 20,
  },

  logo: {
    width: 225,
    height: 225,
    marginBottom: 50,
  }
});

const CustomTextInputStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 2,
    paddingHorizontal: 10,
    marginVertical: 5,
    alignSelf: 'center'
  },

  halfContainer: {
    flexDirection: 'row'
  },
  
  halfInput: {
    height: 40,
    width: '44%',
    margin: '1%',
    borderRadius: 2,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },

  input: {
    height: 40,
  },
});

const CustomButtonStyle = StyleSheet.create({
  container: {
    width: '90%',
    padding: 15,
    borderRadius: 2,
    marginVertical: 5,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#3B71F3'
  },

  productContainer: {
    width: '90%',
    padding: 15,
    borderRadius: 2,
    marginVertical: 5,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#919191'
  },

  text: {
    fontWeight: 'bold',
    color: 'white'
  }
});

const MainContainerStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37474f',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerScroll: {
    flex: 1,
    alignItems: 'stretch'
  },

  row: {
    // backgroundColor: '#f3f3f3',
    flexDirection: 'row',
    flexWrap: 'wrap',
    opacity: 0.5,
  },

  scroll: {
    flex: 1,
    alignItems: 'stretch'
  }
});