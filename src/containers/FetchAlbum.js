
import { connect } from 'react-redux';
import { fetchAlbum } from '../actions';
import AlbumData from '../components/AlbumData';
const mapStateToProps = (state) => ({
  albums: state.albums
})
const mapDispatchToProps = dispatch => ({
  onClick : () => dispatch(fetchAlbum())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumData)