import React from 'react'
import './chat.css';
import $ from 'jquery';
function Chat() {
    $(document).ready(function() {
        var $chatbox = $('.chatbox'),
            $chatboxTitle = $('.chatbox__title'),
            $chatboxTitleClose = $('.chatbox__title__close'),
            $chatboxCredentials = $('.chatbox__credentials');
          
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

    var messages=[
        {
            date:"22/11/2018",
            name:"BMDMR",
            image:"https://www.gstatic.com/webp/gallery/2.jpg",
            text:"How can we help you today?",
            type:"chatbox__body__message--left"
        },
        {
            date:"22/11/2018",
            name:"Anonymous User",
            image:"https://images.pexels.com/photos/3031396/pexels-photo-3031396.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            text:"Hello, I have a doubt regarding some services",
            type:"chatbox__body__message--right"
        }
    ]
    return (
        <div>
       <div className="row">
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
    <input id="btn-input" type="text" name="name" className="form-control input-sm chat_set_height" placeholder="E.g John Smith" />
        <label htmlFor="email">Your Email</label>
    <input id="btn-input" type="email" name="email" className="form-control input-sm chat_set_height" placeholder="example@example.net" />
        <label htmlFor="message">Your Message</label>
    <textarea id="btn-input" type="text" name="message" className="form-control input-sm chat_set_height" placeholder="Hi, I want to consult you for........" />
       
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
