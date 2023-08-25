import { ICharacter, ILocalStorageCharacter } from "@/types/models";

const TOKEN = "token";

export const addFavouriteToLocalStorage = ({ name, id }: ICharacter) => {
  const data: ILocalStorageCharacter[] = getFavouritesFromLocalStorage();
  data.push({ id, name, isFilled: true, date: Date.now() });

  localStorage.setItem(TOKEN, JSON.stringify(data));
};

export const getFavouritesFromLocalStorage = (): ILocalStorageCharacter[] => {
  return JSON.parse(localStorage.getItem(TOKEN) || '""') || [];
};

export const removeFavouriteFromLocalStorage = ({ id }: ICharacter) => {
  const data: ILocalStorageCharacter[] = getFavouritesFromLocalStorage();
  const newData = data.filter((item) => id !== item.id);

  localStorage.setItem(TOKEN, JSON.stringify(newData));
};
