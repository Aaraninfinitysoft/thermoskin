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
  if (dropdown != null) {
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
  if (reviewBlock2 != null) {
    reviewBlock2.appendChild(reviewBlock)
  }
  var ii = document.querySelector('.write-review-trigger');
  if (ii != null) {
    ii.addEventListener('click', () => {
      var trig = document.querySelector('.spr-summary-actions-newreview');
      trig.click();
    })
  }

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
          cdm.style.display = 'flex';
        }

      })
    })
  }
)

var links = document.links;
for (let i = 0, linksLength = links.length; i < linksLength; i++) {
  if (links[i].hostname !== window.location.hostname) {
    links[i].target = '_blank';
    links[i].rel = 'noreferrer noopener';
  }
}

// Tax calculetor for product price

// price with gst 
function priceWIthGST(gst, price) {
  var pr = price.split('$')
  var newPrice = parseFloat(pr[1]);
  let wIthGST = newPrice * gst / 100;
  let newPriceWithGST = parseFloat(pr[1]) + parseFloat(wIthGST)
  return (`$` + newPriceWithGST.toFixed(2))
}

// update GST
function updateGSTprice(currentElm, gstprice, closestWrapperSelector, toBeUpdatedSelector,) {
  let span = document.createElement('span');
  console.log(currentElm)
  span.textContent = gstprice;
  if (closestWrapperSelector == null && toBeUpdatedSelector == null) {
    span.setAttribute("class", "d-block withGSTPrice")
    span.textContent = gstprice + ' Inc. GST ';
    if (currentElm.parentElement.querySelector('.withGSTPrice') == null) {
      currentElm.parentElement.appendChild(span);
      currentElm.style.display = 'none';
    }
    // currentElm.parentElement.appendChild(span)
  } else if (closestWrapperSelector == 'undefined' || toBeUpdatedSelector == 'undefined') {
    span.setAttribute("class", "d-block")
    span.textContent = gstprice + ' Inc. GST ';
    if (currentElm.parentElement.querySelector('.withGSTPrice') == null) {
      currentElm.parentElement.appendChild(span);
    }
    // currentElm.parentElement.appendChild(span);
    currentElm.style.display = 'none';
  }
  else {
    currentElm.closest(closestWrapperSelector).querySelector(toBeUpdatedSelector).appendChild(span);
    currentElm.style.display = 'none';
  }
}

// end

