import React from 'react'
import './form.styles.scss'
import FormInput from '../form-input/form-input'
import Button from '../button/button'


class Form extends React.Component{
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

        switch (name) {
            case 'data-population':
                this.setState({population: value})
                break;
            case 'data-time-to-elapse':
                this.setState({timeToElapse: value})
                break;
            case 'data-period-type':
                this.setState({periodType: value})
                break;
            case 'data-total-hospital-beds':
                this.setState({totalHospitalBeds: value})
                break;
            case 'data-reported-cases':
                this.setState({reportedCases: value})
                break;
            default:
                break;
        }
    }
    handleClick =()=>{
        alert(this.state)
        this.setState({
            population: '',
            timeToElapse:'',
            reportedCases: '',
            totalHospitalBeds: '',
            periodType: '',
        })
    }

    render (){
        const{ periodType, timeToElapse, reportedCases, population, totalHospitalBeds} = this.state
        return (
            <div className='form-container'>
                <form >
                    <h1 className='heading'>My Covid Estimator</h1>
                    <FormInput
                    handleChange={this.handleChange}
                    name={'data-population'}
                    value={population}
                    label='Poulation'
                    />
                    <FormInput handleChange={this.handleChange}
                    name={'data-time-to-elapse'}
                    value={timeToElapse}
                    label='Time To Elapse'
                    />
                    <FormInput handleChange={this.handleChange}  
                    name={'data-reported-cases'} 
                    value={reportedCases}
                    label='Reported Cases'
                    />
                    <FormInput handleChange={this.handleChange}
                    name={'data-total-hospital-beds'}
                    value={totalHospitalBeds}
                    label='Total Hospital Beds'
                    />
                    <FormInput handleChange={this.handleChange} 
                    name={'data-period-type'} 
                    value={periodType}
                    label='Period Type'
                    />
                    <div className='form-button'>
                        <Button
                        handleClick={this.handleClick}
                        label='Button go Submit'
                        type='button'
                        
                        />
                    </div>

                </form>
            </div>

        )
    }
}

export default Form