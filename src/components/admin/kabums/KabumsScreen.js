import React from 'react'

export const KabumsScreen = () => {
    return (
        <div>
            <h1>Kabums</h1>
            
            <div className="header-img">
                    <div className="input-group mb-3">
                        <input className="form-control" placeholder="Buscar kabum" type="text"></input>
                        <div className="input-group-append">
                            <button className="btn btn-outline-primary"> <i class="fas fa-search"></i> </button>
                        </div>
                    </div>
                </div>
        </div>
    )
}
