
import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);
player.on('timeupdate', Throttle(playingTime, 1000));

function playingTime  ({ seconds }) {
    localStorage.setItem('timeupdate', seconds);
};
player.setCurrentTime(localStorage.getItem('timeupdate'));
