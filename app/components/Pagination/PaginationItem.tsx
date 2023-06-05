import React from "react";
interface PaginationItemProps extends React.HTMLAttributes<HTMLDivElement> {
  setPage: Function;
  page: number;
  toPage: number
}

const PaginationItem: React.FC<PaginationItemProps> = ({
  children,
  setPage,
  page,
  toPage,
}) => {
  return <div onClick={() => { setPage(toPage) }} className={`pagination-item ${page==toPage?'active':''}`}>{children||toPage}</div>;
};

export default PaginationItem;
