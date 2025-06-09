import { portfolioData } from "../data/portfolioData.js";
import { capitalize } from "../lib/capitalize.js";

export function portfolioGallery() {
    const uniqueTags = [];
    let cardsHTML = '';
    let filterHTML = '';

    for (const card of portfolioData) {
        cardsHTML += `
            <div class="card">
                <img class="img" src="./img/services/${card.img}" alt="Portfolio work">
                <p class="title">${card.title}</p>
                <p>${card.tags.join(', ')}</p>
            </div>`;

        for (const tag of card.tags) {
            if (!uniqueTags.includes(tag)) {
                uniqueTags.push(tag);
            }
        }
    }

    uniqueTags.sort();

    for (const tag of uniqueTags) {
        filterHTML += `<button>${capitalize(tag)}</button>`;
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
                <div class="col-12 gallery-filter">
                    <button class="active">All</button>
                    ${filterHTML}
                </div>
                <div class="col-12 gallery-content">${cardsHTML}</div>
            </div>
        </section>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);

    const buttonsDOM = document.querySelectorAll('.gallery-filter button');
    const cardsDOM = document.querySelectorAll('.gallery-content .card');

    for (const buttonDOM of buttonsDOM) {
        buttonDOM.addEventListener('click', () => {
            console.log(buttonDOM.textContent);

            for (const cardDOM of cardsDOM) {
                if (true) {
                    cardDOM.rodyti();
                } else {
                    cardDOM.slepti();
                }
            }
        });
    }
}