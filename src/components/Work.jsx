import React from 'react';
import 'antd/dist/antd.css';
import { Timeline } from 'antd';

const Work = () => {
    
    return (
        <div className="work_container">
        <Timeline mode="alternate">
    <Timeline.Item> Kustomer Senior Technical Support Engineer Oct 2020 - Current</Timeline.Item>
    <Timeline.Item>Kustomer Technical Support Engineer Nov 2019 - Oct 2020</Timeline.Item>
    <Timeline.Item>FightPandemics Volunteer Front End Engineer Jul 2020 - Aug 2020</Timeline.Item>
    <Timeline.Item>Dollar Tree Support Services Analyst Feb 2019 – Sep 2019</Timeline.Item>
    <Timeline.Item>Dollar Tree Support Services Associate Aug 2018 – Feb 2019</Timeline.Item>
    <Timeline.Item>Lyft HQ Social Media Associate Feb 2017 - Aug 2018</Timeline.Item>
    <Timeline.Item>Lyft HQ Critical Response Line Associate Jul 2016 - Feb 2017</Timeline.Item>
  </Timeline>
  </div>
    )
}

export default Work;