class Form{
    constructor(){
       this.input = createInput("you're called?");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER MAX");
        this.title.position(500, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(650,400);
        this.input.style('width', '240px');
        this.input.style('height', '30px');
        this.input.style('background', 'cyan');
        this.button.position(650,500);
        this.button.style('width', '250px');
        this.button.style('height', '60px');
        this.button.style('background', 'lightpink');
        

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Heyo! " + player.name, "Please wait for player2")
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });

       

    }
}