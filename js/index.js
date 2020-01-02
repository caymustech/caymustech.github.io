$(document).ready(function() {
  $("#team-slider").owlCarousel({
    items: 4,
    itemsDesktop: [1000, 4],
    itemsDesktopSmall: [979, 3],
    itemsTablet: [768, 2],
    pagination: false,
    navigation: true,
    navigationText: ["", ""],
    autoPlay: false,
    slideBy: 1
  });
  $.getJSON("https://blog.lore.online/list.json", function(posts) {
    if (typeof posts === "object" && posts.hasOwnProperty("length") && posts.length >= 3) {
      for (let i = 0; i < 3; i++) {
        const post = posts[i];
        $("#blogs-list").append(
          '<div class="col-lg-4"><a href="' +
            post.url +
            '" class="read-more" target="_blank"><div class="blog-card animated wow fadeInUp"><img src="' +
            post.image +
            '" class="img-fix" /><div class="content"><p>' +
            post.date +
            "</p><h4>" +
            post.title +
            "</h4></div></div></a></div>"
        );
      }
    }
  });
});

$(function() {
  var lastId,
    topMenu = $("#navbarResponsive"),
    topMenuHeight = topMenu.outerHeight() + 200,
    // All item list
    menuItems = topMenu.find("a"),
    // Anchors reponding to menu items
    scrollItems = menuItems.map(function() {
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });

  $(window).scroll(function() {
    // Container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;
    // Get id of current scroll item
    var current = scrollItems.map(function() {
      if ($(this).offset().top < fromTop) {
        return this;
      }
    });
    // Get the id of the current element
    current = current[current.length - 1];
    var id = current && current.length ? current[0].id : "";

    if (lastId !== id) {
      lastId = id;
      // Set/Remove active class
      menuItems
        .removeClass("active")
        .filter("[href='#" + id + "']")
        .addClass("active");
    }
  });
});
