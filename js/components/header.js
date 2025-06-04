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
        </header>
        <div class="mobile-main-header">
            <img class="logo" src="./img/logo.webp" alt="Logo">
            <nav class="main-nav">
                <a class="link" href="#">Link</a>
                <a class="link" href="#">Link</a>
                <a class="link" href="#">Link</a>
                <a class="link" href="#">Link</a>
                <a class="link" href="#">Link</a>
            </nav>
            <div class="details-group">
                <p class="details-title">Contact info</p>
                <ul class="details-list">
                    <li class="details-item"><i class="fa fa-globe"></i> Turinys</li>
                    <li class="details-item"><i class="fa fa-globe"></i> Turinys</li>
                </ul>
            </div>
            <div class="details-group">
                <p class="details-title">Our location</p>
                <ul class="details-list">
                    <li class="details-item"><i class="fa fa-globe"></i> Turinys</li>
                </ul>
            </div>
            <div class="details-group">
                <p class="details-title">Social links</p>
                <ul class="details-socials">
                    <a class="fa fa-globe details-icon" href="#" target="_blank"></a>
                    <a class="fa fa-globe details-icon" href="#" target="_blank"></a>
                    <a class="fa fa-globe details-icon" href="#" target="_blank"></a>
                    <a class="fa fa-globe details-icon" href="#" target="_blank"></a>
                </ul>
            </div>
        </div>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);

    const hamburgerDOM = document.querySelector('.hamburger');
    const mobileHeaderDOM = document.querySelector('.mobile-main-header');

    hamburgerDOM.addEventListener('click', () => {
        mobileHeaderDOM.classList.add('show');
    });

    addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            mobileHeaderDOM.classList.remove('show');
        }
    });
}