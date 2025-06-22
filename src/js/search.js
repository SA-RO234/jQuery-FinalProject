let searchInput = document.querySelector("#search");
searchInput.addEventListener("input", function () {
  let valueSearch = this.value.toLowerCase();

  let resultSearch = AllProductStore.filter(
    (item) =>
      item.name.toLowerCase().includes(valueSearch) ||
      item.price.toString().includes(valueSearch)
  );

  DisplayProduct(resultSearch);
});
