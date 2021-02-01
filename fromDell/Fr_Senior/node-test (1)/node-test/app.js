const nodemailer = require("nodemailer");

// config สำหรับของ gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "smy.lmmkd@gmail.com", // your email
    pass: "04092541saminya", // your email password
  },
});

let mailOptions = {
  // sender
  to: "smy.lmmkd@gmail.com", // list of receivers
  subject: "Dohome mail test", // Mail subject
  html: `<html lang="en">
    <head>
        <title>CSS Website Layout</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css2?family=Prompt&display=swap" rel="stylesheet">
        <style>
            html {
          box-sizing: border-box; }
        
        * {
          margin: 0;
          padding: 0; }
        
        *,
        *:before,
        *:after {
          box-sizing: inherit; }
        
          body {
            line-height: 1; 
            font-family:'Prompt',sans-serif;
          }
          p {
              line-height: 1.5;
          }
          ul {
            line-height: 1.5; 
            padding-left: 30px; 
            padding-right: 30px; 
            margin-left: 30px; 
            margin-right: 30px;
          }
          ul > li {
            list-style-type: decimal;
          }
          .linkSocial {
              text-align: center;
              padding-top: 20px;
              padding-bottom: 10px;
          }
          .linkSocial > a {
            text-decoration: none; 
            padding: 0 60px 0 0;
          }
          .linkSocial > a > img {
            max-width: 100%; 
            width: 30px;
          }
          .background {
                background-color: #F7F7F7;
                padding: 15px 0 15px 0;
                border-bottom: 30px solid #F26529;
            }
            .imgLogo {
                text-align: center;
            }
            .imgLogo > img {
                max-width: 100%;
                width: 15%
            }
            .textLogo {
                color: #00000029;
                font-size: 16px;
            }
            .textLogo > p {
                line-height: normal; 
                margin: 0;
            }
            .imgLogoRight > img {
                max-width: 100%;
            }
            .box {
                background-color: #fff;
                border: 1px solid #ccc;
            }
            .textTitle {
                font-size: 30px;
                font-weight: bold;
                text-align: center;
                padding-top: 10px;
                color: #4D4D4F;
            }
            .textWeb {
                font-size: 18px;
                text-align: center;
                padding-top: 10px;
                color: #4D4D4F;
            }
            .content {
                padding-top: 30px;
                padding-bottom: 30px;
            }
            .box {
                background-color: #fff; 
                border: 1px solid #E6E6E6;
                padding: 60px;
                margin-top: 60px;
            }
            .textDearYou {
                font-size: 16px;
                color: #000;
                padding-bottom: 10px;
            }
            .textPosition {
                font-size: 16px;
                color: #000;
            }
            .textDate {
                font-size: 16px;
                color: #707070;
                padding-bottom: 10px; 
                text-align: right;
            }
            .textDocument {
                font-size: 16px;
                color: #707070;
                text-align: right;
            }
            .contentDetail {
                padding-top: 30px; 
                padding-bottom: 30px;
                font-size: 16px;
                color: #000;
            }
            .textDetail {
                line-height: 1.5;
            }
            .textIndexDetail {
                text-indent: 60px; 
                padding-top: 15px; 
                line-height: 1.5;
            }
            .textSubIndexDetail {
                padding-top: 15px; 
                line-height: 1.5;
            }
            .textTitleListDetail {
                line-height: 1.5; 
                text-indent: 30px; 
                padding-top: 15px; 
                padding-bottom: 15px;
            }
            .textLastContent {
                text-align: center; 
                line-height: 1.5; 
                padding-top: 30px; 
                margin-left: 60%;
            }
            .textContentFooter {
                text-align: center; 
                padding-top: 30px;
                font-size: 14px;
            }
            .textLinkContentFooter {
                color: #F26529;
            }
            .borderContentFooter {
                border-left: 2px solid #000; 
                margin-left: 10px; 
                margin-right: 10px;
            }
            .textLastFooter {
                text-align: center; 
                padding-top: 30px; 
                padding-bottom: 30px;
                font-size: 14px;
            }

          .container {
            margin-right: auto;
            margin-left: auto;
            padding-left: 15px;
            padding-right: 15px;
          }
          @media (min-width: 768px) {
            .container {
              width: 564px;
            }
          }
          @media (min-width: 992px) {
            .container {
              width: 970px;
            }
          }
          @media (min-width: 1200px) {
            .container {
              width: 1024px;
            }
          }
          .row {
            margin-left: -15px;
            margin-right: -15px;
          }
        
        
          .col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
            position: relative;
            min-height: 1px;
            padding-left: 15px;
            padding-right: 15px;
          }
          .col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {
            float: left;
          }
        
        .col {
          flex-basis: 0;
          flex-grow: 1;
          max-width: 100%; }
        
        .col-auto {
          flex: 0 0 auto;
          width: auto;
          max-width: 100%; }
        
        .col-1 {
          flex: 0 0 8.33333%;
          max-width: 8.33333%; }
        
        .col-2 {
          flex: 0 0 16.66667%;
          max-width: 16.66667%; }
        
        .col-3 {
          flex: 0 0 25%;
          max-width: 25%; }
        
        .col-4 {
          flex: 0 0 33.33333%;
          max-width: 33.33333%; }
        
        .col-5 {
          flex: 0 0 41.66667%;
          max-width: 41.66667%; }
        
        .col-6 {
          flex: 0 0 50%;
          max-width: 50%; }
        
        .col-7 {
          flex: 0 0 58.33333%;
          max-width: 58.33333%; }
        
        .col-8 {
          flex: 0 0 66.66667%;
          max-width: 66.66667%; }
        
        .col-9 {
          flex: 0 0 75%;
          max-width: 75%; }
        
        .col-10 {
          flex: 0 0 83.33333%;
          max-width: 83.33333%; }
        
        .col-11 {
          flex: 0 0 91.66667%;
          max-width: 91.66667%; }
        
        .col-12 {
          flex: 0 0 100%;
          max-width: 100%; 
        }
        @media only screen and (min-device-width: 577px) and (max-device-width: 1021px) {
          .textTitle {
            font-size: 22px;
        }
        .textWeb {
            font-size: 14px;
        }
        .box {
            padding: 30px 15px 30px 15px;
            margin-top: 20px;
        }
        .contentDetail {
            padding-top: 20px; 
            padding-bottom: 20px;
            font-size: 13px;
        }
        .textIndexDetail {
            text-indent: 30px;
            padding-top: 15px;
            line-height: 1.5;
        }
        .textTitleListDetail {
            line-height: 1.5;
            text-indent: 15px;
            padding-top: 10px;
            padding-bottom: 10px;
        }
        ul {
            padding-left: 10px;
            padding-right: 10px;
            margin-left: 10px;
            margin-right: 10px;
        }
        .textLastContent {
            padding-top: 15px;
            margin-left: 0;
        }
        .linkSocial > a > img {
            max-width: 100%;
            width: 25px;
        }
        .textContentFooter {
            padding-top: 20px;
            font-size: 11px;
        }
        .content {
            padding-top: 20px;
            padding-bottom: 20px;
        }
        .textLastFooter {
            padding-top: 15px;
            padding-bottom: 15px;
            font-size: 11px;
        }   
        .textDate {
            font-size: 13px;
            padding-bottom: 10px;
        }
        .textDocument {
            font-size: 13px;
        }
        .textDearYou {
            font-size: 13px;
            padding-bottom: 10px;
        }
        .textPosition {
            font-size: 13px;
        }
        .linkSocial > a {
            padding: 0 30px 0 0;
        }
        .linkSocial {
          text-align: center;
          padding-top: 0;
          padding-bottom: 0;
        }
            
        }
        @media (min-width: 768px) {
          .col-md-1 {
            flex: 0 0 8.33333%;
            max-width: 8.33333%; }
          .col-md-2 {
            flex: 0 0 16.66667%;
            max-width: 16.66667%; }
          .col-md-3 {
            flex: 0 0 25%;
            max-width: 25%; }
          .col-md-4 {
            flex: 0 0 33.33333%;
            max-width: 33.33333%; }
          .col-md-5 {
            flex: 0 0 41.66667%;
            max-width: 41.66667%; }
          .col-md-6 {
            flex: 0 0 50%;
            max-width: 50%; 
            width: 50%;
          }
          .col-md-7 {
            flex: 0 0 58.33333%;
            max-width: 58.33333%; }
          .col-md-8 {
            flex: 0 0 66.66667%;
            max-width: 66.66667%; }
          .col-md-9 {
            flex: 0 0 75%;
            max-width: 75%; }
          .col-md-10 {
            flex: 0 0 83.33333%;
            max-width: 83.33333%; }
          .col-md-11 {
            flex: 0 0 91.66667%;
            max-width: 91.66667%; }
          .col-md-12 {
            flex: 0 0 100%;
            max-width: 100%; }
        }
        @media only screen and (min-device-width: 320px) and (max-device-width: 576px) {
            .textTitle {
                font-size: 22px;
            }
            .textWeb {
                font-size: 14px;
            }
            .box {
                padding: 30px 15px 30px 15px;
                margin-top: 20px;
            }
            .contentDetail {
                padding-top: 20px; 
                padding-bottom: 20px;
                font-size: 13px;
            }
            .textIndexDetail {
                text-indent: 30px;
                padding-top: 15px;
                line-height: 1.5;
            }
            .textTitleListDetail {
                line-height: 1.5;
                text-indent: 15px;
                padding-top: 10px;
                padding-bottom: 10px;
            }
            ul {
                padding-left: 10px;
                padding-right: 10px;
                margin-left: 10px;
                margin-right: 10px;
            }
            .textLastContent {
                padding-top: 15px;
                margin-left: 0;
            }
            .linkSocial > a > img {
                max-width: 100%;
                width: 25px;
            }
            .textContentFooter {
                padding-top: 20px;
                font-size: 11px;
            }
            .content {
                padding-top: 20px;
                padding-bottom: 20px;
            }
            .textLastFooter {
                padding-top: 15px;
                padding-bottom: 15px;
                font-size: 11px;
            }   
            .textDate {
                font-size: 13px;
                padding-bottom: 10px;
            }
            .textDocument {
                font-size: 13px;
            }
            .textDearYou {
                font-size: 13px;
                padding-bottom: 10px;
            }
            .textPosition {
                font-size: 13px;
            }
            .linkSocial > a {
                padding: 0 30px 0 0;
            }
            .linkSocial {
              text-align: center;
              padding-top: 0;
              padding-bottom: 0;
            }
        }
        </style>
    </head>
    <body>
        <!-- height: 1182px; width: 946px; -->
        <div class="background">
            <div class="container">  
                <div class="content">
                    <div class="row">
                        <div class="col-md-12 col-12">
                            <div class="imgLogo">
                                <img src="https://dh-media.dohome.technology/share/logo.svg" alt="">
                            </div>
                            <div class="textTitle">
                                ครบ ถูก ดี
                            </div>
                            <div class="textWeb">
                                www.dohome.co.th
                            </div>
                        </div>
                        <div class="col-md-12 col-12">
                            <div class="box">
                                <div class="row" style="display:flex">
                                    <div class="col-md-6 col-xs-6">
                                        <div class="textDearYou">
                                            เรียนคุณ {full_name}
                                        </div>
                                        <div class="textPosition">
                                            ตำแหน่ง {position} <span> บริษัท {company}</span>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-xs-6">
                                        <div class="textDate">
                                            วันที่: {date}
                                        </div>
                                        <div class="textDocument">
                                            เลขที่เอกสาร: {document_no}
                                        </div>
                                    </div>
                                </div>
                                <div class="contentDetail">
                                    <div class="textIndexDetail">
                                      จากที่ท่านได้จองตารางนัดเพื่อเข้าพบฝ่ายจัดซื้อ คุณ {customer_full_name} ในเวลา(ช่วง) {customer_time} นั้น ทางฝ่ายจัดซื้อไม่สามารถยืนยันการนัดเข้าพบของท่านได้เนื่องจาก {reject_title}
                                    </div> 
                                    <div class="textIndexDetail">
                                      ทางฝ่ายจัดซื้อขอปฏิเสธการเข้าพบของบริษัทของท่านในวันและเวลาดังกล่าว  โดยทางฝ่ายจัดซื้อจะแจ้งวันที่และเวลาในการเข้าพบอีกครั้ง
                                    </div>
                                    <div class="textIndexDetail">
                                      จึงเรียนมาเพื่อทราบ 
                                    </div>
                                    <div class="textLastContent">
                                        <p>
                                            ขอเสดงความนับถือ
                                        </p>
                                        <p>
                                            ศูนย์บริการจัดซื้อและขาย
                                        </p>
                                        <p>
                                            บ. ดูโฮมจำกัด (มหาชน)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>      
            </div>
            <div class="linkSocial">
                <a href="https://www.facebook.com/DohomeOnline" target="_bank">
                    <img src="https://dh-media.dohome.technology/share/facebook_fill.svg" alt="">
                </a>
                <a href="https://www.instagram.com/dohomeonline/?hl=th" target="_bank">
                    <img src="https://dh-media.dohome.technology/share/instagram_fill.svg" alt="">
                </a>
                <a href="https://twitter.com/dohomeonline" target="_bank">
                    <img src="https://dh-media.dohome.technology/share/twitter_fill.svg" alt="">
                </a>
                <a href="https://page.line.me/mfq4602m" target="_bank">
                    <img src="https://dh-media.dohome.technology/share/line-logo_fill.svg" alt="">
                </a>
                <a href="https://www.youtube.com/user/DOHOMEOnline" target="_bank">
                    <img src="https://dh-media.dohome.technology/share/youtube_fill.svg" alt="">
                </a>
            </div>
            <div class="textContentFooter">
                <p>
                    บริษัท ดูโฮม จำกัด (มหาชน) สำนักงานใหญ่
                </p>
                <p>
                    60 ถนนวิภาวดีรังสิต สามเสนใน เขตพญาไท กรุงเทพฯ 10400
                </p>
            </div>
            <div class="textContentFooter">
                Phone: 02-027-8787<span class="borderContentFooter"></span> Email: 02-027-8787
            </div>
            <div class="textContentFooter">
                <p>
                    อีเมลการตลาดฉบับนี้ส่งถึงคุณโดย บริษัท ดูโฮม จำกัด (มหาชน) สำนักงานใหญ่
                </p>
                <p>
                    เราไม่แนะนำให้ส่งต่ออีเมลนี้ยกเว้นใช้ <a href="#" class="textLinkContentFooter">ลิงก์นี้</a>
                </p>
                <p>
                    มิฉะนั้นข้อมูลการลงทะเบียนส่วนบุคคลของคุณอาจถูกดักกรอกไว้ก่อนถึงผู้รับ
                </p>
            </div>
            <div class="textLastFooter">
                นโยบายความเป็นส่วนตัว | เปิดใน browser | ติดต่อสอบถามเพิ่มเติม
            </div>
        </div>
    </body>
    </html>`, // HTML body
};

transporter.sendMail(mailOptions, function (err, info) {
  if (err) console.log(err);
  else console.log(info);
});
