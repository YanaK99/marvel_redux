import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { SxProps, Theme } from '@mui/material/styles';

interface CustomPaginationProps {
  changePage: (page: number) => void;
  page: number;
  pagesCount: number;
  sx?: SxProps<Theme>;
}

export default function CustomPagination({
  changePage,
  page,
  pagesCount,
  sx,
}: CustomPaginationProps) {
  return (
    <Stack spacing={2}>
      <Pagination
        onChange={(_, page: number) => changePage(page)}
        page={page}
        count={pagesCount}
        sx={sx}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
