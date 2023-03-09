import { useState } from "react";
import { createContext } from "react";

type FavoritesContextType = {
  ids: Array<string>;
  addFavroite: (id: string) => void;
  removeFavroite: (id: string) => void;
};

export const FavoritesContext = createContext<FavoritesContextType>({
  ids: [],
  addFavroite: (id: string) => {},
  removeFavroite: (id: string) => {},
});

type FavoritesContextProviderProps = { children: any };

function FavoritesContextProvider(props: FavoritesContextProviderProps) {
  const [favoriteMealIds, setFavroiteMealIds] = useState<Array<string>>([]);

  function addFavroite(id: string) {
    setFavroiteMealIds((currentFavIds: Array<string>) => [...currentFavIds, id]);
  }
  function removeFavroite(id: string) {
    setFavroiteMealIds((currentFavIds: Array<string>) => currentFavIds.filter((mealId) => mealId !== id));
  }

  const value = {
    ids: favoriteMealIds,
    addFavroite: addFavroite,
    removeFavroite: removeFavroite,
  };

  return <FavoritesContext.Provider value={value}>{props.children}</FavoritesContext.Provider>;
}

export default FavoritesContextProvider;
