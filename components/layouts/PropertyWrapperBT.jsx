/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

'use client'
import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";


export const PropertyWrapperBT = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`property-wrapper property-1-1-${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
       {state.property1 === "default" && (
        <>
          <img
            className="image"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-181.png"
            style={{ width: '20px', height: '20px', marginRight: '10px', marginLeft: '10px' }}

          />
          <div className="text-wrapper">Bluetooth</div>
          <img
            className="img"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-180@2x.png"
            style={{ width: '20px', height: '20px', marginRight: '10px', marginLeft: '10px' }}

          />
        </>
      )}

      {state.property1 === "variant-2" && (
        <div className="overlap">
          <div className="overlap-group">
            <div className="smartphone">
             
            </div>
            <img
            className="image-2"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-181.png"
            style={{ width: '20px', height: '20px', marginRight: '10px', marginLeft: '10px' }}
          />
            <div className="div-wrapper">
              <div className="text-wrapper-2">Bluetooth</div>
            </div>
            
          </div>
         
        
          <img
            className="image-3"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-180-1@2x.png"
            style={{ width: '20px', height: '20px', marginRight: '10px', marginLeft: '10px' }}
          />
           <p className="div">
                Bluetooth allows the transfer of data wirelessly between two or more devices. An example of a Bluetooth
                device that may transfer data to your hearing aid is a smartphone. Examples of data that could transfer
                from the smartphone to the hearing aid are phone calls, music, and podcasts. This allows you to hear the
                sounds directly into the hearing aids. Bluetooth compatibility also may allow the smartphone to be used
                as a remote control to make changes to the hearing aid.
              </p>
        </div>
        
      )}

      
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "variant-2") {
    switch (action) {
      case "click":
        return {
          property1: "default",
        };
    }
  }

  if (state.property1 === "default") {
    switch (action) {
      case "click":
        return {
          property1: "variant-2",
        };
    }
  }

  return state;
}

PropertyWrapperBT.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
