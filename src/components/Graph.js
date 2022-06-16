import React, { version } from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import ActivityRings from "react-native-activity-rings";  
import { colors } from "../constants/colorsPallet";

const Graph = (props) => {
  const activityData = [
    {
      label: "Present",
      value: 0.6,
      
      color:colors.green,
    },
    {
  
      label: "Absent",
      value: 0.1,
      color:colors.red,
    },
    {
      label:"Late",
      value: 0.2,
      color:colors.blue1,
      backgroundColor: "#cccccc"
    },
    {
      label:"Leave",
      value: 0.1,
      color:colors.yellow,
      backgroundColor: "#cccccc"
    }
  ];
    
    const activityConfig = { 
      width: 180,  
      height: 180,
      radius: 15,
      ringSize:11,
    };
  return (

<ActivityRings data={activityData} config={activityConfig} legend={true} theme={"light"} /> 
  );
};
export default Graph;
const styles = StyleSheet.create({
  container: {
    elevation: 9,
    shadowColor: colors.black,
    shadowOpacity: 1,
    padding:20,
    shadowOffset: {
      width: 90,
      height: 100,
    },
    backgroundColor: colors.white,
    top: -10,
    marginHorizontal: 20,
    borderRadius: 10
  },
});
