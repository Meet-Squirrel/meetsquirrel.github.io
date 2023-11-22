console.log("JavaScript Connected!");
console.log("Nice to see you :)");
console.log("Have a great day! -حمزة");

window.addEventListener("scroll", () => {
   document.body.style.setProperty("--scroll", window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

function changeThme() {
   let color = (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, "0");
   setThemeColor(`#${color}`);
}

function changeThmeHex() {
   let hex = prompt("Enter valid hexidecimal code :)");
   if (hex) {
      if (hex.charAt(0) != "#") hex = `#${hex}`;
      if (/^#[0-9A-F]{3}$/i.test(hex) || /^#[0-9A-F]{6}$/i.test(hex) || /^#[0-9A-F]{8}$/i.test(hex)) {
         setThemeColor(hex);
      } else alert("Invalid hex code!");
   }
}

function setThemeColor(color) {
   document.documentElement.style.setProperty("--theme-color", color);
   let metaThemeColor = document.querySelector("meta[name=theme-color]");
   metaThemeColor.setAttribute("content", color);
}