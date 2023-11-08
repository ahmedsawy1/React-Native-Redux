import {Button, FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersBooks, loginAction } from '../store/userActions';
import { RootState } from '../store/store';
import Book from '../components/Book';

const HomeScreen = () => {
  const {userBooks} = useSelector((state: RootState) => state.userData)
  const dispatch = useDispatch()

  console.log('==================userBooks==================');
  console.log(JSON.stringify( userBooks, null, 2));
  console.log('====================================');

  useEffect(() => { 
    dispatch(getUsersBooks())
  },[])


  type BookItem = {
    name_of_book:string,
    author:string,
    cover: string,
    price: string
  }

const renderItem: ListRenderItem<BookItem> = ({item}) => (
  <Book
    author={item.author}
    coverURL={item.cover}
    nameOfBook={item.name_of_book}
    price={item.price}
    categoryColor='#764abc'
  />
);


  return (
    <View style={styles.cont}>
      <FlatList 
        data={userBooks}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  cont: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
  },
});
