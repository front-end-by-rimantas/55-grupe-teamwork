export function header() {
    const HTML = `
        <header class="container main-header">
            <div class="row">
                <div class="col-12 header-content">
                    <img class="logo" src="./img/logo.webp" alt="Logo">
                    <nav class="main-nav">
                        <a class="link" href="#">Link</a>
                        <a class="link" href="#">Link</a>
                        <a class="link" href="#">Link</a>
                        <a class="link" href="#">Link</a>
                        <a class="link" href="#">Link</a>
                    </nav>
                    <i class="fa fa-bars hamburger"></i>
                </div>
            </div>
        </header>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}