const navbarTitle = document.querySelector('.navbarTitle')
const navbarContent = document.querySelector('#navbarSupportedContentUl')
const ellipsis = document.querySelectorAll('.ellipsis')
const totalBtn = document.querySelector('.totalBtn')
const searchBtn = document.querySelector('.searchBtn')
const clearBtn = document.querySelector('.clearBtn')
const submitBtn = document.querySelector('.submitBtn')
console.log(submitBtn)
navbarTitle.addEventListener('click', active)
totalBtn.addEventListener('click', buttonActive)

const functionLists = [
  '其他功能', '其他功能', '其他功能', '其他功能', '其他功能', '其他功能', '其他功能', '其他功能'
]


let list = ''


function active() {
  navbarTitle.classList.toggle('active')
}

function buttonActive(e) {

  if (e.target.matches('.searchBtn')) {
    console.log('ok1')
    searchBtn.classList.toggle('buttonActive')
  } else {
    searchBtn.classList.remove('buttonActive')
  }

  if (e.target.matches('.clearBtn')) {
    clearBtn.classList.toggle('buttonActive')
  } else {
    clearBtn.classList.remove('buttonActive')
  }

  if (e.target.matches('.submitBtn')) {
    submitBtn.classList.toggle('buttonActive')
  } else {
    submitBtn.classList.remove('buttonActive')
  }
}


for (i = 0; i < functionLists.length; i++) {

  const content2 = '<li class="nav-item"><a class="nav-link navItemColor" href="#">' + '<span class="navItemColor">' + functionLists[i] + '</span>' + '</a></li>';
  list += content2
}
navbarContent.innerHTML = list




const newEllipsis = Array.from(ellipsis)


for (i = 0; i < newEllipsis.length; i++) {
  let productContentTitle = newEllipsis[i].innerHTML
  let productContentSplit = productContentTitle.split(" ")

  const productContentSlice = productContentSplit.slice(0, 3)
  productContentTitle = productContentSlice.join(" ") + '\xa0' + '......'
  // console.log('productContentTitle', productContentTitle)

  newEllipsis[i].innerHTML = productContentTitle
}










