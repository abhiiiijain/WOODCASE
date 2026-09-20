(function () {
  function siteBase() {
    var path = window.location.pathname.replace(/\\/g, "/");
    if (/\/html\/[^/]*$/.test(path)) {
      return path.replace(/\/html\/[^/]*$/, "");
    }
    if (/\/buypageproducts\/[^/]*$/.test(path)) {
      return path.replace(/\/buypageproducts\/[^/]*$/, "");
    }
    if (path.endsWith("/index.html")) {
      return path.slice(0, -11);
    }
    if (path.endsWith("/")) {
      return path.slice(0, -1);
    }
    return path;
  }

  var base = siteBase();
  var home = base + "/index.html";
  var shop = base + "/html/shop.html";
  var info = base + "/html/info.html";
  var icon = function (file) {
    return base + "/images/icons/" + file;
  };

  var menu =
    '<div class="navigation">' +
    '<input type="checkbox" class="navigation__checkbox" id="navi-toogle" />' +
    '<label for="navi-toogle" class="navigation__button">' +
    '<span class="navigation__icon">&nbsp;</span>' +
    "</label>" +
    '<div class="navigation__background">&nbsp;</div>' +
    '<nav class="navigation__nav-ham">' +
    '<ul class="navigation__list">' +
    '<li class="navigation__item"><a href="' +
    home +
    '" class="navigation__link">WoodCase</a></li>' +
    '<li class="navigation__item"><a href="' +
    base +
    '/html/shelfmate.html" class="navigation__link">Shelfmate</a></li>' +
    '<li class="navigation__item"><a href="' +
    base +
    '/html/caterpillar.html" class="navigation__link">Caterpillar</a></li>' +
    '<li class="navigation__item"><a href="' +
    base +
    '/html/artisian.html" class="navigation__link">Artisian</a></li>' +
    '<li class="navigation__item"><a href="' +
    shop +
    '" class="navigation__link">Shop</a></li>' +
    '<li class="navigation__item"><a href="' +
    shop +
    '" class="navigation__link">Basket</a></li>' +
    "</ul></nav></div>";

  var nav =
    '<nav class="nav">' +
    '<div class="nav__logo"><a href="' +
    home +
    '" class="nav__logo-heading">WOODCASE</a></div>' +
    '<ul class="nav__list">' +
    '<li class="nav__list-items"><a href="' +
    base +
    '/html/shelfmate.html" class="nav__list-link hover">Shelfmate</a></li>' +
    '<li class="nav__list-items"><a href="' +
    base +
    '/html/caterpillar.html" class="nav__list-link hover">Caterpillar</a></li>' +
    '<li class="nav__list-items"><a href="' +
    base +
    '/html/artisian.html" class="nav__list-link hover">Artisian</a></li>' +
    '<li class="nav__list-items"><a href="' +
    shop +
    '" class="nav__list-link hover">Shop</a></li>' +
    "</ul>" +
    '<ul class="nav__icons-list">' +
    '<li class="nav__icons-list-item"><a href="' +
    shop +
    '"><img class="nav__icons" src="' +
    icon("search.png") +
    '" alt="Search" /></a></li>' +
    '<li class="nav__icons-list-item"><a href="' +
    shop +
    '"><img class="nav__icons" src="' +
    icon("Cart.png") +
    '" alt="Cart" /></a></li>' +
    "</ul></nav>";

  var footerLink = function (hash, label) {
    return (
      '<li class="footer__list-item"><a href="' +
      info +
      hash +
      '" class="footer__list-link">' +
      label +
      "</a></li>"
    );
  };

  var footer =
    '<footer class="footer">' +
    '<ul class="footer__list"><div class="footer-content">Services</div>' +
    footerLink("#installation", "Installation Service") +
    footerLink("#delivery", "Delivery Service") +
    footerLink("#measuring", "Measuring Service") +
    footerLink("#customer-service", "Customer Service") +
    "</ul>" +
    '<ul class="footer__list"><div class="footer-content">Support</div>' +
    footerLink("#returns", "Return Policy") +
    footerLink("#contact", "Contact Us") +
    footerLink("#gift-guide", "Gift Guide") +
    footerLink("#feedback", "Feedback") +
    footerLink("#faq", "FAQ'S") +
    "</ul>" +
    '<ul class="footer__list"><div class="footer-content">About</div>' +
    footerLink("#stores", "Stores") +
    footerLink("#newsroom", "Newsroom") +
    footerLink("#careers", "Working at WoodCase") +
    footerLink("#sustainability", "Sustainability") +
    footerLink("#business", "WoodCase for Business") +
    "</ul></footer>";

  var mounts = {
    menu: menu,
    nav: nav,
    footer: footer,
  };

  Object.keys(mounts).forEach(function (name) {
    document.querySelectorAll('[data-chrome="' + name + '"]').forEach(function (node) {
      node.outerHTML = mounts[name];
    });
  });
})();
