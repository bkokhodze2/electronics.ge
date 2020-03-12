
function Electornic(Name, Description, Price, URLimage) {
  this.Name = Name;
  this.Description = Description;
  this.Price = Price;
  this.URLimage = URLimage;
}

let inputVar = "";
let Products = [];

Products[0] = new Electornic(
  "Intel i3-9100F",
  "Number of Threads/Cores: 4/4 | Cache: 6 MB Intel Smart Cache | Socket: FCLGA1151 |",
  "315",
  "images/i3-9100F.png"
);
Products[1] = new Electornic(
  "AMD Ryzen 5 1400",
  "Number of Threads/Cores: 8/4 | Cache: 2MB | Socket: AM4",
  "619",
  "images/Ryzen_5_1400.png"
);
Products[2] = new Electornic(
  "Intel i5-9400F",
  "Number of Threads/Cores: 6/6 | Cache: 9 MB SmartCache | Socket: FCLGA1151",
  "555",
  "images/i5-9400F.png"
);
Products[3] = new Electornic(
  "Intel i7-9700",
  "Number of Threads/Cores: 8/8 | Cache: 12 MB Intel Smart Cache | Socket: FCLGA1151",
  "1359",
  "images/i7-9700.png"
);
Products[4] = new Electornic(
  "Intel i9-9900k",
  "Number of Threads/Cores: 16/8 | Cache: 16MB | Socket: LGA1151",
  "1959",
  "images/i9-9900k.png"
);
Products[5] = new Electornic(
  "ZOTAC GEFORCE GT 1030 2GB GDDR5",
  "Memory Bus:64 bit; Engine Clock:1227 MHz/Boost: 1468MHz; Memory Clock: 6.0 GHz;",
  "305",
  "images/GT_1030.png"
);
Products[6] = new Electornic(
  "MSI GeForce GTX 1050 Ti GAMING X 4G",
  "Video Memory: 4GB GDDR5 | Engine Clock: 1493 MHz | Memory Interface: 128 bits",
  "555",
  "images/MSI_GeForce_GTX_1050_Ti.png"
);
Products[7] = new Electornic(
  "MSI GeForce GTX 1660 GAMING X 6G",
  "Video Memory: 6GB GDDR5 | Engine Clock: Boost: 1860MHz | Memory Interface: 192-bit",
  "965",
  "images/MSI_GeForce_GTX_1660.png"
);
Products[8] = new Electornic(
  "MSI GeForce RTX 2060 SUPER VENTUS OC",
  "Video Memory: 8GB GDDR6 | Engine Clock: Boost: 1665MHz | Memory Interface: 256-bit",
  "1635",
  "images/MSI_GeForce_RTX_2060.png"

);
Products[9] = new Electornic(
  "ZOTAC GeForce RTX 2070 SUPER",
  "Video Memory: 8GB GDDR6 | Engine Clock: Boost: 1770 MHz | Memory Interface: 256-bit",
  "2145",
  "images/ZOTAC_GeForce_RTX_2070.png"
);
Products[10] = new Electornic(
  "MSI GeForce RTX 2080 Ti DUKE 11G",
  "Video Memory: 11GB GDDR6 | Engine Clock: Boost: 1635MHz | Memory Interface: 352-bit",
  "4405",
  "images/MSI_GeForce_RTX_2080_Ti.png"
);
Products[11] = new Electornic(
  "Kingston HX426C16FB2",
  "Capacity: 8GB | Memory Type: DDR4 | Memory Clock: 2666 | Latency Timings: CL16-18-18",
  "129",
  "images/Kingston_HX426C16FB2.png"
);
Products[12] = new Electornic(
  "Crucial BLS4G4D240FSB",
  "Capacity: 4GB | Memory Type: DDR4 | Memory Clock: 2400 MHz",
  "145",
  "images/Crucial_BLS4G4D240FSB.png"
);
Products[13] = new Electornic(
  "Team VULCAN Z",
  "Capacity: 16GB | Memory Type: DDR4 | Memory Clock: 3200MHz | Latency Timings: CL16-18-18-38",
  "295",
  "images/Team_VULCAN_Z.png"
);
Products[14] = new Electornic(
  "Team T-Force Night Hawk",
  "Capacity: 2 x 16GB | Memory Type: DDR4 | Memory Clock: 3200 | Latency Timings: 16-18-18-38",
  "729",
  "images/Team_T-Force_Night_Hawk.png"
);
Products[15] = new Electornic(
  "Kingston A 400",
  "Cappactiy: 120GB | Max Sequential Read: up to 500MB/s | Max Sequential Write: up to 320MB/s | Interface: SATA Rev. 3.0 (6Gb/s)",
  "79",
  "images/Kingston_A_400.png"
);
Products[16] = new Electornic(
  "Kingston A 400",
  "Cappactiy: 240GB | Max Sequential Read: up to 500MB/s | Max Sequential Write: up to 350MB/s | Interface: SATA Rev. 3.0 (6Gb/s)",
  "115",
  "images/Kingston_A_400.png"
);
Products[17] = new Electornic(
  "Kingston A1000",
  "Cappactiy: 240GB | Form Factor: M.2 2280 | Max Sequential Read: up to 1,500MB/s | Max Sequential Write: up to 800MB/s | Interface: PCIe NVMe Gen 3.0 x 2 Lanes",
  "175",
  "images/Kingston_A1000.png"
);
Products[18] = new Electornic(
  "Samsung 860 EVO",
  "Cappactiy: 250 GB | Form Factor: M.2 SATA | Max Sequential Read: Up to 550 MB/s | Max Sequential Write: Up to 520 MB/s | Interface: SATA III 6 Gb/s",
  "195",
  "images/Samsung_860_EVO.png"
);
Products[19] = new Electornic(
  "Samsung 860 QVO",
  "Cappactiy: 1,000 GB | Form Factor: 2.5 inch | Max Sequential Read: Up to 550 MB/s | Max Sequential Write: Up to 520 MB/s | Interface: SATA III",
  "459",
  "images/Samsung_860_QVO.png"
);
Products[20] = new Electornic(
  "Samsung 970 Evo",
  "Cappacity: 500GB | Form Factor: M.2 (2280) | Interface: PCIe Gen 3.0 x 4, NVMe 1.3 | Sequential Read/Write:3,500/3,200 MB/s | Random Read/Write:480,000 IOPS/550,000 IOPS",
  "489",
  "images/Samsung_970_Evo.png"
);

