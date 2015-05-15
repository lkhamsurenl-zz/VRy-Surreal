#pragma strict

//import UnityEngine.UI;

var up;
var showText = true;
 
function Start () {
	up = 0;
	//instruction.GetComponent(Text).enabled = false;
	//text.SetActive(false);
	
	//text.GetComponent(UI.Text).enabled = false;
}

function Update () {
	//var temp = instruction.GetComponent(Text);
	var player = GameObject.Find("Player");
	var wall = GameObject.Find("Room/WalkingWall");
	var instruction = GameObject.Find("Canvas");
	print("hello");
	
	var distance = Vector3.Distance(player.transform.position, wall.transform.position);
	
	if (up == 0){ // wall is not up
		if(distance < 30){
			if(wall.transform.rotation != Quaternion.Euler(0,0,0)){
				transform.localRotation = Quaternion.Slerp(transform.localRotation, Quaternion.Euler(0, 0, 0), Time.deltaTime * 2.0);
			}
			else{
				up = 1;
				//ShowMessage();
				//print ("done: " + up);
				Debug.Log(instruction.GetComponent(UI.Text));
			}
		}
	}
	// TODO - walking on wall stops working
//	if(distance < 30){
//		if(wall.transform.rotation != Quaternion.Euler(0,0,0)){
//			transform.localRotation = Quaternion.Slerp(transform.localRotation, Quaternion.Euler(0, 0, 0), Time.deltaTime * 2.0);
//		}
//		else{
//			wall.transform.rotation = Quaternion.Euler(0,0,0);
//		}
//	}
	//else{
	//	transform.localRotation = Quaternion.Slerp(transform.localRotation, Quaternion.Euler(90, 0, 0), Time.deltaTime * 2.0);
	//}
}

function ShowMessage () {

	//text.SetActive(true);
	yield WaitForSeconds(3.0);
	//text.SetActive(false);
	
//     guiText.text = message;
//     guiText.enabled = true;
//     yield WaitForSeconds(delay);
//     guiText.enabled = false;
 }