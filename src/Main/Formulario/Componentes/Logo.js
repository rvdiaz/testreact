import React from 'react'

export const Logo = React.memo(() => {
    console.log('logo');
    return (
        <div>
            <div className="displayFlex mt-3">
                <i className="fa fa-info-circle mt-1"></i>
                <div className="ml-1">
                <p>Este logo identificar√° tu espacio entre el resto.</p>
                <p>Preferiblemente sube una imagen .png igual o superior a 65px o 72ppp con fondo transparente.</p>
                </div>
            </div>
        </div>
    )
})
