import React from 'react';

const Modal = ({title,children}) => {
    return (
        <div className="modal-dialog modal-lg">
            <div className="modal-content">

                <div className="modal-header" style = {{background : "#f1f6f7",color : "#3674c1"}}>
                    <h4 className="modal-title">{title}</h4>
                </div>

                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;