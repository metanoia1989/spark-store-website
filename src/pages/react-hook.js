import React, { useEffect, useState } from 'react'
import Layout from '@theme/Layout'

export default function ReactHook() {
    return (
        <Layout>
            <h1>React Hook演示</h1>
            <Example />
        </Layout>
    ) 
}


/**
 * 使用React Hooks
 *
 * @param {Object} props 
 * @returns 
 */
function Example(props = {}) {
    // 使用 useState 来声明状态
    const [count, setCount] = useState(0)
    
    useEffect(() => {
        document.title = `你已经点击了 ${count} 次`
        return () => {
            console.log("传入了什么返回值", props)
        }
    })
    
    return (
        <div>
            <p>你已经点击了 {count} 次</p>
            <button onClick={() => setCount(count + 1)}>
                点我
            </button>
        </div>
    )
}

/**
 * 自定义Hooks
 */
var ChatAPI = {
    subscrbes: {},
    subscribeToFriendStatus(friendId, cb) {
        if (!ChatAPI.subscrbes[friendId]) {
            ChatAPI.subscrbes[friendId] = []
        }
        ChatAPI.subscrbes[friendId].push(cb) 
    },
    unsubscribeFromFriendStatus(friendId, cb) {
        let i = ChatAPI.subscrbes[friendId].indexOf(cb) 
        delete ChatAPI.subscrbes[friendId][i]
    }
}
// 自定义Hooks
function useFriendStatus(friendID) {
    const [ isOnline, setIsOnline ] = useState(null)
    
    function handleStatusChange(status) {
        setIsOnline(status.isOnline)
    }
    
    useEffect(() => {
        ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange)
        return () => {
            ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange)
        }
    })
    
    return isOnline
}
// 复用Hooks
function FriendStatus(props) {
    const isOnline = useFriendStatus(props.friend.id)
    
    if (isOnline === null) {
        return 'Loading...'
    }
    
    return isOnline ? 'Online' : 'Offline'
}

function FreindListItem(props) {
    const isOnline = useFriendStatus(props.friend.id)
    
    return (
        <li style={{ color: isOnline ? 'green' : 'black' }}>
            {props.friend.name}
        </li>
    )
}
