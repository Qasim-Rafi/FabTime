import { View, Text } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import Input from "../../components/Input";
import { hp, wp } from "../../helpers/Responsiveness";
import RnButton from "../../components/RnButton";
import { colors } from "../../constants/colorsPallet";
import { CheckinBox } from "../../components/CheckinBox";
const ApplyLeaves = () => {
    return (
        <Layout title={"Apply Leaves"}>
            <View style={{ flexDirection: 'row', margin: 10, }}>
                <CheckinBox
                    title='Start Time'
                    subTitle='10:30 AM'
                    titleColor={colors.black}
                    subTitlecolor={colors.green}
                />

                <CheckinBox
                    title='End Time'
                    subTitle='06:30 PM'
                    titleColor={colors.black}
                    subTitlecolor={colors.red}
                />
            </View>
            <View style={{ marginTop: hp(0) }}>
                <View
                    style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 0,
                        },
                        shadowOpacity: 0.29,
                        shadowRadius: 4.65,
                        elevation: 3,
                        borderRadius: 30,
                        marginTop: 5,
                        backgroundColor:colors.white,
                        marginHorizontal:5,
                    }}
                >
                    <Input
                        placeholder={"Leave Title"}
                        width={wp(90)}
                        height={hp(6.5)}
                        padding={[0, 0, 0, 25]}
                        margin={[0, 0, 0, 0]}
                    // onChnageText={(text) => setUserName(text)}
                    //   leftIcon={globalPath.Email}
                    // backgroundColor={colors.green}
                    // shadowColor={colors.green}
                    />
                </View>
                <View
                    style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 0,
                        },
                        shadowOpacity: 0.29,
                        shadowRadius: 4.65,

                        elevation: 5,
                        borderRadius: 20,
                        marginTop: 10,
                        backgroundColor:colors.white,
                        marginHorizontal:5
                    }}
                >
                    <Input
                        placeholder={"Message"}
                        width={wp(90)}
                        height={hp(18)}
                        inputHeight={hp(15)}
                        padding={[0, 0, 0, 25]}
                        margin={[0, 0, 0, 0]}
                        // backgroundColor={colors.red}
                        multiline={true}
                    // secureTextEntry
                    //   onChnageText={(text) => setPassword(text)}
                    //   leftIcon={globalPath.Lock}
                    />
                </View>
                {/* <ResponsiveText color={colors.red} margin={[20, 0, 0, 10]}>{errorString}</ResponsiveText> */}
                <View style={{ marginHorizontal: 20 }}>
                    <RnButton
                        backgroundColor={colors.blue}
                        margin={[50, 0, 0, 0]}
                        title={"Submit"}
                    //   onPress={() => Validation()}
                    />
                </View>
            </View>
        </Layout>
    );
};

export default ApplyLeaves;
