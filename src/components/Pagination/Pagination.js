import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchReviews, fetchPageReviews, setCurrentPage } from "../../actions";
import "./Pagination.css";

export const ReviewList = ({
  totalReviews,
  currentPage,
  fetchReviews,
  fetchPageReviews,
  setCurrentPage,
}) => {
  useEffect(() => {
    fetchReviews();
    fetchPageReviews(1);
  }, []);

  // Set total of pages for pagination
  const pages = [];
  for (let i = 0; i < Math.ceil(totalReviews.length / 5); i++) {
    pages.push(i + 1);
  }

  const onPageClick = (page) => {
    fetchPageReviews(page);
    setCurrentPage(page);
  };

  return (
    <div className="pagination">
      {pages.map((page, i) => (
        <div
          className={`${page === currentPage ? "active" : ""}`}
          key={Math.random() * i}
          onClick={() => onPageClick(page)}
        >
          {page}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    totalReviews: state.totalReviews,
    currentReviews: state.currentReviews,
    currentPage: state.currentPage,
  };
};

export default connect(mapStateToProps, {
  fetchReviews,
  fetchPageReviews,
  setCurrentPage,
})(ReviewList);
