import React from 'react';
import { Button } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import  { btnCustomEx } from '../css/style.css'

bootstrapUtils.addStyle(Button, btnCustomEx);

export default class LoadingButton extends React.PureComponent  {
      constructor(props) {
        super(props);
        this.state = { isLoading: false };
          this.handleClick.bind(this);
      }

      render() {
        let isLoading = this.state.isLoading;
        return (
          <div>
            <Button bsStyle="custom-ex"
              disabled={isLoading}
              onClick={!isLoading ? this.handleClick : null}
            >
              {isLoading ? 'Loading...' : 'Loading state'}
            </Button>
            <Button bsStyle="default"
              disabled={isLoading}
              onClick={!isLoading ? this.handleClick : null}
            > {isLoading ? 'Loading...' : 'Loading state'}</Button>
          </div>
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