$(function() {
  
  $('.snip').each(function() {
    
    var $snip = $(this),
        $snip_excerpt = $('<div class="snip-excerpt"></div>'),
        $snip_more = $('<a href="">More</a>'),
        $snip_less = $('<a href="">Less</a>'),
        $whitespace = ' ',
        snip_length = $snip.data('snip-length');
        
    $snip.wrapInner('<div class="snip-original"></div>');
    
    var $snip_original = $snip.find('.snip-original');
    
    console.log($snip_original);
    
    $snip_original.hide().append($whitespace, $snip_less);
    $snip_excerpt
      .append($snip_original.text().slice(0, snip_length))
      .append('…')
      .append($whitespace, $snip_more)
      .appendTo($snip);
      
    $snip_more.add($snip_less).bind('click', function(e) {
      $snip_original.toggle();
      $snip_excerpt.toggle();
      e.preventDefault();
    });

    
  });
  
});