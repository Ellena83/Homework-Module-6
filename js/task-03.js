const images = [
  {
    src: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    src: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    src: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesRef = document.querySelector('.gallery');

const imgRef = document.createElement('li');
imgRef.classList = 'img';
imgRef.style.display = 'flex';
imgRef.style.flexDirection = 'column';
imgRef.style.listStyle = 'none';

const img = [...images].map(image =>
  `<img src='${image.src}' alt='${image.alt}'></img>`).join('');

imagesRef.appendChild(imgRef).insertAdjacentHTML("beforeend", img);

