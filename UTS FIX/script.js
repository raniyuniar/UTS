function addActiveClass(selectedNavId) {
    var navIds = ['nav-home', 'nav-about', 'nav-work', 'nav-contact']
    navIds.forEach(navId => {
        navId === selectedNavId ? document.getElementById(navId).classList.add("active") : document.getElementById(navId).classList.remove("active")
    });
    console.log
}
var form = document.getElementById('form')
form.addEventListener("submit", (e) => {
    e.preventDefault()
    alert('Form Submitted')
    form.reset()
})