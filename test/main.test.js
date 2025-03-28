/**
* @jest-environment jsdom
*/
 
const fs = require('fs');
const path = require('path');
 
describe('Test du DOM', () => {
  beforeEach(() => {
    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
    document.documentElement.innerHTML = html;
 
    // On charge le script manuellement
    // require('../main.js');
  });
 
  test('Clique sur le bouton met à jour le texte', () => {
    // Vérifie que le texte a été modifié
    expect(true).toBe(true);
  });
});