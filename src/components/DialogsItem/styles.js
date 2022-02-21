import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	padding: 10px;
	border-bottom: 1px solid lightgrey;
	cursor: pointer;
`;
export const UserImage = styled.div`
	width: 18%;
`;
export const Image = styled.img`
	width: 100%;
	border-radius: 100%;
`;
export const MessageInfo = styled.div`
	flex: 1;
	text-align: left;
	padding-left: 10px;
	text-overflow: ellipsis;
    margin-bottom: auto;
`;
export const UserName = styled.div`
	text-transform: capitalize;
	font-size: 2.2rem;
    font-weight: bold;
`;
export const LastMessage = styled.div`
	font-size: 2rem;
	color: gray;
	text-overflow: ellipsis;
	overflow: hidden;
	width: 100%;
`;