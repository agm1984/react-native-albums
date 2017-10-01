# Adam First React Native App

## Install
`Base`
1. Install Java 8 JDK (skip 9 due to JAVA_HOME ENV issue)
2. Install node.js
3. Install Python 2.7
4. Install Android Studio

``` bash
$ npm install -g react-native-cli
$ react-native init appname
```

`Environment Variables`
1. Set JAVA_HOME to C:\Program Files\Java\Java 8.X.X
2. Set Path to C:\Users\{User Name}\AppData\Local\Android\sdk\platform-tools

`First Run`
1. Download Android Studio SDKs (use Marshmallow for now)
2. Setup AVD to Nexus 5
3. Run Emulator (disable hyper-v, reboot)

``` bash
$ react-native run-android
```

## Troubleshooting
> See: https://rallycoding.com/blog/troubleshooting-react-native-startup/