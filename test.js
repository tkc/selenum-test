const url = 'http://onga.jp';
const webdriverio = require('webdriverio');

const options = {
  desiredCapabilities: {
    browserName: 'firefox'
  }
};

webdriverio
  .remote(options)
  .init()
  .url(url)
  .getTitle().then(function (title) {
    console.log('Title was: ' + title);
  })
  .end();
