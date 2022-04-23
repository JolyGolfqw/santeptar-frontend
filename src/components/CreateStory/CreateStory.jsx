import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../redux/features/categories";
import style from "./styles.module.css";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
import CreateStoryHeader from "./CreateStoryHeader";
import { postBook } from "../../redux/features/books";

export default function CreateStory() {
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState("");
  const [preview, setPreview] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");

  const [heroes, setHeroes] = useState("");
  const [chars, setChars] = useState([]);

  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  console.log(title, desc, tags, chars)

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDesc = (e) => {
    setDesc(e.target.value);
  };

  const handleChar = (e) => {
    setHeroes(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleTags = (e) => {
    setTag(e.target.value);
  };

  const addChars = () => {
    setChars([...chars, heroes]);
  };

  const addTags = () => {
    setTags([...tags, tag]);
  };
  const categories = useSelector((state) => state.categories.items);

  useEffect(() => {
    dispatch(loadCategories());
    if (photo) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(photo);
    } else {
      setPreview(null);
    }
  }, [dispatch, photo]);

  console.log(categories);

  return (
    <>
      <CreateStoryHeader photo={photo} chars={chars} tags={tags} category={category} desc={desc} title={title} />
      <div className={style.mainPage}>
        <div className={style.createComp}>
          <div className={style.createImage}>
            <div>
              <input
                type="file"
                id="upload"
                hidden
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file && file.type.substring(0, 5) === "image") {
                    setPhoto(file);
                  } else {
                    setPhoto(null);
                  }
                }}
              />
              {preview ? (
                <>
                  <img src={preview} alt="" />
                  <label htmlFor="upload">
                    <ion-icon name="create-outline"></ion-icon>
                  </label>{" "}
                </>
              ) : (
                <label htmlFor="upload">
                  <img
                    className={style.img}
                    src="https://www.babypillowth.com/images/templates/upload.png"
                    alt=""
                  />
                </label>
              )}
            </div>
          </div>
        </div>
        <div className={style.details}>
          <div className={style.titleCard}>
            <span>Story Details</span>
          </div>
          <div className={style.funcional}>
            <div className={style.title}>
              <h5>Title </h5>
              <input
                value={title}
                onChange={(e) => handleTitle(e)}
                type="text"
                placeholder="Untitled Story"
              />
            </div>

            <div className={style.title}>
              <h5>
                Description <ion-icon name="alert-circle-outline"></ion-icon>
              </h5>
              <textarea
                value={desc}
                onChange={(e) => handleDesc(e)}
                name="title"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>

            <div className={style.characters}>
              <h5>
                Main Characters{" "}
                <ion-icon name="alert-circle-outline"></ion-icon>
              </h5>
              <div>
                <input
                  value={heroes}
                  onChange={(e) => handleChar(e)}
                  type="text"
                />
                <button onClick={addChars}>+</button>
                {chars.map((item) => {
                  return <div>{item}</div>;
                })}
              </div>
            </div>

            <div className={style.category}>
              <h5>
                Category <ion-icon name="alert-circle-outline"></ion-icon>
              </h5>
              <select
                value={category}
                onChange={(e) => handleCategory(e)}
                name=""
                id=""
                className={style.selects}
              >
                {categories.map((item, index) => {
                  return <option value={item._id}>{item.name}</option>;
                })}
              </select>
            </div>

            <div className={style.characters}>
              <h5>
                Tags <ion-icon name="alert-circle-outline"></ion-icon>
              </h5>
              <div>
                <input
                  value={tag}
                  onChange={(e) => handleTags(e)}
                  type="text"
                  placeholder="tags"
                />
                <button onClick={addTags}>+</button>
                {tags.map((item) => {
                  return <div>{item}</div>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
