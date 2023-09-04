import Grid from "@mui/material/Grid";
import Character from "@/components/Character/Character";
import Pagination from "@/components/Pagination/Pagination";
import { ICardCharacter, ILocalStorageCharacter } from "@/types/models";

interface CharactersTableProps {
  characters: ICardCharacter[];
  favouritesCharacters: ILocalStorageCharacter[];
  pageConfig?: {
    changePage: (page: number) => void;
    page: number;
    pagesCount: number;
  };
}
const CharactersTable = ({
  characters,
  favouritesCharacters,
  pageConfig,
}: CharactersTableProps) => {
  return (
    <>
      <Grid container spacing={3}>
        {characters.map((character) => (
          <Grid
            sx={{ display: " flex", justifyContent: "center" }}
            item
            key={character.id}
            xs={12}
            sm={6}
            md={4}
          >
            <Character
              character={character}
              isCharacterFilled={favouritesCharacters.some(
                (item) => character.id === item.id,
              )}
            />
          </Grid>
        ))}
      </Grid>
      {pageConfig && (
        <Pagination
          changePage={pageConfig.changePage}
          page={pageConfig.page}
          pagesCount={pageConfig.pagesCount}
          sx={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        />
      )}
    </>
  );
};

export default CharactersTable;
