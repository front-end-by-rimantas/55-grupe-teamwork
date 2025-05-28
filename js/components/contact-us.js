export function contactUs() {
    const HTML = `
        <section class="container bg-dark contact-us">
            <div class="row">
                <div class="col-12 col-lg-6 section-texts">
                    <div class="section-tag section-tag-white">Contact us</div>
                    <h2 class="section-title">Illuminate Your Message Get in Contact</h2>
                    <p class="section-desc">Have questions or ready to get started with our electricity services? Our team is here to help! Whether you're seeking.</p>
                    <div>
                        <div>
                            <i></i>
                            <p>Phone</p>
                            <p>123 456 7890</p>
                        </div>
                        <div>
                            <i></i>
                            <p>Address</p>
                            <p>8502 Preston Rd. Inglewoo</p>
                        </div>
                        <div>
                            <i></i>
                            <p>Email</p>
                            <p>ouremail@gmail.com</p>
                        </div>
                        <div>
                            <i></i>
                            <p>Linkedin</p>
                            <p>Fleexstudio</p>
                        </div>
                    </div>
                </div>
                <form class="col-12 col-lg-6">
                    <h3>Request A Quote</h3>
                    <div>
                        <label for="name">Name (Required)</label>
                        <input id="name" type="text" required>
                    </div>
                    <div>
                        <label for="phone">Phone (Required)</label>
                        <input id="phone" type="tel" required>
                    </div>
                    <div>
                        <label for="email">Email (Required)</label>
                        <input id="email" type="email" required>
                    </div>
                    <div>
                        <label for="message">Additional Details (Optional)</label>
                        <textarea id="message" required></textarea>
                    </div>
                    <div>
                        <label for="tos"><input id="tos" type="checkbox" required>I agree with the site privacy policy</label>
                    </div>
                    <div>
                        <button type="submit">Submit now</button>
                    </div>
                </form>
            </div>
        </section>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}