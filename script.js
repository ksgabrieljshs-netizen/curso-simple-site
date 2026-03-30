fetch('cursos.json')
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector('.container');

    data.forEach(curso => {
      const card = document.createElement('div');
      card.classList.add('CursoTemplate');

      card.innerHTML = `
        <img src="${curso.imagem}" alt="">
        <h1>${curso.nome}</h1>
        <p>${curso.preco}</p>
        <button>View</button>
        <button>Buy</button>
      `;

      container.appendChild(card);
    });
  });