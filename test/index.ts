import Event from '../src/index';


{
//
  let event = new Event();
  console.assert(event instanceof Event, 'new EventHub 能生成一个实例');
}

{
//
  let event = new Event();
  event.emit('click111', 'data1');
  event.on('click111', (data)=>{
    console.log(data);
  });
}
