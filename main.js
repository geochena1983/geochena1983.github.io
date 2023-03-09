const url = "https://randomuser.me/api/";
const phone = document.querySelector(".phone-number");
const mail = document.querySelector(".mail");
const map = document.querySelector(".location");
const profileImg = document.querySelector(".profile-image");
const name = document.querySelector(".profile-name");
const profesion = document.querySelector(".profesional-title");

const getUser = async () => {
    try {
        const res = await fetch(url);
        const data = await res.json();

        const user = await data.results[0];

        if (user) {
            console.log("getUser()", user);
            phone.textContent = user.phone;
            mail.textContent = user.email;
            name.innerHTML = `${user.name.first} <br /> ${user.name.last}`;
            map.innerHTML = `${user.location.city}, ${user.location.street.name}`;
            profileImg.src = user.picture.large;
        }
    } catch (error) {
        console.log(error);
    }

    //     console.log("DATA????", data.results[0]);
    //     return;
};

// window.addEventListener("DOMContentLoaded", (event) => {
//     Swal.fire({
//         title: "Hi!",
//         text: "Do you want to continue",
//         icon: "success",
//         confirmButtonText: "Cool",
//     });
// });

document.addEventListener("DOMContentLoaded", (event) => {
    Swal.fire({
        title: "Hi!",
        text: "Do you want to continue",
        icon: "success",
        confirmButtonText: "Cool",
    });
    getUser();

    document.addEventListener("click", (e) => {
        if (e.target.matches("#button")) {
            // let weekly = e.target;
            getUser();
            // console.log(e.target);
        }
    });
});
