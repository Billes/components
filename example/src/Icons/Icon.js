import React from 'react'

export const Icon = () => (
  <svg>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M11 17c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-14v4h2V5.08c3.39.49 6 3.39 6 6.92 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.68.59-3.22 1.58-4.42L12 13l1.41-1.41-6.8-6.8v.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9 4.97 0 9-4.03 9-9s-4.03-9-9-9h-1zm7 9c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zM6 12c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z" />
  </svg>
)

export const NestedIcon = () => <Icon />

export const NestedIcon2 = () => <NestedIcon />

export const NpmIcon = () => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="540px" height="210px" viewBox="4 0 10 6">
    <path fill="#CB3837" d="M0,0h18v6H9v1H5V6H0V0z M1,5h2V2h1v3h1V1H1V5z M6,1v5h2V5h2V1H6z M8,2h1v2H8V2z M11,1v4h2V2h1v3h1V2h1v3h1V1H11z"/>
    <polygon fill="#FFFFFF" points="1,5 3,5 3,2 4,2 4,5 5,5 5,1 1,1 " />
    <path fill="#FFFFFF" d="M6,1v5h2V5h2V1H6z M9,4H8V2h1V4z" />
    <polygon fill="#FFFFFF" points="11,1 11,5 13,5 13,2 14,2 14,5 15,5 15,2 16,2 16,5 17,5 17,1 "/>
  </svg>
)
