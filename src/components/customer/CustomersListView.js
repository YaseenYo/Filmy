import React from "react";
import SidebarNavCombo from "../SidebarNavCombo";
import MenuContainer from "../MenuContainer";
import CustomersList from "./CustomersList";

const CustomersListView = () => {
    return (
        <div>
            <SidebarNavCombo/>
            <MenuContainer title = "Customers">
                <CustomersList/>
            </MenuContainer>
        </div>
    );
};

export default CustomersListView;