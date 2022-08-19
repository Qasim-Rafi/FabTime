import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { hp, wp } from "../../../helpers/Responsiveness";
import RnButton from "../../../components/RnButton";
import ResponsiveText from "../../../components/RnText";
import { globalPath } from "../../../constants/globalPath";
import { routeName } from "../../../constants/routeName";
import { colors } from "../../../constants/colorsPallet";
import Icon from "../../../components/Icon";
import { SafeAreaView } from "react-native-safe-area-context";
import Api from "../../../redux/lib/api";
import urls from "../../../redux/lib/urls";
import { _toast } from "../../../constants/Index";

const CELL_COUNT = 6;

export default function VerificationCode({ navigation, route }) {

  const [value, setValue] = React.useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const SUBMIT = async () => {
    try {
      const res = await Api.get(urls.VERIFICATION_CODE + value);
      console.log("get FORGOT_PASSWORD", res);
      if (res && res.success == true) {
        navigation.navigate(routeName.CHANGE_PASSWORD);
        _toast(res.message);
      } else {
        _toast(res.message);
      }
    } catch (error) {}
  };

  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   keyboardVerticalOffset={hp(-10)}
    //   style={styles.container}>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              margin: 10,
              backgroundColor: colors.black3,
              paddingVertical: 10,
              alignSelf: "flex-start",
              paddingHorizontal: 10,
              borderRadius: 25,
            }}
          >
            <Icon source={globalPath.backArrow} />
          </TouchableOpacity>
        </View>
        <View style={styles.screeninfo}>
          <ResponsiveText color={colors.white} fontFamily="Regular" size={8}>
            Verification
          </ResponsiveText>
          <ResponsiveText color={colors.white}>
            Email Verification
          </ResponsiveText>
        </View>
        <View style={[styles.formArea, { backgroundColor: colors.white }]}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <ResponsiveText size={4} color={colors.blue1}>
              {" "}
              Verify your Email
            </ResponsiveText>
            <ResponsiveText textAlign={"center"} color={colors.black}>
              {" "}
              A text message with 6 digit code send to Your Email
            </ResponsiveText>
          </View>
          <View>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFiledRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({ index, symbol, isFocused }) => (
                <Text
                  key={index}
                  style={[
                    styles.cell,
                    isFocused && styles.focusCell,
                    { backgroundColor: colors.white },
                  ]}
                  onLayout={getCellOnLayoutHandler(index)}
                >
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />
          </View>

          <RnButton
            onPress={() => SUBMIT()}
            backgroundColor={colors.blue1}
            fontFamily="SemiBold"
            margin={[20, 0]}
            title="Continue"
          />
        </View>
      </SafeAreaView>
    </ScrollView>
    // </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    height: hp(100),
    width: wp(100),
    backgroundColor: colors.blue1,
    // height: hp(120),
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: colors.black,
  },
  screeninfo: {
    flex: 0.1,
    justifyContent: "flex-end",
    paddingBottom: wp(10),
    padding: wp(5),
  },
  formArea: {
    flex: 1,
    borderTopRightRadius: wp(8),
    borderTopLeftRadius: wp(8),
    backgroundColor: colors.grey3,
    padding: wp(10),
  },
  forgotPasswordContainer: {
    flexDirection: "row",
    overflow: "hidden",
    paddingHorizontal: 10,
    marginBottom: wp(8),
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  socialIcon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  root: { padding: 20, minHeight: 300 },
  title: { textAlign: "center", fontSize: 40 },
  codeFiledRoot: { marginTop: 20 },
  cell: {
    width: 50,
    height: 50,
    lineHeight: 38,
    fontSize: 26,
    borderWidth: 2,
    borderColor: "#00000030",
    textAlign: "center",
    justifyContent: "center",
    color: colors.black,
    backgroundColor: colors.black2,
  },
  focusCell: {
    borderColor: colors.grey1,
    color: colors.blue1,
    textAlign: "center",
    justifyContent: "center",
  },
});
