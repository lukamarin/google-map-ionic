# Ionic and Google Maps Native SDK v2
Starter using **Google Maps Native SDK v2** and **[Ionic Framework](http://ionicframework.com)** created by me.

<img src="https://cloud.githubusercontent.com/assets/1680157/9290919/b8dc1e5c-437a-11e5-8c91-e047e4810351.png">


Special thanks to **[wf9a5m75](https://github.com/wf9a5m75/)** for create the plugin used in this integration and all collaborators of Ionic Framework, Cordova Project and Cordova Plugins.

## Dependencies

- Ionic CLI installed (required)
- Cordova 5.x.x installed (required)
- \***Android** and/or iOS environment installed (optional, but required if you don't have devices to test)

\*To run the starter inside an Android Virtual Device, you need request Google Play Services into the Android Emulator Environment and change the project configurations to use it.

## Usage

For begin, clone this project and run the following commands in your terminal:

```ssh
$ cd ionic-google-maps-starter && npm install
```

When npm installation finish, you need put your credentials API_KEY_FOR_ANDROID and API_KEY_FOR_IOS generated in [Google Console](https://console.developers.google.com) inside the `package.json` file.

After set your API Keys successfully, you need restore the state of project and to do this, please run:

```ssh
$ ionic state restore
```

And now, when restore finish, you need follow the next steps in each platform supported:

#### iOS

Just run your project using the following commands:

```ssh
$ ionic build ios
$ ionic run ios
```

*Note:* If the version that you're testing is the iOS 9 or greater you'll change in the `Build Settings` tab the value `Enable Bitcode` to `NO`, like the example below:

<img src="https://cloud.githubusercontent.com/assets/1680157/9269152/d5d5f3be-423c-11e5-83c6-5adfb241077f.png" width="500">

#### Android

Just run the following command to open the project inside a device connected:

```ssh
$ ionic run android --device
```

But, if you want run inside a Android Emulator, please read my considerations in [Dependencies chapter](#dependencies) of this `README.md` and run:

```ssh
$ ionic run android
```

**PROTIP:** If you want use this starter with Crosswalk, check the [wiki of plugin](https://github.com/wf9a5m75/phonegap-googlemaps-plugin/wiki/Tutorial-for-CrossWalk-Webview-Plugin-%28Android%29).


## Screenshots

<img src="https://cloud.githubusercontent.com/assets/1680157/9290913/a6eb28a0-437a-11e5-8a8f-1571b9f73308.jpg" width="20%">
<img src="https://cloud.githubusercontent.com/assets/1680157/9290914/a709bda6-437a-11e5-96e8-95f10f119b97.jpg" width="20%">
<img src="https://cloud.githubusercontent.com/assets/1680157/9290916/a9e793fe-437a-11e5-9ae1-af598ddae58f.jpg" width="20%">
<img src="https://cloud.githubusercontent.com/assets/1680157/9290917/a9e897a4-437a-11e5-9821-f4b02f57ce31.jpg" width="20%">

## Observations

This starter are using the wf9a5m75's version of plugin *phonegap-googlemaps-plugin* that you can found in [wf9a5m75/phonegap-googlemaps-plugin](https://github.com/wf9a5m75/phonegap-googlemaps-plugin).

## License

[MIT License](http://betomuniz.mit-license.org) © Beto Muniz
