export function capitalize(word) {
    const firstLetter = word[0].toUpperCase();
    const otherLetters = word.slice(1);
    return firstLetter + otherLetters;
}