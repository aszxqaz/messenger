import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	margin: 1rem 2rem 1rem 2rem;
	flex-direction: column;
	position: relative;
	width: fit-content;
	max-width: 60%;
	padding: 0.75rem 1rem;
	background-color: #dcf8c6;
	border-radius: 0.75rem;
	height: fit-content;
`;

export const MessageText = styled.div`
	text-align: left;
	font-size: 1rem;
	margin-bottom: 0.75rem;
`;

export const MessageDate = styled.div`
	font-size: 0.75rem;
	color: gray;
	font-weight: normal;
	align-self: flex-end;
`;
