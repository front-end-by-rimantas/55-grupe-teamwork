import { aboutData } from "../data/aboutData.js";

export function aboutUs() {
    let liHTML = '';

    for (const li of aboutData) {
        liHTML += `<li><i class="fa fa-check-circle"></i>${li}</li>`;
    }

    const HTML = `
        <section class="container about-us">
            <div class="row">
                <div class="col-12 col-lg-6">
                    IMAGES
                </div>
                <div class="col-12 col-lg-6 section-texts">
                    <div class="section-tag">About us</div>
                    <h2 class="section-title">Charged with Purpose to Shaping Future of Energy</h2>
                    <p class="section-desc">We more than just a provider of electricity services - we're pioneers in the energy industry, dedicated to shaping a brighter, more sustainable future for all.</p>
                    <ul>${liHTML}</ul>
                    <a href="#">About us</a>
                </div>
            </div>
        </section>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}