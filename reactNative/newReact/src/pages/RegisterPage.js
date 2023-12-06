import { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { Alert } from 'react-native';


import React from 'react';

export default function RegisterPage({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const _handlePressComplete = () => {

    Alert.alert(
      "Registration Successful",
      "Your account has been registered.",
      [
        { text: "OK", onPress: () => navigation.navigate("Login") }
      ],
      { cancelable: false }
    );

    console.log('Complete Registration Button Pressed');
}


  const _handlePressTermsOfService = () => {
      console.log('Terms Of Service Text Pressed');
  }

  const _handlePressPrivacyPolicy = () => {
      console.log('Privacy Policy Text Pressed');
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

  function CustomInputHalf({ value1, setValue1, placeholder1, value2, setValue2, placeholder2 }) {
    return(
      <View style={CustomTextInputStyle.halfContainer}>
        <TextInput
          style={CustomTextInputStyle.halfInput}
          placeholder={placeholder1}
          value={value1}
          onChangeText={setValue1}
        />
        <TextInput
          style={CustomTextInputStyle.halfInput}
          placeholder={placeholder2}
          value={value2}
          onChangeText={setValue2}
        />
      </View>
    );
  }

  return (
    <View style={MainContainerStyle.container}>
        <CustomInputHalf
          placeholder1='First Name'
          value1={firstName}
          setValue1={setFirstName}
          placeholder2='Last Name'
          value2={lastName}
          setValue2={setLastName}
        />
        <CustomInput
            placeholder='Email'
            value={email}
            setValue={setEmail}
        />
        <CustomInput
            placeholder='Password'
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
        />
        <CustomInput
            placeholder='Confirm Password'
            value={confirmPassword}
            setValue={setConfirmPassword}
            secureTextEntry={true}
        />
        <CustomButton
            title='Complete Registration'
            onPress={_handlePressComplete}
        />
        <Text style={styles.text}>
            By Registering, you confirm that you accep our <Text style={styles.link} onPress={_handlePressTermsOfService}>Terms of Use</Text> and{' '}
            <Text style={styles.link} onPress={_handlePressPrivacyPolicy}>Privacy Policy.</Text>
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  halfInputContainer: {
    flexDirection: 'row',
  },

  halfInput: {
    height: 40,
    width: '44%',
    margin: '1%',
    borderRadius: 2,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },

  button: {
    marginTop: 10,
    width: 300,
  },

  text: {
    color: 'grey',
    marginVertical: 10,
    width: '90%'
  },

  link: {
    color: '#e3c146'
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
