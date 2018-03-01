exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['testSpec.js'],
  capabilities: {
    browserName: 'chrome',
chromeOptions:{
args:['disabled-infobars']
}
  }
}