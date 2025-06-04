import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>INTERIOR</h3>
              <h4>Description</h4>
              <p>
                Started exploring spaces through the lens of a gamer now I
                design them in real life. From cozy setups to modern rooms, I
                craft immersive, functional interiors that tell a story.
              </p>
              <h5>Style & Tools </h5>
              <div className="what-content-flex">
                <div className="what-tags">Spatial planning</div>
                <div className="what-tags">Lighting design</div>
                <div className="what-tags">3D visualization</div>
                <div className="what-tags">Moodboards</div>
                <div className="what-tags">Tech-integrated layouts</div>
                <div className="what-tags">Minimal</div>
                <div className="what-tags">Modern</div>
                <div className="what-tags">Gamer aesthetic</div>
                {/* <div className="what-tags">PHP</div>
                <div className="what-tags">MySql</div> */}
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>DESIGN</h3>
              <h4>Description</h4>
              <p>
                I started experimenting with interiors out of curiosity-and like
                all the best obsessions, it evolved into a full-on creative
                career. 
                Now, I design real-world spaces that blend style,
                comfort, and a bit of virtual flair.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">SketchUp</div>
                <div className="what-tags">AutoCAD</div>
                <div className="what-tags">3ds Max</div>
                <div className="what-tags">V-Ray</div>
                <div className="what-tags">Photoshop</div>
                <div className="what-tags">Lighting</div>
                <div className="what-tags">Design</div>
                <div className="what-tags">Moodboarding</div>
                <div className="what-tags">Space Planning</div>
                <div className="what-tags">Theme Styling</div>

                {/* <div className="what-tags">Modelling</div> */}
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
