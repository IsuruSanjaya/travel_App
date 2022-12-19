import { View, Text, TextInput, Image,StyleSheet, useWindowDimensions } from 'react-native';
import React ,{useState} from 'react';
import Logo from '../../../assets/images/car.png'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';

export default function LoginScreen() {

    const [username, setusername]=useState('');
    const[password, setPassword] =useState('');
    const onSignInPressed=()=>{
        console.warn("sign in")
    }

    const OnForgetPassword=()=>{
        console.warn("Forget password");
    }

    const onGoogleSignin=()=>{
        console.warn("Google sign in success")
    }

    const onDontAccountPress=()=>{
        console.warn("Don't have account")
    }

    const {height}=useWindowDimensions()
  return (
  
    <View  style={styles.root}>

        <Image source={Logo} style={[styles.logo,{height:height*0.3}]} resizeMode="contain"/>
 

        <CustomInput
        value={username}
        setValues={setusername}
         placeholder="Username or Email"/>
         <CustomInput
        value={password}
        setValues={setPassword}
         placeholder="Password"
         secureTextEntry={true}/>

         <CustomButton text="Sign In" 
         onPress={onSignInPressed}
         type="PRIMARY"
         />
         <CustomButton 
          text="Forget Password" 
          onPress={OnForgetPassword}
          type="TERTIARY"
          />
           <CustomButton 
          text="Sign In with Google" 
          onPress={onGoogleSignin}
         bgColor="#FAE9EA"
         fgColor="#DD4D44"
          />
           <CustomButton 
          text="Don't have an Account" 
          onPress={onDontAccountPress}
         bgColor="white"
         fgColor="gray"
          />

    
    </View>
  
  );
};

const styles =StyleSheet.create({


    logo:{
        alignItems:'center',
        maxwidth:300,
        maxHeight:200
    },

    root:{
        alignItems:'center',
        padding:20,
    },

    fPassword:{
        backgroundColor:'white'
    }
})
