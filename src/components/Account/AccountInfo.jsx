import React from 'react'
import styled from 'styled-components'

const StyledWrap = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`
const StyledName = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const AccountInfo = ({ user = {}, onLogout = () => {} }) => {
  return (
    <StyledWrap>
      <StyledName title={user.nickname}>{user.nickname}</StyledName>
      <button onClick={onLogout}>Logout</button>
    </StyledWrap>
  )
}

export default AccountInfo
