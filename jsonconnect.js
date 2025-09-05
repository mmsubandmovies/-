// jsonconnect live event
$.getJSON('https://huggingface.co/spaces/Gigipop/Mytv/raw/main/liveevent.json', 
function(result) {
  let event = result.event;
  //console.log(event);

  $.each(event, function(i, result) {
    $('#liveevent').append('<div onclick="' + result.url + '()" class="live-event_item"><img src="' + result.poster + '" class="live-event_image" /><h3><span>' + result.tanggal + '</span></h3><h4><span>' + result.jam + '</span></h4></div>');
  });
});

// jsonconnect Popular tv
$.getJSON('https://blacktvreborn.my.id/database/liveevent/acarafavorit.json', 
function(result) {
  let acara = result.acara;
  //console.log(event);

  $.each(acara, function(i, result) {
    $('#acara').append('<div onclick="' + result.url + '()" class="acaratv_item"><img src="' + result.poster + '" class="acaratv_image" /><h3><span>' + result.tanggal + '</span></h3><h4><span>' + result.jam + '</span></h4></div>');
  });
});

// jsonconnect sportlist
$.getJSON('https://huggingface.co/spaces/Gigipop/Mytv/raw/main/sportlist.json', 
function(result) {
  let sportlist = result.sportlist;
  //console.log(sportlist);

  $.each(sportlist, function(i, result) {

    $('#sportlist').append('<div onclick="' + result.url + '()" class="sportlist_item"><img src="' + result.poster + '" class="sportlist_image" /><h3><span>' + result.tanggal + '</span></h3><h4><span>' + result.jam + '</span></h4></div>');  });
});

// jsonconnect mmsub
$.getJSON('https://huggingface.co/spaces/Gigipop/Mytv/raw/main/mmsub.json', 
function(result) {
  let sportlist = result.mmsub;
  //console.log(mmsub);

  $.each(sportlist, function(i, result) {

    $('#mmsub').append('<div onclick="' + result.url + '()" class="mmsub_item"><img src="' + result.poster + '" class="mmsub_image" /><h3><span>' + result.tanggal + '</span></h3><h4><span>' + result.jam + '</span></h4></div>');  });
});


// jsonconnect ustv = No VPN (VPN မလို)
 $.getJSON('https://huggingface.co/spaces/Gigipop/Mytv/raw/main/ustv.json', 
function(result) {
  let ustv = result.ustv;
  //console.log(ustv);

  let kategory = 'popular';
 $.each(ustv, function(i, result) {
  if (kategory = result.kategori) {
    $('#ustv').append('<div id="' + result.id + '" class="sportlist_item"><img src="' + result.logo + '" class="tv_image" /><h3><span>' + result.name + '</span></h3></div>');
      $('#' + result.id + '').click(function() {
       document.getElementById("objek").innerHTML = '<iframe src="intent://' + result.url + '|drmScheme=clearkey&drmLicense=' + result.ref + '#Intent;scheme=' + result.protokol + ';type=video/*;package=com.genuine.leone;S.browser_fallback_url=market://details?id=com.genuine.leone.ad;S.title=NGTV;end" height="0" width="0" style="border:none;display:none;" title="SS Sport"></iframe>'
     });
   }

  });
 });




// jsonconnect moviestv
 $.getJSON('https://huggingface.co/spaces/Gigipop/Mytv/raw/main/moviestv.json', 
function(result) {
  let moviestv = result.moviestv;
  //console.log(moviestv);

  let kategory = 'popular';
 $.each(moviestv, function(i, result) {
  if (kategory = result.kategori) {
    $('#moviestv').append('<div id="' + result.id + '" class="sportlist_item"><img src="' + result.logo + '" class="tv_image"></div>');
      $('#' + result.id + '').click(function() {
       document.getElementById("objek").innerHTML = '<iframe src="intent://' + result.url + '|drmScheme=clearkey&drmLicense=' + result.ref + '#Intent;scheme=' + result.protokol + ';type=video/*;package=com.genuine.leone;S.browser_fallback_url=market://details?id=com.genuine.leone.ad;S.title=NGTV;end" height="0" width="0" style="border:none;display:none;" title="SS Sport"></iframe>'
     });
   }

  });
 });


// jsonconnect kidstv
 $.getJSON('https://huggingface.co/spaces/Gigipop/Mytv/raw/main/kidstv.json', 
function(result) {
  let kidstv = result.kidstv;
  //console.log(kidstv);

  let kategory = 'popular';
 $.each(kidstv, function(i, result) {
  if (kategory = result.kategori) {
    $('#kidstv').append('<div id="' + result.id + '" class="sportlist_item"><img src="' + result.logo + '" class="tv_image"></div>');
      $('#' + result.id + '').click(function() {
       document.getElementById("objek").innerHTML = '<iframe src="intent://' + result.url + '|drmScheme=clearkey&drmLicense=' + result.ref + '#Intent;scheme=' + result.protokol + ';type=video/*;package=com.genuine.leone;S.browser_fallback_url=market://details?id=com.genuine.leone.ad;S.title=NGTV;end" height="0" width="0" style="border:none;display:none;" title="SS Sport"></iframe>'
     });
   }

  });
 });



