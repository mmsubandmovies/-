const url = "https://huggingface.co/spaces/mmsubandmovies/main/raw/main/mainsportsm3u8.html"
fetch(url)
  .then((response) => {
    const urlData = response.json();
    return urlData;
  })
  .then((productData) => {
    const productData1 = productData;
    console.log(productData1[0].url1);
    allButtons.forEach(button => {

      button.addEventListener("click", () => {

        if (button.classList.contains("match1")) {
          const zeroUrl1 = productData1[0].url1.replace("https://", "");
          videoFun1(zeroUrl1);
          console.log(productData1[0].url1)
        } else if (button.classList.contains("match2")) {
          console.log("world");
          const zeroUrl2 = productData1[0].url2.replace("https://", "");
          videoFun1(zeroUrl2);
        } else if (button.classList.contains("match3")) {
          console.log("world");
          const zeroUrl3 = productData1[0].url3.replace("https://", "");
          videoFun1(zeroUrl3);
        } else if (button.classList.contains("match4")) {
          console.log("world");
          const zeroUrl4 = productData1[0].url4.replace("https://", "");
          videoFun1(zeroUrl4);
        } else if (button.classList.contains("match5")) {
          console.log("world");
          const zeroUrl5 = productData1[0].url5.replace("https://", "");
          videoFun1(zeroUrl5);


        } else if (button.classList.contains("match6")) {
          console.log("world");
          const oneUrl1 = productData1[1].url1.replace("https://", "");
          videoFun1(oneUrl1);
        } else if (button.classList.contains("match7")) {
          console.log("world");
          const oneUrl2 = productData1[1].url2.replace("https://", "");
          videoFun1(oneUrl2);
        } else if (button.classList.contains("match8")) {
          const oneUrl3 = productData1[1].url3.replace("https://", "");
          videoFun1(oneUrl3);
        } else if (button.classList.contains("match9")) {
          const oneUrl4 = productData1[1].url4.replace("https://", "");
          videoFun1(oneUrl4);
        } else if (button.classList.contains("match10")) {
          const oneUrl5 = productData1[1].url5.replace("https://", "");
          videoFun1(oneUrl5);

        } else if (button.classList.contains("match11")) {
          const twoUrl1 = productData1[2].url1.replace("https://", "");
          videoFun1(twoUrl1);
        } else if (button.classList.contains("match12")) {
          console.log("world");
          const twoUrl2 = productData1[2].url2.replace("https://", "");
          videoFun1(twoUrl2);
        } else if (button.classList.contains("match13")) {
          console.log("world");
          const twoUrl3 = productData1[2].url3.replace("https://", "");
          videoFun1(twoUrl3);
        } else if (button.classList.contains("match14")) {
          const twoUrl4 = productData1[2].url4.replace("https://", "");
          videoFun1(twoUrl4);
        } else if (button.classList.contains("match15")) {
          const twoUrl5 = productData1[2].url5.replace("https://", "");
          videoFun1(twoUrl5);

        } else if (button.classList.contains("match16")) {
          const threeUrl1 = productData1[3].url1.replace("https://", "");
          videoFun1(threeUrl1);
        } else if (button.classList.contains("match17")) {
          const threeUrl2 = productData1[3].url2.replace("https://", "");
          videoFun1(threeUrl2);
        } else if (button.classList.contains("match18")) {
          const threeUrl3 = productData1[3].url3.replace("https://", "");
          videoFun1(threeUrl3);
        } else if (button.classList.contains("match19")) {
          const threeUrl4 = productData1[3].url4.replace("https://", "");
          videoFun1(threeUrl4);
        } else if (button.classList.contains("match20")) {
          const threeUrl5 = productData1[3].url5.replace("https://", "");
          videoFun1(threeUrl5);

        } else if (button.classList.contains("match21")) {
          const fourUrl1 = productData1[4].url1.replace("https://", "");
          videoFun1(fourUrl1);
        } else if (button.classList.contains("match22")) {
          const fourUrl2 = productData1[4].url2.replace("https://", "");
          videoFun1(fourUrl2);
        } else if (button.classList.contains("match23")) {
          const fourUrl3 = productData1[4].url3.replace("https://", "");
          videoFun1(fourUrl3);
        } else if (button.classList.contains("match24")) {
          const fourUrl4 = productData1[4].url4.replace("https://", "");
          videoFun1(fourUrl4);
        } else if (button.classList.contains("match25")) {
          const fourUrl5 = productData1[4].url5.replace("https://", "");
          videoFun1(fourUrl5);

        } else if (button.classList.contains("match26")) {
          const fiveUrl1 = productData1[5].url1.replace("https://", "");
          videoFun1(fiveUrl1);
        } else if (button.classList.contains("match27")) {
          const fiveUrl2 = productData1[5].url2.replace("https://", "");
          videoFun1(fiveUrl2);
        } else if (button.classList.contains("match28")) {
          const fiveUrl3 = productData1[5].url3.replace("https://", "");
          videoFun1(fiveUrl3);
        } else if (button.classList.contains("match29")) {
          const fiveUrl4 = productData1[5].url4.replace("https://", "");
          videoFun1(fiveUrl4);
        } else if (button.classList.contains("match30")) {
          const fiveUrl5 = productData1[5].url5.replace("https://", "");
          videoFun1(fiveUrl5);

        } else if (button.classList.contains("match31")) {
          const sixUrl1 = productData1[6].url1.replace("https://", "");
          videoFun1(sixUrl1);
        } else if (button.classList.contains("match32")) {
          const sixUrl2 = productData1[6].url2.replace("https://", "");
          videoFun1(sixUrl2);
        } else if (button.classList.contains("match33")) {
          const sixUrl3 = productData1[6].url3.replace("https://", "");
          videoFun1(sixUrl3);
        } else if (button.classList.contains("match34")) {
          const sixUrl4 = productData1[6].url4.replace("https://", "");
          videoFun1(sixUrl4);
        } else if (button.classList.contains("match35")) {
          const sixUrl5 = productData1[6].url5.replace("https://", "");
          videoFun1(sixUrl5);

        } else if (button.classList.contains("match36")) {
          const sevenUrl1 = productData1[7].url1.replace("https://", "");
          videoFun1(sevenUrl1);
        } else if (button.classList.contains("match37")) {
          const sevenUrl2 = productData1[7].url2.replace("https://", "");
          videoFun1(sevenUrl2);
        } else if (button.classList.contains("match38")) {
          const sevenUrl3 = productData1[7].url3.replace("https://", "");
          videoFun1(sevenUrl3);
        } else if (button.classList.contains("match39")) {
          const sevenUrl4 = productData1[7].url4.replace("https://", "");
          videoFun1(sevenUrl4);
        } else if (button.classList.contains("match40")) {
          const sevenUrl5 = productData1[7].url5.replace("https://", "");
          videoFun1(sevenUrl5);

        } else if (button.classList.contains("match41")) {
          const eightUrl1 = productData1[8].url1.replace("https://", "");
          videoFun1(eightUrl1);
        } else if (button.classList.contains("match42")) {
          const eightUrl2 = productData1[8].url2.replace("https://", "");
          videoFun1(eightUrl2);
        } else if (button.classList.contains("match43")) {
          const eightUrl3 = productData1[8].url3.replace("https://", "");
          videoFun1(eightUrl3);
        } else if (button.classList.contains("match44")) {
          console.log("world");
          const eightUrl4 = productData1[8].url4.replace("https://", "");
          videoFun1(eightUrl4);
        } else if (button.classList.contains("match45")) {
          const eightUrl5 = productData1[8].url5.replace("https://", "");
          videoFun1(eightUrl5);

        } else if (button.classList.contains("match46")) {
          console.log("world");
          const nineUrl1 = productData1[9].url1.replace("https://", "");
          videoFun1(nineUrl1);
        } else if (button.classList.contains("match47")) {
          const nineUrl2 = productData1[9].url2.replace("https://", "");
          videoFun1(nineUrl2);
        } else if (button.classList.contains("match48")) {
          const nineUrl3 = productData1[9].url3.replace("https://", "");
          videoFun1(nineUrl3);
        } else if (button.classList.contains("match49")) {
          const nineUrl4 = productData1[9].url4.replace("https://", "");
          videoFun1(nineUrl4);
        } else if (button.classList.contains("match50")) {
          const nineUrl5 = productData1[9].url5.replace("https://", "");
          videoFun1(nineUrl5);

        } else if (button.classList.contains("match51")) {
          const tenUrl1 = productData1[10].url1.replace("https://", "");
          videoFun1(tenUrl1);
        } else if (button.classList.contains("match52")) {
          const tenUrl2 = productData1[10].url2.replace("https://", "");
          videoFun1(tenUrl2);
        } else if (button.classList.contains("match53")) {
          const tenUrl3 = productData1[10].url3.replace("https://", "");
          videoFun1(tenUrl3);
        } else if (button.classList.contains("match54")) {
          const tenUrl4 = productData1[10].url4.replace("https://", "");
          videoFun1(tenUrl4);
        } else if (button.classList.contains("match55")) {
          const tenUrl5 = productData1[10].url5.replace("https://", "");
          videoFun1(tenUrl5);

        } else if (button.classList.contains("match56")) {
          const aOneUrl1 = productData1[11].url1.replace("https://", "");
          videoFun1(aOneUrl1);
        } else if (button.classList.contains("match57")) {
          const aOneUrl2 = productData1[11].url2.replace("https://", "");
          videoFun1(aOneUrl2);
        } else if (button.classList.contains("match58")) {
          const aOneUrl3 = productData1[11].url3.replace("https://", "");
          videoFun1(aOneUrl3);
        } else if (button.classList.contains("match59")) {
          const aOneUrl4 = productData1[11].url4.replace("https://", "");
          videoFun1(aOneUrl4);
        } else if (button.classList.contains("match60")) {
          const aOneUrl5 = productData1[11].url5.replace("https://", "");
          videoFun1(aOneUrl5);

        } else if (button.classList.contains("match61")) {
          const bOneUrl1 = productData1[12].url1.replace("httpd://", "");
          videoFun1(bOneUrl1);
        } else if (button.classList.contains("match62")) {
          const bOneUrl2 = productData1[12].url2.replace("https://", "");
          videoFun1(bOneUrl2);
        } else if (button.classList.contains("match63")) {
          const bOneUrl3 = productData1[12].url3.replace("https://", "");
          videoFun1(bOneUrl3);
        } else if (button.classList.contains("match64")) {
          const bOneUrl4 = productData1[12].url4.replace("https://", "");
          videoFun1(bOneUrl4);
        } else if (button.classList.contains("match65")) {
          const bOneUrl5 = productData1[12].url5.replace("https://", "");
          videoFun1(bOneUrl5);

        } else if (button.classList.contains("match66")) {
          const cOneUrl1 = productData1[13].url1.replace("https://", "");
          videoFun1(cOneUrl1);
        } else if (button.classList.contains("match67")) {
          const cOneUrl2 = productData1[13].url2.replace("https://", "");
          videoFun1(cOneUrl2);
        } else if (button.classList.contains("match68")) {
          const cOneUrl3 = productData1[13].url3.replace("https://", "");
          videoFun1(cOneUrl3);
        } else if (button.classList.contains("match69")) {
          const cOneUrl4 = productData1[13].url4.replace("https://", "");
          videoFun1(cOneUrl4);
        } else if (button.classList.contains("match70")) {
          const cOneUrl5 = productData1[13].url5.replace("https://", "");
          videoFun1(cOneUrl5);

        } else if (button.classList.contains("match71")) {
          const dOneUrl1 = productData1[14].url1.replace("https://", "");
          videoFun1(dOneUrl1);
        } else if (button.classList.contains("match72")) {
          const dOneUrl2 = productData1[14].url2.replace("https://", "");
          videoFun1(dOneUrl2);
        } else if (button.classList.contains("match73")) {
          const dOneUrl3 = productData1[14].url3.replace("https://", "");
          videoFun1(dOneUrl3);
        } else if (button.classList.contains("match74")) {
          const dOneUrl4 = productData1[14].url4.replace("https://", "");
          videoFun1(dOneUrl4);
        } else if (button.classList.contains("match75")) {
          const dOneUrl5 = productData1[14].url5.replace("https://", "");
          videoFun1(dOneUrl5);
                  } else if (button.classList.contains("match76")) {
          const eOneUrl1 = productData1[15].url1.replace("https://", "");
          videoFun1(eOneUrl1);
        } else if (button.classList.contains("match77")) {
          const eOneUrl2 = productData1[15].url2.replace("https://", "");
          videoFun1(eOneUrl2);
        } else if (button.classList.contains("match78")) {
          const eOneUrl3 = productData1[15].url3.replace("https://", "");
          videoFun1(eOneUrl3);
        } else if (button.classList.contains("match79")) {
          const eOneUrl4 = productData1[15].url4.replace("https://", "");
          videoFun1(eOneUrl4);
        } else if (button.classList.contains("match80")) {
          const eOneUrl5 = productData1[15].url5.replace("https://", "");
          videoFun1(eOneUrl5);
                  } else if (button.classList.contains("match81")) {
          const eOneUrl1 = productData1[16].url1.replace("https://", "");
          videoFun1(eOneUrl1);
        } else if (button.classList.contains("match82")) {
          const eOneUrl2 = productData1[16].url2.replace("https://", "");
          videoFun1(eOneUrl2);
        } else if (button.classList.contains("match83")) {
          const eOneUrl3 = productData1[16].url3.replace("https://", "");
          videoFun1(eOneUrl3);
        } else if (button.classList.contains("match84")) {
          const eOneUrl4 = productData1[16].url4.replace("https://", "");
          videoFun1(eOneUrl4);
        } else if (button.classList.contains("match85")) {
          const eOneUrl5 = productData1[16].url5.replace("https://", "");
          videoFun1(eOneUrl5);
        } else if (button.classList.contains("match86")) {
          const fOneUrl1 = productData1[17].url1.replace("https://", "");
          videoFun1(fOneUrl1);
        } else if (button.classList.contains("match87")) {
          const fOneUrl2 = productData1[17].url2.replace("https://", "");
          videoFun1(fOneUrl2);
        } else if (button.classList.contains("match88")) {
          const fOneUrl3 = productData1[17].url3.replace("https://", "");
          videoFun1(fOneUrl3);
        } else if (button.classList.contains("match89")) {
          const fOneUrl4 = productData1[17].url4.replace("https://", "");
          videoFun1(fOneUrl4);
        }else if (button.classList.contains("match90")) {
          const fOneUrl5 = productData1[17].url5.replace("https://", "");
          videoFun1(fOneUrl5);
        } else if (button.classList.contains("match91")) {
          const fOneUrl1 = productData1[18].url1.replace("https://", "");
          videoFun1(fOneUrl1);
        } else if (button.classList.contains("match92")) {
          const fOneUrl2 = productData1[18].url2.replace("https://", "");
          videoFun1(fOneUrl2);
        } else if (button.classList.contains("match93")) {
          const fOneUrl3 = productData1[18].url3.replace("https://", "");
          videoFun1(fOneUrl3);
        } else if (button.classList.contains("match94")) {
          const fOneUrl4 = productData1[18].url4.replace("https://", "");
          videoFun1(fOneUrl4);
        }else if (button.classList.contains("match95")) {
          const fOneUrl5 = productData1[18].url5.replace("https://", "");
          videoFun1(fOneUrl5);
        } else if (button.classList.contains("match96")) {
          const fOneUrl1 = productData1[19].url1.replace("https://", "");
          videoFun1(fOneUrl1);
        } else if (button.classList.contains("match97")) {
          const fOneUrl2 = productData1[19].url2.replace("https://", "");
          videoFun1(fOneUrl2);
        } else if (button.classList.contains("match98")) {
          const fOneUrl3 = productData1[19].url3.replace("https://", "");
          videoFun1(fOneUrl3);
        } else if (button.classList.contains("match99")) {
          const fOneUrl4 = productData1[19].url4.replace("https://", "");
          videoFun1(fOneUrl4);
        }else if (button.classList.contains("match100")) {
          const fOneUrl5 = productData1[19].url5.replace("https://", "");
          videoFun1(fOneUrl5);
        }




















        
      })
    })
  })
  .catch((error) => {
    console.log("try catch error")
  })

