import React, { useEffect, useRef, useState } from 'react';
import './Experience.scss';
import { experiences } from './ExperienceData';
import ExperienceCard from './ExperienceCard/ExperienceCard';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setActiveIndices((prev) => [...new Set([...prev, index])]);
          } else {
            setActiveIndices((prev) => prev.filter((i) => i !== index));
          }
        });

        if (progressRef.current && sectionRef.current) {
          const timelineContainer = sectionRef.current;
          const timelineRect = timelineContainer.getBoundingClientRect();
          const middleOfScreen = window.innerHeight / 2;
          const triggerOffset = window.innerHeight * -0.2; // 20vh

          // Calculate position from top of timeline to middle of screen
          let progressEndPosition = middleOfScreen - timelineRect.top;

          // If we've scrolled 20vh past middle, switch to normal progress
          if (timelineRect.bottom < middleOfScreen + triggerOffset) {
            const scrollRatio = Math.max(0, timelineRect.bottom) /
              (window.innerHeight + timelineContainer.offsetHeight);
            progressEndPosition = scrollRatio * timelineContainer.scrollHeight;
          }

          // const activeIndex = itemRefs.current.findIndex((el) => {
          //   if (!el) return false;
          //   const itemRect = el.getBoundingClientRect();
          //   // Check if item's middle is within 100px of progress end
          //   return Math.abs(itemRect.top + itemRect.height / 2 - progressEndPosition) < 150;
          // });

          // if (activeIndex >= 0) {
          //   setActiveIndices([activeIndex]); // Only keep one active item at a time
          // }

          const maxHeight = timelineContainer.scrollHeight;
          const calculatedHeight = Math.min(Math.max(0, progressEndPosition), maxHeight);

          progressRef.current.style.height = `${calculatedHeight}px`;
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -200px 0px'
      }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));

    return () => {
      itemRefs.current.forEach((el) => el && observer.unobserve(el));
    };
  }, [activeIndices]);

  return (
    <section className="experience-section" ref={sectionRef} id="experience">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <div style={{ fontSize: "32px", fontWeight: "bold" }}>My Journey as a Frontend Developer</div>
        <div>I started my journey at Content Factory and spent 1 years building Hotels Nepal, Vacancy Nepal, Lalpurja Nepal. Here's a timeline of my journey.</div>
        <br/>
        <br/>
        <br/>
        <br/>

        <div className="relative pl-8 md:pl-12">
          <div className="timeline-line">
            <div
              ref={progressRef}
              className="timeline-progress"
              style={{ height: '0px' }}
            />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                data-index={index}
                ref={(el) => {
                  if (el) {
                    itemRefs.current[index] = el;
                  }
                }}
                className={`timeline-item ${activeIndices.includes(index) ? 'active' : ''}`}
              >
                <ExperienceCard exp={exp} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;