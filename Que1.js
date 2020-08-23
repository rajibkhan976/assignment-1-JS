document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
	  
	let allRead = true;
	var result = document.getElementById('result');
	let notifications = [
	{message: 'Lorem', read: true},
	{message: 'Ipsum', read: true},
	{message: 'Dolor', read: true},
	{message: 'Sit', read: false},
	{message: 'Amet', read: true}
	];
	allRead = notifications.find(element => element.read === false) ? false : true;
	result.innerHTML = allRead;
	console.log(allRead);
  }
}