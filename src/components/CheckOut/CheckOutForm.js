import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import './CheckOut.css';

const CheckOutForm = ({ addPurchaseInfo }) => {
    const initialState = {
        name: '',
        phone: '',
        email: ''
    };
    const [values, setValues] = useState(initialState);
    

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addPurchaseInfo(values);
        setValues({...initialState});
    };
    return (
        <div className="form-checkout">
            <h1> <code>First, complete the following information:</code> </h1>
            <div className="formInfo">
                <Form onSubmit={handleSubmit}>
                    <Form.Field>
                        <input placeholder='Your Name' onChange={handleOnChange} name='name' value={values.name}/>
                    </Form.Field>
                    <Form.Field>
                        <input placeholder='Your Phone Number' onChange={handleOnChange} name='phone' value={values.phone}/>
                    </Form.Field>
                    <Form.Field>
                        <input placeholder='Your Email' onChange={handleOnChange} name='email' value={values.email}/>
                    </Form.Field>
                    <Button type='submit' size="big" color="yellow">CONTINUE</Button>
                </Form>
            </div>
        </div>
    )
}

export default CheckOutForm
