import React from "react";
import Link from "next/link"; 

export const demoqintro = () => {
  return (
    <div className="demoqintro">
      <div className="text-wrapper">User Information Questions</div>
      <p className="answering-these">
        <span className="span">Answering these questions is optional.</span>
        <span className="text-wrapper-2">&nbsp;</span>
        <span className="text-wrapper-3">
          Your responses are not linked to your identity. We want the CLEARdashboard to be used and enjoyed by many
          people. The responses to these questions will help us understand who is using the Dashboard and will help us
          improve it. Thank you in advance for answering these questions. <br />
          <br />
        </span>
        <span className="span">If you would prefer to not answer these questions</span>
        <span className="text-wrapper-3">
          , click on the Skip button. The next set of questions will help you find the hearing aids based on your
          preferences.
        </span>
      </p>
      <div className="frame">
        <img
          className="image"
          alt="Image"
          src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/65836c2a44d595eb7d3c2a67/img/image-139@2x.png"
        />
        <div className="div"><Link href="/signIn">Back</Link>
</div>
      </div>
      <div className="frame-2">
        <div className="text-wrapper-4"><Link href= "/demoquestions/dqmORs" >Continue </Link> </div>
        <img
          className="img"
          alt="Image"
          src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/65835895ed443e6187713963/img/image-138.png"
        />
      </div>
      <div className="frame-3">
        <img
          className="image-2"
          alt="Image"
          src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580f3be617a2a8254fa4a2d/img/image-166.png"
        />
        <div className="frame-4">
          <div className="text-wrapper-5"><Link href= "/selectionquestions/q1" >Skip </Link> </div>
          <img
            className="image-3"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/65835895ed443e6187713963/img/image-138.png"
          />
        </div>
      </div>
    </div>
  );
};

export default demoqintro; 