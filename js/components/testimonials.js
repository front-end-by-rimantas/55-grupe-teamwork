import { testimonialsData } from "../data/testimonialsData.js";

export function testimonials() {
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
                            <div class="carousel-item">
                                <img src="./img/services/service-img6.webp">
                            </div>
                        </div>
                        <div class="carousel-actions">
                            <i class="fa fa-angle-left"></i>
                            <div class="circle active"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <i class="fa fa-angle-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);

    const imgDOM = document.querySelector('.carousel-content img');
    const circlesDOM = document.querySelectorAll('.carousel-actions .circle');
    const prevArrowDOM = document.querySelector('.carousel-actions .fa-angle-left');
    const nextArrowDOM = document.querySelector('.carousel-actions .fa-angle-right');
    let activeIndex = 0;

    for (let i = 0; i < circlesDOM.length; i++) {
        circlesDOM[i].addEventListener('click', () => {
            circlesDOM[activeIndex].classList.remove('active');
            activeIndex = i;
            imgDOM.src = './img/services/' + testimonialsData[activeIndex].img;
            circlesDOM[activeIndex].classList.add('active');
        });
    }

    prevArrowDOM.addEventListener('click', () => {
        circlesDOM[activeIndex].classList.remove('active');
        activeIndex--;
        if (activeIndex < 0) {
            activeIndex = testimonialsData.length - 1;
        }
        imgDOM.src = './img/services/' + testimonialsData[activeIndex].img;
        circlesDOM[activeIndex].classList.add('active');
    });

    nextArrowDOM.addEventListener('click', () => {
        circlesDOM[activeIndex].classList.remove('active');
        activeIndex++;
        if (activeIndex === testimonialsData.length) {
            activeIndex = 0;
        }
        imgDOM.src = './img/services/' + testimonialsData[activeIndex].img;
        circlesDOM[activeIndex].classList.add('active');
    });
}