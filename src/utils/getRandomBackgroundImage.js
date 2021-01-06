import bg_image_1 from "../assets/bg-images-start-page/bg-image-1.jpg";
import bg_image_2 from "../assets/bg-images-start-page/bg-image-2.jpg";
import bg_image_3 from "../assets/bg-images-start-page/bg-image-3.jpg";
import bg_image_4 from "../assets/bg-images-start-page/bg-image-4.jpg";
import bg_image_5 from "../assets/bg-images-start-page/bg-image-5.jpg";
import bg_image_6 from "../assets/bg-images-start-page/bg-image-6.jpg";
import bg_image_7 from "../assets/bg-images-start-page/bg-image-7.jpg";
import bg_image_8 from "../assets/bg-images-start-page/bg-image-8.jpg";
import bg_image_9 from "../assets/bg-images-start-page/bg-image-9.jpg";
import bg_image_10 from "../assets/bg-images-start-page/bg-image-10.jpg";
import bg_image_11 from "../assets/bg-images-start-page/bg-image-11.jpg";
import bg_image_12 from "../assets/bg-images-start-page/bg-image-12.jpg";

const images = [
  bg_image_1,
  bg_image_2,
  bg_image_3,
  bg_image_4,
  bg_image_5,
  bg_image_6,
  bg_image_7,
  bg_image_8,
  bg_image_9,
  bg_image_10,
  bg_image_11,
  bg_image_12,
];

const getRandomItem = (itemsArray) => {
  return itemsArray[Math.floor(Math.random() * itemsArray.length)];
};

export const getRandomBackgroundImage = (params) => {
  return getRandomItem(images);
};
