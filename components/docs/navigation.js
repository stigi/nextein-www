
import React from 'react'
import styled, { css } from 'react-emotion'

export default ({ docs, post }) => {
  return (
    <Nav>
      {
        docs.map((doc, idx) => {
          const { data } = doc
          const active = post.data.url === data.url
          return (
            <Item key={`doc-nav-${idx}`} className={active && 'active'} href={data.url}>{data.title}</Item>
          )
        })
      }
    </Nav>
  )
}

const Nav = styled('nav')`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: stretch;
`

const Item = styled('a')`
  padding: 10px 20px;
  text-decoration: none;
  color: #999;
  border-left: 5px solid transparent;
  flex: 1;
  margin-right: 20px;
  
  &:hover {
    color: #212121;
    background-color: #f4f4f4;
    border-left: 5px solid #ccc;
  }

  &.active,
  &.active:hover {
    color: #212121;
    background-color: #e4e4e4;
    border-left: 5px solid #f63;    
  }
  
`
