import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import Input from "../../components/Input";
import { hp, wp } from "../../helpers/Responsiveness";
import RnButton from "../../components/RnButton";
import { colors } from "../../constants/colorsPallet";
import { CheckinBox } from "../../components/CheckinBox";
import DateTimePicker from '@react-native-community/datetimepicker';

const ApplyLeaves = () => {
    const [date, setDate] = useState(null);
    const [show, setShow] = useState(false);
    const [date2, setDate2] = useState(null);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
         setShow(Platform.OS === 'ios');
        setDate(currentDate);
        setDate2(currentDate)
    
      };
    const showDAtepicker = () => {
        setShow(true);
        console.log('show', show)
    };
    return (
        <Layout title={"Apply Leaves"}>
            <View style={{ flexDirection: 'row', margin: 10 }}>

                <CheckinBox onPress={showDAtepicker}
                
                    title='Start Date'
                    subTitle='10:30 AM'
                    titleColor={colors.black}
                    subTitlecolor={colors.green}
                    disabled={false}

                />
                {show && (
                    //         <DateTimePicker
                    //           // testID="dateTimePicker"
                    //           value={new Date()}
                    //           mode={'date'}
                    //           // is24Hour={true}
                    //           display="default"
                    //           // format="YYYY-MM-DD HH:mm"
                    //           onChange={onChange}
                    //           format={"YYYY-MM-DD"}
                    // displayFormat={"DD MMM YYYY"}
                    //         />
                    <DateTimePicker
                        timeZoneOffsetInMinutes={0}
                        value={new Date()}
                        mode="date"
                        is24Hour
                        display="default"
                        onChange={onChange}
                        format={'YYYY-MM-DD'}
                        displayFormat={'DD MMM YYYY'}
                        maximumDate={new Date(2009, 1, 1)}
                    />
                )}
                <CheckinBox onPress={showDAtepicker}
                    title='End Date'
                    subTitle='06:30 PM'
                    titleColor={colors.black}
                    subTitlecolor={colors.red}
                    disabled={false}
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
                        borderRadius: 20,
                        marginTop: 10,
                        marginRight: 7,
                        marginLeft: 5
                    }}
                >
                    <Input
                        placeholder={"Leave Title"}
                        width={wp(90)}
                        height={hp(6.5)}
                        padding={[0, 0, 0, 25]}
                        margin={[0, 0, 0, 5]}
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

                        elevation: 3,
                        borderRadius: 20,
                        marginTop: 10,
                        marginRight: 10,
                        marginLeft: 5
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
