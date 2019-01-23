# Sign Up Form

>*a sign up form with animation depending on the outcome. Successful sign in or failure*

![Sing up Form](https://github.com/AimenBenAissa/Signupform/blob/master/sign%20up%20form/Design/Sign%20Up%20Form.gif "Sign Up")
There’s a lot of sign up forms out there on the internet with different designs and animation when it comes to user feedback. 
With the help of jQuery for the animation I’ve managed to create a minimalist sign up form with two animations to feed back the user. 

#### Tools and Assets Used
---

- Fonts: Poppins & Roboto
- Colour Pallete: #37A2FF!, 
#1C1C1C, 
#13CE66, 
#FF4949, 
- Icons: [iconfinder](https://www.iconfinder.com/)

---

#### The HTML Structure
the HTML for the sign-up form is simple. All the elements for the form are contained in a main wrapper **.main-container**. The form is contained inside **.sign-in-container** where Labels and inputs and the button live. The successful & failure elements live in their own container inside **.main-container**. 

	
```html
  <div class="main-container">
    <div class="sign-in-container">
      <h1> SIGN IN </h1>
      <div class="inputs">
        <div class="input username-input">
          <label>Username*</label><br>
          <input id="text-input" type="text" name="username">
        </div>
        <div class="input password-input">
          <label>Password* </label><br>
          <input id="text-input" type="password" name="password"><br>
          <input type="checkbox" 
          name="remember-me" 
          value="remember-me"> 
          <label id="checkbox">Remembe Me</label> <br>
        </div>
        <p style="font-size: 12px">* fields are required.<p>
        <div class="submit-container">
          <div class="submit-btn">SIGN IN</div>
          <h6> FORGOTTEN PASSWORD? </H6>
        </div>
      </div>
    </div>
```


#### Styling
The successful & failure container share the same class **.message-container** where the position is set to absolute and *100%* to the *top* attribute to push it down from the container. In order to hide it *overflow: hidden* was set to **.main-container** so any elements that overflow are hidden. 

``` css
.message-container{
    position: absolute;
    top: 100%;
    padding: 0 50px 0 50px;
}
.main-container{
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
```

#### Event Handling
In order to show both screens - a simple *if* statement is used to determine what animation to run. Of course this is not ideal - normally upon submission the input values need to be checked against a databse to validate the date. 

``` javascript
    //get vals from inputs
    var username = $("input[name=username]").val();
    var password = $("input[name=password]").val();
```

#### Upon Success
If the *username* and *password* values aren’t an empty string then the successful screen will animate up by using the *animate* provided by jQuery. The *top* is set from *100%* to *5%* in *400ms*. When that function finished executing – the content of successful screen is then faded in to create a sequence of animations. 

``` javascript
    //animate success screen if both fields aren't empty
    if (username != "" && password != "") {
      $(".success-container").animate({
        top: "5%"
      }, 400, function() {
        $('.success-container .content-container').fadeIn(100);
      });
    }
```

#### Upon Failure
The Same code is used for the failure screen. 

```javascript
    //animate failed screen
    else {
      $(".failed-container").animate({
        top: "5%"
      }, 400, function() {
        $('.failed-container .content-container').fadeIn(100);
      });
    }
```

