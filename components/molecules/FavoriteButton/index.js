import React from 'react'
import {FavButton} from './styles';
import {HeartIcon} from "@heroicons/react/outline";

export default function FavoriteButton({fav,onClick}) {
  return (
    <FavButton onClick={onClick} fav={fav} bg="#eee" rounded>
      <HeartIcon />
    </FavButton>
  )
}


