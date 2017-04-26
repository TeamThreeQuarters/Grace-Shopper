import React from 'react'

const ProductDetail = props => {
  const product = props.product
  const inventories = product.inventories
  const productReviews = product.productReviews

  return (
    <div className="container">
      {product.images &&
        <div className="product_container">
          <div className="product_detail">
            <div>
              <img src={product.images[0]} className="product-image" />
            </div>
            <div className="product_info">
              <span>Fullstack</span>
              <h3>{props.product.name}</h3>
              {inventories && Object.keys(inventories).length ? <span>Price: ${inventories[0].price}</span>
                : <span>Out of Stock</span>}
              <p>{props.product.description}</p>
              <button className="btn-primary" onClick={
                () => props.addToShoppingCart(inventories[0].id, 1)
              }>Add to Cart</button>
            </div>
          </div>
          <hr />
          <div>
            <h3><strong>Customer Reviews</strong></h3>
          </div>
          <div>
            {productReviews && Object.keys(productReviews).length
              ? <div className="product_info">
                <h4>{productReviews.reduce((total, review) => review.rating + total, 0) / productReviews.length} Stars from {productReviews.length} ratings</h4>
                <hr />
                <h4>Customer Comments</h4>
                {productReviews.map(review => (
                  <div key={review.id}>
                    <hr />
                    <div>
                      <div>
                        Review on: {review.updated_at}
                      </div>
                      <div>
                        {review.rating} Stars
                      </div>
                      <div>
                        <strong>Comment: </strong>{review.review}
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
              : <h5>No Ratings</h5>}
          </div>
        </div>
      }
    </div>
  )
}

export default ProductDetail
