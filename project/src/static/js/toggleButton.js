(()=>{
  const b1 = document.getElementById('b1');
  const b2 = document.getElementById('b2');
  const b3 = document.getElementById('b3');
  const b4 = document.getElementById('b4');
  const b5 = document.getElementById('b5');
  const b6 = document.getElementById('b6');

  const c1 = document.getElementById('c1');
  const c2 = document.getElementById('c2');
  const c3 = document.getElementById('c3');

  b1.addEventListener('click', ()=>{
    b1.classList.add('btn-fill');
    b2.classList.remove('btn-fill');
    b3.classList.remove('btn-fill');
    b4.classList.add('btn-fill');
    b5.classList.remove('btn-fill');
    b6.classList.remove('btn-fill');
    
    
    c1.style.display='block';
    c2.style.display='none';
    c3.style.display='none';
  });

  b2.addEventListener('click', ()=>{
    b1.classList.remove('btn-fill');
    b2.classList.add('btn-fill');
    b3.classList.remove('btn-fill');
    b4.classList.remove('btn-fill');
    b5.classList.add('btn-fill');
    b6.classList.remove('btn-fill');
    
    c1.style.display='none';
    c2.style.display='block';
    c3.style.display='none';
  });

  b3.addEventListener('click', ()=>{
    b1.classList.remove('btn-fill');
    b2.classList.remove('btn-fill');
    b3.classList.add('btn-fill');
    b4.classList.remove('btn-fill');
    b5.classList.remove('btn-fill');
    b6.classList.add('btn-fill');

    c1.style.display='none';
    c2.style.display='none';
    c3.style.display='block';
  });

  b4.addEventListener('click', ()=>{
    b1.classList.add('btn-fill');
    b2.classList.remove('btn-fill');
    b3.classList.remove('btn-fill');
    b4.classList.add('btn-fill');
    b5.classList.remove('btn-fill');
    b6.classList.remove('btn-fill');
    
    
    c1.style.display='block';
    c2.style.display='none';
    c3.style.display='none';
    $('html, body').animate({
      scrollTop:$('#c1').offset().top-150
    }, 300);
  });

  b5.addEventListener('click', ()=>{
    b1.classList.remove('btn-fill');
    b2.classList.add('btn-fill');
    b3.classList.remove('btn-fill');
    b4.classList.remove('btn-fill');
    b5.classList.add('btn-fill');
    b6.classList.remove('btn-fill');
    
    c1.style.display='none';
    c2.style.display='block';
    c3.style.display='none';
    $('html, body').animate({
      scrollTop:$('#c2').offset().top-150
    }, 300);
  });

  b6.addEventListener('click', ()=>{
    b1.classList.remove('btn-fill');
    b2.classList.remove('btn-fill');
    b3.classList.add('btn-fill');
    b4.classList.remove('btn-fill');
    b5.classList.remove('btn-fill');
    b6.classList.add('btn-fill');

    c1.style.display='none';
    c2.style.display='none';
    c3.style.display='block';

    $('html, body').animate({
      scrollTop:$('#c3').offset().top-150
    }, 300);
  });
})();