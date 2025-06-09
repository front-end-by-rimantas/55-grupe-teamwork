import { portfolioData } from "../data/portfolioData.js";
import { capitalize } from "../lib/capitalize.js";

export function portfolioGalleryMultiSelect() {
    const uniqueTags = [];
    let cardsHTML = '';
    let filterHTML = '';

    for (const card of portfolioData) {
        cardsHTML += `
            <div class="card show">
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
        filterHTML += `<button class="active">${capitalize(tag)}</button>`;
    }

    const HTML = `
        <section class="container">
            <div class="row">
                <div class="col-12 col-lg-6 m-lg-3 section-texts section-texts-center">
                    <div class="section-tag">Recent projects</div>
                    <h2 class="section-title">Portfolio (multi)</h2>
                    <p class="section-desc">From residential households to commercial enterprises, we provide reliable, efficient, and sustainable energy solutions.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12 gallery-filter-multi">
                    ${filterHTML}
                </div>
                <div class="col-12 gallery-content-multi">${cardsHTML}</div>
            </div>
        </section>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);

    const buttonsDOM = document.querySelectorAll('.gallery-filter-multi button');
    const cardsDOM = document.querySelectorAll('.gallery-content-multi .card');

    let activeFilters = uniqueTags;

    for (const buttonDOM of buttonsDOM) {
        buttonDOM.addEventListener('click', () => {
            buttonDOM.classList.toggle('active');
            const clickedBtn = buttonDOM.textContent.toLowerCase();

            if (buttonDOM.classList.contains('active')) {
                activeFilters.push(clickedBtn);
            } else {
                activeFilters = activeFilters.filter(t => t !== clickedBtn);
            }

            for (let i = 0; i < cardsDOM.length; i++) {
                const cardDOM = cardsDOM[i];

                cardDOM.classList.remove('show');

                for (const activeTag of activeFilters) {
                    if (portfolioData[i].tags.includes(activeTag) || clickedBtn === 'all') {
                        cardDOM.classList.add('show');
                        break;
                    }
                }
            }
        });
    }
}