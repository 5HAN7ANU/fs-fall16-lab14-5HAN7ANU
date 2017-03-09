document.addEventListener('DOMContentLoaded', function(){
    var friends = ['Sky', 'Amanda', 'Jason', 'Brian', 'Bre'];
    var locations = ['Playground', 'Bus', 'Yard', 'Dog Park', 'Living Room', 'Rollercoaster', 'Louvre', 'Gym', 'Grocery Store', 'Museum'];
    var weapons = ['Headphones', 'Shoe', 'Plastic Bag', 'Toothbrush', 'Toothpick', 'Cat', 'Lawnmower', 'Backpack', 'Stapler', 'Burrito', 'Fly Swatter', 'Wine Tool', 'Chicken Nugget', 'Straw', 'Bobblehead', 'Shoelace', 'Pitcher of Margaritas', 'Tortilla Chip', 'Sombrero'];

    function addClue(num) {
        var clue = document.createElement('h3');
        clue.innerHTML = 'Clue ' + num;
        clue.addEventListener('click', function(){
            clueNumber = num;
            // var friend = friends[Math.floor(Math.random()*friends.length)];
            // var location = locations[Math.floor(Math.random()*locations.length)];
            // var weapon = weapons[Math.floor(Math.random()*weapons.length)];
            var friend = friends[num % friends.length];
            var location = locations[num % locations.length];
            var weapon = weapons[num % weapons.length];
            var message = 'Clue ' + clueNumber + ': ' + friend + ' did it in the ' + location + ' with a ' + weapon + '.';
            alert(message);
        });
        document.body.appendChild(clue);
    };

    for(var i = 1; i < 101; i++){
        addClue(i);
    };
});