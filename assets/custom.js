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

  // // browse by body Parts Tag
 var tag4 = '<div class="browse-banner-lable-wrapper"><div class="inner-relative-layer"><div class="inner-absolute-layer"><span class="banner-lable">Enhanced </span><span class="banner-lable"> Protection</span></div></div></div>'
 if(tag4){
   jQuery('#thermoskin-sport-supports-and-braces .banner-with-icon-set').append(tag4);
 }

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
// non GST update Text 
function nonGStUpdate(list,resorceType) {
  if(resorceType == 'Collection'){
    return
  }
  var nonGst = document.createElement('span');
  nonGst.textContent = ' GST Free';
  list.forEach((listItem) => {
    var checkNonGst = listItem.querySelector('.non-gst');
    if (checkNonGst == null) {
      console.log(listItem)
      listItem.appendChild(nonGst);
    }
  })
}
// update GST

function updateGSTprice(currentElm, gstprice, closestWrapperSelector, toBeUpdatedSelector,resorceType) {
  let span = document.createElement('span');
  console.log(currentElm)
  span.textContent = gstprice;
  if (closestWrapperSelector == null && toBeUpdatedSelector == null) {
    span.setAttribute("class", "d-block withGSTPrice")
        if(resorceType == 'Collection'){
      span.textContent = gstprice
    }else{
      span.textContent = gstprice + ' Inc. GST ';
    }
    if (currentElm.parentElement.querySelector('.withGSTPrice') == null) {
      currentElm.parentElement.appendChild(span);
      currentElm.style.display = 'none';
    }
    // currentElm.parentElement.appendChild(span)
  } else if (closestWrapperSelector == 'undefined' || toBeUpdatedSelector == 'undefined') {
    span.setAttribute("class", "d-block")
    if(resorceType == 'Collection'){
      span.textContent = gstprice
    }else{
      span.textContent = gstprice + ' Inc. GST ';
    }
    
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
  currentElm.parentElement.parentElement.classList.remove('loader')
}

// end
function updateAjaxCartSubtotalGST() {
  var subtotalselect = document.querySelector('.ajaxcart__subtotal .money');
  var subtotalAjaxCartGst = 0;
  var subtotalArr = [];
  var cartItemsWithTax = document.querySelectorAll('.ajaxcart-item__price');
  // var cartItemsWithoutTax = document.querySelectorAll('.taxable--false .ajaxcart-item__price .money');
  cartItemsWithTax.forEach((item) => {
    if (item.querySelector('.withGSTPrice') != null) {
      item = item.querySelector('.withGSTPrice');
    } else {
      item = item.querySelector('.money');
    }
    var pr = item.textContent.split('$')
    var prNew = parseFloat(pr[1]);
    var qnt = parseFloat(item.closest('.grid__item').querySelector('.ajaxcart__qty-num').value);
    var newPrSub = prNew * qnt;
    subtotalArr.push(newPrSub)
    document.querySelector('.ajaxcart__subtotal').classList.remove('loader');

  })
  subtotalArr.forEach((prItem) => {
    subtotalAjaxCartGst += prItem;
  })
  subtotalselect.textContent = '$' + subtotalAjaxCartGst.toFixed(2);
}

window.addEventListener('DOMContentLoaded', (event) => {
  // GST free Added on collection page
  var searchPageGstFreeItems = document.querySelectorAll('.search-wrapper .taxable--false')
  var gstFreeItems = document.querySelectorAll('.collection-main-body .product-grid--price.taxable--false')
 

  var istaxble = window.istaxble;
  if (istaxble == true) {
    var priceArr = document.querySelectorAll('.taxable--true .money');
    priceArr.forEach((m) => {
      m.parentElement.parentElement.classList.add('loader');
    })
    var taxableArr = document.querySelectorAll('.taxable--false');
    taxableArr.forEach((m) => {
      m.classList.remove('loader');
    })
    // console.warn(window.taxPercentage)
    var gst = parseInt(window.taxPercentage);
    var price = document.querySelectorAll('.template-product .money');
    // GST price add on document load 
    if (price != null) {
      price.forEach((m) => {
        let WIthGSTPriceNew = priceWIthGST(gst, m.textContent);
        updateGSTprice(m, WIthGSTPriceNew, '.price-with-gst-wrapper:not(.taxable--false)', '.with-gst-price')
      })
    }

    // GST price add on addto cart and cartToggler click 
    var addtocartBtn = document.querySelector('#AddToCart');
    var cartToggleBtn = document.querySelector('.site-header__cart-toggle');
    console.log(cartToggleBtn);
    var arr = [addtocartBtn, cartToggleBtn];
    arr.forEach((el) => {
      if (el != null) {
        el.addEventListener('click', () => {
          alert('clicked')
              console.log("test");
          // var cartLoder = document.createElement('div')
          // cartLoder.setAttribute('class','cart-loader')
          // document.querySelector('.right-drawer-vue').classList.add('drawer-loader');
          // document.querySelector('.right-drawer-vue').appendChild(cartLoder)
          setTimeout(() => {
            // priceupdate on line tiems
            var prNodes = document.querySelectorAll('.ajaxcart__product .taxable--true .money');
            prNodes.forEach((m) => {
              let WIthGSTPriceNew = priceWIthGST(gst, m.textContent);
              updateGSTprice(m, WIthGSTPriceNew,null,null,'Collection')
            })
            // priceupdate on line tiems end

  
            // price update on subtotal after tax changes
            setTimeout(() => {
              updateAjaxCartSubtotalGST()
            }, 1000);
            // price update on subtotal end

            // price update on removeBTN clilck
            var cartRemoveBtns = document.querySelectorAll('.ajaxcart__qty-remove')
            cartRemoveBtns.forEach((cartRemoveBtn) => {
              cartRemoveBtn.onclick = () => {
                document.querySelector('.ajaxcart__subtotal').classList.add('loader')
                setTimeout(() => {
                  updateAjaxCartSubtotalGST()
                  document.querySelector('.ajaxcart__subtotal').classList.remove('loader')
                }, 2500);
              }
            })

            // price update on ajax qtn Chnage button click
            var QTNbutton = document.querySelectorAll('.ajaxcart__product .ajaxcart__qty-adjust')
            QTNbutton.forEach((QTNBtn) => {

              QTNBtn.onclick = () => {
                document.querySelector('.ajaxcart__subtotal').classList.add('loader');
                setTimeout(() => {
                  updateAjaxCartSubtotalGST()
                }, 2000);
                setTimeout(() => {
                  document.querySelector('.ajaxcart__subtotal').classList.remove('loader');
                }, 2050);
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
          var SearchInput = document.querySelector('#SearchContainer #search-input');
          var searchResultPrices = document.querySelectorAll('#search-results .money');
          searchResultPrices.forEach((m) => {
            let WIthGSTPriceNew = priceWIthGST(gst, m.textContent);
            updateGSTprice(m, WIthGSTPriceNew,null,null,'Collection')
          })
          SearchInput.onkeyup = () => {
            setTimeout(() => {
              var searchResultPrices = document.querySelectorAll('#search-results .money');
              searchResultPrices.forEach((m) => {
                let WIthGSTPriceNew = priceWIthGST(gst, m.textContent);
                updateGSTprice(m, WIthGSTPriceNew,null,null,'Collection')
              })
            }, 1000);
          }
        }, 2000);
      }
    })
    // collection price update

    // price update on collection page 

    setTimeout(() => {
      var collecPrList = document.querySelectorAll('.collection-main-body .taxable--true .money');
      collecPrList.forEach((m) => {
        let WIthGSTPriceNew = priceWIthGST(gst, m.textContent);
        updateGSTprice(m, WIthGSTPriceNew,null,null,'Collection')
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
          var collectionGridPrice = document.querySelectorAll('.collection-grid .taxable--true .money')

          collectionGridPrice.forEach((m) => {
            let WIthGSTPriceNew = priceWIthGST(gst, m.textContent);
            updateGSTprice(m, WIthGSTPriceNew,null,null,'Collection');
          })

        }, 3000);
        // setTimeout(() => {
        //   var nonGstList = document.querySelectorAll('.collection-grid .taxable--false')
        //   // nonGStUpdate(nonGstList)
        //   nonGstList.forEach(ng => {
        //     var sp = document.createElement('span');
        //     sp.classList.add('gst-free');
        //     sp.textContent = ' GST Free';
        //     if (ng.querySelector('.gst-free') == null) {
        //       ng.appendChild(sp);
        //     }
        //   })
        // }, 3050)
      }
      // var resetLinks = document.querySelectorAll('.facets__reset');
      // resetLinks.forEach((resetLink) => {
      //   resetLink.onclick = () => {
      //     setTimeout(() => {
      //       var nonGstList = document.querySelectorAll('.collection-grid .taxable--false')
      //       // nonGStUpdate(nonGstList)
      //       nonGstList.forEach(ng => {
      //         var sp = document.createElement('span');
      //         sp.classList.add('gst-free');
      //         sp.textContent = ' GST Free';
      //         if (ng.querySelector('.gst-free') == null) {
      //           ng.appendChild(sp);
      //         }
      //       })
      //     }, 3050)
      //   }
      // })

    }
    // on collection page filter click end 

    // on search  page price update
    var searchPrList = document.querySelectorAll('.search-wrapper .taxable--true .money');
    if (searchPrList != null) {
      searchPrList.forEach((m) => {
        let WIthGSTPriceNew = priceWIthGST(gst, m.textContent);
        updateGSTprice(m, WIthGSTPriceNew,null,null,'Collection')
      })
    }
    // payment button text change
    window.onload = function () {
      var xy = setInterval(changeText, 500);
    }
    function changeText() {
      var tt = document.querySelector('.shopify-product-form .shopify-payment-button__more-options');

      if (tt != null) {
        tt.textContent = 'Buy It Now';
        //clearInterval(xy)
      }
    }


    // search page filter click
    var filter = document.querySelectorAll('.search-wrapper .facet-checkbox')
    var SortBy = document.querySelectorAll('.search-wrapper #SortBy')

    if (SortBy != null) {
      SortBy.forEach((sort) => {
        sort.onchange = () => {
          setTimeout(() => {
            var collectionGridPrice = document.querySelectorAll('.search-wrapper .taxable--true .money')
            collectionGridPrice.forEach((m) => {
              let WIthGSTPriceNew = priceWIthGST(gst, m.textContent);
              updateGSTprice(m, WIthGSTPriceNew,null,null,'Collection');
              m.parentElement.classList.remove('loader')
            })

          }, 2000);
          // setTimeout(() => {
          //   var nonTaxableList = document.querySelectorAll('.search-wrapper .taxable--false');
          //   nonTaxableList.forEach(m => {
          //     console.log(m)
          //     m.innerHTML += " GST Free";
          //   })
          //   // nonGStUpdate(nonTaxableList)
          // }, 2050);
        }
      })
    }
    if (filter != null) {
      filter.forEach((filt) => {
        filt.onclick = () => {
          setTimeout(() => {
            var collectionGridPrice = document.querySelectorAll('.search-wrapper .taxable--true .money')
            var nonTaxableList = document.querySelectorAll('.search-wrapper .taxable--false')

            collectionGridPrice.forEach((m) => {
              let WIthGSTPriceNew = priceWIthGST(gst, m.textContent);
              updateGSTprice(m, WIthGSTPriceNew,null,null,'Collection');
              m.parentElement.classList.remove('loader')
            })
          }, 2500);
        }
      })
    }
    // on search  page end

  }
})

setTimeout(() => {
  var reviewBlock = document.querySelector('[data-block-handle="reviews"]');
  var reviewBlock2 = document.querySelector('.review_html');
  if (reviewBlock2 != null && reviewBlock != null) {
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
