import React from "react"
import ImageLoader from "../image-loader"

import prodObj from "./product-object.js"

const productList = [prodObj]

const ProductBlock = product => {
  console.log(productList)
  return (
    <section className="product">
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <ImageLoader imageToUse={product} />
      </div>
      <div className="product-list"></div>
      <h2>{prodObj[product].name}</h2>
      <p>{prodObj[product].description}</p>
      <h3>{prodObj[product].price}</h3>
    </section>
  )
}

const ProductInfo = ({ product }) => {
  return ProductBlock(product)
}

export default ProductInfo
