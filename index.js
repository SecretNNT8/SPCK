function checkLogin() {
  if (localStorage.getItem("user")) {
    document.querySelector(".playa").innerHTML = `
      <div class="playaa">
                    <p>${localStorage.getItem('user')} </p>
                    <div class="accd">
                        <svg width="8" height="5" viewBox="0 0 8 5" class="arrow-down"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.707109 1.70711L3.29289 4.29289C3.68342 4.68342 4.31658 4.68342 4.70711 4.29289L7.29289 1.70711C7.92286 1.07714 7.47669 0 6.58579 0H1.41421C0.523309 0 0.0771438 1.07714 0.707109 1.70711Z">
                            </path>
                        </svg>
                    </div>
                    <div class="slip">
                    </div>
                </div>
            <div class="dd">
              <div class="dd1"></div>
              <div class="dd2">${localStorage.getItem("user")} </div>
              <div class="dd3">
                <div class="dds">Tải Trò Chơi</div>
                <div class="dds">Cài Đặt</div>
                <div class="dds" id="logout">Đăng Xuất</div>
              </div>
            </div>        
  `;
    const logout = document.querySelector("#logout");
    logout.addEventListener("click", function () {
      localStorage.removeItem("user");
      alert("Đăng xuất thành công");
      checkLogin();
    });
  } else {
    document.querySelector(".playa").innerHTML = `
      <div class="play">
          <a href="./dangnhap.html">CHƠI NGAY</a>
      </div>
  `;
  }
}
checkLogin();
const button = document.querySelector('.chienngay');
button.addEventListener('click', function () {
  location.href = "./chodem.html";
})