import { howItWorksData } from "../data/howItWorksData.js";
import { arrowTopRight } from "../svg/arrow-top-right.js";

export function howItWorks() {
    let btnHTML = '';
    let activeButtonIndex = 0;

    for (const { btn } of howItWorksData) {
        btnHTML += `
            <button class="${activeButtonIndex++ ? '' : 'active'}" type="button">
                <img src="./img/how-it-works/${btn.icon}" alt="">
                ${btn.text}
            </button>`;
    }

    let contentHTML = '';
    let activeContentIndex = 0;

    for (const { content } of howItWorksData) {
        contentHTML += `
            <div class="card ${activeContentIndex++ ? '' : 'active'}">
                <img src="./img/how-it-works/${content.img}" alt="">
                <div class="content">
                    <p class="title">${content.title}</p>
                    <p class="desc">${content.description}</p>
                    <a class="link" href="${content.link.href}">
                        ${content.link.text}
                        ${arrowTopRight()}
                    </a>
                </div>
            </div>`;
    }

    const HTML = `
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-5 col-xl-4 section-texts">
                    <div class="section-tag">How it work</div>
                    <h2 class="section-title">How to Work Our Electricity Service</h2>
                    <p class="section-desc">Throughout the process, transparency & communication, keeping you informed.</p>
                    <div class="how-it-works-buttons">${btnHTML}</div>
                </div>
                <div class="col-12 col-lg-7 col-xl-8 how-it-works-content">${contentHTML}</div>
            </div>
        </div>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);

    const buttonsDOM = document.querySelectorAll('.how-it-works-buttons button');
    const cardsDOM = document.querySelectorAll('.how-it-works-content .card');
    let activeIndex = 0;

    for (let i = 0; i < buttonsDOM.length; i++) {
        buttonsDOM[i].addEventListener('click', () => {
            buttonsDOM[activeIndex].classList.remove('active');
            buttonsDOM[i].classList.add('active');

            cardsDOM[activeIndex].classList.remove('active');
            cardsDOM[i].classList.add('active');

            activeIndex = i;
        });
    }
}