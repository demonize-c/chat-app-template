$(document).ready(function() {
//     const $messageInput = $('#message-input');
//     const $sendButton = $('#send-button');
//     const $chatMessages = $('.chat-messages');
//     const $userSearch = $('#user-search');
//     const $userList = $('#user-list .nav-item');
//     const $sidebar = $('#sidebar');
//     const $mainContent = $('main');
//     const $sidebarToggle = $('#sidebar-toggle');
//     const $replyPreview = $('#reply-preview');
//     const $closeReply = $('#close-reply');

//     let replyTo = null;

//     function sendMessage() {
//         const messageText = $messageInput.val().trim();
//         if (messageText === '') return;

//         let repliedMessageHtml = '';
//         if (replyTo) {
//             const user = replyTo.user;
//             const text = replyTo.text;
//             repliedMessageHtml = `
//                 <div class="replied-message">
//                     <p><strong>${user}</strong></p>
//                     <p>${text}</p>
//                 </div>
//             `;
//         }

//         const messageElement = `
//             <div class="message sent">
//                 <div class="message-body">
//                     ${repliedMessageHtml}
//                     <p class="message-text">${messageText}</p>
//                     <span class="message-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
//                     <a href="#" class="reply-icon"><i class="fas fa-reply"></i></a>
//                 </div>
//             </div>
//         `;
//         $chatMessages.append(messageElement);
//         $messageInput.val('');
//         $chatMessages.scrollTop($chatMessages[0].scrollHeight);
//         hideReplyPreview();
//     }

//     function showReplyPreview(user, text) {
//         replyTo = { user, text };
//         $replyPreview.find('.reply-preview-user').text(user);
//         $replyPreview.find('.reply-preview-text').text(text);
//         $replyPreview.removeClass('d-none');
//         $messageInput.focus();
//     }

//     function hideReplyPreview() {
//         replyTo = null;
//         $replyPreview.addClass('d-none');
//     }

//     function filterUsers() {
//         const searchTerm = $userSearch.val().toLowerCase();
//         $userList.each(function() {
//             const userName = $(this).find('strong').text().toLowerCase();
//             if (userName.includes(searchTerm)) {
//                 $(this).show();
//             } else {
//                 $(this).hide();
//             }
//         });
//     }

//     function handleSidebar() {
//         const windowWidth = $(window).width();
//         if (windowWidth >= 992) {
//             $sidebar.removeClass('collapsed');
//             $mainContent.removeClass('expanded');
//         } else {
//             $sidebar.addClass('collapsed');
//             $mainContent.addClass('expanded');
//         }
//     }

//     // Initial setup
//    // handleSidebar();

//     // Event listeners
//     $sendButton.on('click', sendMessage);
//     $messageInput.on('keypress', e => e.key === 'Enter' && sendMessage());
//     $userSearch.on('input', filterUsers);
//     $(window).on('resize', handleSidebar);
//     $sidebarToggle.on('click', () => {
//         $sidebar.toggleClass('collapsed');
//         $mainContent.toggleClass('expanded');
//     });
//     $userList.on('click', function() {
//         if ($(window).width() < 992) {
//             $sidebar.addClass('collapsed');
//             $mainContent.addClass('expanded');
//         }
//     });
//     $chatMessages.on('click', '.reply-icon', function(e) {
//         e.preventDefault();
//         const $messageBody = $(this).closest('.message-body');
//         const user = $messageBody.closest('.message').hasClass('sent') ? 'You' : 'Alice';
//         let text = $messageBody.find('.message-text').text();
//         if ($messageBody.find('.media-group').length > 0) {
//             text = '<i class="fas fa-photo-video"></i> Media group';
//         }
//         showReplyPreview(user, text);
//     });
//     $closeReply.on('click', hideReplyPreview);

//     // Dummy functionality for attachments
//     $('#attach-file, #attach-image').on('click', () => {
//         alert('Attachment functionality is not implemented in this demo.');
//     });
   $(document).on('click','#sidebar_toggle', function() { 
            
            $('#sidebar_section').removeClass('hide').addClass('show');
   });

   $(document).on('click','.chat-item', function() { 

         $('#sidebar_section').removeClass('show').addClass('hide');
   })

});
