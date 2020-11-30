Run `expo install` or `yarn` or `npm start`
Run `yarn start` or `npm start` or `expo start`

# Dependencies used 
1. "expo"
    "expo-camera",
    "expo-contacts",
    "expo-location"
    "expo-permissions"
    "expo-sensors"
    "expo-status-bar"
    "expo-task-manager"
    "react"
    "react-dom"
    "react-native": "https://github.com/expo/react-native/archive/sdk-39.0.4.tar.gz",
    "react-native-web"
    
1. Permissions.askAsync(Permissions.LOCATION)
2. Location.hasStartedLocationUpdatesAsync(Permission.LOCATION)
3. Location.startLocationUpdatesAsync(LOCATION_TRACKING, {
      // accuracy: Location.Accuracy.Highest,
      distanceInterval: 50, //
      deferredUpdatesInterval: 18000, // deferred interval of every 30 mins 
      deferredUpdatesDistance: 50, // 50 meters distance 
      accuracy: Location.Accuracy.BestForNavigation,
      timeInterval: 3000
    })
