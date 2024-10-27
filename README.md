import React, { useEffect, useState } from "react";

import { STUDENT_BULK_UPLOAD, STUDENT_DELETE, STUDENT_EDIT, STUDENT_GET, STUDENT_POST } from "../config/api";

import axios from "axios";

import { IMG_URL } from "../config/api";

const Students = () => {

    const [my_data, setData] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [id, setId] = useState("");

    const [firstName, setFirstName] = useState("");

    const [lastName, setLastName] = useState("");

    const [mobile, setMobile] = useState("");

    const [email, setEmail] = useState("");

    const [document, setDocument] = useState();

    const [startSession, setStartSession] = useState("");

    const [endSession, setEndSession] = useState("");

    const [dob, setDob] = useState("");

    const [fatherName, setFatherName] = useState("");

    const [motherName, setMotherName] = useState("");

    const [isEdit, setEdit] = useState(false);

    let serial = 1;

    const closeModal = () => {

    }

    const handleModule = () => {

        setEdit(false);

        console.log(isEdit)

        setIsModalOpen(false);

    };

    const handleForm = (e) => {

        e.preventDefault();

    };

    const baseUrlPut = STUDENT_EDIT;

    const handleSubmit = async (e) => {

        e.preventDefault();

        setIsModalOpen(!isModalOpen);

        const baseUrlPost = STUDENT_POST;

        const payload = {

            'first_name': firstName,

            'last_name': lastName,

            'email': email,

            'mobile': mobile,

            'photo': document,

            'start_session': startSession,

            'end_session': endSession,

            'dob': dob,

            'father_name': fatherName,

            'mother_name': motherName,

        }

        console.log(payload);

        try {

            if (isEdit) {

                console.log(id);

                const response = await axios.post(baseUrlPut + id, payload, {

                    headers: {

                        'Authorization': 'Bearer ' + localStorage.getItem("token"),

                        "Content-Type": "multipart/form-data"// Authorization header

                    }

                });

            }

            else {

                const response = await axios.post(baseUrlPost, payload, {

                    headers: {

                        'Authorization': 'Bearer ' + localStorage.getItem("token"),

                        "Content-Type": "multipart/form-data"// Authorization header

                    }

                });

            }

        } catch (error) {

            console.log("An Error Occurred");

            console.error(error);

        }

        finally {

            getData();

            setIsModalOpen(!isModalOpen);

            setId("");

            setFirstName("");

            setLastName("");

            setMobile("");

            setEmail("");

            setDocument({});

            setStartSession("");

            setEndSession("");

            setDob("");

            setFatherName("");

            setMotherName("");

            // setEdit(!isEdit)

        }

    };

    const baseUrlGet = STUDENT_GET;

    const getData = async () => {

        try {

            const response = await axios.get(baseUrlGet, {

                headers: {

                    'Authorization': 'Bearer ' + localStorage.getItem("token"),

                    "Content-Type": "multipart/form-data"// Authorization header

                }

            })

            console.log(response?.data?.meta?.students)

            setData(() => response?.data?.meta?.students)

        } catch (error) {

            console.log("An Error Occured", error)

        }

    }

    useEffect(() => {

        getData();

    }, []);

    // const closeOutside = (e) => {

    //     e.stopPropagation();

    //     setIsModalOpen(!isModalOpen);

    //     setEdit(false);

    // }

    

    const handleEdit = (item) => {

        setEdit(!isEdit);

        console.log(item);

        setFirstName(item.first_name);

        setLastName(item.last_name);

        setMobile(item.mobile);

        setEmail(item.email);

        setDocument(item.document);

        setStartSession(item.start_session);

        setEndSession(item.end_session);

        setDob(item.dob);

        setFatherName(item.father_name);

        setMotherName(item.mother_name);

        setId(item.id)

        setIsModalOpen(!isModalOpen);

    }

    const baseUrlDelete = STUDENT_DELETE;

    const handleDelete = async (item) => {

        let confirmation = window.confirm("Are you sure you want to delete the record ? ");

        console.log(confirmation);

        setId(item.id);

        if (confirmation) {

            try {

                await axios.delete(baseUrlDelete + item.id, {

                    headers: {

                        'Authorization': 'Bearer ' + localStorage.getItem("token"),

                        "Content-Type": "multipart/form-data"// Authorization header

                    }

                })

            } catch (error) {

                console.log("An Error Occured", error)

            }

            finally {

                getData();

                setId("");

            }

        }

    }

    const baseUrlBulkUpload = STUDENT_BULK_UPLOAD;

    const handleBulkUpload = async () => {

        try {

            const response = await axios.post(baseUrlBulkUpload, payload, {

                headers: {

                    'Authorization': 'Bearer ' + localStorage.getItem("token"),

                    "Content-Type": "multipart/form-data"// Authorization header

                }

            });

            console.log(response)

        } catch (error) {

            console.log("An Error Occured" , error)

        }

        finally{

            getData();

        }

    }

  

    return (

        <>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[90%] mx-auto">

                <h1 className="text-center text-2xl mb-10 mt-10 font-bold">Student List</h1>

                <div className="flex justify-end items-center mr-10 gap-3">

                    <button type="button" className="text-center bg-blue-800 text-white rounded-md font-bold px-7 py-2 whitespace-nowrap" onClick={handleBulkUpload}>Bulk Upload</button>

                    <button

                        onClick={handleSubmit}

                        type="button" // Prevent form submission

                        className="text-center bg-blue-800 text-white rounded-md font-bold px-7 py-2 whitespace-nowrap"

                    >

                        Add New

                    </button>

                </div>

                <div>

                    {/* <form

                        onSubmit={handleForm}

                        className="flex items-center space-x-2 justify-center"

                    >

                        <div className="relative w-[85%]">

                            <input

                                type="text"

                                placeholder="Search"

                                className="border border-slate-900 rounded-md p-2 pl-10 w-full focus:outline-none focus:border-blue-500"

                            />

                            <button

                                type="submit"

                                className="absolute right-0 h-full bg-blue-800 text-white rounded-md px-2 py-1"

                            >

                                Search

                            </button>

                        </div>

                    </form> */}

                    {/* */}

                    <table className="mt-12 text-2xl text-center w-full text-gray-500 dark:text-gray-400 ">

                        <thead className="text-xl text-gray-700 bg-gray-50 w-full">

                            <tr>

                                <th scope="col" className="p-4">

                                    Sr.No

                                </th>

                                <th scope="col" className="px-6 py-3">

                                    Profile Image

                                </th>

                                <th scope="col" className="px-6 py-3">

                                    Name

                                </th>

                                <th scope="col" className="px-6 py-3">

                                    Mobile

                                </th>

                                <th scope="col" className="px-6 py-3">

                                    Email

                                </th>

                                <th scope="col" className="px-6 py-3">

                                    Start Session

                                </th>

                                <th scope="col" className="px-6 py-3">

                                    End Session

                                </th>

                                <th scope="col" className="px-6 py-3">

                                    D.O.B

                                </th>

                                <th scope="col" className="px-6 py-3">

                                    Father's Name

                                </th>

                                <th scope="col" className="px-6 py-3">

                                    Mother's Name

                                </th>

                                <th scope="col" className="px-6 py-3">

                                    Actions

                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                my_data.length > 0 && my_data?.map((item) => {

                                    return (

                                        <tr key={item.id} className="bg-white border-4 hover:bg-gray-50 text-sm font-semibold ">

                                            <td className="w-4 p-4">{serial++}</td>

                                            <td

                                                scope="row"

                                                className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white flex justify-center"

                                            >

                                                <img src={IMG_URL + item.photo} className="h-12 w-12 object-cover rounded-full" />

                                            </td>

                                            <td className="px-6 py-4 text-start">{item.first_name + " " + item.last_name}</td>

                                            <td className="px-6 py-4">{item.mobile}</td>

                                            <td className="px-6 py-4">{item.email}</td>

                                            <td className="px-6 py-4">{item.start_session}</td>

                                            <td className="px-6 py-4">{item.end_session}</td>

                                            <td className="px-6 py-4">{item.dob}</td>

                                            <td className="px-6 py-4">{item.father_name}</td>

                                            <td className="px-6 py-4">{item.mother_name}</td>

                                            <td className="px-6 py-4">

                                                <div className="flex gap-3 justify-center items-center">

                                                    <button className="bg-primary text-white px-4 py-1 rounded-lg font-[400]" onClick={() => handleEdit(item)}>Edit</button>

                                                    <button className="bg-red-600 text-white px-4 py-1 rounded-lg font-[400]" onClick={() => handleDelete(item)}>Delete</button>

                                                </div>

                                            </td>

                                        </tr>

                                    )

                                })

                            }

                        </tbody>

                    </table>

                </div>

                {isModalOpen && (

                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center w-full" onClick={handleModule}>

                        <div className="bg-white rounded-md p-4 w-full max-w-screen-lg overflow-y-auto h-[500px]" onClick={(e) => e.stopPropagation()}>

                            <h2 className="text-lg font-bold text-center">{isEdit ? "Edit Your Existing Students" : "Add new Student"}</h2>

                            {console.log(isEdit)}

                            <form onSubmit={handleSubmit}>

                                <div className="flex flex-wrap justify-between">

                                    {/*

               */}

                                    <div className="flex flex-col mb-4 w-full sm:w-[48%]">

                                        <label htmlFor="first name">First Name</label>

                                        <input

                                            id="first name"

                                            type="text"

                                            placeholder="First Name"

                                            className="border border-slate-900 rounded-md p-2 focus:outline-none focus:border-blue-500"

                                            value={firstName}

                                            onChange={(e) => setFirstName(e.target.value)}

                                            required

                                        />

                                    </div>

                                    <div className="flex flex-col mb-4 w-full sm:w-[48%]">

                                        <label htmlFor="last name">Last Name</label>

                                        <input

                                            id="last name"

                                            type="text"

                                            placeholder="Last Name"

                                            className="border border-slate-900 rounded-md p-2 focus:outline-none focus:border-blue-500"

                                            value={lastName}

                                            onChange={(e) => setLastName(e.target.value)}

                                            required

                                        />

                                    </div>

                                    <div className="flex flex-col mb-4 w-full sm:w-[48%]">

                                        <label htmlFor="Mobie Number">Mobile Number</label>

                                        <input

                                            id="Mobie Number"

                                            type="Number"

                                            placeholder="Mobie Number"

                                            className="border border-slate-900 rounded-md p-2 focus:outline-none focus:border-blue-500"

                                            value={mobile}

                                            onChange={(e) => setMobile(e.target.value)}

                                            maxLength="10"

                                            required

                                        />

                                    </div>

                                    <div className="flex flex-col mb-4 w-full sm:w-[48%]">

                                        <label htmlFor="email">Email</label>

                                        <input

                                            id="email"

                                            type="text"

                                            placeholder="Email"

                                            className="border border-slate-900 rounded-md p-2 focus:outline-none focus:border-blue-500"

                                            value={email}

                                            onChange={(e) => setEmail(e.target.value)}

                                            required

                                        />

                                    </div>

                                    <div className="flex flex-col mb-4 w-full sm:w-[48%]">

                                        <label htmlFor="startSession">Start Session</label>

                                        <input

                                            id="startSession"

                                            type="date"

                                            placeholder="Start Session"

                                            className="border border-slate-900 rounded-md p-2 focus:outline-none focus:border-blue-500"

                                            value={startSession}

                                            onChange={(e) => setStartSession(e.target.value)}

                                            required

                                        />

                                    </div>

                                    <div className="flex flex-col mb-4 w-full sm:w-[48%]">

                                        <label htmlFor="endSession">End Session</label>

                                        <input

                                            id="endSession"

                                            type="date"

                                            placeholder="End Session"

                                            className="border border-slate-900 rounded-md p-2 focus:outline-none focus:border-blue-500"

                                            value={endSession}

                                            onChange={(e) => setEndSession(e.target.value)}

                                            required

                                        />

                                    </div>

                                    <div className="flex flex-col mb-4 w-full sm:w-[48%]">

                                        <label htmlFor="dob">D.O.B</label>

                                        <input

                                            id="dob"

                                            type="date"

                                            placeholder="D.O.B"

                                            className="border border-slate-900 rounded-md p-2 focus:outline-none focus:border-blue-500"

                                            value={dob}

                                            onChange={(e) => setDob(e.target.value)}

                                            required

                                        />

                                    </div>

                                    <div className="flex flex-col mb-4 w-full sm:w-[48%]">

                                        <label htmlFor="last name">Father's Name</label>

                                        <input

                                            id="fatherName"

                                            type="text"

                                            placeholder="Father's Name"

                                            className="border border-slate-900 rounded-md p-2 focus:outline-none focus:border-blue-500"

                                            value={fatherName}

                                            onChange={(e) => setFatherName(e.target.value)}

                                            required

                                        />

                                    </div>

                                    <div className="flex flex-col mb-4 w-full sm:w-[48%]">

                                        <label htmlFor="last name">Mother's Name</label>

                                        <input

                                            id="motherName"

                                            type="text"

                                            placeholder="Mother's Name"

                                            className="border border-slate-900 rounded-md p-2 focus:outline-none focus:border-blue-500"

                                            value={motherName}

                                            onChange={(e) => setMotherName(e.target.value)}

                                            required

                                        />

                                    </div>

                                    <div className="flex flex-col mb-4 w-full sm:w-[48%]">

                                        <label htmlFor="uploadImage">Upload Image</label>

                                        <input

                                            id="uploadImage"

                                            type="file"

                                            placeholder="Upload Image"

                                            className="border border-slate-900 rounded-md p-2 focus:outline-none focus:border-blue-500"

                                            onChange={(e) => setDocument(e.target.files[0])}

                                            required

                                        />

                                    </div>

                                    <div className="flex justify-end gap-3 mt-4">

                                        <button

                                            type="submit"

                                            className="w-36 bg-blue-800 text-white rounded-md px-4 py-2 h-12"

                                        >

                                            {isEdit ? "Edit Data" : "Add Data"}

                                        </button>

                                        <button

                                            onClick={handleModule}

                                            className="bg-red-500 text-white rounded-md px-4 py-2 h-12"

                                        >

                                            Close

                                        </button>

                                    </div>

                                </div>

                            </form>

                        </div>

                    </div>

                )}

            </div>

            {/* </div> */}

        </>

    );

};

export default Students; when i initiate handleMODULE MODAL IS CLOSED WITHOUT SETISEDIT(FALSE)