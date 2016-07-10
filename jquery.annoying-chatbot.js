$(document).ready(function() {

    // Annoying Chatbot
    //==================================================================================================================

    var name = "";

    ////////////////


    $('#chatbot').keypress(function(e) {
        if(e.which == 13) {
            e.preventDefault();

            message = $('#chatbot-input').val();
            message = message.toLowerCase();
            sendMessage();
            bot(message);
            clearInterval(botAuto);
        }
    });


    // Prompt if user doesn't quickly enter name
    function botAutoMessage() {
        var messageArray = [
            'Please enter your name to get started.'
        ];
        sendMessage(messageArray);
    }
    var botAuto = setInterval(botAutoMessage, 8000);


    // Once you enter the name
    function bot(message) {
        if (message.indexOf('nick') >= 0) {

            name = message;

            var messageArray = [
                'Nice to have you, ' + name + '. How can I help?'
            ];

            sendMessage(messageArray);
        }


        // Tapingo Subway sandwich integration
        else if (message.indexOf('subway') >= 0) {

            var message1 = 'Here is what your order looks like:';
            var message2 = 'Veggie Delite, 12" | $5.50 | Card: 5573';
            var message3 = 'Is that correct?';
            var message4 = '<a href="#" class="accept">Yes</a> <a href="#" class="decline">No</a>';

            var messageArray = [
                '' + message1 + '<br/><br/>' + message2 + '<br/><br/>' + message3 + '<br/>' + message4
            ];

            sendMessage(messageArray);
        }


            // Subway (yes)
            else if (message.indexOf('yes') >= 0) {

                var message1 = 'Got it! Your order will be ready in about 5 minutes.';

                var messageArray = [
                    message1
                ];

                sendMessage(messageArray);
            }


        // Health Center integration
        else if (message.indexOf('health') >= 0) {

            var message1 = 'The next available appointment is on May 3rd at 10am with Dr. Yoh.';
            var message2 = 'Are you available at that time?';
            var message3 = '<a href="#" class="accept">Yes</a> <a href="#" class="decline">No</a>';

            var messageArray = [
                '' + message1 + '<br/><br/>' + message2 + '<br/>' + message3
            ];

            sendMessage(messageArray);
        }

            // Health Center integration
            else if (message.indexOf('no') >= 0) {

                var message1 = 'The next available appointments are:';
                var message2 = 'May 4th at 9am, May 4th at 11:30am, May 7th at 2pm';
                var message3 = 'Please choose a date and time or search for more openings.';
                var message4 = '<a href="#" class="accept">May 4th at 9am</a><br/> <a href="#" class="accept">May 4th at 11:30am</a><br/> <a href="#" class="accept">May 7th at 2pm</a><br/> <a href="#" class="decline">View More</a>';

                var messageArray = [
                    '' + message1 + '<br/><br/>' + message2 + '<br/><br/>' + message3 + '<br/><br/>' + message4
                ];

                sendMessage(messageArray);
            }

                // Health Center (scheduled!)
                else if (message.indexOf('may 4th') >= 0) {

                    var message1 = 'Your appointment has been scheduled for 9am on May 4th. Please arrive 15 minutes early.';

                    var messageArray = [
                        message1
                    ];

                    sendMessage(messageArray);
                }


        // Map Integration
        else if (message.indexOf('map') >= 0) {

            var message1 = 'The MLK Library is about a 5 minute walk.';
            var message2 = '<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3733.4710673250484!2d-121.88694591855713!3d37.33601047511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x808fccb864de43d5%3A0x397ffe721937340e!2sSan+Jos%C3%A9+State+University%2C+1+Washington+Sq%2C+San+Jose%2C+CA+95192%2C+United+States!3m2!1d37.335187399999995!2d-121.88107149999999!4m5!1s0x808fccbc0b22b081%3A0xe370813fc863d57f!2sDr.+Martin+Luther+King%2C+Jr.+Library%2C+150+E+San+Fernando+St%2C+San+Jose%2C+CA+95112!3m2!1d37.3354377!2d-121.8849723!5e0!3m2!1sen!2sus!4v1461613901942" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>';

            var messageArray = [
                '' + message1 + '<br/><br/>' + message2 + '<br/>'
            ];

            sendMessage(messageArray);
        }


        else if (message == '') {

            var messageArray = [
                'Conversations are more fun when you say something...',
            ];

            sendMessage(messageArray);
        }

        else {

            var messageArray = [
                'Oops... I don\'t know what that means yet.',
            ];

            sendMessage(messageArray);

        }
    }

    // scroll to the bottom of chat box
    function scrollToMessage() {
        var msgBox = $('#chatbot-message');
        var height = msgBox[0].scrollHeight;
        msgBox.scrollTop(height);
    }

    // sending message
    function sendMessage(message) {
        if (message) {

            $('#chatbot-input').addClass('disabled');
            $('#chatbot-input').attr('disabled', 'disabled');
            $('#chatbot-submit').addClass('disabled');
            $('#chatbot-submit').attr('disabled', 'disabled');

            var respond = message[Math.floor(Math.random() * message.length)];

            setTimeout(function() {
                botPre     = '<span class="message">Bot is typing... <i class="glyphicon glyphicon-pencil"></i></span>';
                botVal     = respond;
                botMessage = $('#chatbot-message').html() + '<p class="from-bot"><span class="user"></span>' + botPre + '</p>';
                $('#chatbot-input').attr('placeholder', 'Bot is typing...');
                $('#chatbot-message').html(botMessage);
                scrollToMessage();
            }, 800);

            setTimeout(function() {
                botMessageReplace = $('#chatbot-message .from-bot:last-child()');
                botMessage = '<span class="user"></span>' + botVal;
                $('#chatbot-input').attr('placeholder', 'Message');
                botMessageReplace.html(botMessage);
                scrollToMessage();
                $('#chatbot-input').removeClass('disabled');
                $('#chatbot-input').removeAttr('disabled');
                $('#chatbot-submit').removeClass('disabled');
                $('#chatbot-submit').removeAttr('disabled');
            }, 1800);

        } else {

            userVal     = $('#chatbot-input').val();
            userMessage = $('#chatbot-message').html() + '<p class="from-user"><span class="user"></span>' + userVal + '</p>';
            $('#chatbot-message').html(userMessage);
            scrollToMessage();
            $('#chatbot-input').val('');

        }
    }
});
