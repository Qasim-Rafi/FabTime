import { View, Text } from 'react-native'
import React from 'react'
import Layout from '../../components/Layout'
import Input from '../../components/Input';
import { hp, wp } from "../../helpers/Responsiveness";
import RnButton from "../../components/RnButton";
import { colors } from "../../constants/colorsPallet";
const ApplyLeaves = () => {
    return (
        <Layout title={"Apply Leaves"}>
            <View style={{ marginTop: hp(5)}}>

                <View style={{elevation:20,marginHorizontal:0,borderRadius:10}}>
                    <Input
                        placeholder={"Leave Title"}
                        width={wp(90)}
                        height={hp(6.5)}
                        padding={[0, 0, 0, 25]}
                        margin={[0, 0, 0, 5]}
                        // onChnageText={(text) => setUserName(text)}
                        //   leftIcon={globalPath.Email}
                        // backgroundColor={colors.white}
                        // shadowColor={colors.green}
                    />
                   
                </View>
                
                <Input
                    placeholder={"Password"}
                    width={wp(90)}
                    height={hp(20)}
                    padding={[0, 0, 70, 25]}
                    margin={[20, 0, 5, 0]}
                    //  backgroundColor={colors.red}

                // secureTextEntry
                //   onChnageText={(text) => setPassword(text)}
                //   leftIcon={globalPath.Lock}
                />
               
                {/* <ResponsiveText color={colors.red} margin={[20, 0, 0, 10]}>{errorString}</ResponsiveText> */}
                <RnButton
                    backgroundColor={colors.blue}
                    margin={[50, 0, 0, 0]}
                    title={"Submit"}
                //   onPress={() => Validation()}
                />

            </View>

        </Layout >
    );
};

export default ApplyLeaves