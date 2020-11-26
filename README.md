# ReactNative-Numadic-BackgroundService_Location_Data
A background service to store location data

## React Native Developer Test
### (Android/IOS)

# Level 1
***Background service to save location data***
Your task is to make an React Native background service that will be spawned when your
application
is opened & a start service button is pressed. On phone restart, the service should automatically
start on bootup until and unless the service is disabled via your app’s Service option. A basic
page should show the status of the service & how long the service has been running for.
The service is to do the following.
- Capture the user’s current location in 2 modes

**1. Active mode**
- If your current speed is more than 5kmph
- If you have moved for more than 50m since last location data
- Validate
- GPS provider is GPS chip and not Cellular Network.
- Currently has a minimum of 5 satellites locked and location data
is better than 10m (15m to 2m tolerable) before grabbing the
data.
- If validation fails, do not save data and wait for the next
location packet.


**2. Idle mode**
- One packet every 30 mins using the same validations as below.
- Location service to be put to sleep after your operation is complete (after data is utilized
for file operation).
- Save location data to a local file
- Lat, Lon, UTC Time, Velocity, Accuracy, Satellites used
- Save System health data to a local file
- Battery status in %
- Network status: Signal strength, name & type of network connected to.


### Note :
1. Location packets between idle modes will be 30mins apart.
2. Location packets between idle and active will be less than 30mins apart.
3. Location packets between two active packets will be 2mins apart.
4. System health packets to be saved at an interval of 10mins.
5. File names should contain UTC timestamp of the time the service has been started.
6. The file should be saved in a directory that you will be able to access via Level 2.
7. If the file size crosses 1MB, new files are to be spawned with their own UTC timestamps.

### Note: This is an activity to be completed in 1 day.

![1](https://github.com/lopeselio/ReactNative-Numadic-BackgroundService_Location_Data/blob/main/Screenshot%20(638).png)
![2](https://github.com/lopeselio/ReactNative-Numadic-BackgroundService_Location_Data/blob/main/Screenshot%20(639).png)
![3](https://github.com/lopeselio/ReactNative-Numadic-BackgroundService_Location_Data/blob/main/Screenshot%20(640).png)

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
