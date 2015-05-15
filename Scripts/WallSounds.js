#pragma strict
var wallSound : AudioSource; // play audio
var up;
var isPlayed : int;

function Start () {
	wallSound = GetComponent.<AudioSource>();
	isPlayed = 0;
	up =  0;
}

function Update () {
	var player = GameObject.Find("Player");
	var wall = GameObject.Find("Moving Objects");
	
	var distance = Vector3.Distance(player.transform.position, wall.transform.position);
	
	if (up == 0){ // wall is not up
		if(distance < 40 && isPlayed != 1){
			wallSound.Play(); // play the sound
			isPlayed = 1;
		}
	}
}