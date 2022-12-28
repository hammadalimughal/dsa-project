import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import OrderInProgress from './api/OrderInProgress';
import Circleprogress from './component/Circleprogress';
import Form from './component/Form';
import AlertComponent from './component/Alert';
const App = () => {
  const [open, setOpen] = React.useState(false);
  const [restaurantDatabase, setRestaurantDatabase] = React.useState(OrderInProgress)

  const fetchData = async () => {
    if (OrderInProgress) {
      setRestaurantDatabase(OrderInProgress)
    }
    else {
      setRestaurantDatabase([])
    }
  }
  React.useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <div className='container-fluid'>

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
                        if (!dataItem.completed) {
                          return (
                            <tr key={ind}>
                              <td><h6>{ind + 1}</h6></td>
                              <td><h6>{dataItem.name}</h6></td>
                              <td><h6>{dataItem.orderItem.split("-")[1]}</h6></td>
                              <td>
                                <h6>{dataItem.tableNo}</h6>
                              </td>
                              <td><h6>{dataItem.amount} PKR</h6></td>
                              <td>
                                <Circleprogress fetchData={fetchData} restaurantDatabase={restaurantDatabase} setRestaurantDatabase={setRestaurantDatabase}  itemId={dataItem.id} setOpen={setOpen} value={dataItem.duration} />
                              </td>
                            </tr>
                          )
                        }
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-item">
              <h4>Completed Order</h4>
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
                        if (dataItem.completed) {
                          return (
                            <tr key={ind}>
                              <td><h6>{ind + 1}</h6></td>
                              <td><h6>{dataItem.name}</h6></td>
                              <td><h6>{dataItem.orderItem.split("-")[1]}</h6></td>
                              <td>
                                <h6>{dataItem.tableNo}</h6>
                              </td>
                              <td><h6>{dataItem.amount} PKR</h6></td>
                              <td>
                                <h6>Completed</h6>                                
                              </td>
                            </tr>
                          )
                        }
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

      <AlertComponent open={open} setOpen={setOpen} />
    </>
  );
}

export default App;
