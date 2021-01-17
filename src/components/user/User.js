import React from 'react'
import './user.css';

function User() {
    return (
        <div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            {/* <img src={userimage} alt=""/> */}
                            <img src="http://bookmyaccountant.com/images/sunil2.png" alt=""/>
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                        {/* user name */}
                                        Sunil Kumar Dhanania
                                    </h5>
                                    <h6>
                                        {/* {designation} {Company Name} */}
                                       President- Book My Accountant
                                    </h6>
                                    {/* <p class="proile-rating">Member Since: <span>{date-of-join}</span></p> */}
                                    <p class="proile-rating"><span>Member Since: 8/10</span></p>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                            <p>WORK LINK</p>
                            <a href="">Website Link</a><br/>
                            <a href="">Facebook Profile</a><br/>
                            <a href="">Skype Link</a>
                            <p>ANY OTHER THING</p>
                            <a href="">Lorem ipsum</a><br/>
                            <a href="">Lorem ipsum</a><br/>
                            <a href="">Lorem ipsum</a><br/>
                            <a href="">Lorem ipsum</a><br/>
                            <a href="">Lorem ipsum</a><br/>
                        </div>
                    </div>
                    <div class="col-md-8" >
                        <div class="tab-content profile-tab" id="myTabContent" >
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" >
                                        <div class="row details">
                                            <div class="col-md-6">
                                                <label>User Id</label>
                                            </div>
                                            <div class="col-md-6">
                                                {/* <p>{userId}</p> */}
                                                <p>SunilDhanaia67</p>
                                            </div>
                                        </div>
                                        <div class="row details">
                                            <div class="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                {/* <p>{user name}</p> */}
                                                <p>Sunil Kumar Dhanania</p>
                                            </div>
                                        </div>
                                        <div class="row details">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                {/* <p>{useremail}</p> */}
                                                <p>info@bookmyaccountant.com</p>
                                            </div>
                                        </div>
                                        <div class="row details">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                {/* <p>{user phone}</p> */}
                                                <p>123 456 7890</p>
                                            </div>
                                        </div>
                                        <div class="row details">
                                            <div class="col-md-6">
                                                <label>Designation</label>
                                            </div>
                                            <div class="col-md-6">
                                                {/* <p>{user designation}</p> */}
                                                <p>President</p>
                                            </div>
                                        </div>
                            </div>
                            {/* <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div class="row details">
                                            <div class="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div class="row details">
                                            <div class="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div class="row details">
                                            <div class="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div class="row details">
                                            <div class="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div class="row details">
                                            <div class="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                        </div>
                                <div class="row details">
                                    <div class="col-md-12">
                                        <label>Your Bio</label><br/>
                                        <p>Your detail description</p>
                                    </div>
                                </div>
                            </div>
                         */}
                        </div>
                    </div>
                </div>
            </form>           
        </div>
    )
}

export default User
