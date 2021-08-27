const informationTotalBtn = document.querySelector('.informationTotalBtn')
// console.log(informationTotalBtn)
const informationCreateBtn = document.querySelector('.informationCreateBtn')
const informationCancelBtn = document.querySelector('.informationCancelBtn')


informationTotalBtn.addEventListener('click', informationButtonActive)

function informationButtonActive(e) {
  if (e.target.matches('.informationCreateBtn')) {
    informationCreateBtn.classList.toggle('informationButtonActive')
  } else {
    informationCreateBtn.classList.remove('informationButtonActive')
  }

  if (e.target.matches('.informationCancelBtn')) {
    informationCancelBtn.classList.toggle('informationButtonActive')
  } else {
    informationCancelBtn.classList.remove('informationButtonActive')
  }


}