document.addEventListener( 'DOMContentLoaded', function() {
  let answersArray = [];
  document.querySelector('#p_modal_button3').addEventListener('click', (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    console.log('Лог ответов на вопросы: ');
    answersArray.forEach(card => {
      console.log(card.question, '     Ответ: ', card.answer);      
    });
    $('#p_modal3').fadeOut('slow');
    $('.modal-backdrop').fadeOut('slow', () => {
      $('#content3').fadeOut('slow');
      $('body').removeClass('modal-open');
    });
  })
  document.querySelector('.js-questions').addEventListener('click', (event) => {
    let btn = event.target.closest('.survey_button');
    if (btn) {
      let card = {};
      card.question = btn.parentNode.querySelector('.js-question-item').innerText;
      card.answer = btn.querySelector('.js-answer-item').innerText;
      answersArray.push(card);
    }
  });
  document.querySelector('#commentForm').addEventListener('submit', (event) => {
    event.preventDefault();
    let textarea = event.target.querySelector('textarea');
    let textComment = textarea.value;
    if (textComment.length !== 0) {
      textComment = textComment.split('\n').join('<br>');
      let comments = document.querySelector('.js-list-comments');
      let comment = document.createElement('div');
      comment.classList = 'comments';
      comment.style = 'display: block';
      comment.innerHTML = `
                <div class="profile">
                  <div class="profile__anon">
                    A
                  </div>
                </div>
                <div class="comment-content">
                  <p class="name">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">Anonimus</font>
                    </font>
                  </p>
                  <p>
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">${textComment}</font>
                    </font>
                  </p>
                </div>
                <div class="clr"></div>
                <div class="comment-status">
                  <span>
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">Curte·comente</font>
                    </font>
                    <img src="assets/images/like.png" width="15px" height="15px">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">0</font>
                    </font>
                  </span>
                  <small>
                    <u>
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">0 hora antes</font>
                      </font>
                    </u>
                  </small>
                </div>    
      `;
      comments.append(comment);
      let overlay = document.createElement('div');
      overlay.style = 'position: fixed; left: 0; right: 0; top: 0; bottom: 0; z-index: 10000; background: url("assets/images/loading.gif") no-repeat center; background-size: 50px 50px; background-color: rgba(0, 0, 0, 0.7);';
      overlay.classList = 'js-overlay';
      document.querySelector('body').append(overlay);
      textarea.value = '';
      setTimeout(() => {
        document.querySelector('.js-overlay').remove();
        comment.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }, 1500);
    }
  });
});