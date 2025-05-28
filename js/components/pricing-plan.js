export function pricingPlan() {
    const HTML = `
        <div class="container bg-grey">
            <div class="row">
                <div class="col-12 col-lg-6 m-lg-3 section-texts section-texts-center">
                    <div class="section-tag">Pricing plan</div>
                    <h2 class="section-title">Watt Wise Pricing Best Solutions</h2>
                    <p class="section-desc">That's why we offer a range of pricing plans designed to suit individual needs &amp; budget.</p>
                </div>
            </div>
            <div class="row">
                TOGGLE PRICING
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