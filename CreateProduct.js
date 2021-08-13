const navbarTitle = document.querySelector('.navbarTitle')
const navbarContent = document.querySelector('#navbarSupportedContentUl')
console.log(navbarContent)

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
    
    const content2 = '<li class="nav-item"><a class="nav-link" href="#">' + functionLists[i] + '</a></li>';
    list += content2
}
navbarContent.innerHTML = list

