(function () {
  var showMoreNChildren = function ($children, n) {
    var $hiddenChildren = $children.filter(":hidden");
    var cnt = $hiddenChildren.length;
    for (var i = 0; i < n && i < cnt ; i++) {
      $hiddenChildren.eq(i).show();
    }
    return cnt - n;
  }
  
  jQuery.showMore = function (selector) {
    if (selector == undefined) { selector = ".showmorelist" }
    $(selector).each(function () {
      var pagesize = $(this).attr("pagesize") || 10;
      var $children = $(this).children();
      if ($children.length > pagesize) {
        for (var i = pagesize; i < $children.length; i++) {
          $children.eq(i).hide();
        }
  
        $("<div class='slw-phd-d'><a href='javascript:;'></a></div>").insertAfter($(this)).click(function () {
          if (showMoreNChildren($children, pagesize) <= 0) {
            $(this).hide();
          };
        });
		
      }
    });
  }
})();