import { Spin } from 'antd'
import React from 'react'

const Loading = ({ children, isLoading, deday = 200 } : any) => {
    return (
        <Spin spinning={isLoading} delay={deday}>
            {children}
        </Spin>
    )
}

export default Loading