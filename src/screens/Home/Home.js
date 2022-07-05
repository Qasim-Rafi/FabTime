import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  NativeModule,
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
  const netInfo = useNetInfo({
    reachabilityUrl: "https://clients3.google.com/generate_204",
    reachabilityTest: async (response) => response.status === 204,
    reachabilityLongTimeout: 60 * 1000, // 60s
    reachabilityShortTimeout: 5 * 1000, // 5s
    reachabilityRequestTimeout: 15 * 1000, // 15s
    reachabilityShouldRun: () => true,
    shouldFetchWiFiSSID: true, // met iOS requirements to get SSID
    useNativeReachability: false,
  });
  useEffect(() => {
    (async () => {
      var id = await AsyncStorage.getItem("@userId");
      // console.log("id", id);
      setUserid(Number(id));
    })();
    setCheckinTime(formatAMPM(new Date()));
    dispatch(getpresentTeam());
    // if (Platform.OS == "android") {
    //   permissons();
    // } else {
    getSSDid();
    // }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCheckinTime(formatAMPM(new Date()));
    }, 60000);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  const CheckedIn = async () => {
    var obj = {
      // CompanySSID: 'FabIntel',
      CompanySSID: SSID,
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
    // WifiManager.connectToProtectedSSID(ssid, password, isWep).then(
    //   () => {
    //     console.log("Connected successfully!");
    //   },
    //   () => {
    //     console.log("Connection failed!");
    //   }
    // );
    // NetInfo.fetch("wifi").then(state => {

    //   // console.log("Connection type", NetInfo.NetInfoCellularGeneration());
    //   console.log("Is connected?", netInfo);
    // });
    // console.log('click')
    WifiManager.setEnabled(true);
    WifiManager.disconnect();
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
            //console.log("location enabled");
            //WifiManager.connectToProtectedSSID("", "", false)
            WifiManager.getCurrentWifiSSID().then(
              (ssid) => {
                setSSID(ssid);
                _toast("Your current connected wifi SSID is " + ssid);
                // console.log("Your current connected wifi SSID is " + ssid);
              },
              () => {
                //console.log("Cannot get current SSID!");
              }
            );
          })
          .catch((err) => {
            console.log("not permitted to enable location");
          });
      } else {
        _toast("Permission denied");
        //console.log("not granted");
        // Permission denied
      }
      // expected output: "Success!"
    });
    // try {
    //   const ssid=await WifiManager.loadWifiList()
    //   console.log("Your current connected wifi SSID is " + ssid);
    // } catch (error) {
    //   console.log('error', error)
    // }
    // const enabled = await WifiManager.getBSSID();
    // console.log('enabled', enabled)
    // WifiManager.getCurrentWifiSSID().then(
    //   ssid => {
    //     console.log("Your current connected wifi SSID is " + ssid);
    //   },
    //   () => {
    //     console.log("Cannot get current SSID!");
    //   }
    // );

    // NetInfo.fetch("wifi").then(state => {
    //   console.log("SSID", state.details.ssid);
    //   console.log("BSSID", state.details.bssid);
    //   console.log("Is connected?", state.details);
    // });
    // WifiManager.loadWifiList().then(
    //   (ssid) => {
    //     console.log("Your current connected wifi SSID is " + ssid);
    //     _toast("Your current connected wifi SSID is " + ssid);
    //     setSSID(ssid);
    //   },
    //   () => {
    //     console.log("Cannot get current SSID!");
    //     _toast("Cannot get current SSID!");

    //   }
    // );
  };
  const permissons = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Location permission is required for WiFi connections",
        message:
          "This app needs location permission as this is required  " +
          "to scan for wifi networks.",
        buttonNegative: "DENY",
        buttonPositive: "ALLOW",
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      // You can now use react-native-wifi-reborn
      getSSDid();
    } else {
      _toast("Premission denied");
      // Permission denied
    }
  };
  const late = () => {};
  return (
    <Layout title={"FabIntel Team"} address location={globalPath.location}>
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
            data.some((v) => v.userId == userid) ? CheckedOut() : CheckedIn()
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
