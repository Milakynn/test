// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "main-navigation") {
//       x.className += " responsive";
//     } else {
//       x.className = "main-navigation";
//     }
// }

window.addEventListener('load' , () => {
  const btn = document.querySelector('.icon')
  const nav = document.querySelector('.main-navigation')
  
  btn.addEventListener('click', () => {
    if( nav.classList.contains('open') ) {
      nav.classList.remove('open')
    }
    else{
      nav.classList.add('open')
    }
  })
})