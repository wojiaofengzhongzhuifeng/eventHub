class EventHub{
  /*
  * events: {
  *   click1: [fn1, fn2, fn3],
  *   click2: [fn1, fn2, fn3],
  * }
  * */
  events = {};
  on(eventName, fn){
    if(!(this.events[eventName])){
      this.events[eventName] = [];
    }
    this.events[eventName].push(fn);
  };
  emit(eventName, data?){
    if(!(this.events[eventName]))return;
    this.events[eventName].forEach((fn)=>{
      fn(data)
    })
  };
  off(eventName, fn){
    console.log(eventName);
    console.log(fn);
  }
}
export default EventHub;
