// const productsArray = [
//     {
//         id: "1",
//         title: "Яичница-глазунья из трех яиц",
//         "image": require("../../assets/images/friedeggs.png"),
//         type: 'breakfast',
//         price: 250
//     },
//     {
//         id: "2",
//         title: "Омлет из трёх яиц",
//         "image": require("../../assets/images/omlet.png"),
//         type: 'breakfast',
//         price: 250
//     },
//     {
//         id: "3",
//         title: "Домашние сырники",
//         "image": require("../../assets/images/cheesecakes.png"),
//         type: 'breakfast',
//         price: 490
//     },
//     {
//         id: "4",
//         title: "Блины",
//         "image": require("../../assets/images/pancake.png"),
//         type: 'breakfast',
//         price: 250
//     },
//     {
//         id: "5",
//         title: "Каша c ягодами и кедровыми орехами",
//         "image": require("../../assets/images/buckwheat.png"),
//         type: 'breakfast',
//         price: 450
//     },
//     {
//         id: "6",
//         title: "Скрэмбл",
//         "image": require("../../assets/images/scrambler.png"),
//         type: 'breakfast',
//         price: 290
//     },
//     {
//         id: "7",
//         title: "Яйцо Бенедикт с лососем",
//         "image": require("../../assets/images/benedict_solmon.png"),
//         type: 'breakfast',
//         price: 850
//     },
//     {
//         id: "8",
//         title: "Яйцо Бенедикт с беконом",
//         "image": require("../../assets/images/benedict_bacon.png"),
//         type: 'breakfast',
//         price: 650
//     },
//     {
//         id: "9",
//         title: "Гречневая каша с авокадо, яйцом пашот и пармезаном",
//         "image": require("../../assets/images/porridge.png"),
//         type: 'breakfast',
//         price: 490
//     },
//     {
//         id: "10",
//         title: "Кобб – салат с лососем",
//         "image": require("../../assets/images/cobb_solmon_salad.png"),
//         type: 'breakfast',
//         price: 890
//     },
//     {
//         id: "11",
//         title: "Кобб – салат с креветками",
//         "image": require("../../assets/images/cobb_shrimp_salad.png"),
//         type: 'breakfast',
//         price: 960
//     },


// ];

// function getProductData(id) {
//     let productData = productsArray.find(product => product.id === id);

//     if (productData === undefined) {
//         console.log("Product data does not exist for ID: " + id);
//         return undefined;
//     }

//     return productData;
// }

// export { productsArray, getProductData };