import React from 'react'

export function changeStatusExample (data) {
    // console.log('action =>', data)
    return {
        type: 'EXAMPLE',
        payload: {
            exampleState: data
        }
    }
}