<<<<<<< HEAD
import styled from "styled-components";
import { Button } from "../../atoms";

const FavButton = styled(Button)`
	padding: 4px;
	width: 36px;
	height: 36px;
	position: absolute;
	top: 15px;
	right: 15px;
	z-index: 2;

	svg {
		color: ${(props) => (props.fav === true ? "red" : "#ccc")};
		font-size: 16px;
	}
`;

export default FavButton;
=======
import styled from "styled-components"
import { Button } from "../../atoms";

const FavButton = styled(Button)`
    padding: 4px;
    width: 36px;
    height: 36px;
    position:absolute;
    top: 15px;
    right: 15px;
    z-index:2;

    svg{
        color: ${props=>props.fav===true ? 'red':'#ccc'};
        font-size:16px;
    }
`;

export {FavButton};
>>>>>>> b9cde6f17d12c509c1e9bb7145254a0b4fa476c1
