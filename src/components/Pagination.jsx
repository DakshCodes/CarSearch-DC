import React from 'react';

const Pagination = ({ currentPage, itemsPerPage, totalItems, onPageChange }) => {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    console.log(currentPage ,"Page in")
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination">
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                Previous
            </button>
            {pageNumbers.map(page => (
                <button key={page} onClick={() => onPageChange(page)} className={currentPage === page ? 'active' : ''}>
                    {page}
                </button>
            ))}
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    );
};

export default Pagination;
