export function blog() {
    const HTML = `
        <div class="container bg-grey">
            <div class="row">
                <div class="col-12 col-lg-6 m-lg-3 section-texts section-texts-center">
                    <div class="section-tag">Our blog</div>
                    <h2 class="section-title">EElectricity News &amp; Updates</h2>
                    <p class="section-desc">From residential households to commercial enterprises, we provide reliable, efficient, and sustainable energy solutions.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4">CARD</div>
                <div class="col-12 col-md-6 col-lg-4">CARD</div>
                <div class="col-12 col-md-6 col-lg-4">CARD</div>
            </div>
        </div>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}