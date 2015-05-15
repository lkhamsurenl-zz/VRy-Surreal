#pragma strict

var isQuitBtn = false;

function OnMouseEnter(){
	renderer.material.color=Color.red;
}

function OnMouseExit(){
	renderer.material.color=Color.white;
}

function OnMouseUp(){
	print("hi");
	if(isQuitBtn==true){
		Application.Quit();
	}
	else{
		Application.LoadLevel("WallWalker");
	}
}
function Start () {

}

function Update () {
	//quit game if escape key is pressed
	if(Input.GetKeyDown("escape")){
		Application.Quit();
	}
}