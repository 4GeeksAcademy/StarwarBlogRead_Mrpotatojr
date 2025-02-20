import React from "react";

export const Card = () => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <ul>
            <li>caracteristical1</li>
            <li>caracteristical2</li>
            <li>caracteristical3</li>
          </ul>
          <div className="buttons">
          <button type="button" class="btn btn-primary">detalles</button>

          <button type="button" class="btn btn-warning">like</button>
          </div>
        </div>
      </div>
    </>
  );
};
