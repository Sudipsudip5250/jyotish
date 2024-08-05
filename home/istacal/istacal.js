export function istacal() {
  
    document.getElementById("saveName").addEventListener("click", function () {

    const a = parseInt(document.getElementById("birthHours").value, 10);
    const b = parseInt(document.getElementById("birthMinutes").value, 10);
    const c = parseInt(document.getElementById("sunHours").value, 10);
    const d = parseInt(document.getElementById("sunMinutes").value, 10);
    const k = parseInt(document.getElementById("gatGhati").value, 10);
    const l = parseInt(document.getElementById("gatPal").value, 10);
    const q = parseInt(document.getElementById("bartamanGhati").value, 10);
    const r = parseInt(document.getElementById("bartamanPal").value, 10);

    let a_a, b_a, e, f, g, rem_g, h, i, i_a, j, j_a, j_b, j_c, j_d, j_e, j_f, m, n, o, p, o_a, p_a, o_b, p_b, o_c, p_c, p_a_a, o_a_a, s, t, s_a, t_a, s_b, t_b, s_c, s_c_c, t_c, t_c_c, u, u_a, u_b, u_c, u_d, v, v_a, v_b, u_e, u_f, v_c, v_e, w, w_a, w_b, u_g, u_h, u_i, v_g, v_h, v_i, w_g, w_h, w_i;

    if (b < d) {
      a_a = a - 1;
      b_a = b + 60;
      e = a_a - c;
      f = b_a - d;
    } else {
      e = a - c;
      f = b - d;
    }

    g = Math.floor(e * 5);
    h = Math.floor(f * 5);
    i = Math.floor(g / 2);

    rem_g = g % 2;
    if (rem_g !== 0) {
      j = Math.floor(h + rem_g * 60);
      j_b = Math.floor(j / 2);
      j_c = "+60";
      j_d = g - i * 2;
      j_e = j - j_b * 2;
    } else {
      j = Math.floor(h);
      j_b = Math.floor(j / 2);
      j_c = "";
      j_d = g - i * 2;
      j_e = j - j_b * 2;
    }
    if (j_e !== 0) {
      j_f = 30;
    } else {
      j_f = "00";
    }

    i_a = i;
    j_a = j_b;
    if (j_a >= 120) {
      i_a += 2;
      j_a -= 120;
    } else if (j_a >= 60) {
      i_a += 1;
      j_a -= 60;
    }

    // bhayat
    m = Math.floor(59 - k);
    n = Math.floor(60 - l);
    o = Math.floor(m + i_a);
    p = Math.floor(n + j_a);

    o_a = o;
    p_a = p;

    if (p >= 60) {
      o_a += 1;
      p_a -= 60;
    } else {
      o_a = o;
      p_a = p;
    }

    o_b = o_a;
    p_b = p_a;

    if (o_b >= 60) {
      o_c = "-60:";
      p_c = "00";
      o_a_a = ":";
      o_b -= 60;
    } else {
      o_c = "";
      p_c = "";
      o_b = o_a;
      p_b = p_a;
      o_a_a = "";
      p_a_a = "";
    }

    // bhabog
    s = Math.floor(m + q);
    t = Math.floor(n + r);

    s_a = s;
    t_a = t;

    if (t >= 60) {
      s_a += 1;
      t_a -= 60;
    } else {
      s_a = s;
      t_a = t;
    }

    s_b = s_a;
    t_b = t_a;

    if (s >= 68) {
      s_b -= 60;
      s_c = "-60";
      s_c_c = ":";
      t_c = "00";
    } else {
      s_b = s_a;
      s_c = "";
      s_c_c = "";
      t_c = "";
      t_c_c = "";
    }

    //Charan
    u = Math.floor(s_b / 4);
    u_a = Math.floor(u * 4);
    u_b = Math.floor(s_b % 4);
    u_c = Math.floor(u_b * 60);
    u_d = Math.floor(u_c + t_a);
    v = Math.floor(u_d / 4);
    v_a = Math.floor(v * 4);
    v_b = Math.floor(u_d % 4);

    if (u_b !== 0) {
        u_e = "*60";
        
    } else {
        u_e = " ";
        
    }

    if (v_b !== 0) {
        v_c = "*60";
        v_e = Math.floor(v_b * 60);
        w = Math.floor(v_e / 4);
        w_a = Math.floor(w * 4);
        w_b = Math.floor(v_e % 4);
    } else {
        v_c = "";
        v_e = Math.floor(v_b * 60);
        w = Math.floor(v_e / 4);
        w_a = Math.floor(w * 4);
        w_b = Math.floor(v_e % 4);
    }

    // Calculating Charan
    u_g = u + u;
    u_h = u_g + u;
    u_i = u_h + u;
    v_g = v + v;
    v_h = v_g + v;
    v_i = v_h + v;
    w_g = w + w;
    w_h = w_g + w;
    w_i = w_h + w;

    // Second charan
    if (w_g >= 120) {
        v_g += 2;
        w_g -= 120;
    }
    if (w_g >= 60) {
        v_g += 1;
        w_g -= 60;
    }
    if (v_g >= 120) {
        u_g += 2;
        v_g -= 120;
    }
    if (v_g >= 60) {
        u_g += 1;
        v_g -= 60;
    }
    
    // Third charan
    if (w_h >= 120) {
        v_h += 2;
        w_h -= 120;
    }
    if (w_h >= 60) {
        v_h += 1;
        w_h -= 60;
    }
    if (v_h >= 120) {
        u_h += 2;
        v_h -= 120;
    }
    if (v_h >= 60) {
        u_h += 1;
        v_h -= 60;
    }

    // Fourth charan
    if (w_i >= 120) {
        v_i += 2;
        w_i -= 120;
    }
    if (w_i >= 60) {
        v_i += 1;
        w_i -= 60;
    }
    if (v_i >= 120) {
        u_i += 2;
        v_i -= 120;
    }
    if (v_i >= 60) {
        u_i += 1;
        v_i -= 60;
    }

    // Printing in console
    console.log("Data:" );

    // Create a div to display the form data
    const displayDiv = document.createElement("div");
    displayDiv.innerHTML = `
       <p>जन्म समय घण्टा: ${a} &nbsp;&nbsp;&nbsp; जन्म समय मिनेट: ${b}</p>
       <p>सूर्यादय घण्टा: ${c} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; सूर्यादय मिनेट: ${d}</p>
       <p>गत नक्षत्र घटि: ${k} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; गत नक्षत्र पल: ${l}</p>
       <br>
       <p> ${a} : ${b} ---- जन्म समय<p>
       <p>-&nbsp;${c} : ${d} -------सूर्यादय</p>
       <hr class="hrOne">
       <p> ${e} : ${f} <p>
       <p> &nbsp;&nbsp; *5</p>
       <hr class="hrTwo">
       <p> 2)${g}: &nbsp;${h} (${i}: &nbsp;${j_b}: ${j_f}</p>
       <p> &nbsp;&nbsp;-${i * 2} &nbsp;${j_c}</p>
       <hr class="hrTwo">
       <p> &nbsp;&nbsp;&nbsp;&nbsp;${j_d} &nbsp;&nbsp;&nbsp;${j} </p>
       <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-${j_b * 2}</p>
       <hr class="hrTwo">
       <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${j_e}</p>
       <p></p>
       <p> ईष्टकाल: ${i}:${j_b}:${j_f} </p>
       <br>


       <p>&nbsp;&nbsp;&nbsp; 60: &nbsp; 00</p>
       <p>&nbsp;&nbsp; -${k}: &nbsp; ${l} ------गत नक्षत्र</p>
       <hr class="hrThree">
       <p>&nbsp;&nbsp;&nbsp; ${m}: &nbsp; ${n}</p>
       <p>&nbsp; +${i_a}: &nbsp; ${j_a} -----ईष्टकाल</p>
       <hr class="hrThree">
       <p>&nbsp;&nbsp;&nbsp; ${o_a}: &nbsp; ${p_a}</p>
       <p>&nbsp;&nbsp;&nbsp; ${o_c} &nbsp; ${p_c}</p>
       <hr class="hrThree">
       <p>&nbsp;&nbsp;&nbsp; ${o_b} &nbsp; ${o_a_a} &nbsp; ${p_b}</p>
       <p>&nbsp;भयात्: ${o_b}: ${p_a}</p>
       <br>


       <p>&nbsp;&nbsp;&nbsp; 60: &nbsp; 00</p>
       <p>&nbsp;&nbsp; -${k}: &nbsp; ${l} ------गत नक्षत्र</p>
       <hr class="hrThree">
       <p>&nbsp;&nbsp;&nbsp; ${m}: &nbsp; ${n}</p>
       <p>&nbsp; +${q}: &nbsp; ${r} -----वर्तमान नक्षत्र</p>
       <hr class="hrThree">
       <p>&nbsp;&nbsp;&nbsp; ${s_a}: &nbsp; ${t_a}</p>
       <p>&nbsp;&nbsp;&nbsp; ${s_c}${s_c_c} &nbsp; ${t_c}</p>
       <hr class="hrThree">
       <p>&nbsp;&nbsp;&nbsp; ${s_b} &nbsp; ${s_c_c} &nbsp; ${t_b}</p>
       <p>भभोग: ${s_b}: ${t_b}</p>
       <br>


       <hr class="hrFour">
       <p>&nbsp; 4) ${s_b} ( ${u}</p>
       <p>&nbsp;&nbsp;&nbsp;&nbsp; -${u_a}</p>
       <hr class="hrFour">
       <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${u_b}</p>
       <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${u_e}</p>
       <hr class="hrFour">
       <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${u_c}</p>
       <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +${t_a}</p>
       <hr class="hrFour">
       <p>&nbsp; 4) ${u_d} (${v}</p>
       <p>&nbsp;&nbsp;&nbsp;&nbsp; -${v_a}</p>
       <hr class="hrFour">
       <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${v_b}</p>
       <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${v_c}</p>
       <hr class="hrFour">
       <p>&nbsp; 4) ${v_e} (${w}</p>
       <p>&nbsp;&nbsp;&nbsp;&nbsp; -${w_a}</p>
       <hr class="hrFour">
       <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${w_b}</p>
        <br>


       <p>&nbsp;&nbsp;&nbsp; ${u}:  ${v}:  ${w} ----------प्रथम चरण</p>
       <p>&nbsp; +${u}:  ${v}:  ${w}</p>
       <hr class="hrFive">
       <p>&nbsp;&nbsp;&nbsp; ${u_g}:  ${v_g}:  ${w_g} ----------द्वितीय चरण</p>
       <p>&nbsp; +${u}:  ${v}:  ${w}</p>
       <hr class="hrFive">
       <p>&nbsp;&nbsp;&nbsp; ${u_h}:  ${v_h}:  ${w_h} ----------तृतीय चरण</p>
       <p>&nbsp; +${u}:  ${v}:  ${w}</p>
       <hr class="hrFive">
       <p>&nbsp;&nbsp;&nbsp; ${u_i}:  ${v_i}:  ${w_i} ----------चतुर्थी चरण</p>

     `;

    // Append the div to the body or a specific container
    const outputContainer = document.getElementById("output");
    outputContainer.innerHTML = ""; // Clear previous data
    outputContainer.appendChild(displayDiv);
  }); 
}
