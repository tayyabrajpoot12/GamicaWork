import * as React from 'react';
import { DataTable } from 'react-native-paper';
import axios from 'axios';
import { useEffect, useState } from "react";
import Dialog from "react-native-dialog";
import { View, Image, Button, StyleSheet } from 'react-native'


export default function UserTable() {

  let [data, setData] = useState('');


  const [visible, setVisible] = useState(false);

  const showDialog = () => {

    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };



  let [users, setUsers] = useState([]);

  useEffect(() => {
    let resp = axios.get('http://192.168.43.152:1111/auth/getUserData').then((res) => {
      setUsers(res.data)
    });
  });

  const deleteUser = () => {

    axios.delete('http://192.168.43.152:1111/auth/deleteUser?id=' + data.name._id,);

    users.splice(data.index, 1);

    setUsers([...users]);
    handleCancel();
  }

  return (
    <>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Password</DataTable.Title>
          <DataTable.Title>Email</DataTable.Title>
          <DataTable.Title numeric>Delete</DataTable.Title>
        </DataTable.Header>
        {

          users.map((user, i) => {
            return <DataTable.Row key={i}>
              <DataTable.Cell>{user.name}</DataTable.Cell>
              <DataTable.Cell >{user.password}</DataTable.Cell>
              <DataTable.Cell>{user.email}</DataTable.Cell>
              <DataTable.Cell numeric onPress={() => {
                showDialog()
                setData({
                  name: user,
                  index: i,
                })
              }}>Delete</DataTable.Cell>
            </DataTable.Row>
          })
        }
      </DataTable>




      <View style={styles.container}>
        <Dialog.Container visible={visible}>
          <Dialog.Title>Account delete</Dialog.Title>
          <Dialog.Description>
            Do you want to delete this account?
          </Dialog.Description>
          <Dialog.Button label="Cancel" onPress={handleCancel} />
          <Dialog.Button label="Delete" onPress={deleteUser} />
        </Dialog.Container>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});