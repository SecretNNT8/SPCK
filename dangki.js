const userName = document.querySelector('#userName')
const userPass = document.querySelector('#userPass')
const signup = document.querySelector('.signup')
const toastify = document.querySelector('.toastify')
function signUp() {
    let emailValue = userName.value;
    let passValue = userPass.value;
    if (emailValue !== "" && passValue !== "") {
        signup.innerHTML = `
        <button class="btd" onclick="checkacc()">
                        <div>
                            <svg role="img" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-label="forward"
                                class="lgin">
                                <path
                                    d="M22.8011 14.75L14.2234 6.70971L16.0474 5L26.8695 15.1441C27.3732 15.6163 27.3732 16.3817 26.8695 16.8538L16.0474 26.998L14.2234 25.2883L22.7989 17.25H4.75V14.75H22.8011Z">
                                </path>
                            </svg>
                        </div>
                    </button>`;
        const btlg = document.querySelector('.btlg')
    } else {
        signup.innerHTML = `
        <button class="btsu">
        <div>
                            <svg role="img" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-label="forward"
                            class="lgin">
                                <path
                                    d="M22.8011 14.75L14.2234 6.70971L16.0474 5L26.8695 15.1441C27.3732 15.6163 27.3732 16.3817 26.8695 16.8538L16.0474 26.998L14.2234 25.2883L22.7989 17.25H4.75V14.75H22.8011Z">
                                </path>
                            </svg>
                        </div>
                    </button>`;
    }
}
signUp();
function checkacc() {
    const user = JSON.parse(localStorage.getItem('users'))
    let emailValue = userName.value;
    const usrName = document.getElementById('userName').value;
    const usrPw = document.getElementById('userPass').value;
    toastify.style.visibility = "visible";
    if (localStorage.getItem('users')) {
        for (let i = 0; i < JSON.parse(localStorage.getItem('users')).length; i++) {
            if (emailValue == JSON.parse(localStorage.getItem('users'))[i].name) {
                let html = '';
                html += `
                        <div class="toast">
                            <div id="o">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 924 920" width="20px" height="20px">
                                    <path transform="translate(392,78)"
                                        d="m0 0h12l3 1 1 6-5 10-5 8-5 10-11 18-15 25-13 22-9 16-12 22-14 24-15 27-14 24-9 16-8 13-15 26-11 19-10 18-8 13-15 26-10 19-15 25-45 76-12 21-15 27-6 11-5 7-9 2-4-6-10-31-7-28-7-39-1-11v-71l1-11 2-6 2-17 6-25 12-37 9-22 8-16 11-21 11-17 14-20 13-17 8-10 31-31 11-9 17-14 20-14 14-9 16-9 19-10 20-9 36-12 26-7z"
                                        fill="#f28705" />
                                    <path transform="translate(511,77)"
                                        d="m0 0 10 1 37 8 17 5 22 8 26 12 26 14 20 13 16 11 16 13 11 9 17 17 8 7 11 12 11 13 13 18 10 15 11 17 10 18 15 33 11 30 7 28 5 32 3 16v71l-2 13-3 16-3 20-9 30-4 11-3 13-3 5-6 1-4-1-8-16-10-19-9-16-15-23-14-25-10-18-11-18-12-21-15-26-14-25-9-15-15-26-12-21-9-15-10-17-15-26-14-24-14-25-12-21-14-25-10-16-9-15-14-25-14-24-9-15-2-8zm300 521-1 5 3 1 1-4-1-2z"
                                        fill="#f2b705" />
                                    <path transform="translate(461,252)"
                                        d="m0 0 3 1 9 17 12 21 10 18 6 10 16 28 15 25 17 29 15 26 9 16 12 22 12 20 15 26 13 23 14 24 7 11 5 7v3h-5v4l-2 1-16 1h-354l-4-1-2-7 1-7 9-14 12-21 9-16 13-23 13-22 15-26 14-24 11-19 9-15 15-26 11-20 20-35 11-18 12-22 9-15 3-1 1 2h4zm-8 155-1 2v23l5 56 2 3 4-1 5-5 4-52v-25l-1-1zm4 88-2 1v15h8l6-1 2-10-1-4z"
                                        fill="#ff652f" />
                                    <path transform="translate(197,704)"
                                        d="m0 0h511l32 1 6 3v2l8-1-2 5-8 10-5 6-8 7-9 8-10 8-16 13-14 11-24 16-17 10-25 13-28 11-24 8-24 6-21 4-15 1-7 2-12 1h-69l-15-3-15-2-27-6-32-9-20-8-19-8-19-10-23-14-17-12-25-20-10-9-8-7-22-22-2-3 1-5 5-6z"
                                        fill="#f29f05" />
                                </svg>
                                <p>Tài khoản đã tồn tại.Hãy đến trang đăng nhập</p>
                            </div>
                        </div>`
                toastify.innerHTML = html;
                return;
            }
        }
        user.push({ name: usrName, password: usrPw });
        localStorage.setItem('users', JSON.stringify(user));
        let html = ``;
        html += `
                <div class="toast">
                    <div id="w">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 924 920" width="20px" height="20px">
                            <path transform="translate(459,71)"
                                d="m0 0h27l26 1 6 2 21 2 12 3 29 7 27 9 24 10 16 8 18 10 17 11 18 12 17 14 11 9 32 32 7 8 12 15 18 27 9 15 9 17 10 23 5 10 10 29 6 23 2 8 1 12 2 4 1 6v82l-5-2-16-13-10-9-10-8-14-12-11-9-11-10-8-7-13-10-10-9-11-9-10-9-11-9-9-7-13-12-13-10-11-10-13-10-11-10-13-10-12-11-12-9-12-11-13-11-10-8-9-8-28-22-13-12-11-10-10-8-8-8-14-11-5-3-5 1-13 12-9 9-22 18-14 12-8 7-13 11-11 9-14 11-11 9-9 9-14 11-10 9-14 11-10 9-9 7-13 11-11 9-14 12-13 10-13 12-11 9-26 22-11 9-9 8-8 7-10 9-17 13-12 11-13 10-7 7-7 4h-2l-1-2v-57l3-7 1-26 10-40 10-30 12-29 13-25 11-17 10-15 13-18 15-16 9-11 16-16 11-9 13-11 18-13 23-15 22-12 25-12 29-11 22-6 17-4 14-3 22-2 6-2z"
                                fill="#8ee4af" />
                            <path transform="translate(471,323)"
                                d="m0 0 5 2 13 13 10 8 13 11 11 9 26 22 11 9 9 8 10 8 10 9 8 7 14 11 13 11 8 6v2l4 2 17 14 14 12 9 8 10 8 14 11 14 13 14 11 15 13 10 8 16 13 11 9 13 11 10 8 11 9 3 4v7l-4 11-10 18-11 18-18 24-13 15-6 7h-2l-2 4-11 13-5 5-5-1-11-9-12-12-11-9-9-7-13-11-9-7-11-10-14-11-12-11-14-11-16-13-10-9-13-11-9-7-15-14-11-8-11-10-11-9-10-9-11-9-9-8-8-7-8-6-4 2-13 11-11 10-22 18-10 9-13 11-11 9-16 13-10 9-10 8-12 11-14 11-13 11-13 10-10 9-14 11-5 5h-2l-2 4-13 11-10 8-10 9-15 13-8 6-5-2-5-4-7-8-9-10-10-13-7-8-14-19-13-20-12-21-6-13 2-5 8-7 16-13 17-14 11-9 16-13 10-9 14-11 12-11 13-10 11-10 14-11 11-10 9-7 21-18 10-8 13-11 10-8 11-10 12-9 14-13 14-11 12-10 11-9 11-10 14-11 10-9 13-11z"
                                fill="#5cdb95" />
                            <path transform="translate(469,678)"
                                d="m0 0 6 1 6 4 9 9 2 1v2l4 2 9 8 11 9 11 10 14 11 10 9 22 18 16 13 11 9 17 13 5 5 1 5-5 4-10 3-16 6-16 5-18 4-15 4-34 5-31 2h-14l-35-2-29-5-40-10-24-8-13-5-4-3 1-5 8-7 13-10 7-6 9-7 15-13 11-9 10-9 14-11 11-10 13-10 15-13 13-11 8-7z"
                                fill="#379683" />
                        </svg>
                        <p>Đăng kí tài khoản thành công</p>
                    </div>
                </div>`
        toastify.innerHTML = html;
    } else {
        let users = [];
        users.push({ name: usrName, password: usrPw });
        localStorage.setItem('users', JSON.stringify(users));
    }
}
