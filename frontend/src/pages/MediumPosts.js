import React, { useRef, useState } from 'react'
import { Container } from '../styles/center'
import styled from 'styled-components'
import Card from '../components/Card'

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
`
const Lists = styled.div`
    display: flex;
    margin-top: 1rem;
    h3 {
        margin-right: 1rem;
    }
    a {
        text-decoration: none;
        color: #4285f4;
    }
    a:hover {
        color: black;
    }
`
const posts = [
    {
        id: '1',
        title: 'React 效能優化 — React.memo、useCallback、useMemo 的使用方式及其他效能優化小技巧。',
        link: 'https://molly1024.medium.com/react-%E6%95%88%E8%83%BD%E5%84%AA%E5%8C%96-react-memo-usecallback-usememo-%E7%9A%84%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F%E5%8F%8A%E5%85%B6%E4%BB%96%E6%95%88%E8%83%BD%E5%84%AA%E5%8C%96%E5%B0%8F%E6%8A%80%E5%B7%A7-700d74a7464d',
    },
    {
        id: '2',
        title: 'React 結合 python API — 寫一個行事曆 App！使用 fastAPI + google sheet 當資料庫。',
        link: 'https://molly1024.medium.com/react-%E7%B5%90%E5%90%88-python-api-%E5%AF%AB%E4%B8%80%E5%80%8B%E8%A1%8C%E4%BA%8B%E6%9B%86-app-%E4%BD%BF%E7%94%A8-fastapi-google-sheet-%E7%95%B6%E8%B3%87%E6%96%99%E5%BA%AB-ec6522dc3954',
    },
    {
        id: '3',
        title: '新版 React router 怎麼用？ React-router-dom v6！',
        link: 'https://molly1024.medium.com/%E6%96%B0%E7%89%88-react-router-%E6%80%8E%E9%BA%BC%E7%94%A8-react-router-dom-v6-8c0624642fce',
    },
    {
        id: '4',
        title: 'Medium 小技巧，寫 Medium 的15個隱藏功能！',
        link: 'https://molly1024.medium.com/medium-%E5%B0%8F%E6%8A%80%E5%B7%A7-%E5%AF%AB-medium-%E6%87%89%E8%A9%B2%E7%9F%A5%E9%81%93%E7%9A%84%E9%9A%B1%E8%97%8F%E5%8A%9F%E8%83%BD-b1df60747d03',
    },
    {
        id: '5',
        title: 'React 一個 CRUD 增改刪查專案。',
        link: 'https://molly1024.medium.com/react-%E4%B8%80%E5%80%8B-crud-%E5%A2%9E%E6%94%B9%E5%88%AA%E6%9F%A5%E5%B0%88%E6%A1%88-9874b452ae36',
    },
    { id: '6', title: 'test', link: '#' },
]

const List = (props) => {
    const { title, link } = props
    return (
        <Lists>
            <a href={link} rel='noreferrer' target='_blank'>
                {title}
            </a>
        </Lists>
    )
}

const MediumPosts = () => {
    return (
        <Content>
            <ul>
                <h2>Posts</h2>
                {posts.map((r) => (
                    <li key={r.id}>
                        <List title={r.title} link={r.link} />
                    </li>
                ))}
            </ul>
        </Content>
    )
}

export default MediumPosts
