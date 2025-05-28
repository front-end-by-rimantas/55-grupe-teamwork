export function clientLogos() {
    const HTML = `
        <section class="container bg-grey">
            <div class="row">
                <p class="col-12 col-lg-4 m-lg-4">More than 5K+ brands with work Techzen</p>
            </div>
            <div class="row">
                <div class="col-12">
                    CLIENT LOGOS CONTENT
                </div>
            </div>
        </section>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}