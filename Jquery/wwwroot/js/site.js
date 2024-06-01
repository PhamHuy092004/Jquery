
$(document).ready(function () {
    $("p").css("color", "red"); // Đổi màu tất cả nội dung trong thẻ p thành màu đỏ
    $(".nutnhan").click(function () { // Thực hiện hành động cho nút nhấn có class là nutnhan
        $(".vb1").css("color", "blue"); // Đổi chữ thành màu đỏ cho thành phần có chứa là class vb1
        $(".vb2").css("color", "black");// Đổi chữ thành màu đen cho thành phần có chứa là class vb2
        $(".vb3").hide();// Ẩn nội dung cho thành phần có chứa là class vb3
        $(".vb4").css("font-weight", "bolder");// In đậm chữ cho thành phần có chứa là class vb4
    });
    $.ajax({
        url: '/js/products.json', // URL đến file JSON
        type: 'GET', // Kiểu yêu cầu
        dataType: 'json', // Kiểu dữ liệu mong đợi
        success: function (data) {
            // Xử lý dữ liệu JSON và in ra giao diện
            var list = ''; // Tạo biến để lưu trữ nội dung 
            $.each(data.products, function (productName, productData) {  // Duyệt qua từng sản phẩm trong dữ liệu JSON
                // Tạo nội dung HTML cho mỗi sản phẩm
                list += '<div class="product">'; 
                list += '<h2>' + productName + '</h2>';
                list += '<p class="price">' + productData.Price + ' - ' + productData.Description + '</p>'; 
                list += '</div>';
            });
            // Thêm nội dung HTML vào element list trên trang web
            $('#products-container').html(list); // Thay đổi nội dung của element `#products-container` bằng nội dung List được tạo
        },
        error: function (xhr) {
            console.error('Lỗi khi lấy dữ liệu JSON:', xhr);
        }

    });
    $.ajax({
        url: 'pageup.html', // Url gọi đén trang cần thay thế vào
        type: 'GET',
        dataType: 'html', // Kiểu dữ liệu cần
        // Xử lý dữ liệu JSON và in ra giao diện
        success: function (newContent) {

            $('#content-container').html(newContent); // Thay đổi nội dung của element `#content-container` bằng nội dung newContent được tạo
        }
    });
    $.ajax({
        url: 'TextFile.txt',
        type: 'GET',
        dataType: 'text',// Kiểu dữ liệu cần
        success: function (data) {
            const words = data;
            $('#result-container').html(words); // Hiển thị mảng các từ
        },
        error: function (xhr) {
            console.error('Lỗi khi lấy dữ liệu:', xhr);
        }
    });
    $.ajax({
        url: 'https://665442451c6af63f467713f1.mockapi.io/products/1', // Đường dẫn API
        type: 'GET',
        dataType: 'json', // Loại dữ liệu cần lấy
        success: function (data) {
            const productContainer = $('#product-container'); // Đặt tên biến để lưu
            const productHtml = `
        <h2>${data.name}</h2>
        <p>Price: $${data.price}</p>
        <p>Description: ${data.description}</p>
        `;
            productContainer.html(productHtml); // Thêm trang html vào
        },
        error: function (xhr) {
            console.error('Lỗi khi lấy dữ liệu:', xhr);
        }
    });
});
