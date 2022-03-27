import styled from "styled-components"
import { Container,Title } from "../../atoms"

const CardContainer = styled(Container)`
    padding:20px;
    border: 1px solid #eee;
    border-radius: 5px;
    flex-basis:320px;
    position: relative;
    @media only screen and (max-width: 768px) {
        flex-basis:auto !important;
    }
`;

const ImageContainer = styled(Container)`
    width:100%;
    height:300px;
    @media only screen and (max-width: 768px) {
        height:550px;
    }
    @media only screen and (max-width: 640px) {
        height:500px;
    }
    @media only screen and (max-width: 480px) {
        height:400px;
    }
    @media only screen and (max-width: 400px) {
        height:300px;
    }
    @media only screen and (max-width: 360px) {
        height:240px;
    }
`;

const ProductTitle = styled(Title)`
    line-clamp:2;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

const ProductPriceContainer = styled(Container)`
    padding:10px 20px;
    background: #eee;
    border-radius: 5px;
    margin-top:10px;
    font-weight:bold;
    font-size:1.8em;
    @media only screen and (max-width: 480px) {
        font-size:1.5em;
    }
`;

const CargoContainer = styled(Container)`
    margin:10px 10px 0 10px;
    display:flex;
    align-items: center;
    svg {
        color: green;
        width: 1.5em;
        height:1.5em;
        margin-right:10px;
    }
    span{
        color: #999;
        font-weight:bold;
    }
`;


export {CardContainer, ImageContainer, ProductTitle, ProductPriceContainer, CargoContainer}

