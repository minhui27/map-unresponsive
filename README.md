## Installation:

```bash
$ npm install -g ionic cordova
$ npm install
$ ionic cordova platform add android
$ cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="<YOUR KEY>" --variable API_KEY_FOR_IOS="<YOUR KEY>" --nofetch
```

Then, run ```ionic serve ``` to get started.

Run ```cordova run android ``` to install the app into your device.