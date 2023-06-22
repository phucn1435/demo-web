        $(document).ready(function(){
            $('.slick-slider').slick({
              dots: true, // Hiển thị điểm chuyển đổi
              infinite: true, // Vô hạn cuộn
              speed: 500, // Tốc độ cuộn (milliseconds)
              slidesToShow: 1, // Số lượng hiển thị ảnh cùng lúc
              slidesToScroll: 1, // Số lượng ảnh cuộn trong mỗi lần chuyển đổi
              autoplay: true,
              autoplaySpeed: 2000,
              prevArrow: 
                `<button style='display: none;' type='button' class='slick-prev pull-left'><i class="fa-solid fa-arrow-left"></i></button>`,
              nextArrow:
                `<button type='button' class='slick-next pull-right'><i class="fa-solid fa-arrow-right"></i></button>`,
            });
          });

        $(document).ready(function(){
            $('.slick-slider1').slick({
              dots: false, // Hiển thị điểm chuyển đổi
              infinite: true, // Vô hạn cuộn
              speed: 500, // Tốc độ cuộn (milliseconds)
              slidesToShow: 5, // Số lượng hiển thị ảnh cùng lúc
              slidesToScroll: 1, // Số lượng ảnh cuộn trong mỗi lần chuyển đổi
              autoplay: true,
              autoplaySpeed: 2000,
              arrows: true,
              prevArrow: 
                `<button style='display: none;' type='button' class='slick-prev1 pull-left'><i class="fa-solid fa-arrow-left"></i></button>`,
              nextArrow:
                `<button type='button' class='slick-next1 pull-right'><i class="fa-solid fa-arrow-right"></i></button>`,
            });
          });

          $(document).ready(function(){
            $('.slick-slider2').slick({
              dots: false, // Hiển thị điểm chuyển đổi
              infinite: true, // Vô hạn cuộn
              speed: 500, // Tốc độ cuộn (milliseconds)
              slidesToShow: 4, // Số lượng hiển thị ảnh cùng lúc
              slidesToScroll: 1, // Số lượng ảnh cuộn trong mỗi lần chuyển đổi
              autoplay: true,
              autoplaySpeed: 2000,
              arrows: true,
              prevArrow: 
                `<button style='display: none;' type='button' class='slick-prev2 pull-left'><i class="fa-solid fa-arrow-left"></i></button>`,
              nextArrow:
                `<button type='button' class='slick-next2 pull-right'><i class="fa-solid fa-arrow-right"></i></button>`,
            });
          });


        window.addEventListener('scroll', function() {
            var element = document.getElementById('fixed');
            var element1 = document.getElementById('hide-element');
            var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
          
            if (scrollPosition >= 100) { // Đổi giá trị 200 thành độ pixel mà bạn muốn kích hoạt fixed
              element.classList.add('fixed');
              element1.classList.add('hide-element');
              document.getElementById('header-cate').style.display = "inline-block";
            } else {
              element.classList.remove('fixed');
              element1.classList.remove('hide-element');
              document.getElementById('header-cate').style.display = "none";
              document.querySelector('.header-cate--title--list').style.display = 'none';
            }

          });

          window.addEventListener('scroll', function() {
            var backToTopButton = document.getElementById('back-to-top');
            
            if (window.pageYOffset > 530) { // Khi cuộn xuống 200px
              backToTopButton.style.display = 'block';
              backToTopButton.classList.add('show');
            } else {
              backToTopButton.style.display = 'none';
            }
          });
          
          document.getElementById('back-to-top').addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Cuộn về đầu trang một cách mượt mà
          });

          var categoryTitle = document.querySelector('.header-cate--container');
var categoryList = document.querySelector('.header-cate--title--list');

categoryTitle.addEventListener('click', function() {
  if (categoryList.style.display === 'none') {
    categoryList.style.display = 'block'; // Hiển thị danh sách danh mục
  } else {
    categoryList.style.display = 'none'; // Ẩn danh sách danh mục
  }
});

// const checkAllCheckbox = document.getElementById("checkboxAll");
//         const checkboxes = document.getElementsByClassName("checkbox1");
        
//         checkAllCheckbox.addEventListener('change', () => {
//             for (let i = 0; i < checkboxes.length; i++) {
//                 checkboxes[i].checked = checkAllCheckbox.checked;
//             }
//         });
        
//         for (let i = 0; i < checkboxes.length; i++) {
//             checkboxes[i].addEventListener('change', () => {
//                 const allChecked = Array.from(checkboxes).every((checkbox) => checkbox.checked);
//                 checkAllCheckbox.checked = allChecked;
//             });
//         }

document.addEventListener('DOMContentLoaded', function(){
  var checkboxAll = $('#checkboxAll');
  var checkbox = $('.checkbox1');
  // console.log(checkbox);
  checkboxAll.change(function(){
    var isChecked = $(this).prop('checked');
    checkbox.prop('checked', isChecked);
  })

  // console.log(checkbox);
  checkbox.change(function(){
    var isChecked = checkbox.length === $('.checkbox1:checked').length;
    // console.log(isChecked);
    checkboxAll.prop('checked', isChecked);
  })
}) 