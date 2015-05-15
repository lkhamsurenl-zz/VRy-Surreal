#pragma strict

function Start () {

}

function Update () {
	var player = GameObject.Find("OVRPlayerController");
	var portal = GameObject.Find("Pillars/greek1");
	var distance = Vector3.Distance(player.transform.position, portal.transform.position);
	var difference = player.transform.position - portal.transform.position;
	print(distance);
	if(distance < 36){
		Application.LoadLevel("0513");
	}
}