import PropTypes from "prop-types";
import _ from "lodash";
import BPagination from "react-bootstrap/Pagination";

const Pagination = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
  pagesShown = 5,
  className = null,
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const step = Math.floor(pagesShown / 2);
  const pagesBefore = Math.max(step, pagesShown + currentPage - pagesCount - 1);
  const pagesAfter = Math.max(step, pagesShown - currentPage);
  const start = Math.max(1, currentPage - pagesBefore);
  const end = Math.min(pagesCount, currentPage + pagesAfter);
  const pages = _.range(start, end + 1);

  return (
    <BPagination className={className}>
      <BPagination.First
        disabled={currentPage === 1}
        onClick={() => onPageChange(1)}
      />
      <BPagination.Prev
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      />
      {pages.map((page) => (
        <BPagination.Item
          key={page}
          active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </BPagination.Item>
      ))}
      <BPagination.Next
        disabled={currentPage === pagesCount}
        onClick={() => onPageChange(currentPage + 1)}
      />
      <BPagination.Last
        disabled={currentPage === pagesCount}
        onClick={() => onPageChange(pagesCount)}
      />
    </BPagination>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
