import { Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Calendar } from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import { useTranslation, initReactI18next } from "react-i18next";
import themeContext from '../config/themeContext';




export default function Calendas() {
  const theme = useContext(themeContext);
  return (
    <View style={{backgroundColor: theme.background, height: '100%'}}>
        <Calendar/>
    </View>
  );
};
