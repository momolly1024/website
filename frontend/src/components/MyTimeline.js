import React, { useRef, useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { VscBriefcase, VscStarEmpty } from 'react-icons/vsc'
import { FaSchool, FaTools } from 'react-icons/fa'

import { Wave1 } from './TextAnimation'
const Container = styled.div`
    margin-top: 1rem;
`

const MyTimeline = () => {
    return (
        <Container>
            <Wave1 text="I'm Molly :>" />
            <VerticalTimeline>
                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    date='MY SKILLS'
                    contentStyle={{
                        background: '#fafafa',
                        color: 'black',
                    }}
                    contentArrowStyle={{
                        borderRight: '7px solid  #f4b400',
                    }}
                    iconStyle={{
                        background: '#f4b400',
                        color: '#fff',
                    }}
                    icon={<FaTools />}
                >
                    <h4 className='vertical-timeline-element-subtitle'>
                        Frontend
                    </h4>
                    <ul>
                        <li>Javascript, Html5, CSS3</li>
                        <li>React, React hooks, React-router</li>
                        <li>Frontend packages, Npm & Yarn, Eslint</li>
                        <li>
                            Material-ui, Bootstrap, BaseUI, Styled-components
                        </li>
                    </ul>
                    <br />
                    <h4 className='vertical-timeline-element-subtitle'>
                        Others
                    </h4>
                    <ul>
                        <li>Python, NodeJs(simple API)</li>
                        <li>Git Version Control</li>
                        <li>Github, Gitlab, Fork</li>
                        <li>Ubuntu</li>
                        <li>SQL, Oracle, MS SQL, MY SQL</li>
                    </ul>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    date='Nov 2020 - Present'
                    contentStyle={{
                        background: '#fff',
                        color: 'black',
                    }}
                    contentArrowStyle={{
                        borderRight: '7px solid  #4285f4',
                    }}
                    iconStyle={{
                        background: '#4285f4',
                        color: '#fff',
                    }}
                    icon={<VscBriefcase />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        FRONT-END DEVELOPER
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle'>
                        Koo Foundation Sun Yat-Sen Cancer Center
                    </h4>
                    <br />
                    <ul>
                        <li>
                            Mainly responsible for writing website(React
                            framework) about medical , including debugging and
                            testing.
                        </li>
                        <li>Software analysis, design and programming.</li>
                        <li>
                            Works closely with the developmemt team. Cooperate
                            with PM and Backend developers to execute projects
                            collaboratively.
                        </li>
                        <li>Design, revision and updating of web programs.</li>
                        <li>
                            Come up with new ideas and ideas and apply them to
                            works.
                        </li>
                    </ul>
                    <p>project</p>
                    <ul>
                        <li>Paper questionnaire digitize</li>
                        <li>User chart project code refactoring</li>
                        <li>Healthcare Information System (HIS) digitize</li>
                        <li>Data Analysis project (react-highcharts)</li>
                        <li>Patient nutritious meal ordering project</li>
                        <li>Adult Health Check project</li>
                        <li>Maintain other old project (React,C#)</li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='Feb 2020 - Aug 2020'
                    iconStyle={{
                        background: '#55af7b',
                        color: '#fff',
                    }}
                    icon={<FaSchool />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        Bureau of Vocational Training
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle'>
                        Orientation Training
                    </h4>
                    <p>
                        Course for Web Development, including HTML, CSS,
                        Javascript, Photoshop, illustrator, Vue
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    date='Oct 2018 - Dec 2019'
                    iconStyle={{
                        background: '#4285f4',
                        color: '#fff',
                    }}
                    icon={<VscBriefcase />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        PROJECT MANAGER
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle'>
                        GoodGaming Technology
                    </h4>
                    <br />
                    <ul>
                        <li>Complete the system analysis book.</li>
                        <li>
                            Website wireframe and functional specification
                            writing.
                        </li>
                        <li>
                            Responsible for project planning, execution,
                            monitoring, management and coordination.
                        </li>
                    </ul>

                    {/* <p>
                        Creative Direction, User Experience, Visual Design, SEO,
                        Online Marketing
                    </p> */}
                </VerticalTimelineElement>
                {/* <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    date='2008 - 2010'
                    iconStyle={{
                        background: '#4285f4',
                        color: '#fff',
                    }}
                    icon={<VscBriefcase />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        Web Designer
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle'>
                        Los Angeles, CA
                    </h4>
                    <p>User Experience, Visual Design</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    date='2006 - 2008'
                    iconStyle={{
                        background: '#4285f4',
                        color: '#fff',
                    }}
                    icon={<VscBriefcase />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        Web Designer
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle'>
                        San Francisco, CA
                    </h4>
                    <p>User Experience, Visual Design</p>
                </VerticalTimelineElement> */}

                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='Nov 2014 - Jan 2018'
                    iconStyle={{
                        background: '#55af7b',
                        color: '#fff',
                    }}
                    icon={<FaSchool />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        National Ilan University
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle'>
                        Bachelor Degree
                    </h4>
                    <p>Leisure Industry and Health Promotion</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='Nov 2011 - Jan 2014'
                    iconStyle={{
                        background: '#55af7b',
                        color: '#fff',
                    }}
                    icon={<FaSchool />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        New Taipei Private Tam-kang High School
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle'>
                        Senior High School
                    </h4>
                    <p>General Subjects</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{
                        background: '#eb4537',
                        color: '#fff',
                    }}
                    icon={<VscStarEmpty />}
                />
            </VerticalTimeline>
        </Container>
    )
}

export default MyTimeline
