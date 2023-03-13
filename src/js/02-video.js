import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const currentTime = 'videoplayer-current-time';
const player = new Player('vimeo-player');

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(currentTime, data.seconds);
  }, 1000)
);

player.setCurrentTime(localStorage.getItem(currentTime) || 0);
