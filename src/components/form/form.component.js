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
            periodType: 'days',
            }
    }
    
    handleChange =e=>{
        const {name, value} = e.target
        this.setState({
            [name]:value
        })
    }
    handleClick =()=>{
        console.log(this.state)
        this.setState({
            population: '',
            timeToElapse:'',
            reportedCases: '',
            totalHospitalBeds: '',
            periodType: 'days',
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
                    name={'population'}
                    id='population'
                    value={population}
                    label='Poulation'
                    aria-label={'data-population'}
                    required
                    type='number'
                    min='0'
                    />
                    <FormInput handleChange={this.handleChange}
                    name={'timeToElapse'}
                    id='timeToElapse'
                    value={timeToElapse}
                    label='Time To Elapse'
                    aria-label={' data-time-to-elapse'}
                    required
                    type='number'
                    min='0'
                    />
                    <FormInput handleChange={this.handleChange}  
                    name={'reportedCases'} 
                    id={'reportedCases'} 
                    value={reportedCases}
                    label='Reported Cases'
                    aria-label={'data-reported-cases'}
                    required
                    type='number'
                    min='0'
                    />
                    <FormInput handleChange={this.handleChange}
                    name={'totalHospitalBeds'}
                    id='totalHospitalBeds'
                    value={totalHospitalBeds}
                    label='Total Hospital Beds'
                    aria-label={'data-total-hospital-beds'}
                    required
                    type='number'
                    min='0'
                    />
                    <div>
                        <label htmlFor='periodType' className='select-label'>Period Type</label>
                        <select onChange={this.handleChange} value ={periodType} name='periodType' className='form-select' aria-label='select data period type'>
                            <option  value='days' aria-label='days'>Days</option>
                            <option value="weeks" aria-label='weeks'>Weeks</option>
                            <option value="months" aria-label='months'>Months</option>
                        </select>
                    </div>
                    
                    
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