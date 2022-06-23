import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import ResponsiveText from "../../components/RnText";
import { AttendenceCard } from "../../components/cardView";
import { CheckinBox } from "../../components/CheckinBox";
import TabIcon from "../../components/TabIcon";
import { globalPath } from "../../constants/globalPath";
import { colors } from "../../constants/colorsPallet";
import Responsiveness, { hp, wp } from "../../helpers/Responsiveness";
import { useDispatch, useSelector } from "react-redux";
import { routeName } from "../../constants/routeName";
import {
  getUserAttendanceRecord,
  getUserProfile,
} from "../../redux/actions/user.actions";
import Loader from "../../components/loader";
import {PreView} from '../../constants/Index'
import { _toast } from "../../constants/Index";
import AsyncStorage from "@react-native-community/async-storage";
import { StackActions } from "@react-navigation/native";
import Card from "../../components/Card";
import { ScrollView } from "react-native-gesture-handler";
import RecordNotFound from "../../components/RecordnotFound";
import { useState } from "react";
const Profile = (props,{navigation}) => {
  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch();
  const ProfileData = useSelector(
    (state) => state.userReducers.getProfileData.data
  );
  const Loading = useSelector(
    (state) => state.userReducers.getProfileData.refreshing
  );
  const AttendanceRecord = useSelector(
    (state) => state.userReducers.getAttendanceRecord.data
  );
  console.log("profile", ProfileData);
  console.log("AttendanceRecord", AttendanceRecord);
  useEffect(() => {
    dispatch(getUserProfile());
    dispatch(getUserAttendanceRecord());
  }, []);
  const logout = () => {
    Alert.alert("Logout", "Confirm Logout", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: async () => {
          // await AsyncStorage.removeItem('@token');
          // await AsyncStorage.removeItem('cartData');
          // await AsyncStorage.removeItem('@userId');
          await AsyncStorage.clear();

          navigation.dispatch(StackActions.replace("Auth"));
        },
      },
    ]);
  };
  return (
    <>
    <Layout
    navigation={navigation}
    backbutton
      userimg={ProfileData.fullPath}
      Field={"React native developer"}
      username={ProfileData.username}
      title={"Profile"}
      profile
      titleSize={5}
      source={globalPath.checkin}
      disabled={false}
      onPress={logout}
    >
      <View style={{ flexDirection: "row", margin: 10 }}>
        <CheckinBox
          subTitle="Resume"
          onPress={()=>PreView(setisLoading)}
          disabled={false}
          tintColor={colors.yellow1}
          source={globalPath.report}

        />

        <CheckinBox onPress={() => props.navigation.navigate(routeName.EMPLOYEE_PROFILE,ProfileData)}
          subTitle="Emoplyee card"
          tintColor={colors.blue1}
          disabled={false}
          source={globalPath.report}
          

        />
      </View>
      <View>
        <ResponsiveText
          margin={[0, 0, 0, 8]}
          size={5}
          color={colors.blue1}
        >
          May Attendence
        </ResponsiveText>
      </View>

      <Card flexDirection={'row'}>
        <TabIcon
          title="Present"
          CircleText={"19"}
          CircleColor={colors.green}
          titleSize={3.2}
        />
        <TabIcon
          title="Absent"
          titleSize={3.2}
          CircleText={"1"}
          CircleColor={colors.red}
        />
        <TabIcon
          title="Late"
          titleSize={3.2}
          CircleText={"4"}
          CircleColor={colors.blue1}
        />
        <TabIcon
          title="Leave"
          titleSize={3.2}
          CircleText={"1"}
          CircleColor={colors.yellow3}
        />
      </Card>
      <Card>
        <ScrollView showsVerticalScrollIndicator={false}>
          {AttendanceRecord.length > 0
            ? AttendanceRecord.map((item, index) => (
                <AttendenceCard
                  userimg={item.fullPath}
                  checkTime={item.createdDateTime}
                />
              ))
            : <RecordNotFound/>}
            <View style={{height:hp(60)}}>
                </View>
        </ScrollView>
      </Card>
    </Layout>
     {isLoading||Loading?
      <Loader/>
        :
        undefined
     }
     </>
  );
};
export default Profile;
const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.white,
    shadowOpacity: 0.1,
    padding: 5,
    margin: 5,
    marginHorizontal: 15,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0.1,
    },
  },
});
