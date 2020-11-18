const menu = () => {
  const menuWrapper = document.querySelector('[data-role=nav-wrapper]')
  const menuBody = document.querySelector('[data-role=nav-body]')
  const menuOpen = document.querySelector('.menu-open')
  const menuClose = document.querySelector('.nav-close')

  const open = () => {
    menuWrapper.classList.add('show')
    menuBody.classList.add('show')
  }
  
  const close = () => {
    menuWrapper.style.animation = 'fadeOutMenuBg .3s ease forwards'
    menuBody.style.animation = 'fadeOutMenu .3s ease forwards'
    menuBody.classList.remove('show')
    setTimeout(() => {
      menuWrapper.style.animation = ''
      menuWrapper.classList.remove('show')
      menuBody.style.animation = ''
    }, 300)
  }

  menuOpen.addEventListener('click', open)
  menuClose.addEventListener('click', close)
}