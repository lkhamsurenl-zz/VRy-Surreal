#pragma strict

//import UnityEngine.UI;

var up;
var showText = true;
var instruction : GameObject;
 
function Start () {
	up = 0;
	instruction = GameObject.Find("Canvas/Instructions");
	instruction.SetActive(false);
}

function Update () {
	var player = GameObject.Find("Player");
	var wall = GameObject.Find("Moving Objects");
	
	var distance = Vector3.Distance(player.transform.position, wall.transform.position);
	
	if (up == 0){ // wall is not up
		if(distance < 40){
			if(wall.transform.rotation != Quaternion.Euler(-90,0,0)){
				transform.localRotation = Quaternion.Slerp(transform.localRotation, Quaternion.Euler(-90, 0, 0), Time.deltaTime * 1.0);
			}
//			if(Quaternion.Angle(wall.transform.rotation,Quaternion.Euler(-90,0,0))>2.5){
//				transform.localRotation = Quaternion.Slerp(transform.localRotation, Quaternion.Euler(-90, 0, 0), Time.deltaTime * 1.0);
//			}
			else{
				up = 1;
				ShowMessage();
			}
		}
	}
	
	if(Vector3.Distance(player.transform.position, instruction.transform.position)<8.0){
		instruction.SetActive(false);
	}
}

function ShowMessage () {

	instruction.SetActive(true);
	yield WaitForSeconds(0.7);
	instruction.SetActive(false);
	yield WaitForSeconds(0.7);
	instruction.SetActive(true);
	yield WaitForSeconds(0.7);
	instruction.SetActive(false);
	yield WaitForSeconds(0.7);
	instruction.SetActive(true);
	yield WaitForSeconds(0.7);
	instruction.SetActive(false);
	yield WaitForSeconds(0.7);
	instruction.SetActive(true);
 }