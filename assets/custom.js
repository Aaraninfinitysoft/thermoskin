// $(document).ready(function(){
//   $(".mega-menu-block.menu--421045c6-0e1c-49a5-afcf-81de049fd2c8 li.dropdown-submenu.grid__item.large--one-fifth.medium--one-fifth:nth-child(4)").click(function(){
//     $(".thermoskin-hd1").css({"color": "yellow"});
//   });
// });



window.addEventListener('DOMContentLoaded', (event) => {
  $('.collection-filtering-section,.collection-grid').wrapAll('<div class="layout-fix-collection"></div>')
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

})