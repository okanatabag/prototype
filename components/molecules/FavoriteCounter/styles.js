import styled from "styled-components"
import { Container } from "../../atoms"
import { HeartIcon } from "@heroicons/react/solid";

const FavoriteCounterContainer = styled(Container)`
    padding: 15px;
    align-items: center;
    display: flex;
    flex-wrap: 1;
    border-radius:5px;
`;

const RedHeartIcon = styled(HeartIcon)`
    height: 48px;
    width: 48px;
    color: red;
    margin-right:15px;
    @media only screen and (max-width: 540px) {
        height: 36px;
        width: 36px;
    }
    @media only screen and (max-width: 460px) {
        height: 32px;
        width: 32px;
    }
`;

export {FavoriteCounterContainer, RedHeartIcon};


