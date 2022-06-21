import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../constants/colorsPallet";
import { _toast } from "../../constants/Index";
import Layout from "../../components/Layout";
import LeavesCard from "../../components/LeaveCard";
import Api from "../../redux/lib/api";
import urls from "../../redux/lib/urls";
import RoundButton from "../../components/RoundButton";
import { routeName } from "../../constants/routeName";
import { ScrollView } from "react-native-gesture-handler";
const Leaves = ({ navigation ,route}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getRequests();
  }, []);
  const getRequests = async () => {
    const res = await Api.get(urls.GET_REQUESTS);
    console.log("res", res);
    if (res && res.success == true) {
      setData(res.data);
    } else {
      _toast(res.message);
    }
  };
  return (
    <Layout title={"Request"}>
      <ScrollView>
        {data.length > 0
          ? data.map((item, index) => (
              <LeavesCard
                title={item.title}
                status={item.approvalStatus}
                date={item.createdDatetime}
                description={item.description}
              />
            ))
          : null}
      </ScrollView>

      <RoundButton onPress={() => navigation.navigate(routeName.ADDREQUEST,getRequests)} />
    </Layout>
  );
};
export default Leaves;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue1,
  },
});
