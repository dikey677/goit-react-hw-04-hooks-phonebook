import styled from '@emotion/styled'

export const Container = styled.div`
display: flex;
flex-direction: row;
border: 1px solid black;
box-shadow: 0 1px 4px rgba(0, 0, 0, 1),
-23px 0 20px -23px rgba(0, 0, 0, .8),
23px 0 20px -23px rgba(0, 0, 0, .8),
0 0 40px rgba(0, 0, 0, .1) inset;
border-radius: 10px;
margin-top: 20px;
padding: 15px;
background-color: #e8645a
`
export const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export const Ul = styled.ul`
list-style-type: none;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-left: 0px;
width: 500px;
`
export const Li = styled.li`
display: flex;
justify-content: center;
align-items: center;
`

export const Button = styled.button`
width: 70px;
height: 30px;
border-radius: 20px
`

export const P = styled.p`
margin-right: 30px;
`

