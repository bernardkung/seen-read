import React from 'react'
import RecipeListItem from "../Components/RecipeListItem"

function MediaList(props){
  const mediaItems = props.media.map((medium, m)=>{
    return <RecipeListItem 
      handleClick={props.handleClick}
      activeRecipeId={props.activeRecipeId}
      recipe={recipe}
      index={recipe.id}
      key={recipe.id}
    />
  })

  return (
    <div className="recipeList" key={1}>
      {listItems}
      {addItem}
    </div>
  )
}
  
export default MediaList