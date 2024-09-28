function renderCart() {
    let html = "";
    const content = document.getElementById('content'); // Assuming you have a content element to append to

    // Check if cart data exists in localStorage
    if (localStorage.getItem("cart")) {
        const cartLocal = JSON.parse(localStorage.getItem("cart"));

        if (cartLocal.length > 0) {
            let quantity = cartLocal.length;

            // Render checkout header
            html += `
                <div class="product">
                    <div class="checkout">
                        <div class="coai">
                            <div class="cos">Checkout -</div>
                            <div class="item">${quantity} items</div>
                        </div>
                        <button class="cc">
                            <p>Clear Cart</p>
                        </button>
                    </div>
            `;

            // Render each product in the cart
            for (let i = 0; i < cartLocal.length; i++) {
                html += `
                    <div class="prds">
                        <div class="prs">
                            <div class="pria">
                                <div class="pri">
                                    <img src="./frenzyskin/blastx.jpg" width="80px" height="80px">
                                </div>
                                <div class="prnac">
                                    <div class="prnc">${cartLocal[i].productName}</div>
                                    <div class="proad">${cartLocal[i].author} · ${cartLocal[i].date}</div>
                                </div>
                            </div>
                            <div class="price">
                                <div class="prpr">
                                    <div class="vp">
                                        <img width="15" height="15" src="vp.jpg">
                                    </div>
                                    <p>${cartLocal[i].price}</p>
                                </div>
                                <div class="aar">
                                    <div class="add">
                                        <p>Add To Favorites</p>
                                    </div>
                                    <div class="remove">
                                        <p>Remove From Cart</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr>
                    </div>
                `;
            }

            // Render payment section
            html += `
                <div class="payment">
                    <div class="confirm">Confirm your order</div>
                    <div class="checkaccount">
                        <div class="check">Is that you | Prove it</div>
                        <div class="checkinput">
                            <input type="text" class="form-input" id="inputEmail" placeholder=" ">
                            <label for="name" class="form-label">Username</label>
                        </div>
                        <div class="checkinput">
                            <input type="password" class="form-input" id="inputPassword" placeholder=" ">
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
                                    <p>900</p>
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
                                    <p>900</p>
                                </div>
                            </div>
                        </div>
                        <button class="pay">
                            <p>PAY NOW</p>
                        </button>
                        <div class="help">
                            <p>By clicking Confirm purchase, you agree to our <a>Term of Service</a> and that you have read our
                                <a>Privacy Policy</a>
                            </p>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // If cart is empty
            html += `
                <div class="product">
                    <div class="none">
                        <p>Your cart is currently empty</p>
                        <button>Add Item To Cart</button>
                    </div>
                </div>
                <div class="payment">
                    <img src="runtobuy.jpg" width="100%" height="538px">
                </div>
            `;
        }
    } else {
        // If cart data is not found in localStorage
        html += `
            <div class="product">
                <div class="none">
                    <p>Your cart is currently empty</p>
                    <button>Add Item To Cart</button>
                </div>
            </div>
            <div class="payment">
                <img src="runtobuy.jpg" width="100%" height="538px">
            </div>
        `;
    }

    // Finally, update the content element with the constructed HTML
    content.innerHTML = html;

    // Example event handling (to be refined based on your needs)
    const clearCartButton = document.querySelector('.cc');
    if (clearCartButton) {
        clearCartButton.addEventListener('click', function () {
            localStorage.removeItem('cart');
            renderCart(); // Re-render after clearing the cart
        });
    }
}
