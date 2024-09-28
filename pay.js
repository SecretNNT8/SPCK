const content = document.querySelector(".content")
const product = document.querySelector(".product")
const payment = document.querySelector('.payment')
function renderCart() {
    if (localStorage.getItem("cart")) {
        if (JSON.parse(localStorage.getItem("cart")).length > 0) {
            let html = "";
            let cartLocal = JSON.parse(localStorage.getItem("cart"));
            let quantity = cartLocal.length;
            html += `
                <div class="checkout">
                <div class="coai">
                    <div class="cos">Checkout -</div>
                    <div class="item">${quantity} items</div>
                </div>
                <button class="cc" onclick="cc()">
                    <p>Clear Cart</p>
                </button>
            </div>
            <div class="prdss"></div>`;
            product.innerHTML = html;
            const prdss = document.querySelector(".prdss")
            html = "";
            for (let i = 0; i < cartLocal.length; i++) {
                let image = cartLocal[i].image;
                let name = cartLocal[i].name;
                let category = cartLocal[i].category;
                let price = cartLocal[i].price;
                let id = cartLocal[i].id;
                html += `
                <div class="prds">
                <div class="prs">
                    <div class="pria">
                        <div class="pri">
                            <img src="./frenzyskin/${image}" width="80px" height="80px">
                            </div>
                        <div class="prnac">
                            <div class="prnc">${name} | ${category}</div>
                            <div class="proad">Alexander · 7/15/24</div>
                            </div>
                            </div>
                            <div class="price">
                        <div class="prpr">
                            <div class="vp">
                                <img width="15" height="15" src="vp.jpg">
                            </div>
                            <p>${price}</p>
                        </div>
                        <div class="aar">
                            <div class="add" onclick="checkacc()">
                            <a>Add To Favorites</a>
                            </div>
                            <div class="remove" onclick="deleteCart(${id})">
                            <p>Remove From Cart</p>
                            </div>
                            </div>
                            </div>
                            </div>
                            <hr>
                            </div>`;
            }
            prdss.innerHTML = html;
            html = "";
            html += `
            <div class="confirm">Confirm your order</div>
            <div class="checkaccount">
            <div class="check">Is that you | Prove it</div>
                <div class="checkinput">
                <input type="text" class="form-input" id="inputEmail" placeholder=" " onblur="focuse()" >
                <label for="name" class="form-label">Username</label>
                </div>
                <div class="checkinput">
                <input type="password" class="form-input" id="inputPass" placeholder=" " onblur="checkacc()">
                <label for="name" class="form-label">Password</label>
                </div>
                </div>
                <div class="pm">
                <div class="pmt">
                <p>Payment Method</p>
                </div>
                <div class="recharge">
                <p>Move to recharge</p>
                </div>
                <hr>
                <div class="money">
                    <div class="pocket">
                        <p>Your budget</p>
                        <div class="budget">
                            <img width="12" height="12" src="vp.jpg">
                            <p>${updateTotalPrice()}</p>
                        </div>
                    </div>
                    <div class="pocketafter">
                        <p>After payment</p>
                        <div class="afterpay">
                            <img width="12" height="12" src="vp.jpg">
                            <p>0</p>
                        </div>
                    </div>
                    <div class="amount">
                    <p>Total payment</p>
                    <div class="ttamount">
                            <img width="15" height="15" src="vp.jpg">
                            <p>${updateTotalPrice()}</p>
                        </div>
                    </div>
                </div>
                <button class="paid">
                    <div class="cantpay">
                        <p>CAN'T PAY</p>
                    </div>
                </button>
                <div class="help">
                    <p>By clicking Confirm purchase, you agree to our <a>Term of Service</a> and that you have read our
                    <a>Privacy Policy</a>
                    </p>
                    </div>
                    </div>
                    `
            payment.innerHTML = html;
            // checkacc();
        } else {
            content.innerHTML = `
                    <div class="product">
            <div class="none">
                    <p>Your cart is currently empty</p>
                    <button onclick="store()">Add Item To Cart</button>
                </div>
        </div>
        <div class="payment">
                <img src="runtobuy.jpg" width="100%" height="538px">
        </div>
        `;
        }
    } else {
        content.innerHTML = `
        <div class="product">
            <div class="none">
                    <p>Your cart is currently empty</p>
                    <button onclick="store()">Add Item To Cart</button>
                </div>
        </div>
        <div class="payment">
                <img src="runtobuy.jpg" width="100%" height="538px">
        </div>
        `;
    }
    quantity();
}
renderCart();
function deleteCart(id) {
    let oldCart = JSON.parse(localStorage.getItem('cart'));
    let newCart = []
    for (let i = 0; i < oldCart.length; i++) {
        if (oldCart[i].id != id) {
            newCart.push(oldCart[i]);
        }
    }
    localStorage.setItem('cart', JSON.stringify(newCart));
    renderCart();
}
function cc() {
    localStorage.removeItem("cart");
    renderCart();
}
function updateTotalPrice() {
    if (localStorage.getItem("cart")) {
        let cartLocal = JSON.parse(localStorage.getItem("cart"));
        let sum = 0;
        for (let i = 0; i < cartLocal.length; i++) {
            let price = cartLocal[i].price;
            sum += price;
        }
        return sum;
    }
}

function checkout() {
    if (localStorage.getItem("user")) {
        alert("Thanh toán thành công");
        localStorage.removeItem("cart");
        location.href = "http://127.0.0.1:5500/chodem.html";
    } else {
        alert("Mời bạn đăng nhập trước khi thanh toán");
        location.href = "http://127.0.0.1:5500/dangnhap.html";
    }
}
function store() {
    location.href = "http://127.0.0.1:5500/chodem.html";
}
function quantity() {
    if (localStorage.getItem("cart")) {
        if (JSON.parse(localStorage.getItem("cart")).length < 4) {
            document.querySelector(".product").style.height = "fit-content";
        }
    } else {
        document.querySelector(".product").style.height = "fit-content";
    }
}
const returned = document.querySelector(".return")
returned.addEventListener("click", function () {
    location.href = "http://127.0.0.1:5500/chodem.html";
})
const account = {
    user: "thanh??",
    pass: "123",
}
function checkacc() {
    const inputEmail = document.querySelector('#inputEmail')
    const inputPass = document.querySelector('#inputPass')
    let emailValue = inputEmail.value;
    let passValue = inputPass.value;
    if (localStorage.getItem('user') && localStorage.getItem('pass')) {
        if (emailValue == '' || passValue == '') {
            document.querySelector('.paid').innerHTML = `
                <div class="cantpay">
                    <p>CAN'T PAY</p>
                </div>
            `;
            document.querySelector('.check').innerText = "ngu";
        } else {
            localStorage.getItem('user')
            localStorage.getItem('pass')
            if (emailValue !== account.user || passValue !== account.pass) {
                alert("Email or password is incorrect");
                document.querySelector('.paid').innerHTML = `
                <div class="cantpay">
                    <p>CAN'T PAY</p>
                </div>
            `;
                document.querySelector('.check').style.color = "red";
            } else {
                document.querySelector('.paid').innerHTML = `
                <div class="pay" onclick="checkout()">
                    <p>PAY NOW</p>
                </div>
            `;
                document.querySelector('.check').style.color = "#787e87";
            }
        }
    } else {
        alert("Please login before taking action");
        document.querySelector('.paid').innerHTML = `
            <div class="cantpay">
                    <p>CAN'T PAY</p>
                </div>
        `;
    }
}
function focuse() {
    document.querySelector('#inputPass').focus();
}
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
    location.href = "http://127.0.0.1:5500/dangnhap.html";
}
checkLogin();
