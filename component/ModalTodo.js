import { View, Text,TouchableOpacity,TextInput } from "react-native";
import { AntDesign, Ionicons, Foundation, FontAwesome, Entypo } from "@expo/vector-icons";
import {React,useState} from "react";
import tempData from './../contain/tempData';
import stylesModalTodo from "../styles/stylesModalTodo";
import { set } from 'react-native-reanimated';
import { isEnabled } from "react-native/Libraries/Performance/Systrace";
import { useTranslation, initReactI18next } from "react-i18next";

const ModalTodo = (props) => {
  const { t } = useTranslation('modal');
  const [data, setdata] = useState (tempData)

  // const [idItem, setidItem] = useState()
    const [State , setState] = useState(
        {
            name: props.list.name,
            idd: props.list.id
        }
    )  
    
    const [InputText, setInputText] = useState (State.name)
    const closeModal = () => {
        props.closeModal();
    }
    const onPressSave = () => {
      const a = State.idd
      const newData =data.map((item,index) => {
        if(index === a-1)
          {
          item.name = 'InputText'
          
          console.log(item)
          return item
          }
          
          return item
          
      })
      setdata(newData)
    //  console.log(State.idd)
      // console.log(data)
       console.log(InputText)
     
      closeModal();
    }
  return (
    <View>
      <TouchableOpacity onPress={closeModal}>
        <Ionicons name="md-close-outline" style={{ alignSelf: "flex-end", fontSize: 30 }} />
      </TouchableOpacity>
      
      <View style={{ alignItems: "center", justifyContent: "center", marginVertical: 200 }}>
        <Text style={stylesModalTodo.title}>{t('translation.change')}</Text>

        <TextInput 
        style={[stylesModalTodo.input]}  
        onChangeText={(text) => setInputText({text})}
        defaultValue = {InputText}
        editable = {true}
        multiline = {false}

        />

        <View>
        <TouchableOpacity style={[stylesModalTodo.create]} onPress={ () => onPressSave()}>
          <Text style={{ fontWeight: "800", color: "white", fontSize: 20 }}>{t('translation.save')}</Text>
        </TouchableOpacity>
        
        </View>
        
      </View>
    </View>
  );
};

export default ModalTodo;
