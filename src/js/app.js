function loadingShow() {
  $("#sklenton").show();
}
function loadingHide() {
  $("#sklenton").hide();
}

function DisplayProduct(data) {
  let result = "";
  data.map((item) => {
    result += `
       <div class="flex  group duration-500 hover:shadow-[1px_1px_4px_0px] hover:shadow-gray-700 rounded-3xl relative flex-col justify-end items-end w-[20rem]  h-[20rem] bg-gray-200" >
          <p class="bg-red-700 p-[5px_10px] text-md font-bold absolute left-[-15px] top-[-0px] -rotate-50">New</p>
       <img  class="absolute group-hover:top-[-70px] h-[200px] object-cover  duration-500 rounded-t-3xl  bg-gray-500 top-[-65px] left-[65px] w-[60%] " src="${item.ImageUrl}" alt="" />
            <div class="layer flex justify-end flex-col items-start relative w-full overflow-hidden h-full p-5 rounded-4xl">
               <h1 class="title text-black font-bold text-[20px]">${item.name}</h1>
               <p class="des text-black text-[18px] font-md">${item.description}</p>
              <p class="price text-3xl z-[1000] font-bold text-black">$ <span>${item.price}</span></p>
                 <div class="absolute group-hover:right-0 flex justify-center flex-col gap-2  right-[-150px] duration-300 top-[100px]">
                 <button type="button" class="text-xl bg-black p-3 font-bold cursor-pointer rounded-l-3xl" >Add to cart</button>
                  <button type="button" class="bg-black text-xl p-3 font-bold rounded-l-3xl cursor-pointer" >Like</button>
            </div>
            </div>

        </div>
     `;
    $("#DisplayProduct").html(result);
    loadingHide();
  });
}

$(document).ready(function () {
  // Fetch the latest product for carousel using fetch API
  let AllData = fetch("http://localhost:8080/Carousel");
  AllData.then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
    .then((data) => {
      let result = "";
      data.forEach((item) => {
        result += ` 
          <div class="carousel-item rounded-3xl swiper-slide overflow-visible border relative w-full">
              <p class="absolute bg-red-700 text-white text-2xl font-bold p-5 w-[100px] h-[50px] -top-[20px] right-10 z-10 flex justify-center items-center">New</p>
              <img
                class=" h-[500px] object-cover w-full"
                src="${item.imageUrl || ""}"
                alt="${item.title || ""}"
              />
              <div
                class="layer gap-5 top-[50px] w-[40%] text-white flex justify-center items-start flex-col absolute left-[50px] z-20"
              >
                <h1 class="title text-5xl font-bold">${item.title}</h1>
                <p class="description text-[1em] font-medium">
                  ${item.description}
                </p>
                <!-- From Uiverse.io by nathAd17 -->
                <button
                  type="submit"
                  class="flex justify-center text-black hover:scale-[1.1] duration-300 cursor-pointer border-none gap-2 items-center shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-bold isolation-auto border-black before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-black before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                >
                  Buy Now
                  <svg
                    class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      class="fill-gray-800 group-hover:fill-gray-800"
                    ></path>
                  </svg>
                </button>
              </div>
            </div> 
          `;
      });
      $("#swiper-slide").html(result);
    })
    .catch((error) => {
      console.error("Error fetching carousel.json:", error);
    });

  // Open Slidebar
  $("#btnOpenSlide").click(function () {
    $("#productContainer").addClass("widhtProduct");
    $("#productDetail").addClass("open");
    $("#wrapper").removeClass("pr-[50px]");
    $("#wrapper").addClass("pr-[10px]");
  });

  //  Close Sidebar
  $("#CloseSide").click(() => {
    $("#productContainer").removeClass("widhtProduct");
    $("#productDetail").removeClass("open");
    $("#wrapper").addClass("pr-[50px]");
    $("#wrapper").removeClass("pr-[10px]");
  });

  loadingShow();
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/product",
    dataType: "json",
    success: function (response) {
      DisplayProduct(response);
    },
  });
});
