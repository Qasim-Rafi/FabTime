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
const Leaves = ({ navigation }) => {
  const dispatch = useDispatch();
  const LeavesData = useSelector((state) => state.userReducers.presentTeam.data);
  useEffect(() => {
    dispatch(getpresentTeam());
  }, []);
  return (
    <Layout title={"Leaves"} >
      <LeavesCard
        username={'saniya Tariq'} status={"Pending"} date={"20-04-2022"}
        description={"Dear sir, I am writing this application to inform you that I am suffering from severe viral disease and therefore, I want sick leave from work. I got this infection last night and I will not be capable to come to the office for at least 1 day."}


      />
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
