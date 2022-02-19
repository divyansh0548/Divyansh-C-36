class Form {
    constructor() {
        this.input = createInput("Enter Your Name")
        this.playButton = createButton("Play")
        this.titleImg = createImg("assets/title.png")
        this.greeting = createElement("h2")
    }
    setElementsPosition() {
        this.input.position(width / 2 - 110, height / 2 - 80)
        this.playButton.position(width / 2 - 90, height / 2 - 20)
        this.titleImg.position(width / 2, height - 100)
        this.greeting.position(width / 2 - 300, height / 2 - 100)
    }
    setElementsStyle() {
        this.input.class("customInput")
        this.playButton.class("customButton")
        this.titleImg.class("gameTitle")
        this.greeting.class("greeting")
    }
    hide() {
        this.input.hide()
        this.playButton.hide()
        this.greeting.hide()
    }
    HandleMousePressed() {
        this.playButton.mousePressed(() => {
            this.input.hide()
            this.playButton.hide()
            var message =
                ` Hello ${this.input.value()} </br>wait for another player to join...`;
            this.greeting.html(message);
        })
    }
}