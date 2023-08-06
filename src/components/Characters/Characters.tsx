import { ICharacter } from '@/types/models';
import { useState } from 'react';
import Image from 'next/image';

interface CharacterProps {
  character: ICharacter;
}

export function Characters({ character }: CharacterProps) {
  const [details, setDetails] = useState(false);

  return (
    <div>
      {character.thumbnail && (
        <Image
          src={`${character.thumbnail?.path}.${character.thumbnail?.extension}`}
          alt={character.name || 'cover'}
          width="200"
          height="200"
        />
      )}
      <p>{character.name}</p>
      <button onClick={() => setDetails((prev) => !prev)}>
        {details ? 'Hide Details' : 'Show Details'}
      </button>
      {details && (
        <div>
          <p>{character.description}</p>
        </div>
      )}
    </div>
  );
}

export default Characters;
