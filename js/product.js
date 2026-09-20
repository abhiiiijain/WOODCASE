(function () {
  var params = new URLSearchParams(window.location.search);
  var item = window.WOODCASE_PRODUCTS && window.WOODCASE_PRODUCTS.byId(params.get("id"));
  var missing = document.getElementById("product-missing");
  var page = document.getElementById("product-page");

  if (!item) {
    if (page) {
      page.remove();
    }
    if (missing) {
      missing.hidden = false;
    }
    document.title = "Piece not found | WoodCase";
    return;
  }

  if (missing) {
    missing.remove();
  }
  if (page) {
    page.hidden = false;
  }

  document.title = item.name + " | WoodCase";
  document.getElementById("product-back").href = "shop.html#section_" + item.section;
  document.getElementById("product-eyebrow").textContent = item.category;
  document.getElementById("product-title").textContent = item.name;
  document.getElementById("product-price").textContent = item.price;
  document.getElementById("product-copy").textContent = item.copy;
  document.getElementById("product-dimensions").textContent = item.dimensions;
  document.getElementById("product-materials").textContent = item.materials;
  document.getElementById("product-more").href = "shop.html#section_" + item.section;

  [
    ["product-photo-a", item.photoA, item.name],
    ["product-photo-b", item.photoB, item.name + " in a room"],
    ["product-thumb-a", item.photoA, ""],
    ["product-thumb-b", item.photoB, ""],
  ].forEach(function (entry) {
    var node = document.getElementById(entry[0]);
    if (node) {
      node.src = entry[1];
      node.alt = entry[2];
    }
  });
})();
