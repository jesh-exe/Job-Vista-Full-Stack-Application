import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAddressDetails } from '../../../redux/slices/JobSeeker/RegisterJobSeekerSlice';
import { toast } from "react-toastify";


export default function Address() {

    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

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
        toast.success("Success, Education unlocked")
    }

    return (
        <div>
            <div className='container col-md-10'>
                <div className='text-center lead fs-2 py-5 p-md-4'>Address Details</div>
                <form onSubmit={saveAddress}>
                    <div className='row'>
                        <div className='col-sm-12 col-md-12'>
                            <div className='form-group'>
                                <label htmlFor='lane1'>Lane 1<span className='text-danger'> *</span></label>
                                <input
                                    type='text'
                                    id='lane1'
                                    name='lane1'
                                    className='form-control'
                                    pattern='^(?=.*[a-z])(?=.*[^\s])(?=.*[\S]){5,}$'
                                    value={address.lane1}
                                    required
                                    onChange={handleChange}
                                    title='Lane must have atleast 5 alphabets or numbers or ,'
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
                                    pattern='^(?=.*[a-z])(?=.*[^\s])(?=.*[\S])[^\s]{5,}$'
                                    title='Lane must have atleast 5 alphabets or numbers or ,'
                                    value={address.lane2}
                                    onChange={handleChange}
                                ></input>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='country'>Country<span className='text-danger'> *</span></label>
                                <input
                                    type='text'
                                    id='country'
                                    name='country'
                                    className=' form-control'
                                    pattern='[a-zA-Z]{3,40}'
                                    title='Country should be between 3 and 40 characters of Alphabets'
                                    value={address.country}
                                    onChange={handleChange}
                                    required
                                ></input>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12 col-md-4'>
                            <div className='form-group'>
                                <label htmlFor='city'>City<span className='text-danger'> *</span></label>
                                <input
                                    type='text'
                                    id='city'
                                    name='city'
                                    className=' form-control'
                                    pattern='[a-zA-Z]{3,40}'
                                    title='City should be between 3 and 40 characters of Alphabets'
                                    value={address.city}
                                    required
                                    onChange={handleChange}
                                ></input>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-4'>
                            <div className='form-group'>
                                <label htmlFor='state'>State<span className='text-danger'> *</span></label>
                                <input
                                    type='text'
                                    id='state'
                                    name='state'
                                    pattern='[a-zA-Z]{3,40}'
                                    title='State should be between 3 and 40 characters of Alphabets'
                                    className=' form-control'
                                    value={address.state}
                                    required
                                    onChange={handleChange}
                                ></input>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-4'>
                            <div className='form-group'>
                                <label htmlFor='pincode'>Pincode<span className='text-danger'> *</span></label>
                                <input
                                    type='text'
                                    id='pincode'
                                    name='pincode'
                                    pattern='[0-9]{6,6}'
                                    title="Pin code should contain only numbers and it should be 6 digits"
                                    className=' form-control'
                                    value={address.pincode}
                                    onChange={handleChange}
                                    required
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
