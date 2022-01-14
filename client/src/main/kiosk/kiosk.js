import { useState } from "react";

const Kiosk = () => {
  const [uploadPage, setUploadPage] = useState(false);
  const [isService, setIsService] = useState(false);
  const [isProduct, setIsProduct] = useState(true);
  const [prodPage, setProdPage] = useState(true);
  const [prodName, setProdName] = useState();
  const [prodImg, setProdImgg] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [desc, setDesc] = useState();


  const loadProdForm = () => {
    setIsService(false);
    setIsProduct(true);
  };

  const loadServiceForm = () => {
    setIsProduct(false);
    setIsService(true);
  };

  const loadProdPage = () => {
    setUploadPage(false);
    setProdPage(true);
  };

  const loadUploadPage = () => {
    setProdPage(false);
    setUploadPage(true);
  };

  return (
    <div className="kioskTab">
      <div className="kioskNav">
        <ul>
          <li onClick={loadProdPage}>My products And Services</li>
          <li onClick={loadUploadPage}>Upload</li>
        </ul>
      </div>
      {prodPage && <div className="myProducts"></div>}
      {uploadPage && (
        <div className="uploadForm">
          <div className="pickUploadForm">
            <button onClick={loadProdForm}>Product</button>
            <button onClick={loadServiceForm}>Service</button>
          </div>
          {isProduct && (
            <form action="">
              <label htmlFor="category">Category</label>
              <select
                name=""
                id="category"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                required
              >
                <option value="-">Pick a Category</option>
                <option value="Food And Snacks">Food And Snacks</option>
                <option value="Clothing">Clothing</option>
                <option value="Phones and Accessories">
                  Phones and Accessories
                </option>
                <option value="Electronics">Electronics</option>
                <option value="Beauty And Makeup">Beauty And Makeup</option>
                <option value="Fitness And Health">Fitness And Health</option>
                <option value="Housing And Real Estate">
                  Housing And Real Estate
                </option>
              </select>
              <label htmlFor="prodNames">Name of Product</label>
              <input
                id="prodName"
                type="text"
                value={prodName}
                onChange={(e) => {
                  setProdName(e.target.value);
                }}
                required
              />
              <label htmlFor="prodPrice">Price</label>
              <input
                id="prodPrice"
                type="number"
                min="1"
                step="any"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                required
              />
              <label htmlFor="prodImg">Image of Product</label>
              <input
                id="prodImg"
                type="file"
                accept="image/png, image/gif, image/jpeg"
                value={prodImg}
                onChange={(e) => {
                  setProdImgg(e.target.value);
                }}
                required
              />
              <button className="formBtn">Upload</button>
            </form>
          )}
          {isService && (
            <form action="">
              <label htmlFor="prodNames">Name Of Service</label>
              <input
                id="prodName"
                type="text"
                value={prodName}
                onChange={(e) => {
                  setProdName(e.target.value);
                }}
                required
              />
              <label htmlFor="details">Details</label>
              <textarea
                name="details"
                id="details"
                placeholder="A few words about the Service"
                cols="30"
                rows="10"
                maxLength="100"
                minLength="30"
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
                required
              ></textarea>
              <button className="formBtn">Upload</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default Kiosk;
