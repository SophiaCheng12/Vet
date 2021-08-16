const navbarTitle = document.querySelector('.navbarTitle')
const navbarContent = document.querySelector('#navbarSupportedContentUl')
const ellipsis = document.querySelectorAll('.ellipsis')
// const firstPart = document.querySelector('.firstPart')
// console.log(ellipsis)
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



const newEllipsis = [...ellipsis] 
console.log(newEllipsis)

newEllipsis.forEach(items =>{
  console.log('items',items)
  let productContentTitle = items.innerHTML
  let productContentSplit = productContentTitle.split(" ")
 
  const productContentSlice = productContentSplit.slice(0,3)
  productContentTitle = productContentSlice.join(" ") + '\xa0' + '......'
  console.log('productContentTitle', productContentTitle)
  items.innerHTML = productContentTitle
  })












