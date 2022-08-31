(() => {
  const title = 'nopechat';

  let count = getRand(100000) * posOrNeg(5);
  setInterval(() => {
    const message = document.querySelector('#message');

    if (message.value) {
      message.value = '';
      setCount(++count);

      const element = document.querySelector('#success');
      element.className = 'fadeout';
      setTimeout(() => {
        element.className = '';
      }, 500);
    }
  }, 1000);

  let characterCount = 0;
  setInterval(() => {
    document.querySelector('#title').innerText = title.substring(0, characterCount++ - 3);
    if (characterCount > title.length + 10) characterCount = 0;
  }, 200);

  function setCount(num) {
    document.querySelector('#count').innerText = num;
  }

  function getRand(max) {
    return Math.ceil(Math.random() * max);
  }

  function posOrNeg(odds) {
    return getRand(odds) > 1 ? 1 : -1;
  }
})();
