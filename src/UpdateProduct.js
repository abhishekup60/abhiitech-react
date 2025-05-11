function UpdateProduct() {
  return (
    <div>
      <h1>Update Product</h1>
      <form>
        <label>
          Product Name:
          <input type="text" name="productName" />
        </label>
        <br />
        <label>
          Price:
          <input type="number" name="price" />
        </label>
        <br />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default UpdateProduct;
// This is a simple form component in React for adding a product. It includes input fields for product name and price, and a submit button.