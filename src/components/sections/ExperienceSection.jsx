import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../constants";
import ImpactStats from "./ImpactStats";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#FFFFFF",
        color: "#000000",
        borderRadius: "0px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
        border: "1px solid rgba(0, 0, 0, 0.1)",
      }}
      contentArrowStyle={{
        borderRight: "7px solid #FFFFFF",
      }}
      date={experience.date}
      dateClassName="text-primary font-display tracking-widest text-sm"
      iconStyle={{
        background: experience.iconBg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.5rem",
        boxShadow: "0 0 0 4px #ffffff, 0 0 0 1px rgba(0,0,0,0.1)",
        padding: "8px",
      }}
      icon={
        experience.isImage ? (
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-full h-full object-contain"
          />
        ) : (
          <span>{experience.icon}</span>
        )
      }
    >
      <div>
        <h3 className="font-display text-lg md:text-xl tracking-widest uppercase font-semibold text-primary">
          {experience.title}
        </h3>
        <p
          className="font-body text-sm font-semibold text-secondary"
          style={{
            margin: "8px 0",
          }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="font-body text-sm leading-relaxed text-primary/80"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const ExperienceSection = () => {
  return (
    <section className="bg-background -mt-[100vh] py-32 lg:py-44 border-t border-primary/10">
      <div className="mx-auto max-w-6xl px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm tracking-[0.35em] uppercase font-body mb-4 text-secondary"
          >
            From Brushes to Milestones
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="font-display tracking-widest uppercase text-primary"
            style={{
              fontSize: "clamp(2rem, 4vw, 4rem)",
              transformOrigin: "center center",
            }}
          >
            My Work in Motion
          </motion.h2>
        </div>

        {/* Impact Stats */}
        <ImpactStats />

        {/* Vertical Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col"
        >
          <VerticalTimeline lineColor="#000000">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </motion.div>
      </div>

      {/* Custom CSS for timeline styling */}
      <style>{`
        .vertical-timeline {
          position: relative;
        }

        .vertical-timeline::before {
          background: linear-gradient(
            to bottom,
            #000000 0%,
            #999999 50%,
            #CCCCCC 100%
          );
        }

        .vertical-timeline-element {
          margin: 20px 0;
        }

        .vertical-timeline-element-content {
          border-radius: 0px;
          transition: all 0.3s ease;
        }

        .vertical-timeline-element-content:hover {
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12) !important;
          transform: translateY(-4px);
        }

        .vertical-timeline-element-date {
          font-family: 'Playfair Display', serif;
          font-weight: 600;
          letter-spacing: 0.15em;
          font-size: 0.875rem;
        }

        @media only screen and (max-width: 1170px) {
          .vertical-timeline::before {
            left: 30px;
          }

          .vertical-timeline-element-icon {
            left: 15px;
          }

          .vertical-timeline-element-content {
            margin-left: 70px;
          }
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;
