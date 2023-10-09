import Player from '@vimeo/player';

const player = new Player('vimeo-player');

var _ = require('lodash');
var throt_fun = _.throttle(function (currentTime) {
  localStorage.setItem('videoplayer-current-time', currentTime.seconds);
  console.log('Save currentTime after 1 seconds');
}, 1000);

player.on('timeupdate', function (currentTime) {
  throt_fun(currentTime);
});

let time = localStorage.getItem('videoplayer-current-time');
player
  .setCurrentTime(time === null ? 0 :time)
  .then(function (seconds) {})
  .catch(function (error) {
    console.log(error);
  });
