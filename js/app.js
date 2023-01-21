'use strict'
// control buttons with class and data
document.querySelectorAll('.switch').forEach(e=>{
  e.addEventListener('click',()=>{
    document.querySelector(`[data-class='${e.dataset.switch}']`).classList.toggle(`${e.dataset.switch}`)
  })
})

// control nav in scroll
let lastScrollTop = 0

window.addEventListener('scroll',()=>{
  // hide nav background in first 100vh
  let windowPosition = window.scrollY > nav.clientHeight;
  nav.classList.toggle('nav-active',windowPosition)
  // hide nav in scroll down
  let scrollTop = document.documentElement.scrollTop || window.pageYOffset;
  if(scrollTop > lastScrollTop){
    nav.style.cssText = 'transform: translateY(-110%);'
  }else{
    nav.style.cssText = 'transform: translateY(0%);'
  }
  lastScrollTop = scrollTop;
  document.querySelector('[data-class="list"]').classList.remove('list')
})

// add the year 
const d = new Date();
TextCYear.textContent = d.getFullYear()

// validation
submit.addEventListener('click',e=>{
  if(validation()){
    e.preventDefault()
    console.log('done')
  }else{
    e.preventDefault()
    alert('اصلح الخطأ بالأسفل')
    console.log('no')
  }
})
function validation(){
  // document.querySelectorAll('form div *:first-child').forEach(e=>{
    if(valid.value.match(/[0-9]{11}/g)){
      return true
    }else{
      return false
    }
  // })
}