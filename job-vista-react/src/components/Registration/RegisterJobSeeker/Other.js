import React from 'react'
import { useState } from 'react'
import defaultImage from "../../../assets/defaultImage.jpg"

export default function Other(props) {

    const [imagePreview, setImagePreview] = useState(null);
    const [profilePictue, setProfilePicture] = useState(null);
    const [pdf, setPdf] = useState(null);
    const [status, setStatus] = useState("x Not Uploaded")

    // Function to handle image uploading
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
            setProfilePicture(file);
        }
        else {
            setImagePreview(null)
        }
    }

    // Function to handle PDF uploading
    const handlePDFChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setStatus("Uploaded!");
            setPdf(file);
        }
        else {
            setStatus("x Not Uploaded")
        }
    }

    const handleSave = (e) => {
        e.preventDefault();
        props.handleFiles({
            profilePicture: profilePictue,
            resume: pdf
        });
    }

    return (
        <div>
            <div className='container col-md-10'>
                <div className='text-center lead fs-2 py-5 p-md-5'>Other Details</div>
                <form onSubmit={handleSave}>
                    <div className='row'>
                        <div className='col-sm-12 col-md-4 text-center'>
                            <img src={imagePreview === null ? defaultImage : imagePreview} className='img-fluid rounded-4' height={200} width={200}></img>
                        </div>
                        <div className='col-sm-12 col-md-8 align-middle text-center mt-4'>
                            <label htmlFor='imageInput' className='lead mb-4 '>Upload Profile Photo</label>
                            <input type='file' className='form-control' name='imageInput' id='imageInput' onChange={handleImageChange} accept="image/*" required></input>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-sm-12 col-md-4 align-middle'>
                        </div>
                        <div className='col-sm-12 col-md-8 align-middle text-center mt-4'>
                            <label htmlFor='resumeInput' className='lead mb-4'>Upload Resume</label>
                            <div>
                                <input type='file' className='form-control' name='resumeInput' id='resumeInput' required onChange={handlePDFChange}></input>
                                <div className={status === "x Not Uploaded" ? "text-danger  mt-2" : "text-success mt-2"}>{status}</div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center my-5'>
                        <button className='btn btn-primary'>Save</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
