console.clear();

function TabBox__changed(eventType, tbName, tbItemNo) {
  //console.log(`eventType : ${eventType}, tbName : ${tbName}, tbItemNo : ${tbItemNo}`);
}
function TabBox__init() {
  $('[data-tb]').each(function(index, el) {
    const $el = $(el);
    const tbAttrValue = $el.attr('data-tb');

    const tbAttrValueBits = tbAttrValue.split('__');

    const tbName = tbAttrValueBits[0];
    const tbItemNo = parseInt(tbAttrValueBits[1]);
    const tbItemType = tbAttrValueBits[2];

    $el.data('data-tbName', tbName);
    $el.data('data-tbItemNo', tbItemNo);
    $el.data('data-tbItemType', tbItemType);

    if ( tbItemType == 'head' ) {
      const $items = $(`[data-tb^="${tbName}__"]`);
      const $bodyItem = $(`[data-tb="${tbName}__${tbItemNo}__body"]`);

      $el.click(function() {
        const $activedItems = $(`[data-tb^="${tbName}__"].tb-active`);

        if ( $activedItems.length > 0 ) {
          const oldNo = $activedItems.eq(0).data('data-tbItemNo');

          if ( oldNo == tbItemNo ) {
            return;
          }

          $activedItems.removeClass('tb-active');
          $('html').removeClass(`${tbName}__${oldNo}__actived`);
          if ( TabBox__changed ) {
            TabBox__changed('inactive', tbName, oldNo);
          }
        }

        $(`[data-tb="${tbName}__${tbItemNo}__head"]:not(.tb-active)`).addClass('tb-active');
        $bodyItem.addClass('tb-active');

        $('html').addClass(`${tbName}__${tbItemNo}__actived`);
        if ( TabBox__changed ) {
          TabBox__changed('active', tbName, tbItemNo);
        }
      });
    }
  });

  $('[data-tb-clicked]').click();
}

function swiper__init() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
  });
}

TabBox__init();
swiper__init();
