<<<<<<< HEAD
import styled from "styled-components";

const Title = styled.h2`
	margin: ${(props) => props.mrg || "0"};
	font-size: ${(props) => (props.size ? `${props.size * 0.8}rem` : "2rem")};
	color: ${(props) => props.color || "#000"};
	font-weight: 600;
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

export default Title;
=======
import styled from "styled-components"

const Title = styled.h2`
    margin: ${props => props.mrg || "0"};
    font-size:${props => props.size ? (props.size*0.8)+'rem' : "2rem"};
    color: ${props => props.color || "#000"};
    font-weight: 600;
    @media only screen and (max-width: 520px) {
        font-size: ${props => props.size ? (props.size*0.8)+'rem' : "1.6rem"};
    }
    @media only screen and (max-width: 460px) {
        font-size: ${props => props.size ? (props.size*0.6)+'rem' : "1.2rem"};
    }
    @media only screen and (max-width: 360px) {
        font-size: ${props => props.size ? (props.size*0.5)+'rem' : "1rem"};
    }
`;

export default Title;
>>>>>>> b9cde6f17d12c509c1e9bb7145254a0b4fa476c1
