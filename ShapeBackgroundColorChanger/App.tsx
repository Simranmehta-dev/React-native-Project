import React,{useState} from "react";
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native';

const App=()=>{

    const [box1bg,setBox1bg]=useState("#2475B0");
    const [box2bg,setBox2bg]=useState("#2475B0");
    const [box3bg,setBox3bg]=useState("#2475B0");
    const [box4bg,setBox4bg]=useState("#2475B0");
    const [box5bg,setBox5bg]=useState("#2475B0");
    const [box6bg,setBox6bg]=useState("#2475B0");
    const [box7bg,setBox7bg]=useState("#2475B0");
    const [box8bg,setBox8bg]=useState("#2475B0");
    const [fullbg,setfullbg]=useState("#2475B0")

    const generateColor1 = () => {
      const hexRange = "0123456789ABCDEF"
      
      const generateBoxColor = () => {
        let color = "#"
        for (let i = 0; i < 6; i++) {
          color += hexRange[Math.floor(Math.random() * 16)];
        }
        return color;
      };
    setBox1bg(generateBoxColor());
    setBox2bg(generateBoxColor());
    setBox3bg(generateBoxColor());
    setBox4bg(generateBoxColor());
    setBox5bg(generateBoxColor());
    setBox6bg(generateBoxColor());
    setBox7bg(generateBoxColor());
    setBox8bg(generateBoxColor());
    setfullbg(generateBoxColor());
       
    }

    const generateColor=()=>{
      generateColor1();
    }



    return(
      <View style={[{backgroundColor:fullbg}]}>
        
        <View style={styles.firstContainer}>

       
       <View style={[styles.box1,{backgroundColor:box1bg}]}>
        <Text style={styles.box2Txt}>Box11</Text>
       </View>


       <View style={[styles.box3,{backgroundColor:box2bg}]}>
        <Text style={styles.box2Txt}>Box12</Text>
       </View>


       <View style={[styles.box3,{backgroundColor:box3bg}]}>
        <Text style={styles.box2Txt}>Box13</Text>
       </View>


       <View style={[styles.box1,{backgroundColor:box4bg}]}>
        <Text style={styles.box1Txt}>Box14</Text>
       </View>


       <View style={[styles.box1,{backgroundColor:box5bg}]}>
        <Text style={styles.box2Txt}>Box15</Text>
       </View>


       <View style={[styles.box3,{backgroundColor:box6bg}]}>
        <Text style={styles.box2Txt}>Box16</Text>
       </View>


       <View style={[styles.box3,{backgroundColor:box7bg}]}>
        <Text style={styles.box2Txt}>Box3</Text>
       </View>

       <View style={[styles.box1,{backgroundColor:box8bg}]}>
        <Text style={styles.box1Txt}>Box1</Text>
       </View>

       


       </View>
       <TouchableOpacity style={styles.btn} onPress={generateColor}>
        
          <Text style={styles.actionBtnTxt}>Press me</Text>
       
       </TouchableOpacity>


      </View>
    )
}

const styles=StyleSheet.create({
box1:{
  height:200,
  width:200,
  //backgroundColor:"#ffffff",
  
  alignItems:'center',
  justifyContent:'center',
},
box2:{
  height:200,
  width:200,
  backgroundColor:"#E44236",
  
  alignItems:'center',
  justifyContent:'center',
},
firstContainer:{
  flex:1,
  flexDirection:'row',
  flexWrap:'wrap'
},
box2Txt:{
  fontSize:20,
  color:'#000000'
},
box1Txt:{
  fontSize:20,
  color:'#000000'
},
box3:{
  height:200,
  width:200,
  backgroundColor:"#E44236",
  borderRadius:100,
  alignItems:'center',
  justifyContent:'center',
},
box4:{
  height:200,
  width:200,
  backgroundColor:"#ffffff",
  borderRadius:100,
  alignItems:'center',
  justifyContent:'center',
},
btn:{
  borderRadius: 12,
    backgroundColor: "#6A1B4D",
    alignItems:'center',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 810,
   
   
},
actionBtnTxt: {
  fontSize: 24,
  color: "#FFFFFF",
  textTransform: "uppercase"
}

})

export default App
