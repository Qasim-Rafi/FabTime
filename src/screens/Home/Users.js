import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardView } from '../../components/cardView';
import Card from '../../components/Card';
import Layout from '../../components/Layout';



const Users = () => {
  return (
    <Layout title={"Users"}>
    <Card>
      <CardView></CardView>
    </Card>
    </Layout>
  )
}

export default Users

const styles = StyleSheet.create({})