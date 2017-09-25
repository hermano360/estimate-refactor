import React, {Component} from 'react'
import {Button, Row, Col, Grid, Glyphicon, Modal, Table, FormControl} from 'react-bootstrap'
var actions = require('../actions/actions')
var {connect} = require('react-redux')


class StartPage extends Component {
  constructor(e){
    super(e)
    this.state = {
      tax: '',
      laborCommission: '',
      salesman: '',
      extraWorkCommision: '',
      modal: true
    }
    this.submitConfigInfo = this.submitConfigInfo.bind(this)
    this.goToEstimates = this.goToEstimates.bind(this)
    this.defaultConfigInfo = this.defaultConfigInfo.bind(this)
  }

  submitConfigInfo(){
    const {dispatch} = this.props
    const {tax, laborCommission, salesman, extraWorkCommision} = this.state
    localStorage.setItem('ez-estimate-globalConfig', JSON.stringify({
      tax,
      laborCommission,
      salesman,
      extraWorkCommision
    }));
    if(tax.length > 0) dispatch(actions.changeGlobalConfig('tax',tax))
    if(laborCommission.length > 0) dispatch(actions.changeGlobalConfig('laborCommission', laborCommission))
    if(salesman.length > 0) dispatch(actions.changeGlobalConfig('salesman', salesman))
    if(extraWorkCommision.length > 0) dispatch(actions.changeGlobalConfig('extraWorkCommision', extraWorkCommision))
    this.setState({
      modal:false
    })
  }

  defaultConfigInfo(){
    const {dispatch} = this.props
    dispatch(actions.changeGlobalConfig('tax','9.25'))
    dispatch(actions.changeGlobalConfig('laborCommission', '30'))
    dispatch(actions.changeGlobalConfig('salesman', ''))
    dispatch(actions.changeGlobalConfig('extraWorkCommision', '40'))
  }

  componentWillMount(){
    const {dispatch} = this.props
    let globalConfigs= JSON.parse(localStorage.getItem('ez-estimate-globalConfig'))
    if ( globalConfigs == null){
      this.setState({
        modal: true
      })
    } else {
      dispatch(actions.changeGlobalConfig('tax', globalConfigs.tax))
      dispatch(actions.changeGlobalConfig('laborCommission', globalConfigs.laborCommission))
      dispatch(actions.changeGlobalConfig('salesman', globalConfigs.salesman))
      dispatch(actions.changeGlobalConfig('extraWorkCommision', globalConfigs.extraWorkCommision))
      this.setState({
        modal: false
      })
    }
  }

  goToEstimates(){
    const {dispatch, globalConfigs} = this.props
    dispatch(actions.updateCustomerInfo('date', new Date()))
    dispatch(actions.retrieveNewQuote(globalConfigs.salesman))
    dispatch(actions.retrieveAvailableDBQuoteNumbers())
    dispatch(actions.changePage('Estimate'))
  }

