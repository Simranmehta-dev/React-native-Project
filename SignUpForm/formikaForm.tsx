import React from "react";
import {View,Text,TextInput,StyleSheet, TouchableOpacity} from 'react-native'
import { Formik } from "formik";
import * as Yup from 'yup';
const valSchema=Yup.object().shape({
    name:Yup.string()
    .min(3,'Name must be 3 characters long')
    .max(20,'Name can not be longer than 20 characters')
    .required('Name is a required feild'),
    email:Yup.string()
    .email('Invalid email')
    .required('email is a required feild'),
    message:Yup.string()
    .min(10,'Message must be 10 character long')
    .max(500,'Message must be at most 500 characters')
    .required('Message is required'),
})

const Form=()=>{
    return(
       <Formik
       initialValues={{name:'',email:'',message:''}}
       validationSchema={valSchema}
       onSubmit={(values,{resetForm})=>{
        console.log(values);
        resetForm();
       }}
       >

        {(
            {
                values,
                
                handleChange,
                handleBlur,
                handleSubmit,
                handleReset,
                errors,
                touched
                
                /* and other goodies */
              }
        )=>(
            <View>
            <View >
                <Text style={styles.textHeading}>SignUp Form</Text>
            </View>
            <View style={styles.nameConatiner}>
                <Text style={styles.nameStyle}>Name:</Text>
                <TextInput style={styles.inputFeildName} placeholder="Enter your name" 
                onChangeText={handleChange('name')} // Handle value changes
                onBlur={handleBlur('name')} // Handle blur events
                value={values.name}
                />
                {touched.name && errors.name && (
              <Text style={styles.errorText}>{errors.name}</Text>
            )}
            </View>
            <View style={styles.emailContainer}>
                <Text style={styles.nameStyle}>Email:</Text>
                <TextInput style={styles.inputFeildEmail} placeholder="Enter your email" 
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                />
                  {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
            </View>
            <View style={styles.msgContainer}>
                <Text style={styles.msgStyle}>Message:</Text>
                <TextInput style={styles.msgFeild} placeholder="Enter your msg" 
                onChangeText={handleChange('message')}
                onBlur={handleBlur('message')}
                value={values.message}
                multiline
                textAlignVertical="top"
                />
                 {touched.message && errors.message && (
              <Text style={styles.errorText}>{errors.message}</Text>
            )}
            </View>
            <TouchableOpacity onPress={()=>{
                handleReset();
            }}>
            <Text>Submit</Text>
            </TouchableOpacity>

        </View> 

        )}

       </Formik> 
    )
}

const styles=StyleSheet.create({
    textHeading:{
       fontSize:24,
       fontWeight:'bold',
      
       textAlign: 'center'
    },
    inputFeildName:{
        
        borderColor:'#3498DB',
        height:45,
        width:325,
        borderWidth:2,
        marginLeft:5
    },
    nameStyle:{
       fontSize:20
    },
    nameConatiner:{
        borderColor:'#EF5354',
        height:100,
        width:400,
        borderWidth:2,
        flex:1,
        flexDirection:'column',
        marginTop:10,
        
    },
    inputFeildEmail:{
        borderColor:'#3498DB',
        height:35,
        width:325,
        borderWidth:2,
        marginLeft:5 
    },
    emailContainer:{
        borderColor:'#F4C724',
        height:90,
        width:400,
        borderWidth:2,
        flex:1,
        flexDirection:'column',
        marginTop:10 ,
        paddingHorizontal: 10,
    },
    msgContainer:{
        borderColor:'#758AA2',
        height:300,
        width:400,
        borderWidth:2,
        marginTop:10   
    },
    msgStyle:{
        fontSize:20
    },
    msgFeild:{
        borderColor:'#3498DB',
        height:250,
        width:375,
        borderWidth:2,
        //marginLeft:5,
        textAlignVertical: 'top'
        
    },
    errorText: {
        fontSize: 12,
        color: '#ff0d10',
        // flex:1,
        // flexDirection:'row'
      },
})

export default Form




{/* <View>
            <View >
                <Text style={styles.textHeading}>SignUp Form</Text>
            </View>
            <View style={styles.nameConatiner}>
                <Text style={styles.nameStyle}>Name:</Text>
                <TextInput style={styles.inputFeildName} placeholder="Enter your name" />
            </View>
            <View style={styles.emailContainer}>
                <Text style={styles.nameStyle}>Email:</Text>
                <TextInput style={styles.inputFeildEmail} placeholder="Enter your email" />
            </View>
            <View style={styles.msgContainer}>
                <Text style={styles.msgStyle}>Message:</Text>
                <TextInput style={styles.msgFeild} placeholder="Enter your msg" />
            </View>

        </View> */}
