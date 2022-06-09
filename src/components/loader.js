import React, { useEffect, version } from "react";

import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    ImageBackground,
    ScrollView
} from 'react-native';
import { BarIndicator } from "react-native-indicators";
import { colors } from "../constants/colorsPallet";
export default function Loader(props) {
return(
    <View
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: "rgba(65, 65, 65, 0.5)",
      flex: 1,
    }}
  >
    <BarIndicator color={colors.green} size={25} />
  </View>
)


}