// jsonconnect thailand
 $.getJSON('https://huggingface.co/spaces/Gigipop/Mytv/raw/main/thailand.json', 
function(result) {
  let thailand = result.thailand;
  //console.log(thailand);

  let kategory = 'popular';
 $.each(thailand, function(i, result) {
  if (kategory = result.kategori) {
    $('#thailand').append('<div id="' + result.id + '" class="sportlist_item"><img src="' + result.logo + '" class="thailand_image"></div>');
      $('#' + result.id + '').click(function() {
       document.getElementById("objek").innerHTML = '<iframe src="intent://' + result.url + '?|referer=' + result.ref + '&User-Agent=' + result.useragent + '#Intent;scheme=' + result.protokol + ';type=video/*;package=com.genuine.leone;S.browser_fallback_url=market://details?id=com.genuine.leone.ad;S.title=NGTV;end" height="0" width="0" style="border:none;display:none;" title="SS Sport"></iframe>'
     });
   }

  });
 });



// jsonconnect needvpn
$.getJSON('https://huggingface.co/spaces/Gigipop/Mytv/raw/main/needvpn.json', 
function(result) {
  let needvpn = result.needvpn;
  //console.log(needvpn);

  $.each(needvpn, function(i, result) {

    $('#needvpn').append('<div onclick="' + result.url + '()" class="sportlist_item"><img src="' + result.poster + '" class="sportlist_image" /><h3><span>' + result.tanggal + '</span></h3><h4><span>' + result.jam + '</span></h4></div>');  });
});


//json connect movies
$.getJSON('https://huggingface.co/spaces/Gigipop/Mytv/raw/main/movies.json', function(result) {
  let movies = result.movies;
  //console.log(movies);

  let conten = '';

  $.each(movies, function(i, result) {
    if (i > 100) {
      return;
    }

    $('#movies').append('<div id="' + result.kode + '" class="movies_item"><img src="' + result.poster + '" class="movies_image"> <h5><figcaption><marquee <span>' + result.judul + '</span></marquee></figcaption></h5></div>');
    //conten += '<div id="' + result.kode + '" class="item"><img src="' + result.poster + '"></div>'
    $('#' + result.kode + '').click(function() {
      document.getElementById("objek").innerHTML = '<iframe src="' + result.url + '" height="0" width="0" style="border:none;display:none;" title="SS Sport"></iframe>'
    });

  });
});




//json connect india
$.getJSON('https://huggingface.co/spaces/Gigipop/Mytv/raw/main/india.json', function(result) {
  let india = result.india;
  //console.log(india);

  let conten = '';

  $.each(india, function(i, result) {
    if (i > 100) {
      return;
    }

    $('#india').append('<div id="' + result.kode + '" class="india_item"><img src="' + result.poster + '" class="sportlist_image"> <h5><figcaption><marquee <span>' + result.judul + '</span></marquee></figcaption></h5></div>');
    //conten += '<div id="' + result.kode + '" class="item"><img src="' + result.poster + '"></div>'
    $('#' + result.kode + '').click(function() {
      document.getElementById("objek").innerHTML = '<iframe src="' + result.url + '" height="0" width="0" style="border:none;display:none;" title="SS Sport"></iframe>'
    });

  });
});



//json connect notice
$.getJSON('https://huggingface.co/spaces/Gigipop/Mytv/raw/main/notice.json', function(result) {
  let notice = result.notice;
  //console.log(notice);

  let conten = '';

  $.each(notice, function(i, result) {
    if (i > 15) {
      return;
    }

    $('#notice').append('<div id="' + result.kode + '" class="notice_item"><img src="' + result.poster + '" class="notice_image"> </div>');
    //conten += '<div id="' + result.kode + '" class="item"><img src="' + result.poster + '"></div>'
    $('#' + result.kode + '').click(function() {
      document.getElementById("objek").innerHTML = '<iframe src="' + result.url + '" height="0" width="0" style="border:none;display:none;" title="SS Sport"></iframe>'
    });

  });
});






//json connect series
$.getJSON('https://blacktvreborn.my.id/movies/source/data/series.json', function(result) {
  let series = result.series;
  //console.log(series);

  let conten = '';

  $.each(series, function(i, result) {
    if (i > 8) {
      return;
    }

    $('#series').append('<div id="' + result.kode + '" class="movies_item"><img src="' + result.poster + '" class="movies_image"></div>');
    //conten += '<div id="' + result.kode + '" class="item"><img src="' + result.poster + '"></div>'
    $('#' + result.kode + '').click(function() {
      location.href = 'https://blacktvreborn.my.id/movies/page/series/get.html?code=' + result.kode + '';
    });

  });
});

//jsonconnect indonesia movies
let kategori = 'indonesia';
$.getJSON('https://blacktvreborn.my.id/movies/source/data/movies.json', function(result) {
  let movies = result.movies;
  let conten = '';
  let j = 0;
  //console.log(result);
  $.each(movies, function(i, result) {
    if (result.kategori == kategori) {
      if (j > 9) {
        return;
      }
      j++;
      //console.log(result.kode);
      $('#indonesia').append('<div id="' + result.kode + '" class="movies_item"><img src="' + result.poster + '" class="movies_image"></div>');
      //conten += '<div id="' + result.kode + '" class="item"><img src="' + result.poster + '"></div>'
      $('#' + result.kode + '').click(function() {
        document.getElementById("objek").innerHTML = '<iframe src="' + result.url + '" height="0" width="0" style="border:none;display:none;" title="SS Sport"></iframe>'
      });
    }
  });
});
