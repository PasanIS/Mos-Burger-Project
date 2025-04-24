document.addEventListener("DOMContentLoaded", function () {
  const categoryCards = document.querySelectorAll(".card");
  const menuItemsContainer = document.getElementById("menuItems");

  const menuData = {
    burger: [
      {
        name: "Classic Burger",
        price: "750/=",
        code: "B1001",
        img: "imgs/classicBurger.jpg"
      },
      {
        name: "Turkey Burger",
        price: "1600/=",
        code: "B1003",
        img: "imgs/turkeyBurger.jpg"
      },
      {
        name: "Chicken Burger",
        price: "800/= + 20% Discount",
        code: "B1005",
        img: "imgs/chickenBurger.jpg"
      },
      {
        name: "Cheese Burger",
        price: "600/=",
        code: "B1007",
        img: "imgs/cheeseBurger.jpg"
      },
      {
        name: "Bacon Burger",
        price: "650/= + 15% Discount",
        code: "B1008",
        img: "imgs/baconBurger.jpg"
      },
      {
        name: "Shawarma Burger",
        price: "800/=",
        code: "B1009",
        img: "imgs/shawarmaBurger.jpg"
      },
      {
        name: "Olive Burger",
        price: "1800/=",
        code: "B1010",
        img: "imgs/oliveBurger.jpg"
      }
    ],

    submarine: [
      {
        name: "Crispy Chicken Submarine",
        price: "1500/=",
        code: "B1017",
        img: "imgs/crispyChickSub.jpg"
      },
      {
        name: "Cheese Submarine",
        price: "2200/=",
        code: "B1021",
        img: "imgs/cheeseSub.jpg"
      },
      {
        name: "MOS Special Submarine",
        price: "3000/=",
        code: "B1024",
        img: "imgs/mosSpecialSub.jpg"
      }
    ],

    fries: [
      {
        name: "Steak Fries",
        price: "600/=",
        code: "B1026",
        img: "imgs/steakFries.jpg"
      },
      {
        name: "French Fries",
        price: "650/=",
        code: "B1028",
        img: "imgs/frenchFries.jpg"
      }
    ],

    pasta: [
      {
        name: "Chicken & Cheese Pasta",
        price: "1600/= + 15% Discount",
        code: "B1031",
        img: "imgs/cheesePasta.jpg"
      },
      {
        name: "Creamy Shrimp Pasta",
        price: "2000/=",
        code: "B1034",
        img: "imgs/shrimpPasta.jpg"
      }
    ],

    chicken: [
      {
        name: "Fried Chicken",
        price: "2300/= + 10% Discount",
        code: "B1039",
        img: "imgs/friedChicken.jpg"
      },
      {
        name: "Hot Wings",
        price: "2400/=",
        code: "B1041",
        img: "imgs/hotWings.jpeg"
      },
      {
        name: "BBQ Chicken",
        price: "2100/=",
        code: "B1043",
        img: "imgs/bbqChicken.jpeg"
      }
    ],

    beverage: [
      {
        name: "Pepsi (330ml)",
        price: "990/= + 5% Discount",
        code: "B1044",
        img: "imgs/pepsi330ml.jpg"
      },
      {
        name: "Coca-Cola (330ml)",
        price: "1230/=",
        code: "B1045",
        img: "imgs/coca-cola330ml.jpg"
      },
      {
        name: "Sprite (330ml)",
        price: "1500/= + 3% Discount",
        code: "B1046",
        img: "imgs/sprite330ml.jpg" 
      },
      {
        name: "Mirinda (330ml)",
        price: "850/= + 7% Discount",
        code: "B1047",
        img: "imgs/mirinda330ml.jpg"
      }
    ]
  };

  categoryCards.forEach(card => {
    card.addEventListener("click", function () {
      const category = card.dataset.category;
      const items = menuData[category];

      menuItemsContainer.innerHTML = "";

      if (items && items.length > 0) {
        items.forEach(item => {
          const menuCard = document.createElement("div");
          menuCard.className = "menu-card";
          menuCard.innerHTML = `
            <img src="${item.img}" alt="${item.name}" />
            <h3>${item.name}</h3>
            <p>Price: ${item.price} <br> Code: (${item.code})</p>
            <button class="btn">Add to Cart</button>
          `;
          menuItemsContainer.appendChild(menuCard);
        });

        menuItemsContainer.style.display = "flex";
      } else {
        menuItemsContainer.style.display = "none";
      }
    });
  });
});
