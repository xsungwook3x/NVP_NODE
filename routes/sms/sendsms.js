const { config, msg } = require('coolsms-node-sdk');
const conf=require('../../config/smsconfig.json');

// apiKey, apiSecret 설정 (설정하지 않으면 패키지 홈의 config.json 파일의 설정을 참고합니다.)
config.init({
  apiKey: conf.apiKey,
  apiSecret: conf.apiSecret
})

async function send (params = {}) {
  try {
    const result = await msg.send(params)
    console.log('RESULT:', result)
  } catch (e) {
    console.log('statusCode:', e.statusCode)
    console.log('errorCode:', e.error.errorCode)
    console.log('errorMessage:', e.error.errorMessage)
  }
}

function generateRandomCode(n) {
  let str = ''
  for (let i = 0; i < n; i++) {
    str += Math.floor(Math.random() * 10)
  }
  return str
}

const sendsms = async (req,res) => {
    const phone = req.body.phone;

    const verifyCode =generateRandomCode(6);

    const message="npv 문자확인 **번호 : "+verifyCode;
    console.log(" number: "+ phone);
    console.log(" message "+ message);
    
    try{
        send({messages:[{
            to: phone,
            text: message,
            type: conf.type,
            from: conf.from
        }]
        })
        
        
    }catch (e){
        console.log(e);
        
    }

    res.send(verifyCode);
}

module.exports = sendsms;