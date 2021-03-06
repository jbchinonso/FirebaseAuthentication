const guideList = document.querySelector('.guides')
const loggedinLinks = document.querySelectorAll('.logged-in')
const loggedoutLinks = document.querySelectorAll('.logged-out')

const setupUi = (user) => {
    if (user) {
        loggedinLinks.forEach(item => item.style.display = 'block')
        loggedoutLinks.forEach(item => item.style.display = 'none')
    } else {
        loggedoutLinks.forEach(item => item.style.display = 'block')
        loggedinLinks.forEach(item => item.style.display = 'none')
    }
}

const setupGuides = (data) => {

    if (data.length) {
        let html = ''
        data.forEach(doc => {
            const guide = doc.data()
            const li = `<li>
                    <div class="collapsible-header grey lighten-4">${guide.title}</div>
                    <div class="collapsible-body white">${guide.content}</div>
                    </li>`;

            html += li

        });

        guideList.innerHTML = html
    } else {
        guideList.innerHTML = "<h3 class = 'center-align'>Login to View guides</h3>"
    }
    

}


// setup materialize components
document.addEventListener("DOMContentLoaded", function () {
  var modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);

  var items = document.querySelectorAll(".collapsible");
  M.Collapsible.init(items);
});
