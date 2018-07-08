import React from 'react';
import PropTypes from 'prop-types';
import {
  EntryContainer,
  CheckBox,
  EntryName,
  EntryAmount,
  ToolsContainer,
  InfoContainer,
  Edit,
  Trash,
  EditInput,
} from './EntryStyles';

class Entry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      editing: false,
      nameValue: this.props.name,
    };
  }

  toggleChecked() {
    this.setState(prevState => ({ checked: !prevState.checked }));
  }

  toggleEditing() {
    this.setState(prevState => ({ editing: !prevState.editing }));
  }

  updateNameValue(e) {
    this.setState({
      nameValue: e.target.value,
    });
  }

  checkEnter(e, id) {
    const { editEntry } = this.props;
    const { nameValue } = this.state;

    if (e.keyCode === 13) {
      editEntry(id, nameValue);
      this.toggleEditing();
      this.toggleChecked();
    }
  }

  render() {
    const {
      name,
      amount,
      unit,
      deleteEntry,
      id,
    } = this.props;

    const {
      checked,
      editing,
    } = this.state;

    const checkBox = checked
      ? (
        <CheckBox onClick={() => this.toggleChecked()}>
          X
        </CheckBox>
      )
      : (<CheckBox onClick={() => this.toggleChecked()} />);

    const tools = checked
      ? (
        <ToolsContainer>
          <Edit onClick={() => this.toggleEditing()} src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTcuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI2OS43ODMgMjY5Ljc4MyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjY5Ljc4MyAyNjkuNzgzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CjxnPgoJPHBhdGggZD0iTTE3NC4yNTYsNTIuOTc0Yy0xLjUwNS0xLjUwNi0zLjUxNC0yLjMzNS01LjY1Ni0yLjMzNWMtMi4xNDMsMC00LjE1MSwwLjgyOS01LjY1NywyLjMzNUwyMy4zMjgsMTkyLjU4OCAgIGMtMi44MzIsMi44MzItNS45OTQsOC4yODEtNy4wNSwxMi4xNDdMMC4yODksMjYzLjM2M2MtMC41MjEsMS45MTEtMC4zMDgsMy42MiwwLjYwMiw0LjgxMmMwLjc5MiwxLjAzNywyLjA2MiwxLjYwOCwzLjU3MiwxLjYwOCAgIGMwLjYyLDAsMS4yODEtMC4wOTUsMS45NjUtMC4yODFsNTguNjI3LTE1Ljk4OWMzLjg2NC0xLjA1NCw5LjMxMy00LjIxNiwxMi4xNDctNy4wNWwxMzkuNjE0LTEzOS42MTQgICBjMS41MDYtMS41MDYsMi4zMzUtMy41MTUsMi4zMzUtNS42NTZjMC0yLjE0My0wLjgyOS00LjE1MS0yLjMzNS01LjY1N0wxNzQuMjU2LDUyLjk3NHoiIGZpbGw9IiMwMDAwMDAiLz4KCTxwYXRoIGQ9Ik0yNTguODE0LDEwLjk3N0MyNTEuNzM2LDMuODk4LDI0Mi4zMjQsMCwyMzIuMzE0LDBjLTEwLjAxMSwwLTE5LjQyMywzLjg5OC0yNi41MDEsMTAuOTc3bC01Ljk5NSw1Ljk5NSAgIGMtMi45MjMsMi45MjMtNC4zNjMsNS42OTEtNC4yODEsOC4yMjdjMC4wNjUsMi4wMywxLjEwNCwzLjEyNSwxLjIyMiwzLjI0M2w0NC4xLDQ0LjFjMC4wNjIsMC4wNjIsMS41MjQsMS40OTQsNC4wNzcsMS40OTUgICBjMC4wMDEsMCwwLjAwMSwwLDAuMDAxLDBjMi41MzQsMCw1LjE4Ny0xLjM2Nyw3Ljg4My00LjA2M2w1Ljk5NS01Ljk5NUMyNzMuNDI3LDQ5LjM2NSwyNzMuNDI3LDI1LjU5LDI1OC44MTQsMTAuOTc3eiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
          <Trash onClick={() => deleteEntry(id)} src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4Ni40IDQ4Ni40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODYuNCA0ODYuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00NDYsNzBIMzQ0LjhWNTMuNWMwLTI5LjUtMjQtNTMuNS01My41LTUzLjVoLTk2LjJjLTI5LjUsMC01My41LDI0LTUzLjUsNTMuNVY3MEg0MC40Yy03LjUsMC0xMy41LDYtMTMuNSwxMy41ICAgIFMzMi45LDk3LDQwLjQsOTdoMjQuNHYzMTcuMmMwLDM5LjgsMzIuNCw3Mi4yLDcyLjIsNzIuMmgyMTIuNGMzOS44LDAsNzIuMi0zMi40LDcyLjItNzIuMlY5N0g0NDZjNy41LDAsMTMuNS02LDEzLjUtMTMuNSAgICBTNDUzLjUsNzAsNDQ2LDcweiBNMTY4LjYsNTMuNWMwLTE0LjYsMTEuOS0yNi41LDI2LjUtMjYuNWg5Ni4yYzE0LjYsMCwyNi41LDExLjksMjYuNSwyNi41VjcwSDE2OC42VjUzLjV6IE0zOTQuNiw0MTQuMiAgICBjMCwyNC45LTIwLjMsNDUuMi00NS4yLDQ1LjJIMTM3Yy0yNC45LDAtNDUuMi0yMC4zLTQ1LjItNDUuMlY5N2gzMDIuOXYzMTcuMkgzOTQuNnoiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cGF0aCBkPSJNMjQzLjIsNDExYzcuNSwwLDEzLjUtNiwxMy41LTEzLjVWMTU4LjljMC03LjUtNi0xMy41LTEzLjUtMTMuNXMtMTMuNSw2LTEzLjUsMTMuNXYyMzguNSAgICBDMjI5LjcsNDA0LjksMjM1LjcsNDExLDI0My4yLDQxMXoiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cGF0aCBkPSJNMTU1LjEsMzk2LjFjNy41LDAsMTMuNS02LDEzLjUtMTMuNVYxNzMuN2MwLTcuNS02LTEzLjUtMTMuNS0xMy41cy0xMy41LDYtMTMuNSwxMy41djIwOC45ICAgIEMxNDEuNiwzOTAuMSwxNDcuNywzOTYuMSwxNTUuMSwzOTYuMXoiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cGF0aCBkPSJNMzMxLjMsMzk2LjFjNy41LDAsMTMuNS02LDEzLjUtMTMuNVYxNzMuN2MwLTcuNS02LTEzLjUtMTMuNS0xMy41cy0xMy41LDYtMTMuNSwxMy41djIwOC45ICAgIEMzMTcuOCwzOTAuMSwzMjMuOCwzOTYuMSwzMzEuMywzOTYuMXoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
        </ToolsContainer>
      )
      : null;

    const entryName = editing
      ? (
        <EditInput
          type="text"
          value={this.state.nameValue}
          onChange={e => this.updateNameValue(e)}
          onKeyDown={e => this.checkEnter(e, id)}
        />
      )
      : (
        <EntryName>
          {name}
        </EntryName>
      );

    return (
      <EntryContainer>
        <InfoContainer>
          {checkBox}
          {entryName}
          <EntryAmount>
            {`${amount} ${unit}`}
          </EntryAmount>
        </InfoContainer>
        {tools}
      </EntryContainer>
    );
  }
}

export default Entry;

Entry.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number,
  unit: PropTypes.string,
  deleteEntry: PropTypes.func.isRequired,
  editEntry: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
