(()=>{
  const b1 = document.getElementById('b1');
  const b2 = document.getElementById('b2');
  const b3 = document.getElementById('b3');

  const c1 = document.getElementById('c1');
  const c2 = document.getElementById('c2');
  const c3 = document.getElementById('c3');

  b1.addEventListener('click', ()=>{
    b1.classList.add('btn-fill');
    b2.classList.remove('btn-fill');
    b3.classList.remove('btn-fill');
    
    c1.style.display='block';
    c2.style.display='none';
    c3.style.display='none';
  });

  b2.addEventListener('click', ()=>{
    b1.classList.remove('btn-fill');
    b2.classList.add('btn-fill');
    b3.classList.remove('btn-fill');
    
    c1.style.display='none';
    c2.style.display='block';
    c3.style.display='none';
  });

  b3.addEventListener('click', ()=>{
    b1.classList.remove('btn-fill');
    b2.classList.remove('btn-fill');
    b3.classList.add('btn-fill');

    c1.style.display='none';
    c2.style.display='none';
    c3.style.display='block';
  });
})();