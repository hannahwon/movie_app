import React from "react";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <div class="container">
                    <div class="row">
                        <div class="col-xs 4"></div>
                        <span>{location.state.title}</span>
                    </div>
                    <div class="row">
                        <div class="col-xs 4"></div>
                        <div>{location.state.summary}</div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}
export default Detail;