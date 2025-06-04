import { contactInfoData, headerMenuData, ourLocationData, socialsData } from "../data/headerData.js";

export function header() {
    const HTML = `
        <header class="container main-header">
            <div class="row">
                <div class="col-12 header-content">
                    <img class="logo" src="./img/logo.webp" alt="Logo">
                    ${headerMenu(headerMenuData)}
                    <i class="fa fa-bars hamburger"></i>
                </div>
            </div>
        </header>
        <div class="mobile-main-header">
            <img class="logo" src="./img/logo.webp" alt="Logo">
            ${mobileHeaderMenu(headerMenuData)}
            ${detailsGroupWithIcons(contactInfoData)}
            ${detailsGroupWithIcons(ourLocationData)}
            ${detailsGroupForSocials(socialsData)}
            <i class="fa fa-times close"></i>
        </div>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);

    const hamburgerDOM = document.querySelector('.hamburger');
    const mobileHeaderDOM = document.querySelector('.mobile-main-header');
    const closeDOM = document.querySelector('.close');

    hamburgerDOM.addEventListener('click', () => {
        mobileHeaderDOM.classList.add('show');
    });

    closeDOM.addEventListener('click', () => {
        mobileHeaderDOM.classList.remove('show');
    });

    addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            mobileHeaderDOM.classList.remove('show');
        }
    });
}

function headerMenu(data) {
    let HTML = '';

    for (const link of data) {
        if (link.subMenu) {
            let subMenuHTML = '';

            for (const subLink of link.subMenu) {
                subMenuHTML += `<a class="link" href="${subLink.href}">${subLink.text}</a>`;
            }

            HTML += `
                <div>
                    <a class="link" href="${link.href}">${link.text}</a>
                    <div>${subMenuHTML}</div>
                </div>`;
        } else {
            HTML += `<a class="link" href="${link.href}">${link.text}</a>`;
        }
    }

    return `<nav class="main-nav">${HTML}</nav>`;
}

function mobileHeaderMenu(data) {
    let HTML = '';

    for (const link of data) {
        HTML += `<a class="link" href="${link.href}">${link.text}</a>`;
    }

    return `<nav class="main-nav">${HTML}</nav>`;
}

function detailsGroupWithIcons(data) {
    let HTML = '';

    for (const item of data.details) {
        HTML += `<li class="details-item"><i class="${item.icon}"></i>${item.text}</li>`;
    }

    return `
        <div class="details-group">
            <p class="details-title">${data.title}</p>
            <ul class="details-list">${HTML}</ul>
        </div>`;
}

function detailsGroupForSocials(data) {
    let HTML = '';

    for (const item of data.details) {
        HTML += `<a class="${item.icon} details-icon" href="${item.href}" target="_blank"></a>`;
    }

    return `
        <div class="details-group">
            <p class="details-title">${data.title}</p>
            <ul class="details-socials">${HTML}</ul>
        </div>`;
}