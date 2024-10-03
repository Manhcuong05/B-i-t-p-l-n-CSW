function checkEmail(email) {
    // Regex kiểm tra email hợp lệ kết thúc bằng @gmail.com
    return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
}

function checkPhone(phone) {
    // Regex kiểm tra số điện thoại hợp lệ (10-11 chữ số)
    return /^[0-9]{10,11}$/.test(phone);
}

document.addEventListener('DOMContentLoaded', function () {
    // Xử lý sự kiện khi nhấn nút "Đăng nhập"
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Ngăn chặn form gửi đi

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const usernameError = document.getElementById('usernameError');

        // Đặt lại thông báo lỗi
        usernameError.textContent = '';

        // Kiểm tra tên đăng nhập
        if (!checkEmail(username) && !checkPhone(username)) {
            usernameError.textContent = 'Tên đăng nhập phải là một email hợp lệ kết thúc bằng @gmail.com hoặc số điện thoại hợp lệ (10-11 chữ số)';
            return;
        }

        // Kiểm tra mật khẩu
        if (password === "") {
            alert('Mật khẩu không được để trống');
            return;
        }

        // Nếu mọi thứ hợp lệ, có thể xử lý đăng nhập hoặc chuyển đến trang khác
        alert('Đăng nhập thành công!');
        // Ví dụ: Chuyển hướng người dùng đến trang chính sau khi đăng nhập thành công
        window.location.href = "welcome.html";
    });
});
