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