// Fetch random cat image
document.getElementById('fetchCatBtn').addEventListener('click', function () {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => response.json())
      .then(data => {
        document.getElementById('catImage').src = data[0].url;
      })
      .catch(error => console.error('Error fetching cat image:', error));
  });
  
  // Form validation
  document.getElementById('signUpForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const form = this;
    
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }
  
    alert('Thank you for signing up!');
    form.reset();
    form.classList.remove('was-validated');
  });
  
  // Fetch cat breeds data
  fetch('data/catBreeds.json')
    .then(response => response.json())
    .then(data => {
      const breedsList = document.getElementById('breedsList');
      data.forEach(breed => {
        const breedCard = document.createElement('div');
        breedCard.classList.add('col-md-4', 'mb-4');
        breedCard.innerHTML = `
          <div class="card border">
          <img src="${breed.image_url}" class="card-img-top" alt="${breed.name}">
          <div class="card-body">
            <h5 class="card-title">${breed.name}</h5>
            <p class="card-text"><strong>Temperament:</strong> ${breed.temperament}</p>
            <p class="card-text"><strong>Origin:</strong> ${breed.origin}</p>
            <p class="card-text"><strong>Life Span:</strong> ${breed.life_span}</p>
            <p class="card-text">${breed.description}</p>
          </div>
        </div>
      `;
      breedsList.appendChild(breedCard);
    });
  })
  .catch(error => console.error('Error fetching cat breeds:', error));
  