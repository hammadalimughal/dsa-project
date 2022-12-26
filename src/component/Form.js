
import React from 'react';

const Form = (props) => {
    const [formValue, setFormValue] = React.useState({ name: "", email: "", tableNo: "", amount: "", orderItem: "", duration: "", message: "", completed: false });
    const orderNow = async (e) => {
        e.preventDefault();
        const { name, email, tableNo, amount, orderItem, duration, message } = formValue;
        let resData = await fetch("https://datastructure-indus-university-default-rtdb.firebaseio.com/customorder.json", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, tableNo, amount, orderItem, duration, message })
        })
        setFormValue({ name: "", email: "", tableNo: "", amount: "", orderItem: "", duration: "", message: "", completed: false })
        props.fetchData()
    }


    let name, value;
    const setOrderValues = (e) => {
        name = e.target.name;
        value = e.target.value;
        setFormValue({ ...formValue, [name]: value })
    }
    return (
        <>
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
                            <input onChange={setOrderValues} value={formValue.email} name="email" className="custom-input" required type="email" />
                        </div>
                    </div>
                    <div className='col-md-6 col-12'>
                        <div className="input-field">
                            <label htmlFor="">Table No *</label>
                            <select onChange={setOrderValues} value={formValue.tableno} name="tableNo" className="custom-input" required>
                                <option selected disabled>Select Table</option>
                                <option value="Table # 01">Table # 01</option>
                                <option value="Table # 02">Table # 02</option>
                                <option value="Table # 03">Table # 03</option>
                                <option value="Table # 04">Table # 04</option>
                                <option value="Table # 05">Table # 05</option>
                                <option value="Table # 06">Table # 06</option>
                                <option value="Table # 07">Table # 07</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-md-6 col-12'>
                        <div className="input-field">
                            <label htmlFor="">Amount *</label>
                            <input onChange={setOrderValues} value={formValue.price} name="amount" className="custom-input" required type="number" />
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className="input-field">
                            <label htmlFor="">Item *</label>
                            <select onChange={setOrderValues} value={formValue.SelectItem} name="orderItem" className="custom-input" required type="text">
                                <optgroup label="Main Course">
                                    <option value="Table # 01">BBQ Chicken</option>
                                    <option value="Table # 02">Katsu Chicken</option>
                                    <option value="Table # 03">Fried Chicken</option>
                                    <option value="Table # 04">Asian Rings</option>
                                    <option value="Table # 05">Italian Chicken</option>
                                    <option value="Table # 06">Table # 06</option>
                                    <option value="Table # 07">Table # 07</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div className='col-md-6 col-12'>
                        <div className="input-field">
                            <label htmlFor="">Duration *</label>
                            <input onChange={setOrderValues} value={formValue.duration} name="duration" className="custom-input" readOnly required type="text" />
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className="input-field">
                            <label htmlFor="">Message (optional)</label>
                            <textarea onChange={setOrderValues} value={formValue.message} name="message" className="custom-input" ></textarea>
                        </div>
                    </div>
                    <div className='input-field'>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Form
