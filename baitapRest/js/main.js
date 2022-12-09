
let van = Number(document.getElementById("inpVan").value) ;
let su = Number(document.getElementById("inpSu").value) ;
let dia = Number(document.getElementById("inpDia").value) ;
let english = Number(document.getElementById("inpEnglish").value);


let tinhDTB = (...diem) => {
    let dtb = 0;
    let tong = 0;
    diem.map((item,index) => { 
        tong += item;
     });
    dtb = tong/diem.length ;
    return dtb;
}





let hienThi1 = ()  => {
    console.log("kg");
    let toan = Number(document.getElementById("inpToan").value) ;
    let ly = Number(document.getElementById("inpLy").value) ;
    let hoa = Number(document.getElementById("inpHoa").value) ;
    let dtbk1 = tinhDTB(toan,ly,hoa);

    document.getElementById("tbKhoi1").innerHTML = dtbk1.toFixed(2);
}

let hienThi2 = () => {
    let van = Number(document.getElementById("inpVan").value) ;
    let su = Number(document.getElementById("inpSu").value) ;
    let dia = Number(document.getElementById("inpDia").value) ;
    let english = Number(document.getElementById("inpEnglish").value);
    let dtbk2 = tinhDTB(van,su,dia,english);

    document.getElementById("tbKhoi2").innerHTML = dtbk2.toFixed(2);
}

document.getElementById("btnKhoi1").onclick = hienThi1;

document.getElementById("btnKhoi2").onclick = hienThi2;


