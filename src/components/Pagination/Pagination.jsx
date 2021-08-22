import React from 'react';

function Pagination({pagination, onChangePage}) {
    const totalPages = Math.ceil(pagination.total/pagination.perPage);
    return (
        <div className="pagination">
            <button
                disabled={pagination.currentPage <= 1}
                onClick={() => onChangePage(pagination.currentPage - 1)}
                className={pagination.currentPage <= 1 ? "unactive" : ""}
                >
                Previous
            </button>
            <button
                disabled={pagination.currentPage >= totalPages}
                onClick={() => onChangePage(pagination.currentPage + 1)}
                className={pagination.currentPage >= totalPages ? "unactive" : ""}
                >
                Next
            </button>
        </div>
    );
}
export default Pagination;