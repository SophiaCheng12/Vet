const navbarTitle = document.querySelector('.navbarTitle')
const navbarContent = document.querySelector('#navbarSupportedContentUl')
const ellipsis = document.querySelector('.ellipsis')


navbarTitle.addEventListener('click' , active)


const functionLists = [
   '其他功能','其他功能','其他功能','其他功能','其他功能','其他功能','其他功能','其他功能'
]

let list = ''


function active(){
    // console.log('ok')
  navbarTitle.classList.toggle('active')
}




for(i=0; i<functionLists.length; i++){
    
    const content2 = '<li class="nav-item"><a class="nav-link navItemColor" href="#">' + '<span class="navItemColor">'+functionLists[i]+'</span>' + '</a></li>';
    list += content2
}
navbarContent.innerHTML = list



let productContentTitle = ellipsis.innerHTML
let productContentSplit = productContentTitle.split(" ")
const productContentSlice = productContentSplit.slice(0,3)
productContentTitle = productContentSlice.join(" ") + '\xa0' + '......'
ellipsis.innerHTML = productContentTitle 

// console.log(productContentTitle)