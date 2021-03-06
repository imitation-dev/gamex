/*
 * @Description  :
 * @Author       : Jason <2087108700@qq.com>
 * @Date         : 2022-04-21 00:11:29
 * @FilePath     : \Imitation Game\html\gamex\assets\js\script.js
 */
'use strict'

/* element toggle function */
const elemToggleFunc = function (elem) {
  elem.classList.toggle('active')
}

/* navbar variables */

const navbar = document.querySelector('[data-nav]')
const navOpenBtn = document.querySelector('[data-nav-open-btn]')
const navCloseBtn = document.querySelector('[data-nav-close-btn]')
const overlay = document.querySelector('[data-overlay]')

const navELemArr = [navOpenBtn, navCloseBtn, overlay]

for (let i = 0; i < navELemArr.length; i++) {
  navELemArr[i].addEventListener('click', function () {
    elemToggleFunc(navbar)
    elemToggleFunc(overlay)
    elemToggleFunc(document.body)
  })
}

/* go to top */
const goTopBtn = document.querySelector("[data-go-top]")
window.addEventListener("scroll", function () {
  if (window.scrollY >= 800) {
    goTopBtn.classList.add("active")
  } else {
    goTopBtn.classList.remove('active')
  }
})
