import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// https://www.npmjs.com/package/react-vertical-timeline-component


class CustomTimelineElement extends Component {
    render() {
      const {
        className,
        contentStyle,
        contentArrowStyle,
        date,
        iconStyle,
        title,
        subtitle,
        text,
      } = this.props;
  
      return (
        <VerticalTimelineElement
          className={className}
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          date={date}
          iconStyle={iconStyle}
        >
          <h3 className="vertical-timeline-element-title">{title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
          <p>{text}</p>
        </VerticalTimelineElement>
      );
    }
  }

class TimelineComponent extends Component {
  render() {
    return (
    <section id="gigs">
        <div class="gigs-header">
          <h2>Upcoming Gigs</h2>
        </div>
        <div class="gigs-content">
      <VerticalTimeline>
        <CustomTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#06d1ef', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  black' }}
          date="10th August 2024"
          iconStyle={{ background: '#06d1ef', color: '#fff' }}
          title=""
          subtitle="Eschwege, Germany - 10th August 2024"
          text="First Concert in Germany this year."
        />
        <CustomTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#06d1ef', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  black' }}
          date="7th July 2024"
          iconStyle={{ background: '#06d1ef', color: '#fff' }}
          title=""
          subtitle="Berlin, Germany - 7th July 2024"
          text="Finals of European Football Championships."
        />
      </VerticalTimeline>
      </div>
    </section>
    );
  }
}

export default TimelineComponent;