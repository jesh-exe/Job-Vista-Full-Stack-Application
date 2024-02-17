import React, { useEffect } from 'react'
import { useState } from 'react'
import defaultImage from "../../../assets/defaultImage.jpg"
import { toast } from 'react-toastify';

export default function Other(props) {


    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    const [imagePreview, setImagePreview] = useState(null);
    const [profilePictue, setProfilePicture] = useState(null);
    const [pdf, setPdf] = useState(null);
    const [status, setStatus] = useState("x Not Uploaded")

    // Function to handle image uploading
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const imageSize = file.size / 1024;
        console.log(imageSize)
        if (imageSize < 1024) {
            if (file) {
                setImagePreview(URL.createObjectURL(file));
                setProfilePicture(file);
            }
            else {
                setImagePreview(null)
            }
        }
        else {
            toast.error("Image Size must be below 1MB")
            setImagePreview(null)
            setProfilePicture(null);
        }
    }

    // Function to handle PDF uploading
    const handlePDFChange = (e) => {
        const file = e.target.files[0];
        console.log(file)
        const pdfSize = file.size / 1024;
        const fileType = new String(file.type);
        if (fileType == "application/pdf") {
            if (pdfSize < "1024") {
                console.log("INSIDE")
                if (file) {
                    setStatus("Uploaded!");
                    setPdf(file);
                }
                else {
                    setStatus("x Not Uploaded")
                }
            }
            else {
                toast.error("Resume Size must be Below 1MB")
                setStatus("x Not Uploaded")
            }
        }
        else {
            toast.error("Select PDF File")
            setStatus("x Not Uploaded")
        }
    }

    const handleSave = (e) => {
        e.preventDefault();
        if (profilePictue == null || profilePictue == undefined) {
            toast.error("Upload Valid Image First");
        }
        else if (pdf == null || pdf == undefined) {
            toast.error("Upload Valid Resume First");
        }
        else {
            props.handleFiles({
                profilePicture: profilePictue,
                resume: pdf
            });
            toast.success("File Saved");
        }

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
                            <label htmlFor='resumeInput' className='lead mb-4'>Upload Resume (pdf)</label>
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
