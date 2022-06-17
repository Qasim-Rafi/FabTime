import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../constants/colorsPallet";
import Checkin from "../../components/Checkin";
import Api from "../../redux/lib/api";
import urls from "../../redux/lib/urls";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import ResponsiveText from "../../components/RnText";
import { hp, wp } from "../../helpers/Responsiveness";
import LeavesCard from "../../components/LeaveCard";
import { useDispatch, useSelector } from "react-redux";
import { getLeavesRequest } from "../../redux/actions/user.actions";
const Leaves = ({ navigation }) => {
  const dispatch = useDispatch();
  const LeavesData = useSelector((state) => state.userReducers.getLeaves.data);
  console.log("leaves",LeavesData)
  useEffect(() => {
    dispatch(getLeavesRequest());
  }, []);
  return (
    <Layout title={"Leaves"} >
      {
      LeavesData.length>0?
      LeavesData.map((item,index)=>(
          <LeavesCard
          reason={item.reason} status={"Pending"} date={item.startDate}
          description={"Dear sir, I am writing this application to inform you that I am suffering from severe viral disease and therefore, I want sick leave from work. I got this infection last night and I will not be capable to come to the office for at least 1 day."}
        />
      )):nulls
      }
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
