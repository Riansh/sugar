function speak(speak = '') {
    var synth = window.speechSynthesis
    var utter = new window.SpeechSynthesisUtterance(speak)
    synth.speak(utter)
}

function listenbutnotalways() {
    var siri = new webkitSpeechRecognition();
    var listenedline = ""
    siri.onresult = evt => {
        listenedline = evt.results[0][0].transcript.toLowerCase();
        console.log(listenedline)
        document.getElementById('abcd').innerHTML = listenedline
        if (listenedline.includes('hey sugar')) {
            speak('yes sir')
        }
        if (listenedline.includes('tell ', 'joke')) {
            speak('one horse drank soda and padhe thoda thoda')
        }
        if (listenedline.includes('open google')) {
            speak('ok sir')
            window.open('https://www.google.com/')
        }
        if (listenedline.includes('hai') || listenedline.includes('hii')) {
            speak('hey there')
        }
        if (listenedline == "what is your name" || listenedline == "what is your name sugar") {
            speak('I am your persnol assistant' + '' + '' + 'Sugar')
        }
        if (listenedline.includes('open youtube')) {
            speak('ok sir')
            window.open('https://www.youtube.com')
        }
        if (listenedline.includes('laugh')) {
            var audi = document.querySelector('audio')
            audi.volume = 1
            audi.play()
        }
        if (listenedline.includes('what is my name')) {
            speak('to see what i know about yoyou have to sign in')
        }
        if (listenedline.includes('what is your master name')) {
            speak('Riansh sharma')
        }
        if (listenedline.includes('when is your birthday')) {
            speak('my birthday is on 26 july 2021')
        }
        if (listenedline.includes("what is my sister's name") || listenedline.includes('what is my sister name')) {
            speak('Suhani & nehal sharma')
        }
        if (listenedline.includes("what is my brother's name") || listenedline.includes('what is my brothre name')) {
            speak('Vedansh & riansh sharma')
        }
        if (listenedline.includes('good', 'nice')) {
            speak('thank you')
        }
        if (listenedline.includes('you are bad')) {
            speak("i'm sorry")
        }
        if (listenedline == "sugar") {
            speak('yes sir')
        }
        if (listenedline.includes('what can you do')) {
            speak('whatever you ask')
        }
        if (listenedline.includes('fathers name', "fathre's name")) {
            speak('Sushil sharma')
        }
        if (listenedline.includes('mothers name', "mother's name")) {
            speak('gyaneshwari sharma')
        }
        if (listenedline.includes('open telegram')) {
            speak('ok sir')
            window.open('https://web.telegram.org/k/')
        }
        if (listenedline.includes('bye bye')) {
            speak('bye bye sir')
            window.close()
        }
        if (listenedline.includes('open gmail')) {
            speak('ok sir')
            window.open('https://mail.google.com/mail/u/0/#inbox')
        }
        if (listenedline.includes('how are you')) {
            speak('i am fine thank you ' + ' ' + ' ' + 'how are you')
        }
        if (listenedline.includes('i am fine')) {
            speak('well thats great')
        }


        if (listenedline.includes('play')) {
            speak('playing now')
            window.open('https://www.youtube.com/results?search_query=' + listenedline.slice('11'))
        }

        if (listenedline.includes('not fine')) {
            speak('what is your body tempreature in farhanite')
        }
        if (listenedline.includes('9')) {
            speak('okay you are well just take care and avoid cold things')
        }
        if (listenedline.includes('10')) {
            speak('ok just take care of your self ')
        }
        if (listenedline.includes('thank you')) {
            speak('welcome')
        }
        if (listenedline.includes('hi')) {
            speak('hey sugar')
        }
        if (listenedline.includes('what is the time')) {
            var time = new Date()
            var seconds = time.getSeconds()
            var minutes = time.getMinutes()
            var hours = time.getHours()

            if (seconds > 60) {
                seconds = 0;
                minutes = minutes + 1;
            }
            if (minutes > 60) {
                minutes = 0;
                hours = hours + 1;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (hours < 10) {
                hours = "0" + hours;
            }
            if (hours == 0) {
                hours = 12;
            }
            if (hours > 12) {
                hours = hours - 12;
            }
            speak('the time is ' + hours + 'hours' + minutes + 'minutes' + seconds + 'seconds')
        }
        if (listenedline.includes('greet me')) {
            var time = new Date().getHours()
            if (time < 12) {
                speak('good morning sir')
            }
            if (time > 12 && time < 17) {
                speak('good afternoon sir')
            }
            if (time > 17 && time < 24) {
                speak('good evening sir')
            }
        }
        if (listenedline.includes('open github')) {
            speak('ok sir')
            window.open('https://github.com/')
        }
        if (listenedline.includes('search')) {
            window.open('https://www.google.com/search?q=' + listenedline.slice('11'))
        }
    }

    siri.start()

}

//------------------------------------  listen Always ----------------------------------------------//

function listenAlways() {
    var siri = new webkitSpeechRecognition();
    var listenedline = ""
    siri.onresult = evt => {
        listenedline = evt.results[0][0].transcript.toLowerCase();


        console.log(listenedline)
        document.getElementById('abcd').innerHTML = listenedline

        if (listenedline.includes('hey sugar')) {
            speak('yes sir')
        }
        if (listenedline.includes('tell ', 'joke')) {
            speak('which movie is with the careless with time kal ho na ho')
        }
        if (listenedline.includes('open google')) {
            speak('ok sir')
            window.open('https://www.google.com/')
        }
        if (listenedline.includes('hai') || listenedline.includes('hii')) {
            speak('hey there')
        }
        if (listenedline == "what is your name" || listenedline == "what is your name sugar") {
            speak('I am your persnol assistant' + '' + '' + 'Sugar')
        }
        if (listenedline.includes('open youtube')) {
            speak('ok sir')
            window.open('https://www.youtube.com')
        }
        if (listenedline.includes('laugh')) {
            var audi = document.getElementById('laugh')
            audi.volume = 1
            audi.play()
        }
        if (listenedline.includes('cheer me up')) {
            var audi = document.getElementById('cheer')
            audi.volume = 1
            audi.play()
        }
        if (listenedline.includes('what is my name')) {
            speak('to see what i know about yoyou have to sign in')
        }
        if (listenedline.includes('what is your master name')) {
            speak('Riansh sharma')
        }
        if (listenedline.includes('when is your birthday')) {
            speak('my birthday is on 26 july 2021')
        }
        if (listenedline.includes("what is my sister's name") || listenedline.includes('what is my sister name')) {
            speak('Suhani & nehal sharma')
        }
        if (listenedline.includes("what is my brother's name") || listenedline.includes('what is my brothre name')) {
            speak('Vedansh & riansh sharma')
        }
        if (listenedline.includes('good', 'nice')) {
            speak('thank you')
        }
        if (listenedline.includes('you are bad')) {
            speak("i'm sorry")
        }
        if (listenedline == "sugar") {
            speak('yes sir')
        }
        if (listenedline.includes('what can you do')) {
            speak('whatever you ask')
        }
        if (listenedline.includes('fathers name', "fathre's name")) {
            speak('Sushil sharma')
        }
        if (listenedline.includes('mothers name', "mother's name")) {
            speak('gyaneshwari sharma')
        }
        if (listenedline.includes('open telegram')) {
            speak('ok sir')
            window.open('https://web.telegram.org/k/')
        }
        if (listenedline.includes('bye bye')) {
            speak('bye bye sir')
            window.close()
        }
        if (listenedline.includes('open gmail')) {
            speak('ok sir')
            window.open('https://mail.google.com/mail/u/0/#inbox')
        }
        if (listenedline.includes('how are you')) {
            speak('i am fine thank you ' + ' ' + ' ' + 'how are you')
        }
        if (listenedline.includes('i am fine')) {
            speak('well thats great')
        }


        if (listenedline.includes('play')) {
            speak('playing now')
            window.open('https://www.youtube.com/results?search_query=' + listenedline.slice('11'))
        }

        if (listenedline.includes('not fine')) {
            speak('what is your body tempreature in farhanite')
        }
        if (listenedline.includes('9')) {
            speak('okay you are well just take care and avoid cold things')
        }
        if (listenedline.includes('10')) {
            speak('ok just take care of your self ')
        }
        if (listenedline.includes('thank you')) {
            speak('welcome')
        }
        if (listenedline.includes('hi')) {
            speak('hello')
        }
        if (listenedline.includes('hello')) {
            speak('hey there')
        }
        if (listenedline.includes('what is the time')) {
            var time = new Date()
            var seconds = time.getSeconds()
            var minutes = time.getMinutes()
            var hours = time.getHours()

            if (seconds > 60) {
                seconds = 0;
                minutes = minutes + 1;
            }
            if (minutes > 60) {
                minutes = 0;
                hours = hours + 1;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (hours < 10) {
                hours = "0" + hours;
            }
            if (hours == 0) {
                hours = 12;
            }
            if (hours > 12) {
                hours = hours - 12;
            }
            speak(hours + ' ' + minutes)
        }
        if (listenedline.includes('greet me')) {
            var time = new Date().getHours()
            if (time < 12) {
                speak('good morning sir')
            }
            if (time > 12 && time < 17) {
                speak('good afternoon sir')
            }
            if (time > 17 && time < 24) {
                speak('good evening sir')
            }
        }
        if (listenedline.includes('open github')) {
            speak('ok sir')
            window.open('https://github.com/')
        }
        if (listenedline.includes('who is your brother')) {
            speak('friday')
            window.open('https://vedanshsharmakbj.web.app')
        }
        if (listenedline.includes('shut up')) {
            speak('sorry')
        }
        if (listenedline.includes('search')) {
            window.open('https://www.google.com/search?q=' + listenedline.slice('12'))
        }
        if (listenedline.includes('you up')) {
            speak("for you sir always")
        }
    }


    siri.start()
    siri.onend = function () {
        siri.start()
    }
}

