const baseUrl = 'https://dummyjson.com';

const showWindow = () => {
  alert('Section medan is the best');
}

const fetchProducts = async () => {
  const url = `${baseUrl}/products`;
  const res = await fetch(url);

  return res.json();
};

fetchProducts()
.then((res) => {
  if (res) {
    const { products: listOfProducts } = res;

    if (listOfProducts.length > 0) {
      const cardProduct = document.getElementById('cardContainer');
      cardProduct.innerHTML = listOfProducts.map((product) => {
        const {
          brand,
          category,
          description,
          thumbnail,
          price,
          images,
        } = product;

        const thumbnaiImage = images[1];

        return (
          `<div id="cardProduct" class="card-container">
              <div class="product-image-container">
                <img src=${thumbnaiImage} alt="">
              </div>
              <div class="content-container">
                <div class="flex-between">
                  <p>${brand}</p>
                  <p>${category}</p>
                </div>
                <p class="m_x_10">${price}</p>
                <p class="m_b_10">${description}</p>
                <div class="button-container">
                  <button onclick="showWindow()" class="button-orange rounded-full">Buy</button>
                </div>
              </div>
            </div>
          `
        );
      }).join('');
    }
  }
});

const changeCardBackground = () => {
  const collectionOfCard = document.querySelectorAll('.card-container');

  for (let i = 0; i < collectionOfCard.length; i++) {
    collectionOfCard[i].style.color = '#FFF';

    if (i % 2 === 0) {
      collectionOfCard[i].style.backgroundColor = '#1B1B1B';
    } else {
      collectionOfCard[i].style.color = 'green';
      collectionOfCard[i].style.backgroundColor = '#CBCBCB';
    }
  }
}