export function hero() {
    const HTML = 'HERO';

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}