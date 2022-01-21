import prod1 from "../../assets/images/home/product.jpg";
import prod2 from "../../assets/images/home/product2.jpg";
import icons from "../../utils/icons";
import { useState } from "react";

const Market = () => {
  const [productList, setProductList] = useState(false);
  const [categories, setCategories] = useState(true);
  const [search, setSearch] = useState();

  const handleCategoriesPick = () => {
    setCategories(false);
    setProductList(true);
  };

  const handleProductListClose = () => {
    setProductList(false);
    setCategories(true);
  };

  return (
    <div className="marketContainer">
      <div className="searchTab">
        <form action="">
          <input
            type="text"
            id="searchText"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button type="submit" className="searchBut">
            Search
          </button>
        </form>
      </div>
      {categories && (
        <div className="categories">
          <ul className="categoriesList">
            <li onClick={handleCategoriesPick}>Food And Snacks</li>
            <li onClick={handleCategoriesPick}>Clothing</li>
            <li onClick={handleCategoriesPick}>Phones And Accessories</li>
            <li onClick={handleCategoriesPick}>Electronics</li>
            <li onClick={handleCategoriesPick}>Beauty And Makeup</li>
            <li onClick={handleCategoriesPick}>Fitness And Health</li>
            <li onClick={handleCategoriesPick}>Housing And Real Estate</li>
            <li onClick={handleCategoriesPick}>Services</li>
          </ul>
        </div>
      )}
      {productList && (
        <div className="productsTab">
          <button onClick={handleProductListClose} className="createSessBut">
            <img
              className="actionIcon"
              src={icons.action.back.url}
              alt={icons.action.back.alt}
            />
          </button>
          <div className="productCard">
            <img className="prodImg" src={prod2} alt="" />
            <p>Dress Shoes</p>
            <p>#12,000</p>
            {true && (
              <div className="approval">
                <button>
                  <img
                    className="actionIcon"
                    src={icons.action.check.url}
                    alt={icons.action.check.alt}
                  />
                </button>
                <button>
                  <img
                    className="actionIcon"
                    src={icons.action.delete.url}
                    alt={icons.action.delete.alt}
                  />
                </button>
              </div>
            )}
          </div>
          <div className="productCard">
            <img className="prodImg" src={prod1} alt="" />
            <p>Lubrica Water Based</p>
            <p>#6,000</p>
          </div>
          <div className="productCard">
            <img className="prodImg" src={prod2} alt="" />
            <p>Dress Shoes</p>
            <p>#12,000</p>
          </div>
          <div className="productCard">
            <img className="prodImg" src={prod2} alt="" />
            <p>Dress Shoes</p>
            <p>#12,000</p>
          </div>
          <div className="productCard">
            <img className="prodImg" src={prod2} alt="" />
            <p>Dress Shoes</p>
            <p>#12,000</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Market;
