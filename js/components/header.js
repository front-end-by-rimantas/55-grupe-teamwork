export function header() {

    const HTML = 'HEADER';

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}