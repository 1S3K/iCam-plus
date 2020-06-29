var fs = require('fs');

function compensate(val) {
    if (val < 10) {
        val = "0" + val;
    }
    return val;
} 

        var sh = 00;
        var sm= 00;
        var ss = 11;
        
        var eh = 00;
        var em= 00;
        var es = 11; 

        if (ss <= 55) {
          es += 5;
        } else {
          es -= 55;
          if (sm != 59) {
            em += 1;
          } else {
            em = 00;
            eh += 1;
          }
        }

        sh = compensate(sh);
        sm = compensate(sm);
        ss = compensate(ss);
        eh = compensate(eh);
        em = compensate(em);
        es = compensate(es);

        var start = sh +":"+sm+":"+ss+".000";
        var end = eh +":"+em+":"+es+".000";

        var text = fs.readFileSync('subtitle_kr.vtt', 'utf8');
        var appendVal = "\n\n" + start + " --> " + end + " line:1 position:99% align:end size:50%" + "\n테스트";
        text += appendVal;
        fs.writeFileSync('subtitle_kr.vtt', text, 'utf-8');