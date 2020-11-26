import React, { useEffect } from 'react'
import { Button, StyleSheet, Text, View, Alert } from 'react-native'
import * as Location from 'expo-location'
import * as TaskManager from 'expo-task-manager'
import * as Permissions from 'expo-permissions'

const LOCATION_TRACKING = 'location-tracking'

export default function App () {
  // const [myText, setMyText] = useState('')

  const startLocationTracking = async () => {
    await Location.startLocationUpdatesAsync(LOCATION_TRACKING, {
      // accuracy: Location.Accuracy.Highest,
      distanceInterval: 50, //
      deferredUpdatesInterval: 18000, // deferred interval of every 30 mins 
      deferredUpdatesDistance: 50, // 50 meters distance 
      accuracy: Location.Accuracy.BestForNavigation,
      timeInterval: 3000
    })
    const hasStarted = await Location.hasStartedLocationUpdatesAsync(
      LOCATION_TRACKING

    )
    console.log('tracking started?', hasStarted)
    // {hasStarted && {setMyText(`Time Stamp: ${new Date(Date.now()).toLocaleString()}  Latitude: ${JSON.stringify(lat)}  Longitude: ${JSON.stringify(long)} Speed: ${JSON.stringify(speed)}}`)}}
  }

  useEffect(() => {
    const config = async () => {
      let res = await Permissions.askAsync(Permissions.LOCATION)
      if (res.status !== 'granted') {
        console.log('Permission to access location was denied')
      } else {
        console.log('Permission to access location granted')
      }
    }

    config()
  }, [])

  return (
    <View style={styles.container}>
      <Text>Tap To know my location</Text>
      <Button title='Where am I?' style={{ backgroundColor: 'black' }} onPress={startLocationTracking} />
      {/* {hasStarted && <Text>{myText}</Text>} */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

TaskManager.defineTask(LOCATION_TRACKING, async ({ data, error }) => {
  
  if (error) {
    console.log('LOCATION_TRACKING task ERROR:', error)
    return
  }
  if (data) {
    const { locations } = data
    let lat = locations[0].coords.latitude
    let long = locations[0].coords.longitude
    let speed = locations[0].coords.speed
    // this.setState(lat, long, speed)
    Alert.alert(`Time Stamp: ${new Date(Date.now()).toLocaleString()}  Latitude: ${JSON.stringify(lat)}  Longitude: ${JSON.stringify(long)}  Speed: ${JSON.stringify(speed)}}`)

    console.log(
      `Timestamp: ${new Date(Date.now()).toLocaleString()}: Latitude ${lat}, Longitude: ${long}, speed: ${speed}`
    )
  }
})
