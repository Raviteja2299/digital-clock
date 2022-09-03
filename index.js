let am = "AM"
function time() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    if (h>12) {
        h=h%12
        am = "PM"
    }

    h = h<10 ? '0'+h : h
    m = m<10 ? '0'+m : m
    s = s<10 ? '0'+s : s

    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
    document.getElementById('am-pm').innerText = am;
    
    setTimeout(()=>{
        time()
    } , 1000)
}


time()