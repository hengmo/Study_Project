import React, {Component} from 'react';
import SignInForm from './SignInForm';
import { AppContext } from '../../contexts/appContext';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  page: {
    width: '70vw',
    minHeight: '60vh',
    margin: '10vh auto',
  },
  formSize : {
    maxWidth: '600px',
    margin: 'auto'
  },
});


class SignInPage extends Component {
    static contextType = AppContext;
    
    constructor(props){
      super(props);
      this.state ={
        loading: true
      };
    }
    componentDidMount() {
      this.context.actions.checkAuth()
      .then(this.setState({...this.state,loading: false}));
    }

    render (){
      const {classes} = this.props;
      const {loading} = this.state;

        return (
            <div className = {classes.page}>
              {loading ? null :( 
                <div className = {classes.formSize}>
                  <SignInForm/>
                </div>)
              }
            </div>
        );
    }
}

export default withStyles(styles)(SignInPage);
