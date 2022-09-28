function initMap() {
  var myLatLng = {lat: 17.439356539730138, lng: 78.44380194355145};
    var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 16,
	center: myLatLng
  });

  var marker = new google.maps.Marker({
	position: myLatLng,
	map: map,
	title: 'IT UrbanPro'
  });
}