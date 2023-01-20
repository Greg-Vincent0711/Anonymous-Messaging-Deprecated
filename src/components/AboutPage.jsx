/**
 * @author Gregory Vincent
 * @date 12/25/22
 */
import React, {useEffect, useState, useRef} from "react";
import "./AboutPage.css";
function AboutPage() {
  const [textVisible, setTextVisible] = useState(true);
  const viewRef = useRef();
  useEffect(() => {
    const aboutObserver =  new IntersectionObserver((entries) => {
    const entry = entries[0];
    setTextVisible(entry.isIntersecting);
    });
    aboutObserver.observe(viewRef.current);
  }, []);
  // ref={viewRef}
  return (
    <div id="about-page" className = {textVisible ? "visible" : "invisible"}>
      <h1 ref={viewRef}>About The Devs</h1>
      <p ref={viewRef}>
        The Devs™ is a group of Comp Sci students looking to get some experience in
        real world development. As such, they developed a group project to work on.
      </p>
    </div>
  );
}

export default AboutPage;
