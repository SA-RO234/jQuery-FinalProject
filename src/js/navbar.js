let Allcategory = new Array();
Allcategory.push("All");
$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "/product",
    dataType: "json",
    success: function (response) {
      response.filter((item) => {
        if (item.category && !Allcategory.includes(item.category)) {
          Allcategory.push(item.category);
        }
      });
      Allcategory.forEach((item) => {
        $("#listitem").append(`
          <li class="nav p-0"  data-category="${item}" >
            <button type="button" class="text-xl py-3 px-5 border-b md:border-b-0 category cursor-pointer  border-r-2 border-black  font-bold">
              ${item}
            </button>
          </li>`);
      });
    },
  });
});

function filterCategory(CatagoryFilter, ProcuctCategory) {
  let result = CatagoryFilter.filter(
    (item) => item.category === ProcuctCategory
  );
  if (ProcuctCategory === "All") {
    result = AllProductStore;
  }
  DisplayProduct(result);
}
//  function for active navbar ( Product Menu )

function ActiveNavbar() {
  let AllCategory = Array.from(document.querySelectorAll(".nav"));
  AllCategory.forEach((item) => {
    let btn = item.getElementsByClassName("category");
    item.addEventListener("click", function () {
      // Remove bg-black and text-white from all category buttons
      document.querySelectorAll(".category").forEach((el) => {
        el.classList.remove("bg-black", "text-white");
      });
      let cate = item.getAttribute("data-category");
      if (Allcategory.includes(item.getAttribute("data-category"))) {
        if (btn.length > 0) {
          btn[0].classList.add("bg-black");
          btn[0].classList.add("text-white");
        }

        filterCategory(AllProductStore, cate);
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    ActiveNavbar();
  }, 1000);
});
