import { portfolioData } from "../data/portfolioData.js";

export function portfolioGallery() {
    let cardsHTML = '';

    for (const card of portfolioData) {
        cardsHTML += `
            <div class="card">
                <img class="img" src="./img/services/${card.img}" alt="Portfolio work">
                <p class="title">${card.title}</p>
            </div>`;
    }

    const HTML = `
        <section class="container">
            <div class="row">
                <div class="col-12 col-lg-6 m-lg-3 section-texts section-texts-center">
                    <div class="section-tag">Recent projects</div>
                    <h2 class="section-title">Portfolio</h2>
                    <p class="section-desc">From residential households to commercial enterprises, we provide reliable, efficient, and sustainable energy solutions.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12 portfolio-gallery">${cardsHTML}</div>
            </div>
        </section>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}