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
    called = true;
  });
  event.emit('click111', 'data1');
  // setTimeout + 最后执行 assert，或者得到 called 的最终值
  setTimeout(()=>{
    console.assert(called, 'on 注册的函数未被调用了')
  }, 500)
}
