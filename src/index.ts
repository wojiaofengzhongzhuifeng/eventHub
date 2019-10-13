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
    let fnList = this.events[eventName];
    if(!fnList)return;
    let j = -1;
    for(let i=0;i<=fnList.length - 1;i++){
      if(fnList[i] === fn){
        j = i;
        break;
      }
    }
    fnList.splice(j, 1);
  }
}

export default EventHub;
