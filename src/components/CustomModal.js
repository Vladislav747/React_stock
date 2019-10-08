import React from 'react';
import PropTypes from 'prop-types';

export default class CustomModal extends React.Component {
    
    constructor () {
      super();
      this.state = {
        open: false,
        title: ''
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ open: true });
    }
    
    handleCloseModal () {
      this.setState({ open: false });
    }

    onCancel(){

    }
    
    render () {
      return (
        <div className="modalOverlay">
            <div classname="modalWindow">
                <div className="modaLHeader">
                    <div className="modalTitle">{this.props.title}</div>
                    <Icon name="times" onClick={this.onCancel} />
                </div>
                <div className="modaLBody">
                </div>
                <div className="modaLFooter">
                </div>
            </div>
        </div>
      );
    }
  
  }
    CustomModal.propTypes = {
        title: PropTypes.string,
        isOpen: PropTypes.bool,
        onCancel: PropTypes.func,
        onSubmit: PropTypes.func,
    };

    CustomModal.defaultProps = {
        title: 'Modal title',
        isOpen: false,
        onCancel: () => {},
        onSubmit: () => {},
    };
  

  