function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password-field").value;

  // Đặt tên người dùng và mật khẩu mà bạn mong muốn
  if (username == "admin1" && password == "123") {
    swal({
      title: "",
      text: "Xin chào Võ Trường",
      icon: "success",
      close: true,
      button: false,
    });
    window.location = "doc/index.html"; // Chuyển hướng đến trang mong muốn
    return true;
  }

  // Nếu không nhập gì mà nhấn đăng nhập thì sẽ báo lỗi
  if (username == "" && password == "") {
    swal({
      title: "",
      text: "Bạn chưa điền đầy đủ thông tin đăng nhập...",
      icon: "error",
      close: true,
      button: "Thử lại",
    });

    return false;
  }

  // Nếu không nhập mật khẩu mà đúng tài khoản
  if (username == "admin" && password == "") {
    swal({
      title: "",
      text: "Bạn chưa nhập mật khẩu...",
      icon: "warning",
      close: true,
      button: "Thử lại",
    });
    return false;
  }

  // Nếu không nhập tài khoản sẽ báo lỗi
  if (username == null || username == "") {
    swal({
      title: "",
      text: "Tài khoản đang để trống...",
      icon: "warning",
      close: true,
      button: "Thử lại",
    });
    return false;
  }

  // Nếu không nhập mật khẩu sẽ báo lỗi
  if (password == null || password == "") {
    swal({
      title: "",
      text: "Mật khẩu đang để trống...",
      icon: "warning",
      close: true,
      button: "Thử lại",
    });
    return false;
  }

  // Nếu trống toàn bộ thì báo lỗi
  else {
    swal({
      title: "",
      text: "Sai thông tin đăng nhập hãy kiểm tra lại...",
      icon: "error",
      close: true,
      button: "Thử lại",
    });
    return true;
  }
}
