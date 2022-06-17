import { Platform, ToastAndroid } from "react-native";


function _toast(string) {
    if (Platform.OS == 'ios') {
        alert(string);
    } else {
        ToastAndroid.showWithGravity(
            string,
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
        );
    }

}

module.exports={
    _toast:_toast
}