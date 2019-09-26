import React from "react";

function VineyardList(props) {
    return (
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-12">
                            <h4>{props.vineyardName}</h4>
                            <p>{props.subregion} - {props.vineyardRegion}</p>
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
