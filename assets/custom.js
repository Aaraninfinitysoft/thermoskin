// $(document).ready(function(){
//   $(".mega-menu-block.menu--421045c6-0e1c-49a5-afcf-81de049fd2c8 li.dropdown-submenu.grid__item.large--one-fifth.medium--one-fifth:nth-child(4)").click(function(){
//     $(".thermoskin-hd1").css({"color": "yellow"});
//   });
// });



window.addEventListener('DOMContentLoaded', (event) => {
  $('.collection-filtering-section,.collection-grid').wrapAll('<div class="layout-fix-collection"></div>')
});
 
var reviewinterval = setInterval(() => {
  var reviewBlock = document.querySelector('[data-block-handle="reviews"]');
  console.log(reviewBlock); 
}, 1000);