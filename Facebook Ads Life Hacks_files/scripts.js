        $(document).ready(function() {

          var temp="None";
          $("#industry").val(temp);
          $("#app").val(temp);

          $('span.before1 > select').click(function(){
              $('.custom-dropdown__select').css({"color":"#000"});
          });

          $('span.before1 > select').change(function(){
              if($("#industry").val() !== temp) {
                $("div.row > span").removeClass('before1');
              }
          });

          $('span.before2 > select').click(function(){
              $('.custom-dropdown__select').css({"color":"#000"});
          });

          $('span.before2 > select').change(function(){ 
              if($("#app").val() !== temp) {
                $("div.row > span").removeClass('before2');
              }
          });

            //validate email
            function validateEmail(email) {
              var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return re.test(email);
            }

            $("#email").focusin(function() {
                $("#email").css("color", "black");
            });

            $("#email").focusout(function() {
                var email = $("#email").val();
                if (!validateEmail(email)) {
                  $("#email").css("color", "red");
                }
            });

            $("form").bind("submit", function(e){
              e.preventDefault();
            });

            $(".button").click(function(e) {

                  email = $("#email").val();

                  var ref = $("form#reg").find("[required]");

                  var validate = 0;

                  $(ref).each(function(){
                      if ( $(this).val() == '' )
                      {
                          alert("Fields should not be blank.");
                          $(this).focus();
                          e.preventDefault();
                          return false;

                      } else if (!validateEmail(email)) {

                        $("#email").css("color", "red");
                        alert("Please enter a valid email address.");
                        e.preventDefault();
                        return false;

                      } else {
                        validate++;

                        if (validate == 6) {
                          $("form#reg").removeAttr("onsubmit");
                          $("form#reg").unbind('submit').submit();
                          window.open('Facebook_Life_Hacks_by_Appness.pdf');
                          e.preventDefault();
                          return false;
                        }
                      }
                  });

            });

        });

        window.fbAsyncInit = function() {
          FB.init({
            appId      : '1418663518438658',
            cookie     : true,  // enable cookies to allow the server to access 
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.8' // use graph api version 2.8
          });
        };

        function getAPI() {
          FB.api('/me?fields=id,first_name,last_name,email,permissions', function(response) {
            console.log(JSON.stringify(response));
            console.log('Successful login for: ' + response.first_name);
            document.getElementById('fname').value = response.first_name;
            document.getElementById('lname').value = response.last_name;
            document.getElementById('email').value = response.email;
          });
        }

        function statusChangeCallback(response) {
          // console.log('statusChangeCallback');
          // console.log(response);
          if (response.status === 'connected') {
            getAPI();
          }
        }

        fblogin.onclick = function(event) {
          FB.login(function(response) {
              statusChangeCallback(response);
          }, {scope: 'public_profile,email'});

          event.preventDefault ? event.preventDefault() : (event.returnValue=false);
        };