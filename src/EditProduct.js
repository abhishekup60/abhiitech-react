import Header from "./Header";  
import { useState,  useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [productId, setID] = useState(id);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file_path, setFilePath] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const token = JSON.parse(localStorage.getItem('authToken'));
  useEffect(() => {
    fetch(`http://localhost:8000/api/product/edit/${id}`,
      {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`,  
        }
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setName(data.data.name);
        setPrice(data.data.price);
        setDescription(data.data.description);
        setImageUrl(data.data.file_path);      
      })
      .catch(err => {
        console.error("Failed to fetch user data:", err);
        
      });
  }, [id, token]);

  function UpdateProduct(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", id);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    if (file_path) {
    formData.append("file_path", file_path);
    }
    fetch(`http://localhost:8000/api/product/update`, {
      method: "POST",
      body: formData,
      headers: {
        'Authorization': `Bearer ${token}`,  
      }
    })
      .then(res => res.json())
      .then(data => {
        alert(data.data.message || "Unknown error occurred");
        navigate(`/product`);
      })
      .catch(err => {
        console.error("Failed to update product:", err);
      });
  }
  return (
    <>
      <Header />
      <div>
        <h1>Edit Product</h1>
        <br/>
        <form>
            <input type="hidden" className="form-control col-lg-4" value={productId} onChange={(e)=>setID(e.target.value)} name="name" />
          <label>
            Product Name:
            <input type="text" className="form-control col-lg-4" value={name} onChange={(e)=>setName(e.target.value)} name="name" />
          </label>
          <label>
            Price:
          <input type="text" className="form-control" value={price} name="price" onChange={(e)=>setPrice(e.target.value)} placeholder="Product Price" /><br/>
          </label>
          <label>
            Description:
          <input type="text" className="form-control" value={description} name="description" onChange={(e)=>setDescription(e.target.value)} placeholder="Product Description" /><br/>
          </label>
          <label>
          Product Image:
          <input type="file" className="form-control" name="file_path" onChange={(e) => setFilePath(e.target.files[0])} placeholder="File Path" /><br/>        
          </label>
          <img src={`http://localhost:8000/storage/${imageUrl}`} width={100} alt={name} />
          <button onClick={UpdateProduct} className="btn btn-primary">Update Product</button>
        </form>
      </div>
    </>
  );
}

export default EditProduct;
// This is a simple form component in React for adding a product. It includes input fields for product name and price, and a submit button.