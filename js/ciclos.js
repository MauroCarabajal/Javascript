/* debugger;   */

let products = [
    {
      name: "hamburguesa",
      size: ["simple", "doble", "triple",],
    },
    {
      name: "pizza",
      size: ["chico", "mediano", "grande"],
    },
    {
      name: "milapizza",
      size: ["chico", "mediano", "grande"],
    },
    {
      name: "choripan",
      size: ["chico", "mediano", "grande"],
    },
  ];
  let again = true;
  let q = prompt("¿Que vas a comer?");
  while (q === "" || q.length < 4) {
    q = prompt("¿Que vas a comer?");
  }
  let query = [];
  let k = q.split(" ");
  //console.log(k);
  
  function searchProduct(q) {
    for (let i = 0; i < products.length; i++) {
      for (let j = 0; j < k.length; j++) {
        if (products[i].name.match(q) || products[i].name.match(k[j])) {
          if (query.indexOf(products[i]) === -1) query.push(products[i]);
        }
      }
    }
  
    if (query.length < 1) {
      console.log("Elige entre hamburguesa, pizza, choripan o milapizza");
      again = confirm("Elige entre hamburguesa, pizza, choripan o milapizza");
      if (again) {
        q = prompt("¿Que vas a comer?");
        searchProduct(q);
        return again;
      }
    }
    console.log("Tu busqueda encontro", query.length, "Productos:");
    console.log(query);
  }
  
  searchProduct(q);
  
  console.log("-----------------");
  
  let queryFilters = [];
  let filters = "";
  function filterSizes(filters) {
    while (filters === "") {
      filters = prompt("¿Que tamaño vas a elegir?");
    }
    for (let i = 0; i < query.length; i++) {
      for (let j = 0; j < query[i].size.length; j++) {
        if (query[i].size[j].match(filters)) {
          if (queryFilters.indexOf(query[i]) === -1) queryFilters.push(query[i]);
        }
      }
    }
  
    if (queryFilters.length < 1) {
      console.log("Elige entre chico, mediano y grande o simple, doble y triple");
      again = confirm("Elige entre chico, mediano y grande o simple, doble y triple");
      if (again) {
        filters = prompt("¿Que tamaño vas a elegir?");
        filterSizes(filters);
        return again;
      }
    } else {
      console.log(
        "Se filtraron y encontramos",
        queryFilters.length,
        "Productos:"
      );
    }
  }
  
  function filterProducts(filters) {
    filterSizes(filters);
    console.log(queryFilters);
  }
  
  if (again) {
    filterProducts(filters);
  }