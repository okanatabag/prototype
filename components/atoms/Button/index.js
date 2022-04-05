import styled from "styled-components";

const Button = styled.button`
	font-size: ${(props) => (props.size ? `${props.size}rem` : "2rem")};
	padding: 4px 8px;
	cursor: pointer;
	color: ${(props) => props.tc || "#000"};
	background: ${(props) => (props.bg ? props.bg : "#fff")};
	border-radius: ${(props) => (props.rounded ? "50%" : "5px")};
	@media only screen and (max-width: 520px) {
		font-size: ${(props) =>
			props.size ? `${props.size * 0.8}rem` : "1.6rem"};
	}
	@media only screen and (max-width: 460px) {
		font-size: ${(props) =>
			props.size ? `${props.size * 0.6}rem` : "1.2rem"};
	}
	@media only screen and (max-width: 360px) {
		font-size: ${(props) =>
			props.size ? `${props.size * 0.5}rem` : "1rem"};
	}
`;

export default Button;
