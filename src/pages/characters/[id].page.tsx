import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

import { Loader, ErrorMessage } from "@/components";

import Image from "next/image";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import {
  fetchHeroSelector,
  heroErrorSelector,
  heroLoadingSelector,
} from "@/store/hero/hero_selectors";
import { AppDispatch } from "@/store";
import { fetchHeroThunkAction } from "@/store/hero/thunk/fetchHero_thunk";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import { AccordionDetails } from "@mui/material";

export default function Page() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const character = useSelector(fetchHeroSelector);
  const loading = useSelector(heroLoadingSelector);
  const error = useSelector(heroErrorSelector);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  useEffect(() => {
    dispatch(fetchHeroThunkAction(router.query.id as string));
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      {character && (
        <Stack
          flexDirection="column"
          alignItems="center"
          m="50px auto"
          width="60vw"
          borderRadius="50px"
          p="20px"
          sx={{
            backgroundColor: "rgba(22,55,104,0.26)",
          }}
        >
          {character.thumbnail && (
            <Image
              src={`${character.thumbnail?.path}.${character.thumbnail?.extension}`}
              alt={character.name || "cover"}
              width="300"
              height="300"
            />
          )}
          <Typography
            variant="h5"
            color="primary"
            textAlign="center"
            fontWeight="bold"
            fontFamily="Modern No. 20"
            mt="15px"
          >
            {character.name}
          </Typography>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{
              marginTop: "10px",
              width: "50vw",
              marginBottom: "20px",
            }}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography
                variant="h5"
                color="primary"
                textAlign="center"
                fontWeight="bold"
                fontFamily="Modern No. 20"
                mt="10px"
              >
                Description
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="h5"
                color="secondary"
                fontFamily="Modern No. 20"
                mt="10px"
              >
                {character.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{
              width: "50vw",
              marginBottom: "20px",
            }}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography
                variant="h5"
                color="primary"
                textAlign="center"
                fontWeight="bold"
                fontFamily="Modern No. 20"
                mt="10px"
              >
                Resource
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="h5"
                color="secondary"
                fontFamily="Modern No. 20"
                mt="10px"
              >
                {character.resourceURI}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            sx={{
              width: "50vw",
              marginBottom: "20px",
            }}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography
                variant="h5"
                color="primary"
                textAlign="center"
                fontWeight="bold"
                fontFamily="Modern No. 20"
                mt="10px"
              >
                Comics List with a Hero
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="h5"
                color="secondary"
                fontFamily="Modern No. 20"
                mt="10px"
              >
                {character.comics?.items?.map(({ name, resourceURI }) => (
                  <div key={resourceURI}>{name}</div>
                ))}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
      )}
    </>
  );
}
