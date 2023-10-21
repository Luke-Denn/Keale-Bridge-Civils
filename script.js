let xMark = document.getElementById('xMark')
let images = document.querySelectorAll('.gallery-img')
let fullImgBox = document.getElementById('fullImgBox')
let fullImg = document.getElementById('fullImg')

xMark.addEventListener('click', function () {
  fullImgBox.style.display = 'none'
})

for (let i = 0; i < images.length; i++) {
  let currentImage = images[i]
  currentImage.addEventListener('click', function openFullImg(pic) {
    fullImgBox.style.display = 'flex'
    fullImg.src = currentImage.src
  })
}

const navBar = document.getElementById('navBar')
const originalPosition = navBar.getBoundingClientRect().top
console.log(originalPosition)

window.addEventListener('scroll', () => {
  if (window.scrollY >= originalPosition) {
    navBar.style.position = 'fixed'
    navBar.style.top = '0'
  } else {
    navBar.style.position = 'static'
  }
})
