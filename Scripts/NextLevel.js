#pragma strict

function Start () {

}

function Update () {
	var player = GameObject.Find("Player");
	var portal = GameObject.Find("Portal");
	var distance = Vector3.Distance(player.transform.position, portal.transform.position);
	var difference = player.transform.position - portal.transform.position;
	if(Mathf.Abs(difference.z) < 15.0){
		//print("FinalProjectScene");
		Application.LoadLevel("FinalProjectScene");
	}
}