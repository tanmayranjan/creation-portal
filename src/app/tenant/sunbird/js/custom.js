sessionStorage.setItem("tenantSlug", "vidyadaan");
sessionStorage.setItem("rootTenantLogo", "vidyadaan");
$(document).ready(function () {
  sessionStorage.setItem("tenantSlug", "vidyadaan");
  sessionStorage.setItem("rootTenantLogo", "vidyadaan");
  
  $(".readMore").on('click',function(){
    if(!($(".more").is(":visible"))){
      $(".more").show();
      $(".dots").hide();
      $(this).text("Read Less");
      var h = $(".about-section").innerHeight();
      if(window.innerWidth < 1024){
        $(".eresourcesContents").css("padding-top", ((h - 280)+ 166)+"px");
      }else{
        $(".eresourcesContents").css("padding-top", ((h - 202)+ 140)+"px");
      }
    }else{
      $(".more").hide();
      $(".dots").show();
      $(this).text("Read More");
      if(window.innerWidth < 1024){
        $(".eresourcesContents").css("padding-top","166px");
      }else{
        $(".eresourcesContents").css("padding-top","140px");
      }
    }
  })

function getEnvironment(a){
  switch(a){
    case "dock.preprod.ntp.net.in": return "https://dock.preprod.ntp.net.in/contribute"; break;
    case "vdn.diksha.gov.in": return "https://vdn.diksha.gov.in/contribute"; break;
    case "preprod.ntp.net.in": return "https://dock.preprod.ntp.net.in/contribute"; break;
    case "diksha.gov.in": return "https://vdn.diksha.gov.in/contribute"; break;
    default: return "/contribute"; break;
  }
}

var url = window.location.origin + '/content/program/v1/tenant/list';
makeCallToGetProjects(url,getProjectsTemplates);

function makeCallToGetProjects(url, callback){
  var data = {
    request: {
      filters: {
        status: "Live"
      }
    }
  };
  $.ajax({
    type: "POST",
    url: url,
    data: JSON.stringify(data),
  headers: {'content-type':'application/json'},
    success: function(response){
        callback(response.result.content);
    }
  });
}

function getProjectsTemplates(data){
  var otherBoardCards = '';
  var stateBoardCards = '';
  for(let i=0; i<data.length; i++){
    //Other state boards
    if(data[i].orgName == 'NCERT' || data[i].orgName == 'CBSE'){
      otherBoardCards = otherBoardCards + '<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-6"> <div class="program-cards"> <div class="topSection"> <label class="text-center hidden-lg-down">' + data[i].orgName + '</label> <div class="my-20">';
    checkImageExists(data[i].imgUrl, function(imgPath){
      if(imgPath){
        otherBoardCards = otherBoardCards + '<img src="' + imgPath + '" class="logo-img" alt="' + data[i].orgName + ' logo" />'
      }
    });
    otherBoardCards = otherBoardCards + '</div> </div> <div class="bottomSection"> <label><span class="fs-2">'+ data[i].program_count + '</span> Projects</label> <a href="#" class="hidden-lg-down a-link cb">Contribute</a> </div> </div> </div>';
    }else{
      // state boards
      checkImageExists(data[i].imgUrl, function(imgPath){
        stateBoardCards = stateBoardCards + '<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-6"> <div class="program-cards"> <div class="topSection"> <label class="text-center hidden-lg-down">' + data[i].orgName + '</label> <div class="my-20">';
        if(imgPath){
          // console.log('hey');
          stateBoardCards = stateBoardCards + '<img src="' + imgPath + '" class="logo-img" alt="' + data[i].orgName + ' logo"/>';
        }
        stateBoardCards = stateBoardCards + '</div> </div> <div class="bottomSection"> <label><span class="fs-2">' + data[i].program_count + '</span> Projects</label> <a href="#" class="hidden-lg-down a-link cb">Contribute</a> </div> </div> </div>';
      });
    }
  }
  setTimeout(function(){ 
    $('.flex-jc-center').append(otherBoardCards);
    $('.state-board-projects').append(stateBoardCards); 
    var a = window.location.hostname;
    $(".cb").attr("href",getEnvironment(a));
  }, 500);
}
//Get image path
function checkImageExists(slug, callBack) {
  var imageUrl = window.location.origin + '/' + slug + '/logo.png';
  var imageData = new Image();
  imageData.onload = function() {
    callBack(imageUrl);
  };
  imageData.onerror = function() {
    callBack(false);
  };
  imageData.src = imageUrl;
  }
  var $videoSrc;  
  $('.video-btn').click(function() {
      $videoSrc = $(this).data( "src" );
      $('#vidyaDaanVideoModal').modal("show");
  });
  
  $('#vidyaDaanVideoModal').on('shown.bs.modal', function (e) {
    $("#vidyaDaanVideoModal video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
  })
    
  $('#vidyaDaanVideoModal').on('hide.bs.modal', function (e) {
      $("#vidyaDaanVideoModal video").attr('src',''); 
  }) 
});