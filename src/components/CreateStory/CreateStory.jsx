import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../redux/features/categories";
import style from "./styles.module.css";

export default function CreateStory() {
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState(false);

  const categories = useSelector((state) => state.categories.items);

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  console.log(categories);

  return (
    <div className={style.createComp}>
      <div>
        <div className={style.createImage}>
          <div>
            <input type="file" id="upload" hidden />
            <label htmlFor="upload">
              <img
                className={style.img}
                onClick={() => setPhoto(!photo)}
                src="https://www.babypillowth.com/images/templates/upload.png"
                alt=""
              />
            </label>
          </div>
        </div>
      </div>

      <div className={style.details}>
        <div>Story Details</div>
        <div className={style.title}>
          <h5>Title</h5>
          <input type="text" placeholder="Untitled Story" />
        </div>

        <div className={style.description}>
          <h5>Description</h5>
          <textarea name="title" id="" cols="30" rows="10"></textarea>
        </div>

        <div className={style.characters}>
          <h5>Main Characters</h5>
          <div>
            <input type="text" />
            <button>+</button>
          </div>
        </div>

        <div className={style.categories}>
          <h5>Category</h5>
          <select name="" id="">
            {categories.map((item) => {
              return <option value="1">{item.name}</option>;
            })}
          </select>
        </div>

        <div className={style.tags}>
          <h5>Tags</h5>
          <div>
            <input type="text" placeholder="tags" />
            <button>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
