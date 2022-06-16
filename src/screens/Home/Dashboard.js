import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Responsiveness, { hp, wp } from "../../helpers/Responsiveness";
import { colors } from "../../constants/colorsPallet";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalPath } from "../../constants/globalPath";
import ResponsiveText from "../../components/RnText";
import Fonts from "../../helpers/Fonts";
import Icon from "../../components/Icon";
import { CardView } from "../../components/cardView";
import TabIcon from "../../components/TabIcon";
import Graph from "../../components/Graph";
import { routeName } from "../../constants/routeName";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { getpresentTeam } from "../../redux/actions/user.actions";

const Dashboard = ({ navigation }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.userReducers.presentTeam.data);
console.log('data', data)
  const [loader, setLoader] = React.useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoader(true);
  //   }, 5000);
  // });

  useEffect(() => {
    dispatch(getpresentTeam());
  }, []);

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <View style={{ backgroundColor: colors.white, flex: 1 }}>
        <View style={styles.screeninfo}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <ResponsiveText
              margin={[20, 0, 0, 30]}
              fontFamily={Fonts.Bold}
              size={8}
              color={colors.white}
            >
              Fabintel
            </ResponsiveText>
            <View>
              <Icon
                style={{ backgroundColor: colors.white }}
                borderRadius={20}
                size={35}
                margin={[0, 5, 0, 0]}
                source={globalPath.user}
              />
              <View
                style={{
                  backgroundColor: colors.lightgreen,
                  height: 10,
                  width: 10,
                  position: "absolute",
                  borderRadius: 20,
                  marginLeft: wp(6),
                }}
              >

              </View>
            </View>
                 </View>

          <View style={{ flexDirection: "row" }}>
            <Icon
              size={20}
              margin={[0, 5, 10, 25]}
              source={globalPath.location}
            />
            <ResponsiveText
              margin={[0, 0, 0, 0]}
              fontFamily={Fonts.Bold}
              size={3.5}
              color={colors.white}
            >
              fabintel international lahore, pakistan
            </ResponsiveText>
          </View>
        </View>
        <View style={{ backgroundColor: colors.blue1, flex: 1 }}>
          <View style={styles.footer}>
            <View style={styles.container1}>
              <Graph />
            </View>
            <Card flexDirection={"row"}>
              <TabIcon
                title="Leaves"
                titleColor="#F6B707"
                backgroundColor="#FFF9E6"
                source={globalPath.leaves}
               
              />
              <TabIcon
                title="Payslip"
                titleColor="#5958DA"
                backgroundColor="#F1F5FF"
                source={globalPath.payslip}
              />
              <TabIcon
                title="Requests"
                titleColor="#0C7E44"
                backgroundColor="#E4FEF1"
                source={globalPath.requests}
              />
              <TabIcon
                title="Notification"
                titleColor="#00AEEF"
                backgroundColor="#E9F9FF"
                source={globalPath.notification}
                onPress={() => navigation.navigate(routeName.NOTIFICATION)}
              />
            </Card>
            <Card>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                <ResponsiveText color={colors.blue1}>
                  Fabintel Team
                </ResponsiveText>
                <TouchableOpacity onPress={()=>navigation.navigate(routeName.PRESENT_TEAM,data)}>
                  <ResponsiveText color={"#00AEEF"}>View All</ResponsiveText>
                </TouchableOpacity>
              </View>
              {data.length > 0 ? data.map((item,index) =>index<4? <CardView
              onPress={() => navigation.navigate(routeName.ATTENDENCE_DETAIL)}
              />:null) : null}
            </Card>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container1: {
    elevation: 9,
    shadowColor: colors.green,
    shadowOpacity: 0.2,
    padding: 20,
    backgroundColor: colors.white,
    top: -20,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: colors.blue1,
  },
  footer: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopRightRadius: 30,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screeninfo: {
    // flex: 0.2,
    justifyContent: "center",
    paddingBottom: 30,
    // alignItems: "center",
    backgroundColor: colors.blue1,
    borderBottomLeftRadius: 35,
  },
  logo: {
    height: hp(20),
    width: wp(40),
    resizeMode: "contain",
    // marginBottom: 20,
    alignItems: "center",
  },
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

// rnfes
