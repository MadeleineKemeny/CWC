import React from "react";

function VineyardList(props) {
    return (
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div>
                            <h4 className="vinedetails">{props.vineyardName}</h4>
                            <p className="vinedetails">{props.subregion} - {props.vineyardRegion}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                        <p dangerouslySetInnerHTML={{ __html: props.vineyardDetails}}></p>
                        </div>
                    </div>
                </div>   
            </div>
    )
}

export default VineyardList;
