function checkEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
}

function checkPhone(phone) {
    return /^[0-9]{10,11}$/.test(phone);
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('registerForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Ngăn chặn form gửi đi

        const fullname = document.getElementById('fullname').value.trim();
        const username = document.getElementById('username').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const address = document.getElementById('address').value.trim();
        const gender = document.getElementById('gender').value; // Lấy giá trị từ dropdown

        const fullnameError = document.getElementById('fullnameError');
        const usernameError = document.getElementById('usernameError');
        const phoneError = document.getElementById('phoneError');
        const addressError = document.getElementById('addressError');
        const genderError = document.getElementById('genderError'); // Lấy thông báo lỗi giới tính

        // Đặt lại thông báo lỗi
        fullnameError.textContent = '';
        usernameError.textContent = '';
        phoneError.textContent = '';
        addressError.textContent = '';
        genderError.textContent = ''; // Đặt lại thông báo lỗi giới tính

        // Kiểm tra họ tên
        if (fullname === "") {
            fullnameError.textContent = 'Họ và tên không được để trống.';
            return;
        }

        // Kiểm tra tên đăng nhập
        if (!checkEmail(username)) {
            usernameError.textContent = 'Tên đăng nhập phải là email hợp lệ kết thúc bằng @gmail.com.';
            return;
        }

        // Kiểm tra số điện thoại
        if (!checkPhone(phone)) {
            phoneError.textContent = 'Số điện thoại phải hợp lệ.';
            return;
        }

        // Kiểm tra địa chỉ
        if (address === "") {
            addressError.textContent = 'Địa chỉ không được để trống.';
            return;
        }

        // Kiểm tra giới tính
        if (gender === "") {
            genderError.textContent = 'Bạn cần chọn giới tính.';
            return;
        }

        // Nếu mọi thứ hợp lệ, thông báo đăng ký thành công và chuyển hướng
        alert('Đăng ký thành công!');
        window.location.href = 'index.html'; // Chuyển hướng đến trang đăng nhập
    });
});
