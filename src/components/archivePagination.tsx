'use client';
import { Pagination, PaginationItem } from '@mui/material';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface ArchivePaginationProps {
  totalPage: number;
}
export const ArchivePagination = ({ totalPage }: ArchivePaginationProps) => {
  const currentPage: { pagination: string } = useParams();
  return (
    <Pagination
      count={totalPage}
      siblingCount={0}
      boundaryCount={1}
      page={Number(currentPage.pagination) + 1}
      size="large"
      renderItem={item => {
        if (item.type === 'page') {
          return (
            <PaginationItem
              component={Link}
              href={`/archive/${item.page! - 1}`}
              {...item}
            />
          );
        }
        if (item.type === 'start-ellipsis') {
          return <PaginationItem {...item} />;
        }
        if (item.type === 'end-ellipsis') {
          return <PaginationItem {...item} />;
        }
        if (currentPage.pagination !== '0' && item.type === 'previous') {
          return (
            <PaginationItem
              component={Link}
              href={`/archive/${item.page! - 1}`}
              {...item}
            />
          );
        }
        if (
          currentPage.pagination !== `${totalPage - 1}` &&
          item.type === 'next'
        ) {
          return (
            <PaginationItem
              component={Link}
              href={`/archive/${item.page! - 1}`}
              {...item}
            />
          );
        }
      }}
    />
  );
};
