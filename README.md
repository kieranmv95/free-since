# FREE SINCE

## Releasing

Releasing is an involved process requiring a manual change and some command line tools.

first you need to bump the appropriate version number in the app.json file

`eas build --platform ios` This triggered a build in eas Once complete we can submit that build

`eas submit -p ios` This will retrieve a list of eas builds which you can then submit to the ios STORE

After completion of the above commands the commands apple will receive a build and publish it to test flight

