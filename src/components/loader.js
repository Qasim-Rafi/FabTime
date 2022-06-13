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
import { Grid } from 'react-native-animated-spinkit'

import { colors } from "../constants/colorsPallet";
export default function Loader(props) {
return(
<View style={{
          // backgroundColor: "rgba(65, 65, 65, 0.5)",
          alignItems:'center'
          }}>
            <Grid size={48} color={colors.darkblue} />

          </View>
)


}