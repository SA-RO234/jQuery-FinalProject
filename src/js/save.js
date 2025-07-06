let savedProducts = [];
function DisplayProductSave(data) {
  let result = "";
  data.forEach((item) => {
    result += `
      <div
        class="bg-white rounded-3xl overflow-hidden max-w-sm lg:w-[336px] card-shadow relative md:w-[345px] lg:h-[350px]"
      >
        <div class="relative h-full">
          <img
            src="${item.ImageUrl}"
            alt=""
            class="w-full h-full object-cover"
          />
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/95 to-transparent p-6 pt-12">
            <div class="mb-2">
              <h1 class="text-3xl font-bold text-gray-900 mb-1">${item.name}</h1>
              <h2 class="text-2xl font-semibold text-gray-500">${item.price}</h2>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed">
              ${item.description}
            </p>
          </div>
        </div>
      </div>
    `;
  });
  $("#AllProduct").html(result);
  loadingHide();
}

$(document).ready(function () {
  var AllProductSaveID = (
    JSON.parse(localStorage.getItem("SaveProductIds")) || []
  ).map(Number);

  setTimeout(() => {
    savedProducts = AllProductStore.filter((item) =>
      AllProductSaveID.includes(item.id)
    );
    DisplayProductSave(savedProducts);
  }, 1000);

  $(document).on("click", ".btnSave", function () {
    const proID = parseInt($(this).attr("proSave"));
    if (!AllProductSaveID.includes(proID)) {
      AllProductSaveID.push(proID);
      localStorage.setItem("SaveProductIds", JSON.stringify(AllProductSaveID));
    }
    $("#TotalSave").html(AllProductSaveID.length);
  });

  $("#TotalSave").html(AllProductSaveID.length);
});
