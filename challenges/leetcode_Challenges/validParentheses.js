/**
 * Vérifie si une chaîne de caractères composée de parenthèses/brackets/braces
 * est "valide".
 * 
 * Une chaîne est considérée comme valide si :
 * - Chaque parenthèse ouvrante a une parenthèse fermante correspondante.
 * - Les parenthèses sont correctement imbriquées.
 * 
 * Exemples valides : "()", "[]", "{}", "[()]"
 * Exemples invalides : "(]", "([)]", "((("
 * 
 * @param {string} s - La chaîne d'entrée contenant uniquement '(', ')', '{', '}', '[' et ']'.
 * @returns {boolean} - Retourne `true` si la chaîne est valide, sinon `false`.
 */
function isValid(s) {
    // Map des fermantes vers leur ouvrante correspondante
    const closeOfOpen = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Pile pour suivre les symboles ouvrants rencontrés
    let stack = [];

    // Parcourt chaque caractère de la chaîne
    for (let c of s) {
        // Si c'est un symbole fermant
        if (closeOfOpen[c]) {
            // Vérifie que le sommet de la pile correspond à son ouvrant
            if (stack.length > 0 && stack[stack.length - 1] === closeOfOpen[c]) {
                stack.pop(); // correspondance trouvée → on retire de la pile
            } else {
                return false; // pas de correspondance → chaîne invalide
            }
        } else {
            // Si c'est un ouvrant, on le pousse dans la pile
            stack.push(c);
        }
    }

    // À la fin, la pile doit être vide (tout a été correctement fermé)
    return stack.length === 0;
}

// Exemple d'utilisation
let s = "[()]";
console.log(isValid(s)); // true
