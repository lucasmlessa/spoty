$(function() {
    function getUrlParameter(sParam) {
        var sPageURL=window.location.search.substring(1);
        var sURLVariables=sPageURL.split('&');
        for (var i=0;
        i < sURLVariables.length;
        i++) {
            var sParameterName=sURLVariables[i].split('=');
            if (sParameterName[0]==sParam) {
                return sParameterName[1];
           }
      }
 }
 var parametro = decodeURIComponent(getUrlParameter('cod'));
 console.log(parametro);
 $(function() {
     $('.param').html(parametro);
}
);

var conteudo = {
    'eletronico': {
        'titulo': 'Página de Musica Eletrônica', 'conteudo': "<img src='img/elem.jpg'/>",
   },
   'rock': {
      'titulo': 'Página de Rock', 'conteudo': "<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel perferendis ullam, est magni praesentium ex animi temporibus rem incidunt! Quo magni totam modi, consequatur repellendus, earum non in quam dignissimos.</div><div>Est maiores similique, labore reiciendis voluptatibus, nulla at, accusantium magni hic possimus mollitia fugit cumque inventore corporis doloribus dignissimos! Voluptatum ratione quam dolor aut natus similique nobis. Sed, consectetur, veniam.</div><div>Commodi ullam voluptatum dolore fugit facilis nostrum quasi quas necessitatibus maxime numquam vero quia ea exercitationem architecto, dolorum, nemo eveniet eum ex incidunt inventore. Aspernatur voluptates possimus, ea sit animi.</div><div>Quo quos officia nobis dolores maxime totam aut consequatur quia tempore nam, laudantium minima ea obcaecati, ad ullam deleniti debitis doloremque recusandae harum, fugiat provident velit? Explicabo ducimus, quia cupiditate.</div>",
  },
  'japan': {
      'titulo': 'Legalzice Japonesa ToT', 'conteudo': "<img src='img/japem.gif'/> <h2>Yatta!</h2>  <p><div class='embed-container'><iframe src='http://www.youtube.com/embed/lvBCvA1LE8o' frameborder='0' allowfullscreen></iframe></div></p>",
 }
};

if (parametro === 'rock') {
$('body').addClass('rock');
$('h1').html(conteudo.rock.titulo);
$("#conteudo").html(conteudo.rock.conteudo);
$('.well.a').show();
}
else if(parametro === 'eletronico'){
$('body').addClass('eletronico');
$('h1').html(conteudo.eletronico.titulo);
$("#conteudo").html(conteudo.eletronico.conteudo);
$('.well.a').show();
}
else if(parametro === 'japan'){
$('body').addClass('japan');
$('h1').html(conteudo.japan.titulo);
$(".logo").attr("src","img/logo2.png");
$("#conteudo").html(conteudo.japan.conteudo);
$('.well.a').show();
}

console.log(conteudo);
}
);