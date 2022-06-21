import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import ResponsiveText from "../../components/RnText";
import { AttendenceCard } from "../../components/cardView";
import { CheckinBox } from "../../components/CheckinBox";
import TabIcon from "../../components/TabIcon";
import { colors } from "../../constants/colorsPallet";

const AttendenceDetails = (props) => {
    return (
        <Layout username={props.route.params}  title={"Employess Detail"} profile titleSize={5}>
            <View style={{ flexDirection: 'row', marginVertical: 10, }}>
                <CheckinBox
                    title='Check-In'
                    subTitle='10:30 AM'
                    titleColor={colors.black}
                    subTitlecolor={colors.green}
                />

                <CheckinBox
                    title='Check-Out'
                    subTitle='06:30 PM'
                    titleColor={colors.black}
                    subTitlecolor={colors.red}
                />
            </View>
            <View>
                <ResponsiveText
                    margin={[0, 0, 0, 8]}
                    // fontFamily={Fonts.Bold}
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
            <View style={{ backgroundColor: colors.white, borderRadius: 10, elevation: 10, shadowOpacity: 0.2,shadowRadius:10 }}>
                <AttendenceCard />
            </View>
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