const allButtons = document.querySelectorAll(`.match1,.match2,.match3,.match4,.match5,.match6,.match7,.match8,.match9,.match10,.match11,.match12,.match13,.match14,.match15,

.match16,.match17,.match18,.match19,.match20,.match21,.match22,.match23,.match24,.match25,.match26,.match27,.match28,.match29,.match30,.match31,.match32,.match33,.match34,.match35,
.match36,.match37,.match38,.match39,.match40,.match41,.match42,.match43,.match44,.match45,.match46,.match47,.match48,.match49,.match50,.match51,.match52,.match53,.match54,.match55,.match56,.match57,
.match58,.match59,.match60,.match61,.match62,.match63,.match64,.match65,.match66,.match67,.match68,.match69,.match70,.match71,.match72,.match73
,.match74,.match75,.match76,.match77,.match78,.match79,.match80,.match81,.match82,.match83
,.match84,.match85,.match86,.match87,.match88,.match89,.match90,.match91,.match92,.match93
,.match94,.match95,.match96,.match97,.match98,.match99,.match100`);

const videoFun1 = (m3u8URL2) => {
    const isAndroid = /Android/i.test(navigator.userAgent);

    if (isAndroid) {
      const networkStreamPlayerURL = `intent://${m3u8URL2}#Intent;scheme=https;type=video/*;package=com.genuine.leone;end`;

      const testiframe = document.createElement('iframe');
      testiframe.style.display = 'none';
      testiframe.src = networkStreamPlayerURL;
      const redirectTimeout = 1000; 
      const redirectFunction = () => {
        document.body.removeChild(testiframe);
        window.location.href = "https://play.google.com/store/apps/details?id=com.genuine.leone";
      };
      let appInstalled = false;

      testiframe.onload = () => {
        appInstalled = true;
        setTimeout(redirectFunction, redirectTimeout);
      };

      testiframe.onerror = () => {
        if (!appInstalled) {
          redirectFunction();
        }
      };

      document.body.appendChild(testiframe);
    } else {
      alert("This feature is only available on Android devices.");
    }
};

