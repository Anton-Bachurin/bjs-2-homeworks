class AlarmClock {
  constructor () {
  	this.alarmCollection = [];
  	this.intervalId;
  }	

  addClock(hh, mm, callback) {
  	let time = hh + ': ' + mm;
  	if (hh === undefined || mm === undefined || callback === undefined) {
  	  throw new Error('Отсутствуют обязательные аргументы');
  	}

  	const sameTime = this.alarmCollection.find(realTime => realTime === time);

  	if(sameTime) {
  	  console.warn('Уже присутствует звонок на это же время');
  	}
    
    let obj = {
      callback,
      time,
      canCall: true
    }
    this.alarmCollection.push(obj);
  }

  removeClock(time) {
  	this.alarmCollection = this.alarmCollection.filter(timeToDelete => timeToDelete === time);
  }

  getCurrentFormattedTime(hh, mm) {
  	return currentTime = hh + ': ' + mm;
  }

  start() {
  	if (this.intervalId !== undefined) {
  	  break;
  	}

  let newInterval = setInterval(function() {
  	this.alarmCollection.forEach (function (item) {
  	  if (item = currentTime && canCall = true) {
  	  	
  	  }
  	})
  }, 1000);
  }
}