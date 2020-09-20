$(window).scroll(function () {
    $('#Newsfeed').append('<div class="post"><div class="container"><div class="single_post col-sm-10 col-sm-offset-1"><div class="post_area"><div class="user_panel"><img src="src/images/user2.jpg" alt="user"></div><div class="user_post_area"> <h4>James Karaline</h4><span>9:40 am</span><br><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quas quia saepe neque minus, atque quasi, tempore! Facilis id praesentium labore, esse soluta, ad ipsa veniam dolorum. Eum incidunt ut architecto. Dolorem odio ratione reiciendis numquam architecto repellendus earum animi est non illo! Veniam minima cupiditate mollitia cumque rem. Laborum!</p><span><a href="#"><i class="fa fa-thumbs-o-up thumb" aria-hidden="true"> 265</i></a><a href="#"><i class="fa fa-comment-o main_cmt" aria-hidden="true">1</i></a></span></div> </div><div class="border_hr"></div><div class="sinle_cmnt"><div class="coment_box"><div class="coments"><div class="user_panel"> <img src="src/images/user1.png" alt="user"></div><div class="right_panel"><h4>Hasibul Hasan Shanto</h4><span>9:45 am</span><p>This is really a nice article. Just wow!!</p><span><a href="#"><i class="fa fa-thumbs-o-up thumb" aria-hidden="true"></i></a><a href="#"><i class="fa fa-comment-o" aria-hidden="true"></i></a></span></div></div></div></div><div class="coments_here"><form action="#"><input type="text" id="inputText" class="input_ct"  placeholder="Your Coments here"> <input type="submit" class="btn_cmts" value="Submit"></form></div></div></div></div>');
});

$(document).ready(function () {


    $('.btn_cmts').click(function () {
        // create an array
        var myArr = [];

        function pushData() {
            // get value from the input text
            //var inputText = document.getElementById('inputText').value;
            //var inputText = $('#inputText').val();

            // append data to the array
            myArr.push(inputText);

            var pval = "";

            for (i = 0; i < myArr.length; i++) {
                pval = pval + myArr[i] + " ";
            }

            // display array data
            //document.getElementById('pText').innerHtml = pval;
            return pval;
        }
        var inputText = $('#inputText').val();
        $('.sinle_cmnt').append('<div class="coment_box"><div class="coments"><div class="user_panel"><img src="user3.jpg" alt="user"></div><div class="right_panel"><h4>Jhon Doe</h4><span>9:50 am</span><p id="pText"></p><span><a href="#"><i class="fa fa-thumbs-o-up thumb" aria-hidden="true"></i></a>  <a href="#"><i class="fa fa-comment-o" aria-hidden="true"></i></a></span></div></div></div>');
        $('#pText').append(pushData());
        $('.main_cmt').text(1 + myArr.length);
    });
});