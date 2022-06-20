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
import { getUserAttendanceRecord, getUserProfile } from "../../redux/actions/user.actions";
import { _toast } from "../../constants/Index";
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions } from '@react-navigation/native';

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const ProfileData = useSelector((state) => state.userReducers.getProfileData.data);
  const AttendanceRecord = useSelector((state) => state.userReducers.getAttendanceRecord.data);
  console.log("profile", ProfileData)
  console.log("AttendanceRecord", AttendanceRecord)
  useEffect(() => {
    dispatch(getUserProfile());
    dispatch(getUserAttendanceRecord());
  }, []);
  const logout = () => {
    Alert.alert('Logout', 'Confirm Logout', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: async () => {
          // await AsyncStorage.removeItem('@token');
          // await AsyncStorage.removeItem('cartData');
          // await AsyncStorage.removeItem('@userId');
          await AsyncStorage.clear();

          navigation.dispatch(StackActions.replace('Auth'));
        },
      },
    ]);
  };
  return (

    <Layout userimg={ProfileData.fullPath} Field={"React native developer"} username={ProfileData.username} title={"Profile"} profile titleSize={5}
      source={globalPath.checkin}
      disabled={false}
      onPress={logout}
    >
      <View style={{ flexDirection: 'row', margin: 10, }}>
        <CheckinBox
          title={ProfileData.createdDateTime}
          subTitle='Join Date'
          titleColor={colors.blue}
        />

        <CheckinBox
          title={ProfileData.createdDateTime}
          subTitle='Net Salary'
          titleColor={colors.blue}
        />
      </View>
      <View>
        <ResponsiveText
          margin={[0, 0, 0, 8]}
          // fontFamily={Fonts.LightItalic}
          size={5}
          color={colors.blue1}>May Attendence</ResponsiveText>
      </View>

      <View style={styles.tabContainer}>

        <TabIcon
          title="Present"
          CircleText={'10'}
          CircleColor={colors.green}
          titleSize={3.4}
        />
        <TabIcon
          title="Absent"
          titleSize={3.4}
          CircleText={'30'}
          CircleColor={colors.red}

        />
        <TabIcon
          title="Late"
          titleSize={3.4}
          CircleText={'27'}
          CircleColor={colors.blue1}

        />
        <TabIcon
          title="Leave"
          titleSize={3.4}
          CircleText={'9'}
          CircleColor={colors.yellow3}
        />
      </View>
      <View style={{ backgroundColor: colors.white, borderRadius: 10, elevation: 10, shadowOpacity: 0.2, }}>
        {AttendanceRecord.length > 0 ? AttendanceRecord.map((item, index) => <AttendenceCard userimg={item.fullPath} checkTime={item.createdDateTime} />) : null}
      </View>
    </Layout>
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
