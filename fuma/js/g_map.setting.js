$(document).ready(function() {
		
	 google_maps(); // Load google maps onload page

    /**
     * функция отображает карту. Связывает элементы на карте со списком адресов отделений
     */
    function google_maps() {

        var latlng = new google.maps.LatLng(45.2, 34.25);
        var settings = {
            zoom: 8,
            center: latlng,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
            },
            navigationControl: true,
            navigationControlOptions: {
                style: google.maps.NavigationControlStyle.SMALL
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("g_maps"), settings);

        var iconBase = 'img/map_imgs/';
        var icon_marker = iconBase + 'marker.png';
        var icon_marker_click = iconBase + 'map_pointer.png';


        var markers={

            marker1:new google.maps.Marker({
                position: new google.maps.LatLng(45.16, 34.75),
                map: map,
                icon: icon_marker_click
            }),

            marker2:new google.maps.Marker({
                position: new google.maps.LatLng(45.144, 33.61),
                map: map,
                icon: icon_marker
            }),

           /* marker3:new google.maps.Marker({
                position: new google.maps.LatLng(),
                map: map,
                icon: icon_marker
            })*/

        };

       /* $.each(markers,function(index, value){
            google.maps.event.addListener(value, 'click', function() {

                $.each(markers,function(k, v){
                    v.setIcon( icon_marker );
                });

                $('.'+index+' .top').trigger('click');
                value.setIcon( icon_marker_click );

                console.log(value.getPosition());
            });
        });
*/
        $(document).on('click', '.markers', function(){
            $.each(markers,function(k, v){
                v.setIcon( icon_marker );
            });

            var marker_name = $(this).data('marker');
            markers[marker_name].setIcon( icon_marker_click );

        });

    }
	
});