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
const Leaves = ({navigation}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getRequests();
  }, []);
  const getRequests = async () => {
    const res = await Api.get(urls.GET_REQUESTS);
    console.log('res', res)
    if (res && res.success == true) {
      setData(res.data);
    } else {
      _toast("No record found");
    }
  };
  return (
    <Layout title={"Request"}>
      <LeavesCard
        username={"saniya Tariq"}
        status={"Pending"}
        date={"20-04-2022"}
        description={
          "Dear sir, I am writing this application to inform you that I am suffering from severe viral disease and therefore, I want sick leave from work. I got this infection last night and I will not be capable to come to the office for at least 1 day."
        }
      />
      <RoundButton onPress={()=>navigation.navigate(routeName.ADDREQUEST)}/>
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
