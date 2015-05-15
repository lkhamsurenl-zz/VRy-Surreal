#pragma strict

var footsteps : AudioSource;

function Start () {
	footsteps = GetComponent.<AudioSource>();
}

function Update () {
	if (Input.GetKeyDown ('w') ||  Input.GetKeyDown ('s') || Input.GetKeyDown(KeyCode.UpArrow) || Input.GetKeyDown(KeyCode.DownArrow))
	 {
	 	print("walking");
	     footsteps.Play();
	 }
	 if (Input.GetKeyUp ('w') || Input.GetKeyUp ('s') || Input.GetKeyUp(KeyCode.UpArrow) || Input.GetKeyUp(KeyCode.DownArrow))
	 {
	     footsteps.Stop();
	 
	 }
}