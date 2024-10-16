import hljs from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/es/highlight.min.js';
//  and it's easy to individually load additional languages
import go from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/es/languages/go.min.js';

hljs.registerLanguage('go', go);

// hljs.highlightAll();
window.onload = () => {
  document.querySelectorAll('pre').forEach((el) => {
    const btn = document.createElement('button');
    btn.classList.add('copy-btn');
    btn.innerText = 'copier';
    el.insertAdjacentElement('beforeend', btn);
  });

  document.querySelectorAll('pre code').forEach((el) => {
    hljs.highlightElement(el);
  });

  document.querySelectorAll('.copy-btn').forEach((button) => {
    button.addEventListener('click', function () {
      const codeBlock = this.previousElementSibling;
      const textToCopy = codeBlock.innerText;

      // Copier dans le presse-papiers
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          // Changer temporairement le texte du bouton pour montrer que le code est copié
          button.textContent = 'Copié !';
          setTimeout(() => {
            button.textContent = 'copier';
          }, 2000);
        })
        .catch((err) => {
          console.error('Échec de la copie', err);
        });
    });
  });
};
