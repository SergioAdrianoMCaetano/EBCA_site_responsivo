<h1>MÓDULO 11| Fundamentos do CSS Responsivo</h1>

<h2>A entrega desse exercício consite em:</h2>

<ul>

​	<li>

​		<p>

​			Criar um layout responsivo de uma loja de calçados virtual;

​		</p>

​	</li>

​	<li>

​		<p>

​			Criar uma seção "sobre a loja de calçados", nesta seção teremos duas colunas uma com a imagem da loja e outra com um texto;

​		</p>

​	</li>

​	<li>

​		<p>

​			Criar uma seção de produtos onde haverá uma listagem de 4 produtos, lado a lado, com a imagem, nome e descrição do produto e um botão para adicionar ao carrinho;

​		</p>

​	</li>

​	<li>

​		<p>

​			Seguir as adaptações de layout propostas e fazer a publicação na Vercel <a href="#">Link</a>

​		</p>

​	</li>	

</ul>

<h2>Códigos para serem aplicados  no carrossel:</h2>

<p><h3>Reprodução automática</h3></p>

 <p>Será aplicada no tópico "Produtos"</p>

$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
 autoplaySpeed: 2000,
});

<br>

<p><h3>Desaparecer</h3></p>

 <p>Será aplicado à `<div>` "Sobre a Loja".</p>

 $('.fade').slick({
  	dots: true,
  	infinite: true,
  	speed: 500,
   	fade: true,
  	cssEase: 'linear'
 });



