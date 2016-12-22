(() => {
  const title = 'nopechat';

  setInterval(() => {
    const message = document.querySelector('#message');

    if (message.value) {
      message.value = '';
      const element = document.querySelector('#success');
      element.className = 'fadeout';
      setTimeout(() => {
        element.className = '';
      }, 500);
    }
  }, 1000);

  let count = 0;
  setInterval(() => {
    document.querySelector('#title').innerText = title.substring(0, count++ - 3);
    if (count > title.length + 10) count = 0;
  }, 200);
})();
