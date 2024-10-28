/**
 * A class that manages multiple intervals, allowing for their creation and stopping.
 */

class IntervalGenerator {
   /**
    * An array to store the IDs of the created intervals.
    * @type {number[]}
    */
   intervals = [];

   /**
    * Sets a new interval that executes the provided function at a specified frame rate.
    * The default frame rate is 60 FPS (1000ms / 60).
    * 
    * @param {Function} fn - The function to be executed at each interval.
    */
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