const { Plugin } = require('powercord/entities');

module.exports = class UsrBG extends Plugin {
  startPlugin() {
    for (i in document.getElementsByClassName('banner-2boKnS')) {
      i.style.backgroundImage = document.getElementsByClassName('popoutBannerPremium-3i5EEI')[0].style.backgroundImage;
    }
  }
}