window.addEventListener('DOMContentLoaded', (event) => {
  console.warn(window.taxPercentage)
  var gst = parseInt(window.taxPercentage);
  var price = document.querySelectorAll('.template-product .money');
  // GST price add on document load 
  if (price != null) {
    price.forEach((m) => {
      let WIthGSTPriceNew = priceWIthGST(gst, m.textContent);
      updateGSTprice(m, WIthGSTPriceNew, '.price-with-gst-wrapper', '.with-gst-price')
    })
  }

  // GST price add on addto cart and cartToggler click 
  var addtocartBtn = document.querySelector('#AddToCart');
  var cartToggleBtn = document.querySelector('.site-header__cart-toggle');
  var arr = [addtocartBtn, cartToggleBtn];
  arr.forEach((el) => {
    if (el != null) {
      el.addEventListener('click', () => {
        setTimeout(() => {
          // priceupdate on line tiems
          var prNodes = document.querySelectorAll('.ajaxcart__product .money');
          prNodes.forEach((m) => {
            let WIthGSTPriceNew = priceWIthGST(gst, m.textContent);
            updateGSTprice(m, WIthGSTPriceNew)
          })
          // priceupdate on line tiems end

          // price update on subtotal
          var subtotalNode = document.querySelector('.ajaxcart__subtotal .money');
          let subtotalWithGst = priceWIthGST(gst, subtotalNode.textContent);
          updateGSTprice(subtotalNode, subtotalWithGst)
          // price update on subtotal end

          // price update on ajax qtn Chnage button click
          var QTNbutton = document.querySelectorAll('.ajaxcart__product .ajaxcart__qty-adjust')
          QTNbutton.forEach((QTNBtn) => {

            QTNBtn.onclick = () => {
              setTimeout(() => {
                var subtotalNode1 = document.querySelector('.ajaxcart__subtotal .money');
                let subtotalWithGst1 = priceWIthGST(gst, subtotalNode1.textContent);
                updateGSTprice(subtotalNode1, subtotalWithGst1)
              }, 1000);
            }

          })
          // price update on ajax qtn Chnage button click

        }, 2000);
      })
    }
  })

  // price update on search button click
  var searchButtons = document.querySelectorAll('.search-button');
  searchButtons.forEach((button) => {
    button.onclick = () => {
      setTimeout(() => {
        var SearchInput = document.querySelector('#SearchContainer #search-input')
        SearchInput.onkeyup = () => {
          setTimeout(() => {
            var searchResultPrices = document.querySelectorAll('#search-results .money');
            searchResultPrices.forEach((m) => {
              let WIthGSTPriceNew = priceWIthGST(gst, m.textContent);
              updateGSTprice(m, WIthGSTPriceNew)
            })
          }, 1000);
        }
      }, 2000);
    }
  })
  // collection price update

  // price update on collection page 

  setTimeout(() => {
    var collecPrList = document.querySelectorAll('.collection-main-body .money');
    collecPrList.forEach((m) => {
      let WIthGSTPriceNew = priceWIthGST(gst, m.textContent);
      updateGSTprice(m, WIthGSTPriceNew)
    })
  }, 3000);

  // on varient change 
  var swatch = document.querySelectorAll('.swatch-element label');
  swatch.forEach((s) => {
    s.addEventListener('click', (e) => {
      setTimeout(() => {
        var m = e.target.closest('.form-vertical').querySelector('.money');
        var n = e.target.closest('.form-vertical').querySelector('.with-gst-price span');
        let WIthGSTPriceNew = priceWIthGST(gst, m.textContent);
        n.textContent = WIthGSTPriceNew;
        m.style.display = 'none'
        console.log('new GST variable price updated');
      }, 500);

    })
  })
  // on collection page filter click  
  var filter = document.querySelector('.collection-filtering-section')

  if (filter != null) {

    filter.onclick = () => {

      setTimeout(() => {
        var collectionGridPrice = document.querySelectorAll('.collection-grid .money')

        collectionGridPrice.forEach((m) => {
          let WIthGSTPriceNew = priceWIthGST(gst, m.textContent);
          updateGSTprice(m, WIthGSTPriceNew);
        })
      }, 3000);
    }
  }
  // on collection page filter click end 
  
  // on search  page price update
  var searchPrList = document.querySelectorAll('.search-wrapper .money');
  if(searchPrList != null ){
    searchPrList.forEach((m)=>{
      let WIthGSTPriceNew = priceWIthGST(gst, m.textContent);
            updateGSTprice(m, WIthGSTPriceNew)
    })
  }
  // payment button text change
  window.onload = function() {
    var xy = setInterval(changeText, 500);
  }
  function changeText() {
    var tt = document.querySelector('.shopify-product-form .shopify-payment-button__more-options');
    console.log('element',tt)
    if(tt != null){
      tt.textContent = 'Buy It Now';
      clearInterval(xy)
    }
  }
  
  
  // search page filter click
  var filter = document.querySelector('.search-wrapper .collection-filters')

  if (filter != null) {

    filter.onclick = () => {

      setTimeout(() => {
        var collectionGridPrice = document.querySelectorAll('.search-wrapper .money')

        collectionGridPrice.forEach((m) => {
          let WIthGSTPriceNew = priceWIthGST(gst, m.textContent);
          updateGSTprice(m, WIthGSTPriceNew);
        })
      }, 2000);
    }
  }
  // on search  page end

})


