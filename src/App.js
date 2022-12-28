import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// import 'bootstrap-select/dist/js/bootstrap-select';
import './App.css';
import Circleprogress from './component/Circleprogress';
import Form from './component/Form';
import AlertComponent from './component/Alert';
const App = () => {
  const [open, setOpen] = React.useState(false);
  const [restaurantDatabase, setRestaurantDatabase] = React.useState([])

  const fetchData = async () => {
    let url = `https://datastructure-indus-university-default-rtdb.firebaseio.com/customorder.json`
    let response = await fetch(url);
    let RestaurantData = await response.json();
    if (RestaurantData) {
      setRestaurantDatabase(RestaurantData)
    }
    else {
      setRestaurantDatabase({})
    }
  }

  React.useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className="col-xl-12 col-12">
            <h2 className='sec-title'>Data Structure & Algorithms restaurant Project</h2>
            <div className='row'>
              <div className='col-lg-7 col-12'>
                <div className="card-item">
                  <h4>Order in Process</h4>
                  <div className='table-scroll'>
                    <table className="table-management">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Items</th>
                          <th>table no</th>
                          <th>amount</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          Object.values(restaurantDatabase).map((dataItem, ind) => {
                            return (
                              <tr key={ind}>
                                <td><h6>01</h6></td>
                                <td><h6>{dataItem.name}</h6></td>
                                <td><h6>{dataItem.orderItem.split("-")[1]}</h6></td>
                                <td>
                                  <h6>{dataItem.tableNo}</h6>
                                </td>
                                <td><h6>{dataItem.amount} PKR</h6></td>
                                <td>
                                  <Circleprogress itemId={dataItem.id} setOpen={setOpen} value={dataItem.duration} />
                                  </td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className='col-lg-5 col-12'>
                <div className="card-item">
                  <h4>Order Below</h4>
                  <Form setOpen={setOpen} fetchData={fetchData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AlertComponent open={open} setOpen={setOpen} />
    </>
  );
}

export default App;
