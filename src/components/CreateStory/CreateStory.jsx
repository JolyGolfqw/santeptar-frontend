import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../redux/features/categories";
import CreateStoryHeader from "./CreateStoryHeader";
import style from "./styles.module.css";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";


export default function CreateStory() {
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState(false);

  const categories = useSelector((state) => state.categories.items);

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  console.log(categories);

  return (
    <>
      <CreateStoryHeader />
      <div className={style.mainPage}>
        <div className={style.createComp}>
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
            <div className={style.titleCard}>
              <span>Story Details</span>
            </div>
            <div className={style.funcional}>

            <div className={style.title}>
              <h5>Title </h5>
              <input type="text" placeholder="Untitled Story" />
            </div>

            <div className={style.title}>
              <h5>Description <ion-icon name="alert-circle-outline"></ion-icon></h5>
              <textarea name="title" id="" cols="30" rows="10"></textarea>
            </div>

            <div className={style.characters}>
              <h5>Main Characters <ion-icon name="alert-circle-outline"></ion-icon></h5>
              <div>
                <input type="text" />
                <button>+</button>
              </div>
            </div>

            <div className={style.category}>
              <h5>Category <ion-icon name="alert-circle-outline"></ion-icon></h5>
              <select name="" id="" className={style.selects}>
                {categories.map((item) => {
                  return <option value="1">{item.name}</option>;
                })}
              </select>
            </div>

            <div className={style.characters}>
              <h5>Tags <ion-icon name="alert-circle-outline"></ion-icon></h5>
              <div>
                <input type="text" placeholder="tags" />
                <button>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
