import React, {useContext} from 'react';
import { FavoriteCounterContainer, RedHeartIcon } from './styles';
import { Title } from '../../atoms'
import { DataContext } from '../../../context/ContextProvider';

export default function FavoriteCounter() {
  const {productData} = useContext(DataContext);
  return (
    <FavoriteCounterContainer>
         <RedHeartIcon data-testid="redheart"/>
         <Title>{productData.filter(product =>product.favorite===true).length} Ürün</Title>
    </FavoriteCounterContainer>
  )
}
