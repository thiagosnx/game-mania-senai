function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => console.error('Error:', error));
}

function handleRoutes() {
    const path = window.location.hash.substring(1);
    switch (path) {
        case '':
            loadPage('home.html');
            break;
        case '/':
            loadPage('home.html');
            break;
        case '/login':
            loadPage('login.html');
            break;
        default:
            loadPage('404.html');
            break;
    }
}


window.addEventListener('hashchange', handleRoutes);




handleRoutes();