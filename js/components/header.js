export function header() {
    const HTML = `
        <header class="container">
            <div class="row">
                <div class="col-12">
                    HEADER CONTENT
                </div>
            </div>
        </header>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}