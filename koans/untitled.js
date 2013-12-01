var _ = require('underscore')._;


  var products;


    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
      
    var productsICanEat = [];

    var mushroomTest = function(ingredients){
        return ingredients !== 'mushrooms';
    };

    _.filter(products, function(lamepizza){
      if(lamepizza.containsNuts == false){
        if(_(lamepizza.ingredients).all(mushroomTest)){
            productsICanEat.push(lamepizza);
        }
      }
    });

     console.log(productsICanEat)