const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imagesList = document.querySelector(".gallery");

const makePic = ({ url, alt }) => {
  return `<li class="item"><img src=${url} alt=${alt} width = 100%  height = 100%></li>`;
};

const sortImages = images.map(makePic).join("");
imagesList.insertAdjacentHTML("beforeEnd", sortImages);
console.log(sortImages);

Object.assign(document.querySelector(".gallery").style, {
  listStyle: "none",

  display: "grid",
  gridAutoColumns: "1fr",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr 1fr",
  gap: "30px",
  gridTemplateAreas: '". ." ". ."',

  padding: 0,
});
