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
  subject: "Saminya is not happy about this.", // Mail subject
  html: `
  <head>
  <style>
        @font-face {
            font-family: 'Prompt';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/prompt/v4/-W__XJnvUD7dzB2KdNodVkI.woff2) format('woff2');
            unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
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


        .col-xs-1,
        .col-sm-1,
        .col-md-1,
        .col-lg-1,
        .col-xs-2,
        .col-sm-2,
        .col-md-2,
        .col-lg-2,
        .col-xs-3,
        .col-sm-3,
        .col-md-3,
        .col-lg-3,
        .col-xs-4,
        .col-sm-4,
        .col-md-4,
        .col-lg-4,
        .col-xs-5,
        .col-sm-5,
        .col-md-5,
        .col-lg-5,
        .col-xs-6,
        .col-sm-6,
        .col-md-6,
        .col-lg-6,
        .col-xs-7,
        .col-sm-7,
        .col-md-7,
        .col-lg-7,
        .col-xs-8,
        .col-sm-8,
        .col-md-8,
        .col-lg-8,
        .col-xs-9,
        .col-sm-9,
        .col-md-9,
        .col-lg-9,
        .col-xs-10,
        .col-sm-10,
        .col-md-10,
        .col-lg-10,
        .col-xs-11,
        .col-sm-11,
        .col-md-11,
        .col-lg-11,
        .col-xs-12,
        .col-sm-12,
        .col-md-12,
        .col-lg-12 {
            position: relative;
            min-height: 1px;
            padding-left: 15px;
            padding-right: 15px;
        }

        .col-xs-1,
        .col-xs-2,
        .col-xs-3,
        .col-xs-4,
        .col-xs-5,
        .col-xs-6,
        .col-xs-7,
        .col-xs-8,
        .col-xs-9,
        .col-xs-10,
        .col-xs-11,
        .col-xs-12 {
            float: left;
        }

        .col {
            flex-basis: 0;
            flex-grow: 1;
            max-width: 100%;
        }

        .col-auto {
            flex: 0 0 auto;
            width: auto;
            max-width: 100%;
        }

        .col-1 {
            flex: 0 0 8.33333%;
            max-width: 8.33333%;
        }

        .col-2 {
            flex: 0 0 16.66667%;
            max-width: 16.66667%;
        }

        .col-3 {
            flex: 0 0 25%;
            max-width: 25%;
        }

        .col-4 {
            flex: 0 0 33.33333%;
            max-width: 33.33333%;
        }

        .col-5 {
            flex: 0 0 41.66667%;
            max-width: 41.66667%;
        }

        .col-6 {
            flex: 0 0 50%;
            max-width: 50%;
        }

        .col-7 {
            flex: 0 0 58.33333%;
            max-width: 58.33333%;
        }

        .col-8 {
            flex: 0 0 66.66667%;
            max-width: 66.66667%;
        }

        .col-9 {
            flex: 0 0 75%;
            max-width: 75%;
        }

        .col-10 {
            flex: 0 0 83.33333%;
            max-width: 83.33333%;
        }

        .col-11 {
            flex: 0 0 91.66667%;
            max-width: 91.66667%;
        }

        .col-12 {
            flex: 0 0 100%;
            max-width: 100%;
        }

        @media only screen and (min-device-width: 577px) and (max-device-width: 1021px) {
            .textTitle {
                font-size: 22px;
            }
        }

        @media (min-width: 768px) {
            .col-md-1 {
                flex: 0 0 8.33333%;
                max-width: 8.33333%;
            }

            .col-md-2 {
                flex: 0 0 16.66667%;
                max-width: 16.66667%;
            }

            .col-md-3 {
                flex: 0 0 25%;
                max-width: 25%;
            }

            .col-md-4 {
                flex: 0 0 33.33333%;
                max-width: 33.33333%;
            }

            .col-md-5 {
                flex: 0 0 41.66667%;
                max-width: 41.66667%;
            }

            .col-md-6 {
                flex: 0 0 50%;
                max-width: 50%;
                width: 50%;
            }

            .col-md-7 {
                flex: 0 0 58.33333%;
                max-width: 58.33333%;
            }

            .col-md-8 {
                flex: 0 0 66.66667%;
                max-width: 66.66667%;
            }

            .col-md-9 {
                flex: 0 0 75%;
                max-width: 75%;
            }

            .col-md-10 {
                flex: 0 0 83.33333%;
                max-width: 83.33333%;
            }

            .col-md-11 {
                flex: 0 0 91.66667%;
                max-width: 91.66667%;
            }

            .col-md-12 {
                flex: 0 0 100%;
                max-width: 100%;
            }
        }

        @media only screen and (min-device-width: 320px) and (max-device-width: 576px) {
            .textTitle {
                font-size: 22px;
            }
        }

        body {
            background-color: #F7F7F7;
            font-family: 'Prompt';
        }

        .background {
            background-color: #F7F7F7;
            padding-top: 20px;
        }

        table {
            width: 95%;
        }

        .grid-container {
            display: grid;
            grid-template-columns: 6 6;
        }

        .box {
            background-color: white;
            height: 70%;
            width: 60%;
            border: 1px solid #E6E6E6;
            padding: 50px;
            margin: auto;
        }

        .title {
            text-align: center;
            margin-top: -20px;
        }

        .dohomelogo {
            width: 16%;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }

        .rightcorner {
            text-align: right;
            opacity: 0.5;
        }

        .content {
            text-indent: 30px;
        }

        .endtext {
            text-align: center;
            line-height: 60%;
            margin-top: 30px;
        }

        .endpage {
            text-align: center;
            margin-top: 30px;
            line-height: 92%;
            font-size: 12px;
        }

        .sociallogo {
            display: inline-block;
            max-height: 25px;
            margin-left: 10px;
            margin-right: 10px;
        }

        .orangebar {
            width: 100%;
            height: 25px;
            background-color: #F26529;
        }
    </style>
</head>

<body>
  <div class="background">
  <br/>
  <img src="https://dh-media.dohome.technology/share/logo.svg" alt="" class="dohomelogo">
  <h2 class="title">ครบ ถูก ดี</h2>
  <h4 class="title"><a href="www.dohome.co.th">www.dohome.co.th</a></h4>
    <div class="box">
      <div class="row" style="display:flex">
        <div class="col-md-6 col-xs-6">
            <div>เรียนคุณ {name}</div>
            <div>ตำแหน่ง {position} บริษัท {company}</div>
        </div>
        <div class="col-md-6 col-xs-6 rightcorner">
            <div>วันที่: {date}</div>
            <div>เลขที่เอกสาร: {document_no}</div>
        </div>
    </div>
      <p class="content">จากที่ท่านได้จองตารางนัดเพื่อเข้าพบฝ่ายจัดซื้อ คุณ{name} ในวัน{day} เวลา(ช่วง){time}นั้น
          ทางฝ่ายจัดซื้อได้ยืนยันการนัดเข้าพบของท่านในวันที่ {date} เวลา{time} ห้อง{room_number}
          หัวข้อที่ท่านเข้าพบคือ {title}</p>
      <ol>
          <li>{title_1}</li>
          <li>{title_2}</li>
          <li>{title_3}</li>
      </ol>
      <p class="content">เพื่อให้การเข้าพบฝ่ายจัดซื้อเป็นไปได้ด้วยความรวดเร็ว
          ท่านสามารถขอข้อมูลเพื่อใช้ในการเตรียมเอกสารการเข้าพบฝ่ายจัดซื้อได้จากธุรการฝ่ายจัดซื้อหรือเจ้าหน้าที่จัดซื้อหรือเจ้าหน้าที่จัดซื้อที่ดูแลบริษัทของท่าน
      </p>
      <p class="content">หากท่านไม่สามารถเข้าพบได้ตามวันที่และเวลาที่กำหนด กรุณาติดต่อฝ่ายจัดซื้อ คุณ {name}
          เบอร์โทร{phone} Email{email} ล่วงหน้าอย่างน้อย 1 วัน</p>
      <p class="content">จึงเรียนมาเพื่อทราบ</p>
      <div class="endtext">
          <p>ขอแสดงความนับถือ</p>
          <p>ศูนย์บริการจัดซื้อและขาย</p>
          <p>บ. ดูโฮมจำกัด (มหาชน)</p>
      </div>
  </div><br>
  <div class="endtext">
    <a href="https://www.facebook.com/DohomeOnline"><img src="https://dh-media.dohome.technology/share/facebook_fill.svg" alt="" class="sociallogo"></a>
    <a href="https://www.instagram.com/dohomeonline/?hl=th"><img src=" https://dh-media.dohome.technology/share/instagram_fill.svg" alt="" class="sociallogo"></a>
    <a href="https://twitter.com/dohomeonline"><img src="https://dh-media.dohome.technology/share/twitter_fill.svg" alt="" class="sociallogo"></a>
    <a href="https://page.line.me/mfq4602m"><img src="https://dh-media.dohome.technology/share/line-logo_fill.svg" alt="" class="sociallogo"></a>
    <a href="https://www.youtube.com/user/DOHOMEOnline"><img src="https://dh-media.dohome.technology/share/youtube_fill.svg" alt="" class="sociallogo"></a>
  </div>
  <div>
      <div class="endpage">
          <p>บริษัท ดูโฮม จำกัด (มหาชน) สำนักงานใหญ่</p>
          <p>60 ถนนวิภาวดีรังสิต สามเสนใน เขตพญาไท กรุงเทพฯ 10400</p>
      </div>
      <div class="endpage">
          <p>Phone: 02-027-8787 | Email: dohome-ecm@dohome.co.th</p>
      </div>
      <div class="endpage">
          <p>อีเมลการตลาดฉบับนี้ส่งถึงคุณโดย บริษัท ดูโฮม จำกัด (มหาชน) สำนักงานใหญ่</p>
          <p>เราไม่แนะนำให้ส่งต่ออีเมลนี้ยกเว้นใช้ <a href="#">ลิงก์นี้</a></p>
          <p>มิฉะนั้นข้อมูลการลงทะเบียนส่วนบุคคลของคุณอาจถูกดักกรอกไว้ก่อนถึงผู้รับ</p>
      </div>
      <div class="endpage">
          <p>นโยบายความเป็นส่วนตัว | เปิดใน browser | ติดต่อสอบถามเพิ่มเติม</p>
      </div><br/>
  </div>
  <div class="orangebar"></div>
  </div>
</body>
  `, // HTML body
};

transporter.sendMail(mailOptions, function (err, info) {
  if (err) console.log(err);
  else console.log(info);
});
