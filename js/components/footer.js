export function footer() {
    const HTML = `
        <footer class="container bg-dark">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4">
                    <img src="#" alt="Logo">
                    <p>Our goal is to demystify the process, address your concerns, and empower you with the knowledge to embark.</p>
                    <div>
                        <a href="#" target="_blank">SOC</a>
                        <a href="#" target="_blank">SOC</a>
                        <a href="#" target="_blank">SOC</a>
                        <a href="#" target="_blank">SOC</a>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <p>Electricity service</p>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                </div>
                <div class="col-12 col-md-6 col-lg-2">
                    <p>Quick links</p>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <p>Contact us</p>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                </div>
            </div>
            <div class="row">
                <p class="col-12">&copy; Copyright 2024 - Current. All Right Reserved</p>
            </div>
        </footer>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}