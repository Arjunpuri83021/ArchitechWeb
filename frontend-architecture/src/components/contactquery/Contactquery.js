import React, {  useState } from 'react'



export default function Contactquery() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [subject,setSubject]=useState('')
    const [query,setQuery]=useState('')
    const [message,setMessage]=useState('')

    function handleContact(e){
        e.preventDefault()

        const formData ={name,email,subject,query}

        fetch('http://localhost:5000/contactquery',{
            method:"POST",
            headers: { "Content-type": "application/json" },
            body:JSON.stringify(formData)
        }).then((res)=>{return res.json()}).then((data)=>{
            console.log(data)
            setMessage(data.message)
            setName('')
            setEmail('')
            setSubject('')
            setQuery('')
            setMessage('')
            e.target.reset()
            


        })

       
        

    }







    return (
        <>




            <section id="contact" className="contact section-py mt-5 pt-5">
                <div className="contact-wrapper container d-flex justify-content-between ">
                    <div className="contact-map ">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d944652.6750906793!2d113.56723127166516!3d22.35175926471088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403e2eda332980f%3A0xf08ab3badbeac97c!2sHong%20Kong!5e0!3m2!1sen!2snp!4v1603711543089!5m2!1sen!2snp" frameBorder={0} style={{ width: "550px", height: "500px" }} allowFullScreen aria-hidden="false" tabIndex={0} />
                    </div>
                    <div className="contact-info">
                        {/* title */}
                        <div className="title">
                            <h1>CONTACT US</h1>
                        </div>
                        {/* end of title */}
                        <form onSubmit={handleContact} className="contact-form ">
                            <div className="form-group">
                                <input onChange={(e)=>{setName(e.target.value) }} type="text" className="form-control" placeholder="Full name" />
                                <input onChange={(e)=>{setEmail(e.target.value) }} type="email" className="form-control" placeholder="Email address" />
                            </div>
                            <input onChange={(e)=>{setSubject(e.target.value) }} type="text" className="form-control" placeholder="Subject" />
                            <textarea onChange={(e)=>{setQuery(e.target.value) }} rows={5} className="form-control" placeholder="Tell about your Query " defaultValue={""} />
                            <button type="submit" className="btn btn-danger ms-5 mt-3">Submit Query</button>
                            <p>{message}</p>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}
