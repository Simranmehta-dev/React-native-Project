import React from "react";
import {View,Text,ScrollView,SafeAreaView} from 'react-native'
import Form from "./component/formikaForm";

const App=()=>{
  return(
    <ScrollView>
      <SafeAreaView>
        <Form/>
      </SafeAreaView>
    </ScrollView>
  )
}

export default App
