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
    let fnList = this.events[eventName];
    if(!fnList)return;
    fnList.forEach((fn)=>{
      fn(data);
    })
  };
  off(eventName, fn){
    let fnList = this.events[eventName];
    if(!fnList)return;
    let index = getArrayIndex(fnList, fn);
    fnList.splice(index, 1);
  }
}

function getArrayIndex(array, item){
  let j = -1;
  for(let i=0;i<=array.length - 1;i++){
    if(array[i] === item){
      j = i;
      break;
    }
  }
  return j;
}

export default EventHub;
