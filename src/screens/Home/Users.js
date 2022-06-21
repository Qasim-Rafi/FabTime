import { StyleSheet, Text, View } from 'react-native'
import React,{ useEffect,useState }  from 'react';
import { CardView } from '../../components/cardView';
import Card from '../../components/Card';
import Layout from '../../components/Layout';
import Api from '../../redux/lib/api';
import urls from '../../redux/lib/urls';
import { _toast } from "../../constants/Index";
const Users = ({navigation}) => {
  const [user, setuser] = useState([])
  useEffect(() => {
    // dispatch(getUser());
    getUser();
  }, []);

  const getUser = async () => {
    const res = await Api.get(urls.GET_ALL_USERS)
    console.log('firstttt', res)
    if (res && res.success == true) {
      setuser(res.data)
    } else {
      _toast("something went wrong");
    }
  }
  return (
    <Layout title={"Users"}>
      <Card>
        <CardView></CardView>
        {user.length > 0 ? user.map((item,index) => <CardView data={item} navigation={navigation}/>) : null}
      </Card>
    </Layout>
  )
}

export default Users

const styles = StyleSheet.create({})