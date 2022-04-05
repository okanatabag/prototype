<<<<<<< HEAD
import styled from "styled-components";
import { Grid, Container, Button } from "../../atoms";

const ProductCardsContainer = styled(Container)`
	margin: 20px;
	min-height: 300px;
	border-radius: 5px;
	border: 0.01px solid transparent;
`;

const ProductCardsGrid = styled(Grid)`
	margin: 20px;
	gap: 25px;
`;

const SummaryGrid = styled(Grid)`
	margin: 50px 20px 0 20px;
	gap: 25px;
	@media only screen and (max-width: 768px) {
		gap: 15px;
	}
`;

const FavoriteTogglerButton = styled(Button)`
	padding: 20px;
	font-weight: 600;
	background: ${(props) => (props.filter === "all" ? "#fff" : "#ddd")};
`;

export {
	ProductCardsContainer,
	ProductCardsGrid,
	SummaryGrid,
	FavoriteTogglerButton,
};
=======
import styled from "styled-components"
import { Grid, Container, Button } from "../../atoms"

const ProductCardsContainer=styled(Container)`
    margin:20px;
    min-height:300px;
    border-radius: 5px;
    border:  0.01px solid transparent;
`;

const ProductCardsGrid=styled(Grid)`
    margin:20px;
    gap:25px;
`;

const SummaryGrid=styled(Grid)`
    margin: 50px 20px 0 20px;
    gap:25px;
    @media only screen and (max-width: 768px) {
        gap:15px;
    }
`;

const FavoriteTogglerButton=styled(Button)`
    padding: 20px;
    font-weight: 600;
    background: ${props=>props.filter==='all' ? '#fff':'#ddd' }
`;

export {ProductCardsContainer, ProductCardsGrid, SummaryGrid, FavoriteTogglerButton};
>>>>>>> b9cde6f17d12c509c1e9bb7145254a0b4fa476c1
