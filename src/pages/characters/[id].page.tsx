import { useRouter } from 'next/router';
import useCharacter from '@/hooks/useCharacter';
import Loader from '@/components/Loader/Loader';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import React from 'react';
import Image from 'next/image';
import { Typography, Box } from '@mui/material';

export default function Page() {
  const router = useRouter();
  console.log(router.query.id);
  const { character, error, loading } = useCharacter(router.query.id as string);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      {character ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '60vw',
            margin: '50px auto',
            backgroundColor: 'rgba(22,55,104,0.26)',
            borderRadius: '50px',
            padding: '20px',
          }}
        >
          {character!.thumbnail && (
            <Image
              src={`${character!.thumbnail?.path}.${character!.thumbnail
                ?.extension}`}
              alt={character!.name || 'cover'}
              width="300"
              height="300"
            />
          )}
          <Typography
            variant="h5"
            sx={{
              color: '#8a1212',
              textAlign: 'center',
              fontWeight: 'bold',
              fontFamily: 'Modern No. 20',
              marginTop: '30px',
            }}
          >
            NAME : {character!.name}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: '#0b2154',
              textAlign: 'center',
              fontWeight: 'bold',
              fontFamily: 'Modern No. 20',
              marginTop: '15px',
            }}
          >
            {character!.description}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: '#0b2154',
              textAlign: 'center',
              fontWeight: 'bold',
              fontFamily: 'Modern No. 20',
              marginTop: '15px',
            }}
          >
            {character!.resourceURI}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: '#0b2154',
              textAlign: 'center',
              fontWeight: 'bold',
              fontFamily: 'Modern No. 20',
              marginTop: '15px',
            }}
          >
            {character!.comics?.items?.map(({ name }, index) => (
              <div key={index}>{name}</div>
            ))}
          </Typography>
        </Box>
      ) : (
        <div />
      )}
    </>
  );
}
