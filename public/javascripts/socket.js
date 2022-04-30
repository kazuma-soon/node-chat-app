window.addEventListener('load', () => {
  var socket = io();

  var messages = document.getElementById('messages');
  var form = document.getElementById('form');
  var input = document.getElementById('input');

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (input.value) {
      console.log(input);
      socket.emit('chat message', input.value);
      input.value = '';
    }
  })

  socket.on('receiveMessage', msg => {
    console.log('socket receive!')
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  });

})
