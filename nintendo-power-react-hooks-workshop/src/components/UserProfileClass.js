import React from "react";
import fetchUser from "../utils/fetchUser";
import ProfilePicture from "./common/ProfilePicture";
import ProfileName from "./common/ProfileName";
import ProfileTips from "./common/ProfileTips";

export default class UserProfileClass extends React.Component {
  // Initializing state
  constructor(props) {
    super(props);
    this.state = {
      user: {
        tips: []
      }
    };
  }

  // Fetching data
  fetch() {
    fetchUser(this.props.userId).then(res => {
      if (this.__isMounted) this.setState({ user: res.data });
    });
  }

  // Lifecycles in life
  // Setup
  componentDidMount() {
    this.__isMounted = true;
    this.fetch();
  }

  // Watch for changing data
  componentDidUpdate(prevProps) {
    if (this.props.userId !== prevProps.userId) this.fetch();
  }

  // The cleanup
  componentWillUnmount() {
    this.__isMounted = false;
  }

  // Rendering the stuff with data
  render() {
    return (
      <div>
        <ProfilePicture picture={this.state.user.picture} />
        <ProfileName name={this.state.user.name} />
        <ProfileTips tips={this.state.user.tips} />
      </div>
    );
  }
}
