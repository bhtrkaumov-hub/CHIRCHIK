// ===== МЕНЮ-ГАМБУРГЕР =====

var knopka = document.querySelector('.burger');
var menyu = document.querySelector('.ssylki');

knopka.addEventListener('click', function () {
                      menyu.classList.toggle('otkryto');
   

      if (menyu.classList.contains('otkryto')) {
              knopka.textContent = '✕';
      } else {
              knopka.textContent = '☰';
      }
});


// ===== КНОПКА НАВЕРХ =====


 var naverh = document.querySelector('.naverh');

window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
              naverh.classList.add('vidna');
      } else {
              naverh.classList.remove('vidna');
      }
});


naverh.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
});



// ===== ПЕРЕКЛЮЧАТЕЛЬ ТЕМЫ =====

var knopkaTemy = document.querySelector('.tema');

if (localStorage.getItem('tema') === 'svetlaya') {
      document.body.classList.add('svetlaya');
}

knopkaTemy.addEventListener('click', function () {
      document.body.classList.toggle('svetlaya');

      if (document.body.classList.contains('svetlaya')) {
              localStorage.setItem('tema', 'svetlaya');
      } else {
              localStorage.setItem('tema', 'tyomnaya');
      }
});



// ===== ФОРМА =====

var forma = document.querySelector('.forma');

if (forma) {
      var otvet = document.querySelector('.otvet');

      forma.addEventListener('submit', function (sobytie) {
              sobytie.preventDefault();

              var imya = document.querySelector('#imya');
              var soobshenie = document.querySelector('#soobshenie');

              if (imya.value === '' || soobshenie.value === '') {
                      otvet.textContent = 'Заполните оба поля';
                      otvet.classList.add('oshibka');
                      return;
              }

              otvet.textContent = 'Отправляю...';
              otvet.classList.remove('oshibka');

              fetch(forma.action, {
                      method: 'POST',
                      body: new FormData(forma),
                      headers: { 'Accept': 'application/json' }
              }).then(function () {
                      forma.innerHTML = '<p>Спасибо, ' + imya.value + '! Сообщение отправлено.</p>';
              }).catch(function () {
                      otvet.textContent = 'Не получилось отправить. Проверьте интернет.';
                      otvet.classList.add('oshibka');
              });
      });
}