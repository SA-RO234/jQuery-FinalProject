let Allcategory = new Array();
$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/product",
    dataType: "json",
    success: function (response) {
      response.filter((item) => {
        if (item.category && !Allcategory.includes(item.category)) {
          Allcategory.push(item.category);
        }
      });
      Allcategory.forEach((item) => {
        $("#listitem").append(`
          <li  class="nav"  data-catogory="${item}" >
            <a
              id="${item}"
              class="text-xl ${item} cursor-pointer border-r-2 border-black p-3 h-full font-bold"
            >
        ${item}
            </a>
          </li>`);
      });
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let allCategory = document.querySelectorAll(".nav");
  console.log(allCategory);
});
