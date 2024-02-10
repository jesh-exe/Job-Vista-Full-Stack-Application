import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAddressDetails } from '../../../redux/slices/RegisterJobSeekerSlice';

export default function Address() {

    const dispatch = useDispatch();

    const [address, setAddress] = useState({
        lane1: "",
        lane2: "",
        city: "",
        state: "",
        country: "",
        pincode: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const saveAddress = (e) => {
        e.preventDefault();
        console.log(address);
        dispatch(setAddressDetails(address));
    }

    return (
        <div>
            <div className='container col-md-10'>
                <div className='text-center lead fs-2 py-5 p-md-4'>Address Details</div>
                <form onSubmit={saveAddress}>
                    <div className='row'>
                        <div className='col-sm-12 col-md-12'>
                            <div className='form-group'>
                                <label htmlFor='lane1'>Lane 1:</label>
                                <input
                                    type='text'
                                    id='lane1'
                                    name='lane1'
                                    className='form-control'
                                    pattern='[a-zA-Z0-9,]{5,40}'
                                    value={address.lane1}
                                    required
                                    onChange={handleChange}
                                ></input>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='lane2'>Lane 2:</label>
                                <input
                                    type='text'
                                    id='lane2'
                                    name='lane2'
                                    className=' form-control'
                                    pattern='[a-zA-Z0-9,]{5,40}'
                                    value={address.lane2}
                                    onChange={handleChange}
                                ></input>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='country'>Country:</label>
                                <input
                                    type='text'
                                    id='country'
                                    name='country'
                                    className=' form-control'
                                    pattern='[a-zA-Z]{3,40}'
                                    value={address.country}
                                    onChange={handleChange}
                                ></input>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12 col-md-4'>
                            <div className='form-group'>
                                <label htmlFor='city'>City:</label>
                                <input
                                    type='text'
                                    id='city'
                                    name='city'
                                    className=' form-control'
                                    pattern='[a-zA-Z]{3,40}'
                                    value={address.city}
                                    required
                                    onChange={handleChange}
                                ></input>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-4'>
                            <div className='form-group'>
                                <label htmlFor='state'>State:</label>
                                <input
                                    type='text'
                                    id='state'
                                    name='state'
                                    pattern='[a-zA-Z]{3,40}'
                                    className=' form-control'
                                    value={address.state}
                                    required
                                    onChange={handleChange}
                                ></input>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-4'>
                            <div className='form-group'>
                                <label htmlFor='pincode'>Pincode:</label>
                                <input
                                    type='text'
                                    id='pincode'
                                    name='pincode'
                                    pattern='[0-9]{6,6}'
                                    className=' form-control'
                                    value={address.pincode}
                                    onChange={handleChange}
                                ></input>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-success my-3 px-4' type='submit'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
