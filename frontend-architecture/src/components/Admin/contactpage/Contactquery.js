import React, { useEffect, useState } from 'react';






// add query on admin page

const Contactquery = () => {
  const [contactquery, setContactQuery] = useState([]);
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [email,setemail]=useState("")
  const [concern,setconcern]=useState("")
  const [reply,setreply]=useState("")

  const [queryid,setqueryid]=useState("")



  function Contactquerydata() {
    fetch('http://localhost:5000/contact/findcontactdata')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setContactQuery(data.data);
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error
      });
  }

  useEffect(() => {
    Contactquerydata();
  }, []);

  const handleGetDataById = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/contact/finddatabyidcontact/${id}`);
      const data = await response.json();
      setSelectedQuery(data);
      setemail(data.email)
      setconcern(data.query)
      setqueryid(id)
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handlereplytouser=(e)=>{
    e.preventDefault()

    console.log(queryid)
    const replydata={email,concern,reply}
    fetch(`http://localhost:5000/admin/reply/${queryid}`,{
      method:"POST",
      headers: { "Content-type": "application/json" },
      body:JSON.stringify(replydata)
  }).then((res)=>{return res.json()}).then((data)=>{
      console.log(data)
      


      


  })
    







  }

  return (
    <>
      <section style={{ backgroundColor: '#ad655f' }}>
        <div className="container my-5 py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="card text-body">
                <div className="card-body p-4">
                  <h4 className="mb-0">Recent comments </h4>
                  <p className="fw-light mb-4 pb-2">Latest Comments section by users</p>
                  {contactquery.length > 0 ? (
                    contactquery.map((contact, index) => (
                      <div key={contact._id} className="d-flex position-relative flex-start border p-2 mb-3" style={{ backgroundColor: contact.status === 'read' ? 'grey' : 'initial' }}>
                        <button
                          type="button"
                          onClick={() => handleGetDataById(contact._id)}
                          className="btn btn-success position-absolute top-0 end-0 m-2"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          Reply
                        </button>
                        <div>
                          <h6 className="fw-bold mb-1">{contact.name}</h6>
                          <div className="d-flex align-items-center mb-3">
                            <p className="mb-0">
                              {contact.email}
                              <span className="badge bg-primary">{contact.status}</span>
                            </p>
                          </div>
                          <div className="mb-0">
                            <p className="bg-danger p-2 mt-2 text-white rounded">{contact.query}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No comments found.</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">Query Details</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  {selectedQuery ? (
                    <>
                     <form onSubmit={handlereplytouser}> 
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>{setemail(e.target.value)}} />
        
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Concern</label>
        <input type="text" className="form-control" id="exampleInputPassword1" value={concern} onChange={(e)=>{setconcern(e.target.value)}} />
      </div>
      <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Reply to user</label>

        <textarea className="w-100 rounded form-control" placeholder="Describe your concern" onChange={(e)=>{setreply(e.target.value)}}></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
                    </>
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactquery;
