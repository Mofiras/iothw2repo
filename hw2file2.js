

function getfromserver()
{
    $.get('http://localhost:8080', function(data, status)
    {
      data=JSON.parse(data);
  
    currlat=data.current_latitude;
    currlong=data.current_longitude;
    newlat=data.destinationlat;
    newlong=data.destinationlong;
    /*
    var x=Math.cos(newlat)*Math.sin(newlong-currlong);
    var y=( Math.cos(currlat)*Math.sin(newlat) ) - (Math.sin(currlat)*Math.cos(newlat)*Math.cos(newlong-currlong)); 
    
    var angle=( Math.atan2(x,y) )*57.2958 ;
    */
   var angle=Math.atan2(newlong - currlong, newlat - currlat) * 180 / Math.PI;
    console.log(angle);
    var rotation=-90+angle; //because arrow pic starts at -90 degreee so im rotating it wrt to its initial position
   
    $(".top").css('transform', 'rotate('+rotation+'deg)' ); 
   
    });


}

