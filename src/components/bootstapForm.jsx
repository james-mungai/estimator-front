import React from 'react'
import './bootstrap-component.css'


class BootstrapForm extends React.Component{
    constructor(){
        super()
        this.state ={
            population: '',
            timeToElapse:'',
            reportedCases: '',
            totalHospitalBeds: '',
            periodType: '',
        }
    }
    
    handleChange =e=>{
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleClick =()=>{
        console.log(this.state);
        
        this.setState({
            population: '',
            timeToElapse:'',
            reportedCases: '',
            totalHospitalBeds: '',
            periodType: '',
        })
    }

    render (){
        const{ timeToElapse, reportedCases, population, totalHospitalBeds} = this.state
        const {handleChange, handleClick} = this
        return (
            <div>
                <h3 className='card-title'>Enter Data in the Form Below</h3>
                <form aria-label='covid 19 data form' className='card-body'>
                    
                    <div className="input-group mb-3">
                        <label >Population</label>
                        <input type="number" className="form-control" id="data-population" aria-describedby="data-population"
                        onChange={handleChange}
                        value={population}
                        name='population'
                        required
                        min='0'
                        

                        />
                    </div>
                    <label >Time To Elapse</label>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" id="data-population"
                        aria-describedby="data-population"
                        onChange={handleChange}
                        value={timeToElapse}
                        name='timeToElapse'
                        min='0'
                        required
                        />
                    </div>
                    
                    
                    <label >Total Hospital Beds</label>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" id="data-total-hospital-beds" aria-describedby="data-total-hospital-beds"
                        onChange={handleChange}
                        value={totalHospitalBeds}
                        name='totalHospitalBeds'
                        min='0'
                        required

                        />
                    </div>
                    <label >Reported Cases</label>
                    <div className="input-group mb-3">
                        <input type="number" 
                            className="form-control" id="data-reported-cases" aria-describedby="data-reported-cases"
                            onChange={handleChange}
                            value={reportedCases}
                            name='reportedCases'
                            min='0'
                            required
                        />
                    </div>
                    <label >Period Type</label>
                    <div className="radio">
                    <label><input type="radio" name="periodType" value='days' selected onChange={handleChange} />Days</label>
                    </div>
                    <div className="radio">
                    <label><input type="radio" name="periodType" value='weeks' onChange={handleChange}/>Weeks</label>
                    </div>
                    <div className="radio disabled">
                    <label><input type="radio" name="periodType" value='months' onChange={handleChange}/> Months</label>
                    </div>

                    <div className='click-button'>
                        <button type="button"
                        className="btn btn-dark btn-lg btn-block "
                        onClick={handleClick}
                        >Submit</button>
                    </div>
                </form>
            </div>

        )
    }
}

export default BootstrapForm