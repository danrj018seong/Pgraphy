function loginv() {
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;

    if (user === "") {
        document.getElementById("user").style.border = "1px solid red";
        alert("Enter your user please");
        event.preventDefault();
        return false;
    }

    if (user === "jian_jiang@naver.com") {
        document.getElementById("user").style.border = "1px solid green";
    }else{
        document.getElementById("user").style.border = "1px solid red";
        alert("Wrong user");
        event.preventDefault();
        return false;
    }

    if (password === "") {
        document.getElementById("password").style.border = "1px solid red";
        alert("You must enter a password");
        event.preventDefault();
        return false;
    }

    if (password === "1234qwas") {
        document.getElementById("password").style.border = "1px solid green";
    }else{
        document.getElementById("password").style.border = "1px solid red";
        alert("Wrong password");
        event.preventDefault();
        return false;
    }

}
