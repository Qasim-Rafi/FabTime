import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import ResponsiveText from "../../components/RnText";
import { AttendenceCard } from "../../components/cardView";
import { CheckinBox } from "../../components/CheckinBox";
import TabIcon from "../../components/TabIcon";
import { colors } from "../../constants/colorsPallet";
import { routeName } from "../../constants/routeName";
import { useState } from "react";
import Api from "../../redux/lib/api";
import urls from "../../redux/lib/urls";
import { useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import RecordNotFound from "../../components/RecordnotFound";
import {PreView} from '../../constants/Index'
import Loader from "../../components/loader";
import { globalPath } from "../../constants/globalPath";

const AttendenceDetails = (props) => {
  const data = props.route.params;
  const [isLoading, setisLoading] = useState(false);
  const [attendacedata, setData] = useState([]);
  useEffect(() => {
    getAttendancyById();
  }, []);

  const getAttendancyById = async () => {
    setisLoading(true);
    const res = await Api.get(
      urls.GET_MONTHLY_ATTENDANCE_OF_USER + "/" + data.id
    );
    console.log('res', res)
    if (res && res.success == true) {
      setisLoading(false);

      setData(res.data);
    } else {
      setisLoading(false);
    }
  };
  return (
    <Layout
      navigation={props.navigation}
      backbutton
      username={data.fullName}
      title={"Employess Detail"}
      profile
      titleSize={5}
    >
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        {/* <CheckinBox
          onPress={() =>
            props.navigation.navigate(
              routeName.EMPLOYEE_PROFILE,
              props.route.params
            )
          }
          title="Check-In"
          subTitle="10:30 AM"
          titleColor={colors.black}
          subTitlecolor={colors.green}
          disabled={false}
        />

        <CheckinBox
          title="Check-Out"
          subTitle="06:30 PM"
          titleColor={colors.black}
          subTitlecolor={colors.red}
        /> */}
         <CheckinBox
          subTitle="Resume"
          onPress={()=>PreView(setisLoading)}
          disabled={false}
          tintColor={colors.yellow1}
          source={globalPath.report}

        />

        <CheckinBox 
        onPress={() =>
          props.navigation.navigate(
            routeName.EMPLOYEE_PROFILE,
            props.route.params
          )
        }
          subTitle="Emoplyee card"
          tintColor={colors.blue1}
          disabled={false}
          source={globalPath.report}
          

        />
      </View>
      <View>
        <ResponsiveText
          margin={[0, 0, 0, 8]}
          // fontFamily={Fonts.Bold}
          size={5}
          color={colors.blue1}
        >
          May Attendence
        </ResponsiveText>
      </View>

      <View style={styles.tabContainer}>
        <TabIcon
          title="Present"
          CircleText={"10"}
          CircleColor={colors.green}
          titleSize={3.4}
        />
        <TabIcon
          title="Absent"
          titleSize={3.4}
          CircleText={"30"}
          CircleColor={colors.red}
        />
        <TabIcon
          title="Late"
          titleSize={3.4}
          CircleText={"27"}
          CircleColor={colors.blue1}
        />
        <TabIcon
          title="Leave"
          titleSize={3.4}
          CircleText={"9"}
          CircleColor={colors.yellow3}
        />
      </View>
      <View
        style={{
          backgroundColor: colors.white,
          borderRadius: 10,
          elevation: 10,
          shadowOpacity: 0.2,
          shadowRadius: 10,
          flex: 1,
        }}
      >
        <ScrollView>
          {attendacedata.length > 0 ? (
            attendacedata.map((item, index) => {
              return (
                <AttendenceCard
                  data={item}
                  userimg={item.fullPath}
                  checkTime={item.createdDateTime}
                />
              );
            })
          ) : isLoading ? null : (
            <RecordNotFound />
          )}
        </ScrollView>
      </View>
      {isLoading ? <Loader /> : undefined}
    </Layout>
  );
};

export default AttendenceDetails;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.white,
    shadowOpacity: 0.1,
    // padding: 5,
    margin: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0.1,
    },
  },
});
