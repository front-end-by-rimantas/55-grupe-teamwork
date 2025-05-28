export function howItWorks() {
    const HTML = `
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-5 col-xl-4 section-texts">
                    <div class="section-tag">How it work</div>
                    <h2 class="section-title">How to Work Our Electricity Service</h2>
                    <p class="section-desc">Throughout the process, transparency & communication, keeping you informed.</p>
                </div>
                <div class="col-12 col-lg-7 col-xl-8">CONTENT</div>
            </div>
        </div>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}