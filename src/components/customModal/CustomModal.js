import React from 'react'
import './custom.css'
import {Modal,Button,Form,Col }from 'react-bootstrap'

function CustomModal(props) {
//     const closebtn= document.querySelector('.closereq');
// const customForm= document.querySelector('.reqform');
// const showForm= document.querySelector('.reqCustom');
// function closeForm(){


// showForm.addEventListener('click',()=>
// {
//     customForm.style.display="block";
// })
// closebtn.addEventListener('click',()=>{
//     closebtn.parentElement.style.display="none";
// })

// }
    return (
      <>
       {/* <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      
      
        <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter your Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="text" placeholder="Enter your Company Email" />
    </Form.Group>
  </Form.Row>
        <Form.Row>
  <Form.Group as={Col} controlId="formGridDesignation">
    <Form.Label>Designation</Form.Label>
    <Form.Control placeholder="Your Designation" />
  </Form.Group>
  <Form.Group as={Col} controlId="formGridWebsite">
    <Form.Label>Website</Form.Label>
    <Form.Control placeholder="Company Website" />
  </Form.Group>
  </Form.Row>
  <Form.Group controlId="formGridPhone">
    <Form.Label>Phone Number </Form.Label>
    <Form.Control placeholder="Enter your phone number" />
  </Form.Group>
  <Form.Group controlId="formGridskype">
    <Form.Label>Skype Id </Form.Label>
    <Form.Control placeholder="Enter your skype id" />
  </Form.Group>



    <Form.Group  controlId="formGridMessage">
      <Form.Label>Message</Form.Label>
      <Form.Control as="textarea" placeholder="Your Message Here" />
    </Form.Group>
 

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Notify me" />
   
  </Form.Group>

  <Button variant="success" type="submit">
    Submit
  </Button>
</Form>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
     
     
      */}
      <div class="modal-content">
	<label for="modal" class="close">
		<i class="fa fa-times" aria-hidden="true"></i>
	</label>
	<header>
		<h2>So This is a Modal</h2>
	</header>
	<article class="content">
		<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.</p>
	</article>
	<footer>
		<a href="http://geekstudios.co" target="_parent" class="button success">Accept</a>
		<label for="modal" class="button danger">Decline</label>
	</footer>
</div>

      </>
    )
}

export default CustomModal
