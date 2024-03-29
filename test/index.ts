import Event from '../src/index';


{
//
  let event = new Event();
  console.assert(event instanceof Event, 'new EventHub 不能生成一个实例');
}

{
//
  let event = new Event();
  let called = false;
  event.on('click111', (data)=>{
    console.assert(data === 'data1', 'on 注册的函数无法接受 emit 的数据');
    called = true;
  });
  event.emit('click111', 'data1');
  // setTimeout + 最后执行 assert，或者得到 called 的最终值
  setTimeout(()=>{
    console.assert(called, 'on 注册的函数未被调用了')
  }, 500)
}

{
//
  let event = new Event();
  let called = false;
  let fn = ()=>{
    called = true;
  };
  event.on('click222', fn);
  event.off('click222', fn);
  event.emit('click222');
  setTimeout(()=>{
    console.assert(!called, 'off 未生效')
  }, 500)
}
