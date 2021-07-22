import React from 'react';
import { Step } from 'semantic-ui-react';
import './CheckOut.css';

import CheckOutForm from './CheckOutForm';
import CheckOutConfirm from './CheckOutConfirm';
import CheckOutId from './CheckOutId';

const CheckOut = ({ addPurchase , addPurchaseInfo, cont, keyId}) => {

    return (
        <div className="content-checkout">

            <div className="steps-content">
                {cont === 1? (<CheckOutForm addPurchaseInfo={addPurchaseInfo}/>): ""}
                {cont === 2? (<CheckOutConfirm addPurchase={addPurchase}/>): ""}
                {cont === 3? (<CheckOutId keyId={keyId}/>): ""}
            </div>

            <div className="steps-checkout">
                <Step.Group ordered>
                    <Step completed={cont > 1} active={cont === 1}>
                        <Step.Content>
                            <Step.Title>Information</Step.Title>
                            <Step.Description>We need some info to continue</Step.Description>
                        </Step.Content>
                    </Step>

                    <Step completed={cont > 2} active={cont === 2}>
                        <Step.Content>
                            <Step.Title>Confirm Order</Step.Title>
                            <Step.Description>Confirm the products of your purchase</Step.Description>
                        </Step.Content>
                    </Step>

                    <Step completed={cont === 3} active={cont === 3}>
                        <Step.Content>
                            <Step.Title>Your Order ID</Step.Title>
                        </Step.Content>
                    </Step>
                </Step.Group>
            </div>
            
        </div>
    )
}

export default CheckOut
