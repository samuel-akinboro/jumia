import React from 'react'
import './SellProduct.css'

function SellProduct() {
  return (
    <div className="sell__product">
      <div className="sell__product__images">
        <h1>Add the images of the products</h1>
        <div className="images__container">
          <label htmlFor="main-image" className="main__image">
            <input type="file" name="main-image" id="main-image" />
            <img src="/images/svg/add-photo.svg" alt="" />
          </label>
          <div className="other__images">
            <label htmlFor="image2" className="image2">
              <img src="/images/svg/add-photo.svg" alt="" />
              <input type="file" name="main-image" id="image2" />
            </label>
            <label htmlFor="image3" className="image3">
              <img src="/images/svg/add-photo.svg" alt="" />
              <input type="file" name="main-image" id="image3" />
            </label>
          </div>
        </div>
      </div>
      <div className="product__description">
        <h2>Product Details</h2>
        <div className="grey-box"></div>
        <div className="single-detail">
          <h3>Title</h3>
          <input type="text" name="" id="" placeholder="Enter Title" />
        </div>
        <div className="single-detail">
          <h3>Description</h3>
          <input type="text" name="" id="" placeholder="Description" />
        </div>
        <div className="single-detail">
          <h3>Price</h3>
          <input type="text" name="" id="" placeholder="N" />
        </div>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}

export default SellProduct
