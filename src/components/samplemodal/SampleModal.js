import React from 'react'
import './sample.css'
function SampleModal(props) {
//     const input = document.getElementById('sample');
// const labelText = document.querySelector('.label-text');


// document.getElementById('sample').addEventListener('click', () => {
//   labelText.classList.add('label-text-up');
// });

// document.addEventListener('mousedown', () => {
//   if(!input.value) {
//     labelText.classList.remove('label-text-up');
//   }
// });
    return (
        <div className="sampleWrapper">
            <section className="sample-section">
                <h1 className="closeModal" id="closemodal" onClick={()=>{
                  document.querySelector('.sampleWrapper').style.display="none";
                }}>&times;</h1>
  <h1 className="title">Ask For A Free Sample</h1>

  <div className="input-wrapper">
      <input type="text" defaultValue={props.name} style={{display:'none'}} name="type"/>
  <input type="text" name="email" id="sample" placeholder="Enter your Email to Receive Your Free Sample"/>
  <button className="btn arrow-btn">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
    </svg>
  </button>
  </div>
</section>
        </div>
    )
}

export default SampleModal
