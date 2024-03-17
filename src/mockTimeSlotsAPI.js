const mockTimeSlotsAPI = {
  fetchData: function(date) {
      let availableTimes = ['19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];
      let returnedTimes = [];

      if(typeof(date) !== 'string') {
          throw Error('Wrong data type: date provided must be a string');
      }
      const availableSlots = Math.floor(1 + Math.random() * 6);
      for(let i=0; i<availableSlots; i++) {
          const index = Math.floor(Math.random() * availableTimes.length);
          returnedTimes.push(availableTimes[index]);
          availableTimes.splice(index, 1);
      }
      returnedTimes.sort();
      return returnedTimes;
  },
  dateToString: function(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');

      const dateString = `${year}-${month}-${day}`;
      return dateString;
  }
};

export default mockTimeSlotsAPI;