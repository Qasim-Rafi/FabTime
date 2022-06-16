import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import ResponsiveText from "../../components/RnText";
import { AttendenceCard } from "../../components/cardView";
import { CheckinBox } from "../../components/CheckinBox";
import TabIcon from "../../components/TabIcon";
import { globalPath } from "../../constants/globalPath";
import { colors } from "../../constants/colorsPallet";
import Fonts from "../../helpers/Fonts";
import Icon from "../../components/Icon";
import Responsiveness, { hp, wp } from "../../helpers/Responsiveness";
import { CheckOutBox } from "../../components/CheckOutBox";

const Profile = ({ navigation }) => {
  const Profile = async () => {
    const res = await Api.post(urls.ADD_ATTENDENCE);
    console.log("res", res);
    if (res && res.success == true) {
      // setData(res.data);
    } else {
    }
  };

  return (
    <Layout title={"Profile"} profile titleSize={5}>
    <View style={{ flexDirection: 'row', margin: 10, }}>
        <CheckinBox
        title='10 Mar,2022'
        subTitle='Join Date'
        titleColor={colors.blue}
        />
        
       <CheckinBox
        title='$1000.00'
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
        <AttendenceCard />
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
