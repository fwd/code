if ("webkitSpeechRecognition" in window) {

  function human_learning(prhase) {
    if (!prhase) return
  }
  
  window.speechRecognition = new webkitSpeechRecognition();
  window.final_transcript = "";

  speechRecognition.continuous = true;
  speechRecognition.interimResults = true;
  speechRecognition.lang = 'en-US';

  speechRecognition.onstart = () => {
    document.querySelector("#status").style.display = "block";
  };

  speechRecognition.onerror = () => {
    document.querySelector("#status").style.display = "none";
    console.log("Speech Recognition Error");
  };

  speechRecognition.onend = () => {
    document.querySelector("#status").style.display = "none";
    console.log("Speech Recognition Ended");
  };

  speechRecognition.onresult = (event) => {
    let interim_transcript = "";
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }
    document.querySelector("#final").innerHTML = final_transcript;
    document.querySelector("#interim").innerHTML = interim_transcript;
    human_learning(interim_transcript)
  };

  document.querySelector("#start").onclick = () => {
    
  };

  // setTimeout(() => {
  //   speechRecognition.start();
  // }, 100)

  // document.querySelector("#stop").onclick = () => {
  //   speechRecognition.stop();
  // };

} else {
  alert("Speech Recognition Not Available");
}

new Vue({
    el: '#app',
    data: {
      index: 0,
      test: `const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
`
    },
    computed: {
      render() {
        console.log( this.test.split('\n') )
        return this.test 
      },
    },
    watch: {},
    mounted() {
       // speechRecognition.start();
       // speechRecognition.stop();
    },
    methods: {}
})