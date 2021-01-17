import React from 'react'
import './chat.css';
import $ from 'jquery';
function Chat() {
    $(document).ready(function() {
        var $chatbox = $('.chatbox'),
            $chatboxTitle = $('.chatbox__title'),
            $chatboxTitleClose = $('.chatbox__title__close'),
            $chatboxCredentials = $('.chatbox__credentials');
         $chatbox.removeClass('chatbox--tray') ;
        $chatboxTitle.on('click', function() {
            $chatbox.toggleClass('chatbox--tray');
        });
        $chatboxTitleClose.on('click', function(e) {
            e.stopPropagation();
            $chatbox.addClass('chatbox--closed');
        });
        $chatbox.on('transitionend', function() {
            if ($chatbox.hasClass('chatbox--closed')) $chatbox.remove();
        });
        $chatboxCredentials.on('submit', function(e) {
            e.preventDefault();
            $chatbox.removeClass('chatbox--empty');
        });
    });

   
    return (
        <div>
       <div className="row chatdiv">
	    <div className="chatbox chatbox22 chatbox--tray">
    <div className="chatbox__title">
        <h5><a href="javascript:void()" id="chatTitle">Chat Support </a></h5>
        <button className="chatbox__title__tray">
            <span></span>
        </button>
        <button className="chatbox__title__close">
            <span>
                <svg viewBox="0 0 12 12" width="12px" height="12px">
                    <line stroke="#FFFFFF" x1="11.75" y1="0.25" x2="0.25" y2="11.75"></line>
                    <line stroke="#FFFFFF" x1="11.75" y1="11.75" x2="0.25" y2="0.25"></line>
                </svg>
            </span>
        </button>
    </div>
    <div className="chatbox__body">
        <label htmlFor="name">Your Name</label>
    <input id="btn-inputname" type="text" name="name" className="form-control input-sm chat_set_height" placeholder="E.g John Smith" />
        <label htmlFor="email">Your Email</label>
    <input id="btn-inputemail" type="email" name="email" className="form-control input-sm chat_set_height" placeholder="E.g example@example.net" />
    <label htmlFor="name">Company Name</label>
    <input id="btn-inputcompany" type="text" name="company" className="form-control input-sm chat_set_height" placeholder=" E.g DMBMR" />
    <label htmlFor="name">Designation</label>
    <input id="btn-inputdesignation" type="text" name="designation" className="form-control input-sm chat_set_height" placeholder="E.g  Co-Founder" />
        <label htmlFor="message">Your Message</label>
    <textarea id="btn-input" type="text" name="message" className="form-control input-sm chat_set_height" placeholder="E.g  Hi, I want to consult you for........" />
       
    </div>
    <div className="panel-footer">
                                       
						
                        <span className="input-group-btn">
                            <button className="btn btn-success bt_bg btn-sm" id="btn-chat">
                                Send</button>
                        </span>
                    </div>
               
</div>
	    
	</div>
        </div>
    )
}

export default Chat
