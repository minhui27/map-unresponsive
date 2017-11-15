## Installation:

```bash
$ npm install -g ionic cordova
$ npm install
$ ionic cordova platform add android
$ cordova plugin add https://github.com/mapsplugin/cordova-plugin-googlemaps#multiple_maps --variable API_KEY_FOR_ANDROID=".."  --variable API_KEY_FOR_IOS=".."
```

Then, run ```ionic serve ``` to get started.

Run ```cordova run android ``` to install the app into your device.