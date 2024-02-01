import React from "react";
import { Frame } from "@/components/Frame";
import Link from "next/link"; 

export const dqmORs = () => {
  return (
    <div className="dqmors">
      <div className="div">
        <img
          className="image"
          alt="Image"
          src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580f3be617a2a8254fa4a2d/img/image-166.png"
        />
        <div className="frame-2">
          <div className="text-wrapper"><Link href="/selectionquestions/q1">Skip To Filter Devices</Link></div>
          <img
            className="img"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/65835895ed443e6187713963/img/image-138.png"
          />
        </div>
      </div>
      <p className="p">I am completing this information for:</p>
      <div className="frame-3">
        <img
          className="image-2"
          alt="Image"
          src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/65836c2a44d595eb7d3c2a67/img/image-139@2x.png"
        />
        <div className="text-wrapper-2"><Link href="/demoquestions/demoqintro">Back</Link></div>
      </div>
      <div className="group">
      <a href="/demoquestions/dqmAge">
        <Frame className="frame-378" elementYearsClassName="frame-instance" text="Myself" /> 
        </a>
        <a href="/demoquestions/dqsAge">
        <Frame
          className="frame-378-instance"
          elementYearsClassName="design-component-instance-node"
          text="Someone else"
        />
        </a>
      </div>
      <div className="frame-wrapper">
        <div className="frame-4">
          <div className="frame-5" />
          <div className="frame-6" />
          <div className="frame-6" />
          <div className="frame-6" />
          <div className="frame-6" />
          <div className="frame-6" />
          <div className="frame-6" />
          <div className="frame-7" />
        </div>
      </div>
    </div>
  );
};
export default dqmORs; 