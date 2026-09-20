(function () {
  var root = document.getElementById("shop-root");
  var products = window.WOODCASE_PRODUCTS;
  if (!root || !products) {
    return;
  }

  var order = [
    "bed",
    "cabinet",
    "chair",
    "shelve",
    "sofa",
    "table",
    "trolley",
    "wardrobe",
  ];
  var groups = {};

  products.forEach(function (item) {
    if (!groups[item.section]) {
      groups[item.section] = { title: item.category, items: [] };
    }
    groups[item.section].items.push(item);
  });

  root.innerHTML = order
    .map(function (key) {
      var group = groups[key];
      if (!group) {
        return "";
      }
      return (
        '<section id="section_' +
        key +
        '">' +
        '<div class="text">' +
        group.title +
        "</div>" +
        '<div class="container">' +
        group.items
          .map(function (item) {
            return (
              '<div class="box"><figure>' +
              '<a href="product.html?id=' +
              item.id +
              '">' +
              '<img src="' +
              item.photoB +
              '" alt="' +
              item.name +
              " " +
              item.category.toLowerCase() +
              '" /></a>' +
              '<figcaption><span class="box__name">' +
              item.name +
              '</span><span class="box__price">' +
              item.price +
              "</span></figcaption></figure></div>"
            );
          })
          .join("") +
        "</div></section>"
      );
    })
    .join("");
})();