function outputPrep(i) {
  inputVar = inputVar + "<div class = \"saertodiv\">";
  inputVar = inputVar + "<p class=\"namediv b\">" + Products[i].Name + "</p>";
  inputVar = inputVar + "<p class=\"descriptiondiv b\">" + Products[i].Description + "</p>";
  inputVar = inputVar + "<p class=\"pricediv b\">" + Products[i].Price + "</p>";
  inputVar = inputVar + "<img class = \"imgdiv\" src = \"" + Products[i].URLimage + "\">";
  inputVar = inputVar + "</div>";
  localStorage.setItem("savedInput", inputVar);
}

function searchProduct() {
  inputVar = "";

  if (document.getElementById("inputName").value.length == 0) {
    alert("გთხოვთ ჩაწეროთ პროდუქციის სახელი");
  } else {
    let input = document.getElementById("inputName").value;

    for (let i = 0; i < Products.length; i++) {
      if (Products[i].Name.includes(input)) {
        outputPrep(i);
        document.getElementById("searchBar").onclick = function () {
          location.href = "index2.html";
        };
      }
    }
  }
}

$(document).ready(function () {

  //===carusel===//
  $cvladi = $(
    ' <div  class="card" style="width: 18rem;">' +
    ' <img src="' + Products[0].URLimage + '" class="card-img-top" alt="picture">' +
    '<div class="card-body">' +
    ' <h5 class="card-title">' + Products[0].Name + '</h5>' +
    ' <p class="card-text">' + Products[0].Description + '</p> ' +
    '<a value="' + Products[0].Price + '"  class=" tanxa yidva">შეიძინე ' + Products[0].Price + ' ლარად!' + '</a>' +
    '</div>' +
    '</div>' +
    ' <div  class="card" style="width: 18rem;">' +
    ' <img src="' + Products[1].URLimage + '" class="card-img-top" alt="picture">' +
    '<div class="card-body">' +
    ' <h5 class="card-title">' + Products[1].Name + '</h5>' +
    ' <p class="card-text">' + Products[1].Description + '</p> ' +
    '<a   value="' + Products[1].Price + '"  class="tanxa yidva ">შეიძინე ' + Products[1].Price + ' ლარად!' + '</a>' +
    '</div>' +
    '</div>' +
    ' <div class="card" style="width: 18rem;">' +
    ' <img src="' + Products[2].URLimage + '" class="card-img-top" alt="picture">' +
    '<div class="card-body">' +
    ' <h5 class="card-title">' + Products[2].Name + '</h5>' +
    ' <p class="card-text">' + Products[2].Description + '</p> ' +
    '<a   value="' + Products[2].Price + '" class="tanxa yidva">შეიძინე ' + Products[2].Price + ' ლარად!' + '</a>' +
    '</div>' +
    '</div>' +
    ' <div class="card" style="width: 18rem;">' +
    ' <img src="' + Products[3].URLimage + '" class="card-img-top" alt="picture">' +
    '<div class="card-body">' +
    ' <h5 class="card-title">' + Products[3].Name + '</h5>' +
    ' <p class="card-text">' + Products[3].Description + '</p> ' +
    '<a   value="' + Products[3].Price + '" class="tanxa yidva">შეიძინე ' + Products[3].Price + ' ლარად!' + '</a>' +
    '</div>' +
    '</div>' +
    ' <div class="card" style="width: 18rem;">' +
    ' <img src="' + Products[4].URLimage + '" class="card-img-top" alt="picture">' +
    '<div class="card-body">' +
    ' <h5 class="card-title">' + Products[4].Name + '</h5>' +
    ' <p class="card-text">' + Products[4].Description + '</p> ' +
    '<a   value="' + Products[4].Price + '" class="tanxa yidva">შეიძინე ' + Products[4].Price + ' ლარად!' + '</a>' +
    '</div>' +
    '</div>' +
    ' <div class="card" style="width: 18rem;">' +
    ' <img src="' + Products[5].URLimage + '" class="card-img-top" alt="picture">' +
    '<div class="card-body">' +
    ' <h5 class="card-title">' + Products[5].Name + '</h5>' +
    ' <p class="card-text">' + Products[5].Description + '</p> ' +
    '<a   value="' + Products[5].Price + '" class="tanxa yidva">შეიძინე ' + Products[5].Price + ' ლარად!' + '</a>' +
    '</div>' +
    '</div>' +
    ' <div class="card" style="width: 18rem;">' +
    ' <img src="' + Products[6].URLimage + '" class="card-img-top" alt="picture">' +
    '<div class="card-body">' +
    ' <h5 class="card-title">' + Products[6].Name + '</h5>' +
    ' <p class="card-text">' + Products[6].Description + '</p> ' +
    '<a   value="' + Products[6].Price + '" class="tanxa yidva">შეიძინე ' + Products[6].Price + ' ლარად!' + '</a>' +
    '</div>' +
    '</div>' +
    ' <div class="card" style="width: 18rem;">' +
    ' <img src="' + Products[7].URLimage + '" class="card-img-top" alt="picture">' +
    '<div class="card-body">' +
    ' <h5 class="card-title">' + Products[7].Name + '</h5>' +
    ' <p class="card-text">' + Products[7].Description + '</p> ' +
    '<a  value="' + Products[7].Price + '" class="tanxa yidva">შეიძინე ' + Products[7].Price + ' ლარად!' + '</a>' +
    '</div>' +
    '</div>' +
    ' <div class="card" style="width: 18rem;">' +
    ' <img src="' + Products[8].URLimage + '" class="card-img-top" alt="picture">' +
    '<div class="card-body">' +
    ' <h5 class="card-title">' + Products[8].Name + '</h5>' +
    ' <p class="card-text">' + Products[8].Description + '</p> ' +
    '<a   value="' + Products[8].Price + '" class="tanxa yidva">შეიძინე ' + Products[8].Price + ' ლარად!' + '</a>' +
    '</div>' +
    '</div>' +
    ' <div class="card" style="width: 18rem;">' +
    ' <img src="' + Products[9].URLimage + '" class="card-img-top" alt="picture">' +
    '<div class="card-body">' +
    ' <h5 class="card-title">' + Products[9].Name + '</h5>' +
    ' <p class="card-text">' + Products[9].Description + '</p> ' +
    '<a   value="' + Products[9].Price + '" class="tanxa yidva">შეიძინე ' + Products[9].Price + ' ლარად!' + '</a>' +
    '</div>' +
    '</div>' +
    ' <div class="card" style="width: 18rem;">' +
    ' <img src="' + Products[10].URLimage + '" class="card-img-top" alt="picture">' +
    '<div class="card-body">' +
    ' <h5 class="card-title">' + Products[10].Name + '</h5>' +
    ' <p class="card-text">' + Products[10].Description + '</p> ' +
    '<a  value="' + Products[10].Price + '" class="tanxa yidva">შეიძინე ' + Products[10].Price + ' ლარად!' + '</a>' +
    '</div>' +
    '</div>' +
    ' <div class="card" style="width: 18rem;">' +
    ' <img src="' + Products[11].URLimage + '" class="card-img-top" alt="picture">' +
    '<div class="card-body">' +
    ' <h5 class="card-title">' + Products[11].Name + '</h5>' +
    ' <p class="card-text">' + Products[11].Description + '</p> ' +
    '<a   value="' + Products[11].Price + '" class="tanxa yidva">შეიძინე ' + Products[11].Price + ' ლარად!' + '</a>' +
    '</div>' +
    '</div>' +
    ' <div class="card" style="width: 18rem;">' +
    ' <img src="' + Products[12].URLimage + '" class="card-img-top" alt="picture">' +
    '<div class="card-body">' +
    ' <h5 class="card-title">' + Products[12].Name + '</h5>' +
    ' <p class="card-text">' + Products[12].Description + '</p> ' +
    '<a  value="' + Products[12].Price + '" class="tanxa yidva">შეიძინე ' + Products[12].Price + ' ლარად!' + '</a>' +
    '</div>' +
    '</div>' +
    ' <div class="card" style="width: 18rem;">' +
    ' <img src="' + Products[13].URLimage + '" class="card-img-top" alt="picture">' +
    '<div class="card-body">' +
    ' <h5 class="card-title">' + Products[13].Name + '</h5>' +
    ' <p class="card-text">' + Products[13].Description + '</p> ' +
    '<a   value="' + Products[13].Price + '" class="tanxa yidva">შეიძინე ' + Products[13].Price + ' ლარად!' + '</a>' +
    '</div>' +
    '</div>' +
    ' <div class="card" style="width: 18rem;">' +
    ' <img src="' + Products[14].URLimage + '" class="card-img-top" alt="picture">' +
    '<div class="card-body">' +
    ' <h5 class="card-title">' + Products[14].Name + '</h5>' +
    ' <p class="card-text">' + Products[14].Description + '</p> ' +
    '<a  value="' + Products[14].Price + '" class="tanxa yidva">შეიძინე ' + Products[14].Price + ' ლარად!' + '</a>' +
    '</div>' +
    '</div>' +
    ' <div class="card" style="width: 18rem;">' +
    ' <img src="' + Products[15].URLimage + '" class="card-img-top" alt="picture">' +
    '<div class="card-body">' +
    ' <h5 class="card-title">' + Products[15].Name + '</h5>' +
    ' <p class="card-text">' + Products[15].Description + '</p> ' +
    '<a  value="' + Products[15].Price + '" class="tanxa yidva">შეიძინე ' + Products[15].Price + ' ლარად!' + '</a>' +
    '</div>' +
    '</div>' +
    ' <div class="card" style="width: 18rem;">' +
    ' <img src="' + Products[16].URLimage + '" class="card-img-top" alt="picture">' +
    '<div class="card-body">' +
    ' <h5 class="card-title">' + Products[16].Name + '</h5>' +
    ' <p class="card-text">' + Products[16].Description + '</p> ' +
    '<a  value="' + Products[16].Price + '" class="tanxa yidva">შეიძინე ' + Products[16].Price + ' ლარად!' + '</a>' +
    '</div>' +
    '</div>' +
    ' <div class="card" style="width: 18rem;">' +
    ' <img src="' + Products[17].URLimage + '" class="card-img-top" alt="picture">' +
    '<div class="card-body">' +
    ' <h5 class="card-title">' + Products[17].Name + '</h5>' +
    ' <p class="card-text">' + Products[17].Description + '</p> ' +
    '<a   value="' + Products[17].Price + '" class="tanxa yidva">შეიძინე ' + Products[17].Price + ' ლარად!' + '</a>' +
    '</div>' +
    '</div>' +
    ' <div class="card" style="width: 18rem;">' +
    ' <img src="' + Products[18].URLimage + '" class="card-img-top" alt="picture">' +
    '<div class="card-body">' +
    ' <h5 class="card-title">' + Products[18].Name + '</h5>' +
    ' <p class="card-text">' + Products[18].Description + '</p> ' +
    '<a   value="' + Products[18].Price + '" class="tanxa yidva">შეიძინე ' + Products[18].Price + ' ლარად!' + '</a>' +
    '</div>' +
    '</div>' +
    ' <div class="card" style="width: 18rem;">' +
    ' <img src="' + Products[19].URLimage + '" class="card-img-top" alt="picture">' +
    '<div class="card-body">' +
    ' <h5 class="card-title">' + Products[19].Name + '</h5>' +
    ' <p class="card-text">' + Products[19].Description + '</p> ' +
    '<a   value="' + Products[19].Price + '" class="tanxa yidva">შეიძინე ' + Products[19].Price + ' ლარად!' + '</a>' +
    '</div>' +
    '</div>' +
    ' <div class="card" style="width: 18rem;">' +
    ' <img src="' + Products[20].URLimage + '" class="card-img-top" alt="picture">' +
    '<div class="card-body">' +
    ' <h5 class="card-title">' + Products[20].Name + '</h5>' +
    ' <p class="card-text">' + Products[20].Description + '</p> ' +
    '<a   value="' + Products[20].Price + '" class="tanxa yidva">შეიძინე ' + Products[20].Price + ' ლარად!' + '</a>' +
    '</div>' +
    '</div>'
  )
  //===carusel===///

  $('.carusel').html($cvladi);

  // ===flexyuti====//
  for (var i = 0; i < 20; i++) {
    $cvladi2 = $
      (
        '<div data-aos="fade-up" class="shida" data-fasi="' + Products[i].Price + '"  >' +
        '<div  class="brendi">' + Products[i].Name +
        '</div>' +
        '<img class="picture" src="' + Products[i].URLimage + '" alt="picture">' +
        '<p  class="fasi">' + Products[i].Price + ' ლარი' + '</p>' +
        '<button data="' + Products[i].Name + '" value="' + Products[i].Price + '" class="yidva"  id="' + [i] + '">შეძენა</button>' +
        '</div>'
      )
    $('.yuti').append($cvladi2);
  }
  //==flexyuti===//

  var raodenoba = 0;
  var srulitanxa = [];
  var id = []; //iyreba aidishnikebi gasafiltria masivi (Set) 


  $('.yidva').on('click', function () {
    raodenoba += 1;
    var tanxa = parseInt($(this).attr('value'), 10);
    var saxeli = $(this).attr('data');
    sum = tanxa;
    srulitanxa.push(tanxa);
    sum = srulitanxa.reduce((a, b) => a + b);
    id.push($(this).attr('id'));
    var set = new Set(id);

    // jamis masivtan mushaoba
    for (let b = 0; b < srulitanxa.length; b++) {
      for (let s = 0; s < b; s++) {
        if (srulitanxa[b] == srulitanxa[s]) {
          delete srulitanxa[b];
          delete srulitanxa[s];
        }
      } console.log(srulitanxa);
    }
    //jamis masivtan mushaoba


    $(this).toggleClass('class');
    if ($(this).attr('class').includes('class')) {
      $(this).text('გაუქმება');
      $('.kalata').removeClass('zemot');
      $('.kalatasul').removeClass('zemot');
      $('.gaukmeba1').removeClass('zemot');

    } else {
      raodenoba -= 2;
      $(this).text('შეძენა');
      if (raodenoba <= 0) {
        $('.kalata').addClass('zemot');
        $('.kalatasul').addClass('zemot');
        $('.gaukmeba1').addClass('zemot');
        $('.gaukmeba1').text('ok');
      }
      sum = srulitanxa.reduce((a, b) => a + b);
    }

    //modzrav paneltan mushaoba 
    $('.aq').text('კალათში ' + raodenoba + ' ნივთია');
    $('.aqsul').text('ჯამში ' + sum + ' ლარი');
    $('.kalata').addClass('kalata2');
    $('.gaukmeba1').text('X');
    $('.kalatasul').addClass('kalatasul2');
    $('.gaukmeba1').addClass('gaukmeba2');
    //modzrav paneltan mushaoba 
  });

  $('.gaukmeba1').on('click', function () {
    sum = 0;
    raodenoba = 0;
    while (srulitanxa.length > 0) {
      srulitanxa.pop();
    }

    $('.yidva').text("შეძენა");
    $('.yidva').removeClass('class');
    $('.kalata').addClass('zemot');
    $('.kalatasul').addClass('zemot');
    $('.gaukmeba1').addClass('zemot');
    $('.gaukmeba1').text('ok');
  });


  //---carusel---//
  $('.carusel').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    pauseOnFocus: true,
    pauseOnHover: true,
  });
  //---carusel---//

  $('.lbl').on('click', function () {
  $('.lbl').toggleClass('darkmode');
  if ($('.lbl').attr('class').includes('darkmode')) {
    
     $('body').css('background-color','black');
     $('header').css('background-color','rgb(71, 71, 71)');
     $('.shida, .dzebna, .gilaki,  .card, .dropdown-item, .kalata, .kalatasul, .gaukmeba1').addClass('shidadark');
     
  } else{
     $('body').css('background-color','rgb(211, 210, 210)');
     $('header').css('background-color','silver');
     $('.shida, .dzebna , .gilaki, .card, .dropdown-item, .kalata, .kalatasul, .gaukmeba1').removeClass('shidadark');
     
   }
   
});
  
});

//sort
document.querySelector('.btn-sort').onclick = function () {
  sortList('data-fasi')
}
document.querySelector('.btn-sort-desc').onclick = function () {
  sortListDesc('data-fasi');
}

function sortList(sortType) {
  let items = document.querySelector('.yuti');
  for (let i = 0; i < items.children.length - 1; i++) {
    for (let j = i; j < items.children.length; j++) {
      if (+items.children[i].getAttribute(sortType) > +items.children[j].getAttribute(sortType)) {
        let replacedNode = items.replaceChild(items.children[j], items.children[i]);
        insertAfter(replacedNode, items.children[i]);
      }
    }
  }
}
function sortListDesc(sortType) {
  let items = document.querySelector('.yuti');
  for (let i = 0; i < items.children.length - 1; i++) {
    for (let j = i; j < items.children.length; j++) {
      if (+items.children[i].getAttribute(sortType) < +items.children[j].getAttribute(sortType)) {
        let replacedNode = items.replaceChild(items.children[j], items.children[i]);
        insertAfter(replacedNode, items.children[i]);
      }
    }
  }
}
function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

//sort>




