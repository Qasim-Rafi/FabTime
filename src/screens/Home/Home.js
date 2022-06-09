import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Responsiveness, { hp, wp } from "../../helpers/Responsiveness";
import { colors } from "../../constants/colorsPallet";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  
  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
     <View>
       <Text>,snms,</Text>
     </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.green,
  },
  row:{
    flexDirection: "row", justifyContent: 'space-between' 
  },
  boxText: {
    fontSize: hp(1.7),
    alignSelf: "center",
    marginTop: 5,
  },
  boxTextno: {
    fontSize: hp(2),
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 5,
    color: colors.green,
  },
  footer: {
    flex: 1.6,
    backgroundColor: colors.white,
    paddingTop:10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

  },
  middlebar: {
    flexDirection: "row",
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    alignItems: "center",
    // justifyContent:'space-evenly',
    borderTopRightRadius: 25,
    paddingHorizontal: hp(1),
    alignSelf: "center",
  },
  Boxes: {
    height: hp(22),
    width: wp(40),
    backgroundColor: colors.white,
    elevation: 0.4,
    justifyContent: "center",
    borderRadius: 10,
  },
  boxImages: {
    height: wp(20),
    width: wp(20),
    alignSelf: "center",
  },
  Middle_Text: {
    fontSize: hp(1.1),
    marginTop: 2.8,
    color: colors.black,
  },
  middle_images: {
    flex: 1,
    borderRightWidth: 0.4,
    borderColor: colors.grey,
    alignItems: "center",
    paddingVertical: hp(1.7),
  },
});

// rnfes
