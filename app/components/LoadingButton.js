import React from 'react';
import { Button } from 'react-bootstrap';
import style from '../style.css';

export default class LoadingButton extends React.PureComponent  {
      constructor(props) {
        super(props);
        this.state = { isLoading: false };
          this.handleClick.bind(this);
      }

      render() {
        let isLoading = this.state.isLoading;
        return (
          <Button
            bsStyle="default"
            disabled={isLoading}
            onClick={!isLoading ? this.handleClick : null}
          >
            {isLoading ? 'Loading...' : 'Loading state'}
          </Button>
        );
      }
    
      handleClick() {
        this.setState({ isLoading: true });
    
        // This probably where you would have an `ajax` call
        setTimeout(() => {
          // Completed of async action, set loading state back
          this.setState({ isLoading: false });
        }, 2000);
      }
}