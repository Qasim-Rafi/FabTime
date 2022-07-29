import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  NativeModule,
  Alert,
} from "react-native";
import { colors } from "../../constants/colorsPallet";
import Checkin from "../../components/Checkin";
import Api from "../../redux/lib/api";
import urls from "../../redux/lib/urls";
import Layout from "../../components/Layout";
import { globalPath } from "../../constants/globalPath";
import { wp } from "../../helpers/Responsiveness";
import ResponsiveText from "../../components/RnText";
import { routeName } from "../../constants/routeName";
import { _toast } from "../../constants/Index";
import { formatAMPM, getpresentTeam } from "../../redux/actions/user.actions";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";
import WifiManager from "react-native-wifi-reborn";
import RNAndroidLocationEnabler from "react-native-android-location-enabler";

import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.userReducers.presentTeam.data);
  const [CheckinTime, setCheckinTime] = useState("");
  const [userid, setUserid] = useState("");
  const [SSID, setSSID] = useState("");
  useEffect(() => {
    (async () => {
      var id = await AsyncStorage.getItem("@userId");
      // console.log("id", id);
      setUserid(Number(id));
    })();
    setCheckinTime(formatAMPM(new Date()));
    dispatch(getpresentTeam());
    // if (Platform.OS == "ios") {
    //   // permissons();
    // } else {
    // getSSDid();
    // }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCheckinTime(formatAMPM(new Date()));
    }, 60000);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);


  const verifytocheckout=()=>{
    Alert.alert("Check", "Confirm checkout", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress:()=>  CheckedOut()
      },
    ]);
  }
  const CheckedIn = async (ssid,IpAddress) => {
    var obj = {
      CompanySSID: 'FabIntel',
      // CompanySSID: ssid,
      IpAddress:IpAddress
    };
    const res = await Api.post(urls.ADD_ATTENDENCE, obj);
    console.log("res", res);
    if (res && res.success == true) {
      // setData(res.data);
      dispatch(getpresentTeam());
      _toast("Checked In");
    } else {
      _toast(res.message);
    }
  };
  const CheckedOut = async () => {
    var id = data?.find((v) => v.userId == userid)?.id;
    const res = await Api.get(urls.CHECKOUT + id);
    console.log("res", res);
    if (res && res.success == true) {
      // setData(res.data);
      dispatch(getpresentTeam());
      _toast("Checked Out");
    } else {
    }
  };
  const getSSDid = async () => {


    // WifiManager.setEnabled(true);
    // WifiManager.disconnect();


    //WifiManager.forceWifiUsage(true);
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "",
        message: "",
        buttonNegative: "",
        buttonPositive: "",
      }
    ).then((granted) => {
      //console.log(granted);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // console.log("granted");
        RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
          interval: 10000,
          fastInterval: 5000,
        })
          .then((data) => {
            //   WifiManager.connectToProtectedSSID("FabIntel", "Fab1nt3l", false)
            //   .then(
            //     () => {
            //       console.log("connectToProtectedSSID successfully!");
            //         },
            //     (reason) => {
            //     //console.log("connectToProtectedSSID failed!");
            //     //console.log(reason);
            // }
            // );
            // console.log("location enabled");
            NetInfo.fetch().then(state => {
              // console.log("Connection type", state.type);
              // console.log("Is connected?", state);
            //WifiManager.connectToProtectedSSID("", "", false)
            //   1c:5f:2b:05:9d:f0
            if (state.isWifiEnabled==true) {
              
              WifiManager.getCurrentWifiSSID().then(
                (ssid) => {
                  NetInfo.fetch().then(state => {
                    // console.log("Connection type", state.type);
                    // console.log("Is connected?", state);
                  });
                  setSSID(ssid);
                  CheckedIn(ssid,state.details.ipAddress)
                  // _toast("Your current connected wifi SSID is " + ssid);
                  // console.log("Your current connected wifi SSID is " + ssid);
                },
                () => {
                  //console.log("Cannot get current SSID!");
                }
              );
            }else{
              // _toast("You are currently connected with "+state.details.carrier +' '+state.details.cellularGeneration);
              _toast("Not Allowed To CheckIn OutSide of the Paremeter");

            }
          });

          })
          .catch((err) => {
            console.log("not permitted to enable location");
          });
      } else {
        _toast("Permission denied");
      }
    });
  
  };
  return (
    <Layout title={"FabIntel"} address location={globalPath.location}>
      <View style={{ marginTop: "10%" }}>
        {data.some((v) => v.userId == userid) ? (
          <ResponsiveText textAlign={"center"}>
            You have checked in at{" "}
            {formatAMPM(data?.find((v) => v.userId == userid)?.createdDateTime)}
          </ResponsiveText>
        ) : null}
        <View style={{ height: wp(5) }} />
        <Checkin
          time={CheckinTime}
          onPress={() =>
            data.some((v) => v.userId == userid) ? verifytocheckout() : getSSDid()
          }
          data={data}
          userid={userid}
        />

        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            marginTop: wp(10),
          }}
        >
          <TouchableOpacity
            disabled={data.some((v) => v.userId == userid)}
            onPress={() => navigation.navigate(routeName.APPLY_LATE)}
          >
            <ImageBackground source={globalPath.latebutton} style={styles.btn}>
              <ResponsiveText color={colors.black}>Late</ResponsiveText>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate(routeName.APPLYLEAVES)}
          >
            <ImageBackground source={globalPath.leavebutton} style={styles.btn}>
              <ResponsiveText color={colors.black}>Apply Leave</ResponsiveText>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue1,
  },
  btn: {
    height: wp(10),
    width: wp(30),
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
