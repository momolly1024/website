import React, { useRef, useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { VscBriefcase, VscHome, VscStarEmpty } from 'react-icons/vsc'

const Container = styled.div`
    margin-top: 1rem;
    /* display: flex; */
`

const MyTimeline = () => {
    return (
        <Container>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    date='2020/9 - present'
                    contentStyle={{
                        background: '#fff',
                        color: '#364a73',
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
                    <p>
                        - Mainly responsible for writing website(React framework)
                        about medical , including debugging and testing.
                        - Software analysis, design and programming. 
                        - Works closely with the developmemt team. Cooperate with PM and Backend developers to execute projects collaboratively. 
                        - Design, revision and updating of web programs. 
                        - Come up with new ideas and ideas and apply them to works.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    date='2010 - 2011'
                    iconStyle={{
                        background: '#4285f4',
                        color: '#fff',
                    }}
                    icon={<VscBriefcase />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        Art Director
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle'>
                        San Francisco, CA
                    </h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, SEO,
                        Online Marketing
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
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
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='April 2013'
                    iconStyle={{
                        background: '#ea4335',
                        color: '#fff',
                    }}
                    icon={<VscHome />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        Content Marketing for Web, Mobile and Social Media
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle'>
                        Online Course
                    </h4>
                    <p>Strategy, Social Media</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='November 2012'
                    iconStyle={{
                        background: '#ea4335',
                        color: '#fff',
                    }}
                    icon={<VscHome />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        Agile Development Scrum Master
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle'>
                        Certification
                    </h4>
                    <p>Creative Direction, User Experience, Visual Design</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='2002 - 2006'
                    iconStyle={{
                        background: '#ea4335',
                        color: '#fff',
                    }}
                    icon={<VscHome />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        Bachelor of Science in Interactive Digital Media Visual
                        Imaging
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle'>
                        Bachelor Degree
                    </h4>
                    <p>Creative Direction, Visual Design</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{
                        background: '#f4b400',
                        color: '#fff',
                    }}
                    icon={<VscStarEmpty />}
                />
            </VerticalTimeline>
        </Container>
    )
}

export default MyTimeline
