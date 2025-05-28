export function faq() {
    const HTML = `
        <section class="container bg-grey">
            <div class="row">
                <div class="col-12 col-lg-5 section-texts">
                    <div class="section-tag">FAQ's</div>
                    <h2 class="section-title">Frequently Best Asked Question?</h2>
                    <p class="section-desc">That's why we've compiled a list of frequently asked questions to help make the process as smooth as possible for you.</p>
                    <a href="#">Have any questions</a>
                </div>
                <div class="col-12 col-lg-6 m-lg-1">
                    <div>
                        <p>How do I sign up for your electricity services?</p>
                        <p>Whether you're wondering about our pricing plans, process installation , or sustainability initiatives.</p>
                    </div>
                    <div>
                        <p>How do I sign up for your electricity services?</p>
                        <p>Whether you're wondering about our pricing plans, process installation , or sustainability initiatives.</p>
                    </div>
                    <div>
                        <p>How do I sign up for your electricity services?</p>
                        <p>Whether you're wondering about our pricing plans, process installation , or sustainability initiatives.</p>
                    </div>
                    <div>
                        <p>How do I sign up for your electricity services?</p>
                        <p>Whether you're wondering about our pricing plans, process installation , or sustainability initiatives.</p>
                    </div>
                </div>
            </div>
        </section>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}