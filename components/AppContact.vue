<template>
<div id="app-contact">
  <form action="https://formspree.io/lupin+formspree@lp1.eu"
    method="POST" class="app-contact-form">
    <input class="contact-field" type="text" name="name" placeholder="Your name">
    <input class="contact-field" type="email" name="_replyto" placeholder="Reply to">
    <textarea class="contact-field" name="message" placeholder="Your message"></textarea>
    <button type="submit" value="Send">Send</button>
  </form> 
</div>
</template>

<script>
export default {
  name: "AppContact"
}
</script>

<style lang="scss">
#app-contact {
  padding: 5vh;
  text-align: center;
  margin-bottom: 4vh;
  form {
    padding: 4vh;
    input, textarea {
      font-family: 'Open Sans', sans-serif;
      width: 100%;
      margin-bottom: 2vh;
      border: none;      
      border-bottom: 1px solid #73a4b6;
      padding: 1.5vh;
    }
    input:focus, textarea:focus {
      border-bottom: 1px solid #34bdef;
    }
    textarea {
      height: 20vh;
    }
    button {
      margin: auto;
      font-size: 2.5vh;
    }
  }
}
</style>
