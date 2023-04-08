import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import axios, { AxiosResponse } from 'axios';
import dayjs from 'dayjs';
import API_SERVER_IP from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Activity {
  _id: string;
  title: string;
  place: string;
  date: string;
  description: string;
}

export default function ListTransitaires() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [searchText, setSearchText] = useState<string>('');

  const fetchActivities = async (): Promise<AxiosResponse<Activity[]>> => {
    const token = await AsyncStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    return axios.get(`http://${API_SERVER_IP}:3000/api/v1/activities`, config);
  };

  useEffect(() => {
    const fetchAndSetActivities = async () => {
      const response = await fetchActivities();
      setActivities(response.data);
    };
    fetchAndSetActivities();
  }, []);

  const filterActivities = activities.filter(activity => activity.title.toLowerCase().includes(searchText.toLocaleLowerCase()));

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          onChangeText={text => setSearchText(text)}
          value={searchText}
        />
      </View>
      {
        filterActivities.length != 0 ? (
          <FlatList
            data={filterActivities}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.activity}>
                <View style={styles.activityHeader}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.date}>{dayjs(item.date).format('DD/MM/YYYY')}</Text>
                </View>
                <View style={styles.activityBody}>
                  <Text style={styles.details}>
                    <Text style={styles.bold}>Activity Place: </Text>
                    {item.place}
                  </Text>
                  <Text style={styles.details}>
                    <Text style={styles.bold}>Activity Description: </Text>
                    {item.description}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item._id.toString()}
            contentContainerStyle={styles.activityList}
          />
        ) : (
          <Text style={styles.noActivity}>OOPS !! No activities yet</Text>
        )
      }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  noActivity: {
    textAlign: 'center',
    marginTop: 30,
  },
  activityHeader: {
    backgroundColor: '#3795BD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bold: {
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
  },
  date: {
    color: '#fff',
  },
  activityBody: {
    padding: 20,
  },
  details: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  activity: {
    width: '90%',
    marginHorizontal: '5%',
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
    borderWidth: 1,
    borderColor: '#3795BD'
  },
  searchContainer: {
    backgroundColor: '#3795BD',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  searchBar: {
    height: 40,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f2f2f2',
  },
  activityList: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

});
