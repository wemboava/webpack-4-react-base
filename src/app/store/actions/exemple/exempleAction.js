import React from 'react'

export function changeStatusExample (data) {
    // console.log('action =>', data)
    return {
        type: 'EXEMPLE',
        payload: {
            exempleState: data.exempleState,
        }
    }
}