const videoFun2 = (m3u8URL) => {
    const isAndroid = /Android/i.test(navigator.userAgent);

    if (isAndroid) {
      const networkStreamPlayerURL = `intent://${m3u8URL}#Intent;scheme=http;type=video/*;package=com.genuine.leone;end`;

      const testiframe = document.createElement('iframe');
      testiframe.style.display = 'none';
      testiframe.src = networkStreamPlayerURL;
      const redirectTimeout = 1000; 
      const redirectFunction = () => {
        document.body.removeChild(testiframe);
        window.location.href = "https://play.google.com/store/apps/details?id=com.genuine.leone";
      };
      let appInstalled = false;

      testiframe.onload = () => {
        appInstalled = true;
        setTimeout(redirectFunction, redirectTimeout);
      };

      testiframe.onerror = () => {
        if (!appInstalled) {
          redirectFunction();
        }
      };

      document.body.appendChild(testiframe);
    } else {
      alert("This feature is only available on Android devices.");
    }
  };
/*
const videoFun2 = (m3u8URL2) => {
      const isAndroid = /Android/i.test(navigator.userAgent);
      const networkStreamPlayerURL = `intent://${m3u8URL2}#Intent;scheme=https;type=video/*;package=com.genuine.leone;S.browser_fallback_url=market://details?id=com.genuine.leone.ad;S.title=PLAYIDTV;end`;
    if (isAndroid) {
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none'; 
         iframe.src = networkStreamPlayerURL;
         document.body.appendChild(iframe);
         setTimeout(() => {
          document.body.removeChild(iframe);
        }, 1000); 
      } else {
        alert("aviableOnAndroidDevice");
      }
    };
const videoFun1 = (m3u8URL) => {
  const isAndroid = /Android/i.test(navigator.userAgent);
  const networkStreamPlayerURL = `intent://${m3u8URL}#Intent;scheme=http;type=video/*;package=com.genuine.leone;S.browser_fallback_url=market://details?id=com.genuine.leone.ad;S.title=PLAYIDTV;end`;
if (isAndroid) {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none'; 
     iframe.src = networkStreamPlayerURL;
     document.body.appendChild(iframe);
     setTimeout(() => {
      document.body.removeChild(iframe);
    }, 1000); 
  } else {
    alert("aviableOnAndroidDevice");
  }
};
*/
