import Card from "./Card.js";
import { useState, useEffect } from "react";
import { shuffle } from "./utils/randomize.js"; //return a function that needs an array to retrieve a random element
import { getImages } from "./utils/fetchImages.js";

export default function CardLogic({ scoreUpdate }) {
  const [ref, setRefs] = useState([]);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [level, setLevel] = useState(0);

  const handleClick = (cardRef) => {
    setImages(shuffle(images));
    //Check if clicked card exists in ref
    if (!ref.includes(cardRef)) {
      // It doesnt , score increases
      scoreUpdate.up1();
      setRefs((prevCards) => {
        const newRefs = [...prevCards, cardRef];
        // Check if round is won
        if (newRefs.length === images.length) {
          setLevel(level + 1);
          return [];
        }
        return newRefs;
      });
    } else {
      scoreUpdate.reset();
      setRefs([]);
      setLevel(0);
    }
  };
  const getCardsData = async (n = 0) => {
    let data;
    try {
      data = await getImages(n);
      setImages([...data]);
    } catch (error) {
      setError("Couldn't load images");
    }
  };

  useEffect(() => {
    getCardsData(level);
  }, [level]);

  return (
    <>
      <p>Level {level}</p>
      <div className="card-container">
        {images.length ? (
          images.map((img) => {
            return (
              <Card
                handleClick={handleClick}
                color={img.avg_color}
                srcUrl={img.src.portrait}
                altProp={img.alt}
                refID={img.id}
                key={img.id}
              />
            );
          })
        ) : (
          <div className="placeholder">{error || "Loading..."}</div>
        )}
      </div>
    </>
  );
}
