import { PagingProps, Query } from '@/types';
import Link from 'next/link';
import React from 'react';
import s from './Paging.module.scss';

function getPage(limit: number, offset: number) {
  return ((offset+limit)/limit)
}

export default function Paging({
  paging,
  query,
  page
}: {
  paging: PagingProps,
  query: Query,
  page: string,
}): React.JSX.Element {

  return (
    <section className={s.paging}>
      <hr className={s.paging__menuLine}></hr>
      <div className={s.paging__pages}>
        <h4>Síða {(getPage(10, 1.0*query.offset || 0))}</h4>
        <div className={s.paging__change}>
          {paging._links && paging._links.prev ? (
            <Link className={s.paging__link} href={`/${page}/?offset=${(1.0 * query.offset - 10)}&limit=10` || ''}>
              Fyrri
            </Link>
          ) : (
            null
          )}
          {paging._links && paging._links.next ? (
            <Link className={s.paging__link} href={`/${page}/?offset=${(1.0 * (query.offset || 0) + 10)}&limit=10` || ''}>
              Næsta
            </Link>
          ) : (
            null
          )}
        </div>
      </div>
    </section>
  );
}
