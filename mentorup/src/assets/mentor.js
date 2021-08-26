import { useState, useEffect } from "react";

function generateRandomString(length) {
  return Math.random().toString(20).substring(2, 8);
}

const [imageSrc, setImageSrc] = useState("");
const randomString = generateRandomString(8);
const apiSrc = `https://avatars.dicebear.com/api/gridy/${randomString}.svg`;
const mentorProfiles = [
  {
    name: "Megan",
    imageSrc: imageSrc,
  },
  {
    name: "George",
    imageSrc: imageSrc,
  },
  {
    name: "Chris",
    imageSrc: imageSrc,
  },
];

useEffect(() => {
  async function getImage() {
    const image = await fetch(apiSrc);
    setImageSrc(image.url);
    console.log(image.url);
  }
  getImage();
}, []);

export default mentorProfiles;
