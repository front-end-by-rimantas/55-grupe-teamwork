import { servicesData } from "../data/servicesData.js";
import { arrowTopRight } from "../svg/arrow-top-right.js";

export function services() {
    let cardsHTML = '';

    for (let i = 0; i < 3; i++) {
        const service = servicesData[i];
        cardsHTML += `
            <div class="col-12 col-md-6 col-lg-4 service-card">
                <div class="service-img">
                    <img src="./img/services/${service.img}" alt="${service.imgAlt}">
                </div>
                <div class="service-content">
                    <div class="service-number">0${i + 1}</div>
                    <h3 class="service-title">${service.title}</h3>
                    <p class="service-desc">${service.description}</p>
                    <a class="service-link" href="${service.link}">
                        Learn more
                        ${arrowTopRight()}
                    </a>
                </div>
            </div>`;
    }

    const HTML = `
        <div class="container bg-grey">
            <div class="row">
                <div class="col-12 col-lg-6 m-lg-3 section-texts section-texts-center">
                    <div class="section-tag">Our Service</div>
                    <h2 class="section-title">Electricity Service Offerings</h2>
                    <p class="section-desc">From residential households to commercial enterprises, we provide reliable, efficient, and sustainable energy solutions.</p>
                </div>
            </div>
            <div class="row">${cardsHTML}</div>
        </div>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}