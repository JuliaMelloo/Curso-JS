    function carregar () {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var comp= document.getElementById('comp')
    msg.innerHTML = `Agora são ${hora}:${min}H`
    if (hora <= 12){
        comp.innerHTML = ('Bom dia!')
        img.src = "fotomanha.png";
        document.body.style.background = '#9fd7fd'
    } else if (hora <= 18){
        comp.innerHTML = ('Boa Tarde!')
        img.src = "fototarde.png";
        document.body.style.background = '#dfbb4'
    } else {
        comp.innerHTML = ('Boa noite!')
        img.src = "fotonoite.png";
        document.body.style.background = '#193155'
    }
}
