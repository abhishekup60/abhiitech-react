import React, { useEffect, useState } from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

function ProductList() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const token = JSON.parse(localStorage.getItem('authToken'));

    useEffect(() => {
        const fetchData = async () => {
            try {
                let result = await fetch("http://localhost:8000/api/product",{
                    method: "GET",
                    headers: {
                        'Authorization': `Bearer ${token}`,  
                    }
                });
                result = await result.json();
                setData(result.data);
                            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [token]);
    function editProduct(id) {
        // localStorage.setItem("productId", id);
        navigate(`/product/edit/${id}`);

    }
    function deleteProduct(id) {
        if (window.confirm("Are you sure you want to delete this product?")) {
            fetch(`http://localhost:8000/api/product/delete/${id}`, {
                method: "DELETE",
            })
            .then((response) => response.json())
            .then((data) => {
                alert(data.message);
                setData(data.data);
            })
            .catch((error) => {
                console.error("Error deleting product:", error);
            });
        }
    }

    return (
        <>
            <div>
                <Header />
                <h1>Product List</h1>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Product Description</th>
                            <th>Product Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td><img src={`http://localhost:8000/storage/${item.file_path}`} alt={item.name} width="100" /></td>
                                <td>
                                    <button onClick={ () => editProduct(item.id) } className="btn btn-primary">Edit</button>
                                    <button onClick={() => deleteProduct(item.id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ProductList;
