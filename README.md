# RN-Study

### React Native 빌드 환경
```
nodejs
python
jdk
android studio
```

### build
```
keytool -genkeypair -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
cd android
./gradlew assembleRelease
```


### App Icon Generator
```
yarn add -D @bam.tech/react-native-make

react-native set-icon --path [path-to-image] --background ["color"]
react-native set-icon --path ./src/Assets/images/app_icon.png --background "#FFFFFF"

react-native set-splash --path [path-to-image] --resize [contain|cover|center] --background ["background-color"]
react-native set-splash --path ./src/Assets/images/splash.png --resize center --background "#FFFFFF"
```

### App Splash Screen
```
// 0.60 이상 버전
cd ios
pod install
cd ..
```