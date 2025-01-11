'use client';
import { Pagination, PaginationItem } from '@mui/material';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface ArchivePaginationProps {
  totalPage: number;
}
export const ArchivePagination = ({ totalPage }: ArchivePaginationProps) => {
  const currentPage = useParams();
  return (
    <Pagination
      count={totalPage}
      page={Number(currentPage.pagination) + 1}
      size="large"
      renderItem={item =>
        item.page ? (
          <PaginationItem
            component={Link}
            href={`/archive/${item.page - 1}`}
            {...item}
          />
        ) : (
          <></>
        )
      }
    />
  );
};
