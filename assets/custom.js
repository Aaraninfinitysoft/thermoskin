// $(document).ready(function(){
//   $(".mega-menu-block.menu--421045c6-0e1c-49a5-afcf-81de049fd2c8 li.dropdown-submenu.grid__item.large--one-fifth.medium--one-fifth:nth-child(4)").click(function(){
//     $(".thermoskin-hd1").css({"color": "yellow"});
//   });
// });



window.addEventListener('DOMContentLoaded', (event) => {
  $('.collection-filtering-section,.collection-grid').wrapAll('<div class="layout-fix-collection"></div>')
  // best sellers dropown
var popup =   document.querySelector('.best-sellers-nav');
var tabs = document.querySelectorAll('.best-sellers-nav .best-sellers-tab');
var dropdown = document.querySelector('.mobile-dropdown .dropdown_value')
tabs.forEach((tab)=>{
tab.addEventListener('click',function(){
  var content = tab.textContent;
  dropdown.textContent = content;
})
})
dropdown.addEventListener('click',function(){
  if(popup.classList.contains('pop-in')){
    popup.classList.remove('pop-in')
  }else{
    popup.classList.add('pop-in')
  }
})
});
 var metatitle = document.querySelector('.thermal.template-collection .page--title small p');

 var best_for = document.createElement('strong');
 best_for.textContent = 'Best For';
 metatitle.prepend(best_for);
setTimeout(() => {
  var reviewBlock = document.querySelector('[data-block-handle="reviews"]');
var   reviewBlock2 = document.querySelector('.review_html');
reviewBlock2.appendChild(reviewBlock)
 var ii = document.querySelector('.write-review-trigger');
 ii.addEventListener('click',()=>{
  var trig = document.querySelector('.spr-summary-actions-newreview');
  trig.click();
})

}, 3000);
var cd = document.querySelectorAll('.active-facets');
cd.forEach((cdm)=>{
cdm.childElementCount;
console.log('count')
console.log(cdm.childElementCount)
if(cdm.childElementCount == 1){
  cdm.style.display = 'none'; 
}

})
