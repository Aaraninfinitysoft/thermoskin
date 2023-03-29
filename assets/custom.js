window.addEventListener('DOMContentLoaded', (event) => {
  $('.collection-filtering-section,.collection-grid').wrapAll('<div class="layout-fix-collection"></div>')

  // add best for
  $('small p').each(function () {
    $(this).prepend('<strong>Best For</strong>')
  })
//   $(document).on('change',function(){
// setTimeout(() => {
//   $('small p').each(function () {
//     $(this).prepend('<strong>Best For</strong>')
//   })
// }, 3000);
//   })
  // best sellers dropown

  // about page tag
  var tag = '<div class="banner-lable-wrapper"><span class="banner-lable">LIFE </span><span class="banner-lable"> UNSTOPPABLE</span></div>'
$('#shopify-section-template--15650287550670__4dc4e380-cc98-44ea-988d-de83b78f554c .responsive-image-wrapper').append(tag);
// end

// browse by body Parts Tag
// var tag2 = '<div class="browse-banner-lable-wrapper"><div class="inner-relative-layer"><div class="inner-absolute-layer"><span class="banner-lable">Enhanced </span><span class="banner-lable"> Recovery</span></div></div></div>'
// $('#thermoskin-thermal-range-of-supports-amp-braces-heat-therapy .banner-with-icon-set').append(tag2);

// browse by body Parts Tag
// var tag3 = '<div class="browse-banner-lable-wrapper"><div class="inner-relative-layer"><div class="inner-absolute-layer"><span class="banner-lable">Reduces </span><span class="banner-lable"> Swelling</span></div></div></div>'
// $('#thermoskin-compression-range-of-supports-and-braces .banner-with-icon-set').append(tag3);

// browse by body Parts Tag
// var tag4 = '<div class="browse-banner-lable-wrapper"><div class="inner-relative-layer"><div class="inner-absolute-layer"><span class="banner-lable">Enhanced </span><span class="banner-lable"> Protection</span></div></div></div>'
// $('#thermoskin-sport-supports-and-braces .banner-with-icon-set').append(tag4);


  var popup = document.querySelector('.best-sellers-nav');
  var tabs = document.querySelectorAll('.best-sellers-nav .best-sellers-tab');
  var dropdown = document.querySelector('.mobile-dropdown .dropdown_value')

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
cd.forEach((cdm) =>{
  cdm.childElementCount;
  console.log('count')
  console.log(cdm.childElementCount)
  if (cdm.childElementCount == 1){
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
          cdm.style.display = 'flex';
        }

      })
    })
  }
)

var links = document.links;
for (let i = 0, linksLength = links.length ; i < linksLength ; i++) {
  if (links[i].hostname !== window.location.hostname) {
    links[i].target = '_blank';
    links[i].rel = 'noreferrer noopener';
  }
}

// Tax calculetor for product price
function priceWIthGST(gst,price){
  var pr = price.split('$')
  var newPrice = parseInt(pr[1]);
  let wIthGST = newPrice * gst / 100;
  let newPriceWithGST = parseInt(pr[1]) + wIthGST.toFixed(2)
  return (`$`+ newPriceWithGST)
}

window.addEventListener('DOMContentLoaded', (event) => {
console.warn( window.taxPercentage)
var gst = parseInt(window.taxPercentage);
  var price = document.querySelectorAll('.money');
  price.forEach((m)=>{
 var WIthGSTPriceNew =  priceWIthGST(gst,m.textContent);
 console.log(WIthGSTPriceNew);
 let span = document.createElement('span');
 span.textContent = WIthGSTPriceNew;
 m.parentElement.appendChild(span);
  })
})


