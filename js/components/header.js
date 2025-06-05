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

    const mainHeaderDOM = document.querySelector('.main-header');
    const hamburgerDOM = document.querySelector('.hamburger');
    const closeDOM = document.querySelector('.close');
    const mobileHeaderDOM = document.querySelector('.mobile-main-header');
    const mobileMenuPlusDOM = mobileHeaderDOM.querySelectorAll('.fa-plus');
    const mobileMenuMinusDOM = mobileHeaderDOM.querySelectorAll('.fa-minus');

    hamburgerDOM.addEventListener('click', () => {
        mobileHeaderDOM.classList.add('show');
    });

    closeDOM.addEventListener('click', () => {
        mobileHeaderDOM.classList.remove('show');
    });

    for (const plusDOM of mobileMenuPlusDOM) {
        plusDOM.addEventListener('click', () => {
            plusDOM.parentNode.parentNode.classList.add('expanded');
        });
    }

    for (const minusDOM of mobileMenuMinusDOM) {
        minusDOM.addEventListener('click', () => {
            minusDOM.parentNode.parentNode.classList.remove('expanded');
        });
    }

    addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            mobileHeaderDOM.classList.remove('show');
        }
    });

    addEventListener('scroll', () => {
        if (scrollY > 50) {
            mainHeaderDOM.classList.add('header-fixed');
        } else {
            mainHeaderDOM.classList.remove('header-fixed');
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
                <div class="dropdown">
                    <a class="link" href="${link.href}">${link.text}<i class="fa fa-angle-down"></i></a>
                    <div class="dropdown-content">${subMenuHTML}</div>
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
        if (link.subMenu) {
            let subMenuHTML = '';

            for (const subLink of link.subMenu) {
                subMenuHTML += `<a class="link" href="${subLink.href}">${subLink.text}</a>`;
            }

            HTML += `
                <div class="dropdown">
                    <a class="link" href="${link.href}">
                        ${link.text}
                        <i class="fa fa-plus"></i>
                        <i class="fa fa-minus"></i>
                    </a>
                    <div class="dropdown-content">${subMenuHTML}</div>
                </div>`;
        } else {
            HTML += `<a class="link" href="${link.href}">${link.text}</a>`;
        }
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