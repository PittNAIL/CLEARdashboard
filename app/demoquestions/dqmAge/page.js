import React from "react";
import { Frame} from "@/components/Frame";
import { PropertyDefaultWrapper } from "@/components/PropertyDefaultWrapper";
import Link from "next/link"; 

export const dqmAge = () => {
  return (
    <div className="dqage">
      <div className="div">What is your age?</div>
      <div className="frame-2">
        <img
          className="image"
          alt="Image"
          src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/65836c2a44d595eb7d3c2a67/img/image-139@2x.png"
        />
        <div className="text-wrapper-2"><Link href="/demoquestions/dqmORs">Back</Link></div>
      </div>
    
      <a href="/demoquestions/dqmIdentity">
      <div className="frame-3-1">
      <span class="tooltip-container">
      <span class="tooltip-content">Anyone under 18 should see a hearing care professional</span>
        <Frame className="frame-378" elementYearsClassName="frame-instance" text="18-24 years" />
        </span>
        <Frame className="frame-378" elementYearsClassName="frame-instance" text="25-34 years" />
        <Frame className="frame-378" elementYearsClassName="frame-instance" text="35-44 years" />
        <Frame className="frame-378" elementYearsClassName="frame-instance" text="45-54 years" />
        <Frame className="frame-378" elementYearsClassName="frame-instance" text="55-64 years" />
        <Frame className="frame-378" elementYearsClassName="frame-instance" text="65-74 years" />
        <Frame className="frame-378" elementYearsClassName="frame-instance" text="75-84 years" />
        <Frame className="frame-378" elementYearsClassName="frame-instance" text="85+ years" />
        <Frame className="frame-378" elementYearsClassName="frame-378-instance" text="Prefer not to say" />
        </div>
        </a>
      
      <div className="frame-4">
        <img
          className="img"
          alt="Image"
          src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580f3be617a2a8254fa4a2d/img/image-166.png"
        />
        <div className="frame-5">
          <div className="text-wrapper-3"><Link href="/selectionquestions/q1">Skip To Filter Devices</Link></div>
          <img
            className="image-2"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/65835895ed443e6187713963/img/image-138.png"
          />
        </div>
      </div>
      <div className="frame-6">
        <div className="frame-7" />
        <div className="frame-8" />
        <div className="frame-9" />
        <div className="frame-9" />
        <div className="frame-9" />
        <div className="frame-9" />
        <div className="frame-9" />
        <div className="frame-10" />
      </div>
    </div>
  );
};
export default dqmAge; 