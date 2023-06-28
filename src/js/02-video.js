import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
const fixedTime = localStorage.getItem('videoplayer-current-time');

player.on('timeupdate', throttle(timeUpdateHandler, 1000));

function timeUpdateHandler(e){
	const currentTime = e.seconds;
	localStorage.setItem('videoplayer-current-time', currentTime);
}

if (fixedTime) {
	player.setCurrentTime(fixedTime);
}
// console.log(fixedTime);