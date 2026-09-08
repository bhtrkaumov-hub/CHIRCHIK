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