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
                    TESTIMONIALS CONTENT
                </div>
            </div>
        </section>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}