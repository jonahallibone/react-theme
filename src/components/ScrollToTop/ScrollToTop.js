import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            document.querySelector("#footer").style.opacity = 0;
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 800);

            setTimeout(() => {
                document.querySelector("#footer").style.opacity = 1;
            }, 1500);
        }
    }
  
    render() {
        return this.props.children;
    }
}
  
export default withRouter(ScrollToTop);