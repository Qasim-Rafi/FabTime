import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { CardView } from "../../components/cardView";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import Api from "../../redux/lib/api";
import urls from "../../redux/lib/urls";
import { _toast } from "../../constants/Index";
import Loader from "../../components/loader";
const Users = ({ navigation }) => {
  const [user, setuser] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    // dispatch(getUser());
    getUser();
  }, []);

  const getUser = async () => {
    const res = await Api.get(urls.GET_ALL_USERS);
    setLoading(true);

    console.log("firstttt", res);
    if (res && res.success == true) {
      setuser(res.data);
    setLoading(false);

    } else {
      _toast("something went wrong");
    setLoading(false);

    }
  };
  return (
    <>
    <Layout title={"Users"}>
      <Card>
        {user.length > 0
          ? user.map((item, index) =>
              item.userTypeId == 2 ? (
                <CardView
                  title={item.fullName}
                  userDesignation={item.userDesignation}
                  source={item.fullPath}
                  navigation={navigation}
                />
              ) : null
            )
          : null}
      </Card>
    </Layout>
       {Loading?
        <Loader/>
          :
          undefined
       }
       </>
  );
};

export default Users;

const styles = StyleSheet.create({});
