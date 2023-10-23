
class Counter {
  constructor() {
    this.count = 0;
  }

  startCounting() {
    // Using an arrow function to define a callback within the method
    const callback = ()=> {
      console.log(`Current count: ${this.count}`);
    };

    // Simulating an asynchronous operation (e.g., setInterval)
    this.interval = setInterval(() => {
      this.count++;
      callback(); // Maintains the "this" context of the outer function
    }, 1000);
  }

  stopCounting() {
    clearInterval(this.interval);
    console.log("Counting stopped.");
  }
}

const myCounter = new Counter();
myCounter.startCounting();

// After 5 seconds, stop counting
setTimeout(() => {
  myCounter.stopCounting();
}, 5000);