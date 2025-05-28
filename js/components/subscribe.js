export function subscribe() {
    const HTML = `
        <section class="container bg-red subscribe">
            <div class="row">
                <div class="col-12 col-lg-6 col-xxl-5 section-texts">
                    <h2 class="section-title">Ready to Power up your Savings and Reliability?</h2>
                    <p class="section-desc">Feel free to customize this paragraph to better reflect the specific services offered by your IT solution & the unique</p>
                    <form>
                        <label for="subscribe_email">Email</label>
                        <input id="subscribe_email" required type="email">
                        <button type="submit">Subscribe now</button>
                    </form>
                </div>
                <img src="./img/elektrikas.png" alt="Elektrikas" class="col-12 col-lg-6 col-xl-5 m-xl-1 col-xxl-4">
            </div>
        </section>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}