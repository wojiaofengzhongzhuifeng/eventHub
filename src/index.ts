class EventHub{
  /*
  * events: {
  *   click1: [fn1, fn2, fn3],
  *   click2: [fn1, fn2, fn3],
  * }
  * */
  events: {};
  on(eventName, fn){};
  emit(eventName, data){};
}
export default EventHub;
