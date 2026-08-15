"use client";

import { useEffect, useRef, useState } from "react";
import { milestones } from "../site-data";

export function TimelineProgress() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      frame = 0;
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportAnchor = window.innerHeight * 0.46;
      const travelled = viewportAnchor - rect.top;
      const nextProgress = Math.min(1, Math.max(0, travelled / rect.height));

      setProgress(nextProgress);
      setActiveIndex(
        Math.min(
          milestones.length - 1,
          Math.max(0, Math.round(nextProgress * (milestones.length - 1))),
        ),
      );
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="journey-list journey-list-progress"
      style={{ "--timeline-progress": `${progress * 100}%` } as React.CSSProperties}
    >
      <div className="journey-rail" aria-hidden="true">
        <span className="journey-rail-fill" />
        <i className="journey-rail-cursor" />
      </div>

      {milestones.map((milestone, index) => (
        <article
          key={milestone.title}
          className={index <= activeIndex ? "is-reached" : ""}
        >
          <span className="journey-node" aria-hidden="true" />
          <div className="journey-year">
            <span>0{index + 1}</span>
            <time>{milestone.year}</time>
          </div>
          <div>
            <p>{milestone.type}</p>
            <h2>{milestone.title}</h2>
          </div>
          <p>{milestone.copy}</p>
        </article>
      ))}
    </section>
  );
}
