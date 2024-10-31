/**
 * A class that manages multiple intervals, allowing for their creation and stopping.
 */
class IntervalGenerator {

   intervals = [];
   setStoppableInterval(fn){
      let id = setInterval(fn, 1000/16);
      this.intervals.push(id);
   }

   /**
    * Stops all currently running intervals that were created by this instance.
    */
   stopIntervals(){
      this.intervals.forEach(interval => {
         clearInterval(interval);
      });
   }
}