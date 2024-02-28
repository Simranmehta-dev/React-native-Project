import React from "react";

import {View,Text,SafeAreaView,ScrollView} from 'react-native'
import FlatCard from "./components/FlatCards";
import ElevatedCard from "./components/ElevatedCard";
import FancyCard from "./components/FancyCard";
import ActionCard from "./components/ActionCard";
import ContactList from "./components/ContactList";

const App=()=>{
  return(
     <SafeAreaView>
      <ScrollView>

      <FlatCard/>
      <ElevatedCard/>
      
      <FancyCard/>
      <FancyCard/>
      
      <ActionCard/>
      <ContactList/>
      </ScrollView>
     </SafeAreaView>
  )
}

export default App
