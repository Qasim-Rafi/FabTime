import React, { version } from "react";
import { StyleSheet, View, Image } from "react-native";
import { colors } from "../constants/colorsPallet";
import { globalPath } from "../constants/globalPath";
import { hp, wp } from "../helpers/Responsiveness";
import ResponsiveText from "./RnText";
const CheckOutBox = (props) => {
  return (
    <View style={styles.container1}>
       
     <ResponsiveText
          color={colors.black}
          weight={"bold"}
        //   flex={1}
          size={3.8}
          margin={[10, 0, 0, 5]}
          textAlign={'center'}
          
        >
          Check-Out
        </ResponsiveText>
       
        <ResponsiveText
          color={colors.red}
          weight={"bold"}
          flex={1}
          size={3.5}
          margin={[0, 0, 0, 5]}
          textAlign={'center'}
        >
          06:30 PM
        </ResponsiveText>
      
  </View>
);
};
export { CheckOutBox };
const styles = StyleSheet.create({
 
  container1: {
    elevation: 9,
    shadowColor: colors.green,
    shadowOpacity: 0.2,
    height:hp(9),
    // width:wp(40),
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: colors.white,
    // marginHorizontal: 40,
    borderRadius: 10,
    marginTop:5,
    flex:1,
    marginLeft:20,

    
  },
});
