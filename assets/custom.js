window.addEventListener('DOMContentLoaded', (event) => {
  $('.collection-filtering-section,.collection-grid').wrapAll('<div class="layout-fix-collection"></div>')

  // add best for
$('small p').each(function(){
  $(this).prepend('<strong>Best For</strong>')
})
  // best sellers dropown


  var popup = document.querySelector('.best-sellers-nav');
  var tabs = document.querySelectorAll('.best-sellers-nav .best-sellers-tab');
  var dropdown = document.querySelector('.mobile-dropdown .dropdown_value')
  if (tabs.length != 0) {
    tabs.forEach((tab) => {
      tab.addEventListener('click', function () {
        var content = tab.textContent;
        dropdown.textContent = content;
        dropdown.classList.remove('dropdown_open')
        popup.classList.remove('pop-in')
      })
    })
    dropdown.addEventListener('click', function () {
      if (popup.classList.contains('pop-in')) {
        popup.classList.remove('pop-in')
        dropdown.classList.remove('dropdown_open')
      } else {
        popup.classList.add('pop-in')
        dropdown.classList.add('dropdown_open')
      }
    })
  }


  // end



});




setTimeout(() => {
  var reviewBlock = document.querySelector('[data-block-handle="reviews"]');
  var reviewBlock2 = document.querySelector('.review_html');
  reviewBlock2.appendChild(reviewBlock)
  var ii = document.querySelector('.write-review-trigger');
  ii.addEventListener('click', () => {
    var trig = document.querySelector('.spr-summary-actions-newreview');
    trig.click();
  })

}, 3000);
var cd = document.querySelectorAll('.active-facets');
cd.forEach((cdm) => {
  cdm.childElementCount;
  console.log('count')
  console.log(cdm.childElementCount)
  if (cdm.childElementCount == 1) {
    cdm.style.display = 'none';
  }

})
document.querySelectorAll('.facets__item').forEach(
  function (item) {
    item.addEventListener('click', function () {
      cd.forEach((cdm) => {
        cdm.childElementCount;
        console.log('count')
        console.log(cdm.childElementCount)
        if (cdm.childElementCount == 1) {
          cdm.style.display = 'none';
        } else {
          cdm.style.display = 'block';
        }

      })
    })
  }
)


