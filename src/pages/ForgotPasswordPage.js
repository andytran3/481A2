import { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { Alert } from 'react-native';


import React from 'react';

export default function ForgotPasswordPage({ navigation }) {
  const [email, setEmail] = useState('');

  const _handlePressRequestPassword = () => {
    console.log('Request Password Button Pressed');
    Alert.alert(
      "Password Reset",
      "Your password reset link has been sent to your email",
      [
        { text: "OK", onPress: () => navigation.navigate("Login") }
      ],
      { cancelable: false }
    );
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
      <Text style={MainContainerStyle.title}>Password Recovery</Text>
      <View style={CustomTextInputStyle.container}>
          <TextInput
              style={CustomTextInputStyle.input}
              placeholder='Email'
              value={email}
              onChangeText={setEmail}
          />
        </View>
      <CustomButton
        title='Request Password'
        onPress={_handlePressRequestPassword}
      />
    </View>
  );
}
const CustomTextInputStyle = StyleSheet.create({

  title: {
    fontSize: 30, 
    fontWeight: 'bold', 
    marginBottom: 30, 
  },
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
    backgroundColor: '#f3f3f3',
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