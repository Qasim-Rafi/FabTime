import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground } from "react-native";
import Responsiveness, { hp, wp } from "../../helpers/Responsiveness";
import { colors } from "../../constants/colorsPallet";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalPath } from "../../constants/globalPath";
import ResponsiveText from "../../components/RnText";
import Fonts from "../../helpers/Fonts";
import Icon from "../../components/Icon";
import CardView from "../../components/cardView";
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
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <ResponsiveText
                        margin={[20, 0, 0, 30]}
                        fontFamily={Fonts.Bold}
                        size={8}
                        color={colors.white}>
                        Fabintel
                    </ResponsiveText>
                    <View>
                    <Icon style={{backgroundColor:colors.white}}borderRadius={20} size={35} margin={[0,5,0,0]} source={globalPath.user} />
                    <View style={{backgroundColor:colors.lightgreen,height:10,width:10,position:'absolute',borderRadius:20,marginLeft:wp(6)}}></View>
                    </View>
                    </View>
                    
                    <View style={{ flexDirection: 'row' }}>
                        <Icon size={20} margin={[0, 5, 10, 25]} source={globalPath.location} />
                        <ResponsiveText
                            margin={[0, 0, 0, 0]}
                            fontFamily={Fonts.Bold}
                            size={3.5}
                            color={colors.white}>
                            fabintel international lahore, pakistan
                        </ResponsiveText>
                    </View>
                </View>
                <View style={{ backgroundColor: colors.blue1, flex: 1 }}>
          <View style={styles.footer}>
<CardView/>

          </View>
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
        paddingBottom:30,
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