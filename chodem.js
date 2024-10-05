
const productList = document.querySelector(".gs");
let html = "";
for (let i = 0; i < frenzydata.length; i++) {
    html += `
    <div class='gsjs'>
        <div class="gss">
        <div class="vp">
            <div>
                <img width="18" height="18" src="vp.jpg">
            </div>
            <div>
                <p>${frenzydata[i].price}</p>
            </div>
        </div>
        <a>
            <span>
                <img width="300" height="300"
                    src="./frenzyskin/${frenzydata[i].image}"
                    alt="${frenzydata[i].name}" title="${frenzydata[i].name}"
                    >
            </span>
        </a>
    </div>
    <div class="ns">
        <p>${frenzydata[i].name}</p>
    </div>
    <div class="buy">
        <div class="bd">Mua ngay</div>
        <div class="order" onclick="addCart(${frenzydata[i].id})" id="${frenzydata[i].id}">
            <div class="scart">
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
        </div>
    </div>
    </div>
 `;
}
productList.innerHTML = html
const order = document.getElementsByClassName("order");
let idorder = order.id;
function addCart(id) {
    const product = findProductById(id);
    if (localStorage.getItem("cart")) {
        let cartLocal = JSON.parse(localStorage.getItem("cart"));
        for (let i = 0; i < cartLocal.length; i++) {
            if (cartLocal[i].id == id) {
                return;
            }
        }
        changeCart(id);
        cartLocal.push(product);
        localStorage.setItem("cart", JSON.stringify(cartLocal));
    } else {
        changeCart(id);
        let cart = [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
    };
    changeCart(id)
    updateQuantity();
}
function changeCart(id) {
    if (idorder = id) {
        document.getElementById(idorder).innerHTML = `
            <div class="scartp">
                <i class="fa-brands fa-opencart"></i>
            </div>
        `;
    }
}
// changeCart(id);
function findProductById(id) {
    for (let i = 0; i < frenzydata.length; i++) {
        if (frenzydata[i].id == id) {
            return frenzydata[i];
        }
    }
}
function updateQuantity() {
    if (localStorage.getItem("cart")) {
        if (JSON.parse(localStorage.getItem("cart")).length > 0) {
            let cartLocal = JSON.parse(localStorage.getItem("cart"));
            document.querySelector(".count").innerText = cartLocal.length;
            document.querySelector(".cart").innerHTML = `
            <a href="pay.html" style="color: white">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span class="count" style="background-color:red"></span>
                        <a>
            `;
            document.querySelector(".count").innerText = cartLocal.length;
        } else {
            document.querySelector(".cart").innerHTML = `
            <a href="pay.html" style="color: white">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span class="count" style="background-color: transparent"></span>
                        <a>
            `;
        }
    } else {
        document.querySelector(".cart").innerHTML = `
        <a href="pay.html" style="color: white">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span class="count" style="background-color: transparent"></span>
                    <a>
        `;
    }
}
updateQuantity();
const lheader = document.querySelector('.left-header');
lheader.addEventListener('click', function () {
    location.href = "./index.html";
})
function checkLogin() {
    if (localStorage.getItem("user") && localStorage.getItem("pass")) {
        document.querySelector(".account").innerHTML = `
        <div class="acc">
        <img height="35px" width="35px" src="account.png">
              <div class="dd">
                <div class="dd1"></div>
                <div class="dd2">${localStorage.getItem("user")} </div>
                <div class="dd3">
                  <div class="dds">Cài Đặt</div>
                  <div class="dds" id="logout">Đăng Xuất</div>
        </div>   
    `;
        const logout = document.querySelector("#logout");
        logout.addEventListener("click", function () {
            localStorage.removeItem("user");
            localStorage.removeItem("pass")
            alert("Đăng xuất thành công");
            checkLogin();
        });
    } else {
        document.querySelector(".account").innerHTML = `
        <div class="acc" onclick="login()">
        <img height="35px" width="35px" src="account.png">
        </div>`;
    }
}
function login() {
    location.href = "./dangnhap.html";
}
checkLogin();