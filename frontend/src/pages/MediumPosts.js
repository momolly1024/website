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
    {
        id: '6',
        title: 'CSS Modules 是什麼？為什麼我要改用 CSS Modules？',
        link: 'https://molly1024.medium.com/css-modules-%E6%98%AF%E4%BB%80%E9%BA%BC-%E7%82%BA%E4%BB%80%E9%BA%BC%E6%88%91%E8%A6%81%E6%94%B9%E7%94%A8-css-modules-what-is-css-modules-why-should-you-use-it-aeb7d2955c58',
    },
    {
        id: '7',
        title: 'Python — FastAPI，利用google sheet當資料庫，結合FastAPI的使用範例。',
        link: 'https://molly1024.medium.com/python-fastapi-%E5%88%A9%E7%94%A8google-sheet%E7%95%B6%E8%B3%87%E6%96%99%E5%BA%AB%E7%B5%90%E5%90%88fastapi%E7%9A%84%E4%BD%BF%E7%94%A8%E7%AF%84%E4%BE%8B-57c9266255e6',
    },
    {
        id: '8',
        title: 'Python 一個 line notify，通知今天氣溫。',
        link: 'https://molly1024.medium.com/python-%E4%B8%80%E5%80%8B-line-notify-%E9%80%9A%E7%9F%A5%E4%BB%8A%E5%A4%A9%E6%B0%A3%E6%BA%AB-a7e6fdb08543',
    },
    {
        id: '9',
        title: 'React 如何抓取 URL 網址中的參數。How to Get URL Parameters and Query Strings?',
        link: 'https://molly1024.medium.com/react-%E5%A6%82%E4%BD%95%E6%8A%93%E5%8F%96url%E7%B6%B2%E5%9D%80%E4%B8%AD%E7%9A%84%E5%8F%83%E6%95%B8-how-to-get-params-in-url-f8902a4256ca',
    },
    {
        id: '10',
        title: '使用腳本自動更新github profile！（以更新medium最新文章為例）',
        link: 'https://molly1024.medium.com/%E4%BD%BF%E7%94%A8%E8%85%B3%E6%9C%AC%E8%87%AA%E5%8B%95%E6%9B%B4%E6%96%B0github-profile-%E4%BB%A5%E6%9B%B4%E6%96%B0medium%E6%9C%80%E6%96%B0%E6%96%87%E7%AB%A0%E7%82%BA%E4%BE%8B-b625dd6fa935',
    },
    {
        id: '11',
        title: 'React 五種獲取API資料的方式 。Five Ways of Fetching Data from API.',
        link: 'https://molly1024.medium.com/react-%E4%BA%94%E7%A8%AE%E7%8D%B2%E5%8F%96api%E8%B3%87%E6%96%99%E7%9A%84%E6%96%B9%E5%BC%8F-five-ways-of-fetching-data-from-api-f3368a07ed75',
    },
    {
        id: '12',
        title: 'React 如何不用迴圈改變內層物件(Obj)的值。How to Change Value in Deep Object.',
        link: 'https://molly1024.medium.com/react-%E5%A6%82%E4%BD%95%E4%B8%8D%E7%94%A8%E8%BF%B4%E5%9C%88%E6%94%B9%E8%AE%8A%E5%85%A7%E5%B1%A4%E7%89%A9%E4%BB%B6-obj-%E7%9A%84%E5%80%BC-how-to-change-value-in-deep-object-6cb370b626aa',
    },
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
                <h2>Latest Posts</h2>
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
