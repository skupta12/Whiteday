import { SortFilterItem } from '@/lib/constants';
import { Suspense } from 'react';
import { FilterListItem } from '.';

export type ListItem = SortFilterItem | PathFilterItem;
export type PathFilterItem = { title: string; path: string };

const FilterItemList = ({ list }: { list: ListItem[] }) => {
  return (
    <>
      {list.map((item: ListItem, i) => (
        <FilterListItem key={i} item={item} />
      ))}
    </>
  );
}

export const FilterList = ({ list }: { list: ListItem[];}) => {
  return (
    <>
      <nav className='sticky top-15'>
        <ul className='lg:block flex flex-wrap justify-center gap-3'>
          <Suspense fallback={null}>
            <FilterItemList list={list} />
          </Suspense>
        </ul>
      </nav>
    </>
  );
}