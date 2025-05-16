import Header from "./Header";  
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function AddProduct() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file_path, setFilePath] = useState("");

  async function AddProduct() {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("file_path", file_path);
    let result = await fetch("http://localhost:8000/api/product/add", { 
      method: "POST",
      body: formData,
      headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('authToken'))}`,  
      }
    });
    result = await result.json();
    alert(result.data.message);
    navigate(`/product`);
  }

  return (
    <>
      <Header />
      <div className="col-md-6 offset-sm-3">
        <br/>
        <h1 className="">Add Product</h1>
        <br/>
        <input type="text" className="form-control" value={name} name="name" onChange={(e)=>setName(e.target.value)} placeholder="Product Name" /><br/>
        <input type="text" className="form-control" value={price} name="price" onChange={(e)=>setPrice(e.target.value)} placeholder="Product Price" /><br/>
        <input type="text" className="form-control" value={description} name="description" onChange={(e)=>setDescription(e.target.value)} placeholder="Product Description" /><br/>
        <input type="file" className="form-control" name="file_path"  onChange={(e)=>setFilePath(e.target.files[0])} placeholder="File Path" /><br/>        
        <button onClick={AddProduct} className="btn btn-primary">Add Product</button>
      </div>
      
    </>
  );
}

export default AddProduct;
// This is a simple form component in React for adding a product. It includes input fields for product name and price, and a submit button.