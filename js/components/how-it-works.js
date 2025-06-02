import { howItWorksData } from "../data/howItWorksData.js";

export function howItWorks() {
    let btnHTML = '';

    for (const { btn } of howItWorksData) {
        btnHTML += `
            <button type="button">
                <img src="./img/how-it-works/${btn.icon}" alt="">
                ${btn.text}
            </button>`;
    }

    let contentHTML = '';

    for (const { content } of howItWorksData) {
        contentHTML += `
            <div>
                <img src="./img/how-it-works/${content.img}" alt="">
                <p>${content.title}</p>
                <p>${content.description}</p>
                <a href="${content.link.href}">${content.link.text}</a>
            </div>`;
    }

    const HTML = `
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-5 col-xl-4 section-texts">
                    <div class="section-tag">How it work</div>
                    <h2 class="section-title">How to Work Our Electricity Service</h2>
                    <p class="section-desc">Throughout the process, transparency & communication, keeping you informed.</p>
                    ${btnHTML}
                </div>
                <div class="col-12 col-lg-7 col-xl-8">${contentHTML}</div>
            </div>
        </div>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}