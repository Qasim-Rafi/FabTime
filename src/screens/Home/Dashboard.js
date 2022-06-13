import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground } from "react-native";
import Responsiveness, { hp, wp } from "../../helpers/Responsiveness";
import { colors } from "../../constants/colorsPallet";
import { SafeAreaView } from "react-native-safe-area-context";
import { Grid } from 'react-native-animated-spinkit'
import Loader from "../../components/loader";
import { globalPath } from "../../constants/globalPath";
import ResponsiveText from "../../components/RnText";
import DropDown from "../../components/DropDown";
import Fonts from "../../helpers/Fonts";
const Dashboard = () => {
    const [loader, setLoader] = React.useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoader(true)

        }, 5000);
    });

    return (
        <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
            <View style={{ backgroundColor: colors.white, flex: 1 }}>

                <View style={styles.screeninfo}>
                    <ResponsiveText
                        margin={[20, 0, 0, 30]}
                        fontFamily={Fonts.Bold}
                        size={8}
                        color={colors.white}
                    >
                        Fabintel
                    </ResponsiveText>
                    <ResponsiveText
                        margin={[0, 0, 0, 30]}
                        fontFamily={Fonts.Bold}
                        size={3.5}
                        color={colors.white}
                    >
                        fabintel international lahore, pakistan
                    </ResponsiveText>
                </View>
                <View style={styles.footer}>

                </View>
            </View>
        </SafeAreaView>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.blue1,
      },
      footer: {
        flex: 1,
        backgroundColor: colors.white,
        // borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        // alignItems: 'center'
        // marginTop:hp(0.5)
      },
      image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      screeninfo: {
        // flex: 0.4,
        justifyContent: "center",
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
});

// rnfes
