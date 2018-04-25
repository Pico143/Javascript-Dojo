let function_set = {
    save_to_storage: function () {
        getInput = {
            "question" : document.getElementById('question').value,
            "answer": document.getElementById('selection').value,
        }
        localStorage.setItem("myStorage",JSON.stringify(getInput));
    },
    appendQuestionToDiv: function () {
        let question = JSON.parse(localStorage.getItem('myStorage')).question;
        let div = document.getElementById('main-body')

        console.log(question)
        div.innerHTML += "<h1>" + question + "</h1>";

    }
}

window.addEventListener("load", function load(event){
    window.removeEventListener("load", load, false)
    if (document.getElementById('main-body') != null) {
        function_set.appendQuestionToDiv();
    }
    })
