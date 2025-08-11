import React from 'react';
import '../MarqueeContainer.css';

const MarqueeContainer: React.FC = () => {
  return (
    <div className="MarqueeContainer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 order-md-first">
            <div className="marquee-LeftSideMianTitle">Technologies</div>
            <div className="marquee-LeftSideSubTitle">A Comprehensive Stack</div>
          </div>
          <div className="col-md-6 marquee-RightSide text-center">
            Our specialists have extensive experience in working with the most
            popular technologies, universally suitable for the implementation
            of your innovative ideas
          </div>
        </div>
      </div>

      <div className="marquee">
        <div className="marquee__group">
          <img src="" alt="Angular" />
          <img src="https://i.postimg.cc/bs2sQXn5/C.png" alt="C" />
          <img src="https://i.postimg.cc/f3MynJP4/C.png" alt="C" />
          <img src="https://i.postimg.cc/jDH2FzZQ/C.png" alt="C" />
          <img src="https://i.postimg.cc/vDK4g849/cssHtml.png" alt="CSS HTML" />
          <img src="https://i.postimg.cc/kVw4n7r2/Java.png" alt="Java" />
          <img src="https://i.postimg.cc/ftrR95RZ/Javascript-Img.png" alt="JavaScript" />
          
        </div>
      </div>

      <div className="marquee marquee--borders" style={{ "--duration": "100s" } as React.CSSProperties}>
        <div className="marquee marquee--reverse">
          <div className="marquee__group">
            <img src="https://i.postimg.cc/dDh1YM50/Angular.png" alt="Angular" />
            <img src="https://i.postimg.cc/bs2sQXn5/C.png" alt="C" />
            <img src="https://i.postimg.cc/f3MynJP4/C.png" alt="C" />
            <img src="https://i.postimg.cc/jDH2FzZQ/C.png" alt="C" />
            <img src="https://i.postimg.cc/vDK4g849/cssHtml.png" alt="CSS HTML" />
            <img src="https://i.postimg.cc/kVw4n7r2/Java.png" alt="Java" />
            <img src="https://i.postimg.cc/ftrR95RZ/Javascript-Img.png" alt="JavaScript" />
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default MarqueeContainer;