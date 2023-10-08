class AlarmClock {
  constructor () {
  	this.alarmCollection = [];
  	this.intervalId = null;
  }	

  addClock(time, callback) {
  	if (time === null || callback === undefined) {
  	  throw new Error('Отсутствуют обязательные аргументы');
  	}

  	const sameTime = this.alarmCollection.find(sameTime => sameTime.time === clock);

  	if(sameTime) {
  	  console.warn('Уже присутствует звонок на это же время');
  	}
    
    this.alarmCollection.push({callback: null, time: null, canCall: true});
  }

  removeClock(time) {
  	this.alarmCollection = this.alarmCollection.filter(sameTime => sameTime.time === clock);
  }

  getCurrentFormattedTime() {
  	let currentTime = new Date();
  	return currentTime.toLocaleTimeString();
  }

  start() {
  	if (this.intervalId !== null) {
  	  return this.intervalId;
  	}

	let newInterval = setInterval(function() {
	 this.alarmCollection.forEach (function(sameTime) {
	   if (sameTime.time === currentTime && canCall === true) {
	  	 canCall = false;
	  	 return callback;
	  	}
     this.intervalId = newInterval;
	 })
	}, 1000);
  }

  stop() {
  	clearInterval();
  	this.intervalId = null;
  }

  resetAllCalls() {
  	this.alarmCollection.forEach((element) => element.canCall = true)
  }

  clearAlarms() {
  	stop();
  	this.alarmCollection = [];
  }
}