import React, { useContext } from "react";
import "../styles/Rejection.css";
import { useDispatch, useSelector } from "react-redux";
import { setRejection } from "../features/rejectionSlice";

function Rejection() {
  const dispatch = useDispatch();
  const { rejection } = useSelector((state) => state.rejection);

  return (
    <>
      {rejection && (
        <div
          className="Rejection"
          onClick={() => dispatch(setRejection(false))}
        >
          <div
            className="Rejection-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div>You don't have enough money</div>
            <button onClick={() => dispatch(setRejection(false))}>Back</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Rejection;
