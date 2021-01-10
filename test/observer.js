var Obj = {
  events: {},
  observers: [],
  addEvent: (eventName, fn) => {
    if ((this.events[eventName], fn)) {
      this.events[eventName].push(fn);
    } else {
      this.events[eventName] = [fn];
    }
  },
  removeEvent: (eventName, fn) => {
    if (!this.events[eventName]) return false;
    this.events[eventName].forEach((item, index) => {
      if (item === fn) this.events[eventName].splice(index, 1);
    });
  },
  dispachEvent: (eventName) => {
    this.events[eventName].forEach((item) => item());
  },
};

let Publisher = {};

let Subscriber = {};