  render () {
    const {dispatch} = this.props
    let logoStyles = {
      width: '100%',
      height: 'auto',
      borderRadius: '5px',
      padding: '5px'
    }
    let buttonContainerStyles = {height: '200px', 'marginTop': '50px', textAlign: 'center'}
    let marginTopCustom = (margintop) => {
      return {
        marginTop: `${margintop}%`
      }
    }

    let borderBoxes = {
      height: '300px',
      maxWidth: '300px',
      minWidth: '220px',
      width: '70%',
      textAlign: 'center',
      verticalAlign: 'middle'
    }

    let menuTitle = {
      color: 'white',
      fontSize: '40px',
      margin: '40px'
    }

    let startButtons = {
      color: 'black',
      fontWeight: '800',
      fontSize: '15px',
      width: '30vw',
      backgroundColor:'#B4E41C',
      borderRadius: '15px',
      marginLeft:'5px',
      marginRight: '5px',
      marginTop:'15px',

    }

    let innerTextCellStyle = {color: 'black', textAlign:'center'}

    return (
      <div>
        <Grid fluid style={{textAlign: 'center'}}>
          <Row>
            <Col xs={12}>
                  <div style={{float:'right'}}>
                    <div style={{textAlign:'center', color:'black', marginTop:'15px'}}
                      onClick={()=>{this.setState({modal:true})}}>
                      <Glyphicon glyph='cog' style={{fontSize:'30px'}}/>
                      <div style={{fontSize:'15px'}}>Settings</div>
                    </div>
                  </div>
              <Row>
                <div style={borderBoxes} className='center-block'>
                  <div style={buttonContainerStyles}>
                    <Col xs={12} className='center-block' style={{marginBottom: '25%'}}>
                      <img src='/ezestimator_logo.png' style={logoStyles} />
                    </Col>
                    <Col xs={12} className='center-block' style={{marginTop:'10%'}}>
                      <Button onClick={() => { this.goToEstimates() }}  style={startButtons}>Estimate</Button>
                    </Col>
                    <Button onClick={() => { dispatch(actions.changePage('Products')) }}  style={startButtons}>Products</Button>
                    <Button onClick={() => { dispatch(actions.changePage('PhoneList')) }} style={startButtons}>Phone</Button>
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
        </Grid>

        <Modal show={this.state.modal} onHide={() => { this.setState({modal: false}) }}>
          <Modal.Header closeButton>
            <Modal.Title style={{textAlign: 'center', color:'black'}}>Settings</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{height: '40%', overflow: 'scroll', textAlign:'center'}}>
              <Row>
                <Col xs={12} style={{...innerTextCellStyle, textAlign:'center'}}>
                  <FormControl componentClass='select' style={{...innerTextCellStyle, textAlign:'center'}}
                    onChange={(e)=>{this.setState({salesman:e.target.value})}}>
                    <option value=''>-Select Estimator-</option>
                    <option value='Gary Banks'>Banks, Gary</option>
                    <option value='John Chavez'>Chavez, John</option>
                    <option value='Arnold Corona'>Corona, Arnold</option>
                    <option value='John Gutierrez'>Gutierrez, John</option>
                    <option value='Bob Leon'>Leon, Bob</option>
                    <option value='Ricardo Rivera'>Rivera, Ricardo</option>
                    <option value='Mike Rogers'>Rogers, Mike</option>
                    <option value='Cameron Sterling'>Sterling, Cameron</option>
                  </FormControl>
                </Col>
                <Col xs={12}>
                  <input className="form-control" type='text' placeholder={`Labor (30${this.state.laborCommission}%)`}
                    style={{textAlign:'center !important',...innerTextCellStyle}}
                    onChange={(e)=>{
                      this.setState({
                        laborCommission: e.target.value
                      })
                    }}
                    />
                </Col>
                <Col xs={12}>
                  <input className="form-control" type='text' placeholder={`Extra Work (40${this.state.extraWorkCommision}%)`}
                    style={innerTextCellStyle}
                    onChange={(e)=>{
                      this.setState({
                        extraWorkCommision: e.target.value
                      })
                    }}
                  />
                </Col>
                <Col xs={12}>
                  <input className="form-control" type='text' placeholder={`Tax (9.25${this.state.tax}%)`}
                    style={innerTextCellStyle}
                    onChange={(e)=>{
                      this.setState({
                        tax: e.target.value
                      })
                    }}
                  />
                </Col>
              </Row>
            </div>
          </Modal.Body>
          <Modal.Footer style={{textAlign:'center'}}>
            <Button onClick={this.submitConfigInfo} style={startButtons}>Submit</Button>
            <Button onClick={() => { this.setState({modal: false}) }} style={startButtons}>Close</Button>
            <Button onClick={this.defaultConfigInfo} style={startButtons}>Defaults</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      globalConfigs: state.globalConfigs
    }
  }
)(StartPage)
