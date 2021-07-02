import { connect } from "react-redux";
import { getUniqueValues } from "../../helpers/helpers";
import { fetchChannelReviews } from "../../actions";
import "./FilterForm.css";

const FilterForm = ({ totalReviews, fetchChannelReviews }) => {
  const channels = getUniqueValues(totalReviews.map((e) => e.channel));

  return (
    <div className="form">
      <div>
        <form>
          <label>Filter by Channel:</label>
          {/* Idea is to call the action creator with the value
          so then the API gets called with the appropiate values */}
          <select onChange={(e) => fetchChannelReviews(e.currentTarget.value)}>
            {channels.map((channel, i) => (
              <option key={Math.random() * i * 25} value={channel}>
                {channel.toLowerCase()}
              </option>
            ))}
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

export default connect(mapStateToProps, { fetchChannelReviews })(FilterForm);
