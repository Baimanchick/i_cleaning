import React from 'react';
import { Flex, Spin } from 'antd';
import { LaodingProps } from "./Loading.props"

function Loading({ style }: LaodingProps) {
    return (
        <Flex style={{ width: '100:', height: '100%', ...style }} align={'center'} justify={'center'}>
            <Spin size="large" style={{ color: '#E1A304' }} />
        </Flex>
    )
}

export default Loading;
