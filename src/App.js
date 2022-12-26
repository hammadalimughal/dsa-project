import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
// https://datastructure-indus-university-default-rtdb.firebaseio.com/
const App = () => {
  const [formValue, setFormValue] = React.useState({
    name: "",
    email: "",
    tableNo: "",
    message: ""
  });
  let name, value;
  const setOrderValues = (e) => {
    name = e.target.name;
    value = e.target.value;
    setFormValue({ ...formValue, [name]: value })
  }
  const orderNow = async (e) => {
    e.preventDefault();
    const { name, email, tableNo, message } = formValue;
    let resData = await fetch("https://datastructure-indus-university-default-rtdb.firebaseio.com/customorder.json", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, tableNo, message })
    })
  }
  const fetchData = async () => {
    let url = `https://datastructure-indus-university-default-rtdb.firebaseio.com/customorder.json`
    let response = await fetch(url);
    let RestaurantData = await response.json();
    console.log(RestaurantData)
  }
  React.useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className="col-xl-12 col-12">
            <h2 className='sec-title'>Data Structure & Algorithms Restaurant Project</h2>
            <div className='row'>
              <div className='col-md-7 col-12'>
                <div class="card-item">
                <table className="table-management">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>email</th>
                      <th>table no</th>
                      <th>amount</th>
                      <th className="progress-cell">milestone</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h6>00</h6>
                      </td>
                      <td>
                        <h6>Tania Mike</h6>
                      </td>
                      <td>
                        <h6>Develop</h6>
                      </td>
                      <td className="progress-cell">
                        <span className="progress-value">25%</span>
                        <div className="progress progress-default">
                          <div className="progress-bar" role="progressbar" style={{ width: 25 + '%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </td>
                      <td>
                        <h6>$99,225</h6>
                      </td>
                      <td>
                        <button className="refresh-btn" data-tooltip="Edit" data-bs-toggle="modal" data-bs-target="#edit-dialog">
                          <i className="fa-regular fa-pencil"></i>
                        </button>
                        <button className="delete-btn" data-tooltip="Delete">
                          <i className="fa-regular fa-xmark"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>
              <div className='col-md-5 col-12'>
                <div className="card-item">
                  <h4>Order Below</h4>
                  <form onSubmit={orderNow}>
                    <div className='row'>
                      <div className='col-md-6 col-12'>
                        <div className="input-field">
                          <label htmlFor="">Name *</label>
                          <input onChange={setOrderValues} value={formValue.name} name="name" className="custom-input" required type="text" />
                        </div>
                      </div>
                      <div className='col-md-6 col-12'>
                        <div className="input-field">
                          <label htmlFor="">Email *</label>
                          <input onChange={setOrderValues} value={formValue.email} name="email" className="custom-input" required type="text" />
                        </div>
                      </div>
                      <div className='col-md-6 col-12'>
                        <div className="input-field">
                          <label htmlFor="">Table No *</label>
                          <select onChange={setOrderValues} value={formValue.tableno} name="tableno" className="custom-input" required type="text">
                            <option>Table # 01</option>
                            <option>Table # 01</option>
                            <option>Table # 01</option>
                            <option>Table # 01</option>
                            <option>Table # 01</option>
                            <option>Table # 01</option>
                            <option>Table # 01</option>
                          </select>
                        </div>
                      </div>
                      <div className='col-md-6 col-12'>
                        <div className="input-field">
                          <label htmlFor="">Amount *</label>
                          <input onChange={setOrderValues} value={formValue.other} name="price" className="custom-input" required type="number" />
                        </div>
                      </div>
                      <div className='col-12'>
                        <div className="input-field">
                          <label htmlFor="">Message *</label>
                          <textarea onChange={setOrderValues} value={formValue.message} name="message" className="custom-input" required ></textarea>
                        </div>
                      </div>
                      <div className='input-field'>
                        <button type="submit">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
