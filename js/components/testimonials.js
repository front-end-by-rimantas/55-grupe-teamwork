import { testimonialsData } from "../data/testimonialsData.js";

export function testimonials() {
    const expandedList = [
        testimonialsData.at(-1),
        ...testimonialsData,
        testimonialsData.at(0),
    ];
    const count = expandedList.length;
    let itemsHTML = '';


    for (const item of expandedList) {
        itemsHTML += `
            <div class="carousel-item" style="width: ${100 / count}%;">
                <img src="./img/services/${item.img}">
            </div>`;
    }

    const circlesHTML = '<div class="circle"></div>'
        .repeat(testimonialsData.length)
        .replace('circle', 'circle active');

    const HTML = `
        <section class="container bg-dark testimonials">
            <div class="row">
                <div class="col-12 col-lg-5 section-texts">
                    <div class="section-tag section-tag-white">Testimonials</div>
                    <h2 class="section-title">Powerful Praise Hear from Our Customers</h2>
                    <p class="section-desc">We take pride in providing top-notch electricity services that exceed our customers' expectations.</p>
                    <a href="#">View all reviews</a>
                </div>
                <div class="col-12 col-lg-7">
                    <div class="carousel">
                        <div class="carousel-content">
                            <div class="carousel-content-list" style="width: ${count}00%; margin-left: -100%;">
                                ${itemsHTML}
                            </div>
                        </div>
                        <div class="carousel-actions">
                            <i class="fa fa-angle-left"></i>
                            ${circlesHTML}
                            <i class="fa fa-angle-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);

    const contentListDOM = document.querySelector('.carousel-content .carousel-content-list');
    const circlesDOM = document.querySelectorAll('.carousel-actions .circle');
    const prevArrowDOM = document.querySelector('.carousel-actions .fa-angle-left');
    const nextArrowDOM = document.querySelector('.carousel-actions .fa-angle-right');
    let activeIndex = 1;
    let animationInProgress = false;

    for (let i = 0; i < circlesDOM.length; i++) {
        circlesDOM[i].addEventListener('click', () => {
            if (animationInProgress) {
                return;
            }

            circlesDOM[activeIndex - 1].classList.remove('active');
            activeIndex = i + 1;
            contentListDOM.style.marginLeft = activeIndex * -100 + '%';
            circlesDOM[activeIndex - 1].classList.add('active');
            animationInProgress = true;
            setTimeout(() => {
                animationInProgress = false;
            }, 1000);
        });
    }

    prevArrowDOM.addEventListener('click', () => {
        if (animationInProgress) {
            return;
        }
        animationInProgress = true;

        circlesDOM[activeIndex - 1].classList.remove('active');
        activeIndex--;
        if (activeIndex < 1) {
            contentListDOM.style.marginLeft = activeIndex * -100 + '%';

            setTimeout(() => {
                contentListDOM.style.transition = 'none';
                activeIndex = testimonialsData.length;
                contentListDOM.style.marginLeft = activeIndex * -100 + '%';
                setTimeout(() => {
                    contentListDOM.style.transition = 'all 1s';
                }, 1);
                circlesDOM[activeIndex - 1].classList.add('active');
                animationInProgress = false;
            }, 1000);
        } else {
            contentListDOM.style.marginLeft = activeIndex * -100 + '%';
            circlesDOM[activeIndex - 1].classList.add('active');
            setTimeout(() => {
                animationInProgress = false;
            }, 1000);
        }
    });

    nextArrowDOM.addEventListener('click', () => {
        if (animationInProgress) {
            return;
        }
        animationInProgress = true;

        circlesDOM[activeIndex - 1].classList.remove('active');
        activeIndex++;
        if (activeIndex === testimonialsData.length + 1) {
            contentListDOM.style.marginLeft = activeIndex * -100 + '%';

            setTimeout(() => {
                contentListDOM.style.transition = 'none';
                activeIndex = 1;
                contentListDOM.style.marginLeft = activeIndex * -100 + '%';
                setTimeout(() => {
                    contentListDOM.style.transition = 'all 1s';
                }, 1);
                circlesDOM[activeIndex - 1].classList.add('active');
                animationInProgress = false;
            }, 1000);
        } else {
            contentListDOM.style.marginLeft = activeIndex * -100 + '%';
            circlesDOM[activeIndex - 1].classList.add('active');
            setTimeout(() => {
                animationInProgress = false;
            }, 1000);
        }
    });
}