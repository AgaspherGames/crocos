import React from "react";
import PaginationItem from "./PaginationItem";
interface PaginationProps {
  page: number;
  pagesCount: number;
  setPage: Function;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  pagesCount,
  setPage,
}) => {
  if (pagesCount < 2) {
    return <div></div>;
  }
  console.log(page);
  
  const pages = (function name() {
    if (pagesCount < 5) {
      return Array.from({ length: pagesCount }, (_, i) => i + 1).map(
        (el) => (
          <PaginationItem key={el} toPage={el} setPage={setPage} page={page} />
        )
      );
    } else {
      if (page < 5) {
        return [
          ...Array.from({ length: 5 }, (_, i) => i + 1).map((el) => (
            <PaginationItem
              key={el}
              toPage={el}
              setPage={setPage}
              page={page}
            />
          )),
          "...",
          <PaginationItem
            key={pagesCount}
            toPage={pagesCount}
            setPage={setPage}
            page={page}
          />,
        ];
      } else if (page > pagesCount - 4) {
        return [
          <PaginationItem key={-1} toPage={1} setPage={setPage} page={page} />,
          "...",
          ...Array.from({ length: 5 }, (_, i) => pagesCount - i)
            .reverse()
            .map((el) => (
              <PaginationItem
                key={el}
                toPage={el}
                setPage={setPage}
                page={page}
              />
            )),
          // <PaginationItem toPage={pagesCount} setPage={setPage} page={page}/>,
        ];
      } else {
        return [
          <PaginationItem key={-1} toPage={1} setPage={setPage} page={page} />,
          "...",
          ...Array.from({ length: 3 }, (_, i) => i + page - 1).map((el) => (
            <PaginationItem
              key={el}
              toPage={el}
              setPage={setPage}
              page={page}
            />
          )),
          "...",
          <PaginationItem
            key={pagesCount}
            toPage={pagesCount}
            setPage={setPage}
            page={page}
          />,
        ];
      }
    }
  })();
  return <div className="pagination">{pages}</div>;
};

export default Pagination;
