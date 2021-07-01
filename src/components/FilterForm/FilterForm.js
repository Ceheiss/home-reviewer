import { connect } from "react-redux";

export const FilterForm = ({ totalReviews }) => {
  return (
    <div>
      <form>
        <label>Filter by Channel:</label>
        {/* Idea is to call the action creator with the value
          so then the API gets called with the appropiate values */}
        <select
          onChange={(e) =>
            console.log("SOME CHANGE HERE: ", e.currentTarget.value)
          }
        >
          {/* Need to dynamically generate options based on channels found */}
          <option value="HOLIDU">HOLIDU</option>
          <option value="BOOKING">BOOKING</option>
          <option value="AIRBNB">AIRBNB</option>
        </select>
      </form>
      <form>
        <label>Order Results by Score:</label>
        <select
          onChange={(e) =>
            console.log(
              "SOME CHANGE HERE: ",
              e.currentTarget.value,
              totalReviews
            )
          }
        >
          <option value="desc">Best scores first</option>
          <option value="asc">Lowest scores first</option>
        </select>
      </form>
    </div>
  );
};

/* Connect is not binding for some reason */
const mapStateToProps = (state) => {
  return {
    totalReviews: state.totalReviews,
    currentReviews: state.currentReviews,
  };
};
export default connect(mapStateToProps)(FilterForm);
