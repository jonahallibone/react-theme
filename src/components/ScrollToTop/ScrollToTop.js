import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            document.querySelector("#footer").style.display = "none";
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 600);

            setTimeout(() => {
                document.querySelector("#footer").style.display = "block";
            }, 1500);
        }
    }
  
    render() {
        return this.props.children;
    }
}
  
export default withRouter(ScrollToTop);