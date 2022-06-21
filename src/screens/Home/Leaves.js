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
          reason={item.reason} status={item.approvalStatus} date={item.startDate}
          description={item.description}
        />
      )):null
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
