import React from 'react';
import CustomerRegistrationForm from './CustomerRegistrationForm';
import MenuContainer from "../MenuContainer";
import SidebarNavCombo from '../SidebarNavCombo';

function CustomerRegistrationView() {
    return (
        <div>
            <SidebarNavCombo/>
            <MenuContainer title = "Register Customer">
                <CustomerRegistrationForm/>
            </MenuContainer>
        </div>
    )
}

export default CustomerRegistrationView;
