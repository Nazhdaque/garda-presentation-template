(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function l(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(t){if(t.ep)return;t.ep=!0;const i=l(t);fetch(t.href,i)}})();const c=`<article class="slide __slide-1 layout-center">
	<div class="scroll-down">
		<div class="scroll-down__chevron"></div>
		<div class="scroll-down__chevron"></div>
		<div class="scroll-down__chevron"></div>
		<span class="scroll-down__text">Scroll down</span>
	</div>

	<div class="slide__top-group">
		<a href="#"
			 class="brand-logo"
			 aria-label="home">
			<img src="./images/logo-w.svg"
					 alt="brand-logo">
		</a>
	</div>

	<div class="slide-ttl width-x z-up">
		<h1 class="fs-3xl fw-eb">Garda presentation template</h1>
		<p class="fs-xl fw-eb">by Nazhdaque</p>
	</div>

	<div class="grid-x z-up cards-plain -ttl-aside">
		<section class="card-plain">
			<div class="img-box icon-bg">
				<img class="o-fit-cover"
						 loading="lazy"
						 decoding="async"
						 src="./images/icons/icon-dbs-21-w.svg"
						 alt="">
			</div>
			<h2 class="card-plain__ttl fs-md fw-eb">Ready-to-use components</h2>
			<div class="card-plain__body">
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita optio pariatur distinctio ducimus? Quasi
					consectetur, quo fugiat iusto repellendus harum.</p>
			</div>
		</section>

		<section class="card-plain">
			<div class="img-box icon-bg">
				<img class="o-fit-cover"
						 loading="lazy"
						 decoding="async"
						 src="./images/icons/icon-bus-09-w.svg"
						 alt="">
			</div>
			<h2 class="card-plain__ttl fs-md fw-eb">Responsive layout</h2>
			<div class="card-plain__body">
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora explicabo nostrum neque, autem delectus
					ullam enim est officiis illum alias pariatur, deserunt laboriosam vero eligendi! Eum similique ex nostrum
					quisquam.</p>
			</div>
		</section>

		<section class="card-plain">
			<div class="img-box icon-bg">
				<img class="o-fit-cover"
						 loading="lazy"
						 decoding="async"
						 src="./images/icons/icon-apr-36-w.svg"
						 alt="">
			</div>
			<h2 class="card-plain__ttl fs-md fw-eb">Сorporate style design</h2>
			<div class="card-plain__body">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus libero cum blanditiis pariatur odio enim
					corrupti tenetur quod aliquam quis officia sequi consectetur voluptas ullam, unde non ab omnis, hic,
					accusantium dolorem. Est quae quasi numquam placeat sit autem inventore?</p>
			</div>
		</section>

		<section class="card-plain">
			<div class="img-box icon-bg">
				<img class="o-fit-cover"
						 loading="lazy"
						 decoding="async"
						 src="./images/icons/icon-usr-38-w.svg"
						 alt="">
			</div>
			<h2 class="card-plain__ttl fs-md fw-eb">Customizable and reusable</h2>
			<div class="card-plain__body">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel perferendis et tenetur!</p>
			</div>
		</section>
</article>`,r=`<article class="slide __slide-2 layout-center">
	<div class="slide__top-group">
		<div class="slide-ttl width-x z-up">
			<h1 class="fs-2xl fw-eb">Plain cards</h1>
			<p class="fs-lg txt-grd">With icons</p>
		</div>
		<a href="#"
			 class="brand-logo"
			 aria-label="home">
			<img src="./images/logo-b.svg"
					 alt="brand-logo">
		</a>
	</div>

	<div class="grid-x z-up cards-plain width-x">
		<section class="card-plain">
			<div class="img-box icon-bg">
				<img class="o-fit-cover"
						 loading="lazy"
						 decoding="async"
						 src="./images/icons/icon-dbs-21-b.svg"
						 alt="">
			</div>
			<div class="card-plain__body">
				<h2 class="card-plain__ttl fs-md fw-eb">Lorem ipsum dolor</h2>
				<p><a href="#"
						 target="_blank"
						 rel="noopener noreferrer"
						 class="txt-link">Lorem ipsum</a> dolor sit amet consectetur adipisicing elit. Recusandae voluptate
					et voluptatibus reprehenderit
					quibusdam quo, nobis repudiandae blanditiis dolore fuga, nisi voluptates officia facere quia doloribus
					repellat autem, eius eaque accusamus alias. Natus architecto quas quidem fuga amet aspernatur labore nulla,
					fugiat voluptates in, sequi reiciendis et cupiditate, nobis voluptatum.</p>
			</div>
		</section>

		<section class="card-plain -flow-col">
			<div class="img-box icon-bg">
				<img class="o-fit-cover"
						 loading="lazy"
						 decoding="async"
						 src="./images/icons/icon-bus-09-b.svg"
						 alt="">
			</div>
			<div class="card-plain__body">
				<h2 class="card-plain__ttl fs-md fw-eb">Lorem ipsum dolor</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sequi maxime perferendis necessitatibus!
					Facilis in fugit beatae fugiat iste! Provident, explicabo quia delectus nostrum ratione similique nobis cum!
					Ea, tempore accusantium ab aspernatur inventore perferendis accusamus similique deleniti consequatur sunt.</p>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente illum omnis ab dolores veniam delectus
					obcaecati similique, inventore provident dolorum.</p>
			</div>
		</section>

		<section class="card-plain -ttl-aside">
			<div class="img-box icon-bg">
				<img class="o-fit-cover"
						 loading="lazy"
						 decoding="async"
						 src="./images/icons/icon-apr-36-b.svg"
						 alt="">
			</div>
			<h2 class="card-plain__ttl fs-md fw-eb">Lorem ipsum dolor</h2>
			<div class="card-plain__body">
				<ul class="list-bullet">
					<li>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, amet.</p>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia doloremque dignissimos veritatis
							iste ratione earum.</p>
					</li>
					<li>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
						<ul class="list-bullet">
							<li class="fs-sm">Lorem ipsum dolor sit amet.</li>
							<li class="fs-sm">Lorem ipsum dolor sit amet consectetur adipisicing.</li>
							<li class="fs-sm">Lorem ipsum dolor sit.</li>
						</ul>
					</li>
					<li>
						<p>Lorem ipsum dolor sit amet consectetur.</p>
					</li>
				</ul>
			</div>
		</section>

		<!-- <section class="card-plain -framed">
			<div class="img-box icon-bg">
				<img class="o-fit-cover"
						 loading="lazy"
						 decoding="async"
						 src="./images/icons/icon-usr-38-b.svg"
						 alt="">
			</div>
			<div class="card-plain__body">
				<h2 class="card-plain__ttl fs-md fw-eb">Lorem ipsum dolor</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit aperiam mollitia ducimus veritatis saepe
					similique, iusto nihil totam temporibus?</p>
			</div>
		</section> -->
	</div>
</article>`,d=`<article class="slide __slide-3 layout-center">
	<div class="slide__top-group">
		<div class="slide-ttl width-x z-up">
			<h1 class="fs-2xl fw-eb">Framed cards</h1>
			<p class="fs-lg txt-grd">With icons</p>
		</div>
		<a href="#"
			 class="brand-logo"
			 aria-label="home">
			<img src="./images/logo-w.svg"
					 alt="brand-logo">
		</a>
	</div>

	<div class="cards-framed grid-x">
		<section class="card-framed">
			<div class="card-framed__head">
				<div class="card-framed__icon img-box icon-bg">
					<img class="inner-icon"
							 src="./images/icons/icon-dbs-23-w.svg"
							 alt="">
				</div>
			</div>
			<div class="card-framed__body">
				<div class="card-framed__txt">
					<h2 class="card-framed__inner-ttl fs-lg fw-eb txt-grd">Lorem ipsum dolor sit</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, eum. Maiores
						sapiente tenetur reiciendis eos non eius unde quam officia illum quos, quisquam iste error.</p>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur nisi
						temporibus magnam doloribus tempore, voluptates ullam dicta quod velit at. Perspiciatis voluptates
						laborum maxime doloremque? Libero culpa hic tempora at excepturi rerum dolor deserunt officia assumenda,
						mollitia laborum inventore! Culpa.</p>
					<p class="fs-sm ital">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione optio veniam vel vero.
						Nihil voluptas
						perferendis quis maxime nulla sed sequi magni, consectetur excepturi debitis!</p>
				</div>
			</div>
		</section>

		<section class="card-framed">
			<div class="card-framed__head">
				<h2 class="card-framed__ttl fw-eb">Lorem ipsum dolor sit</h2>
			</div>
			<div class="card-framed__body xs-flow-row">
				<div class="card-framed__icon img-box icon-bg">
					<img class="inner-icon"
							 src="./images/icons/icon-set-03-w.svg"
							 alt="">
				</div>
				<div class="card-framed__txt">
					<h3 class="card-framed__inner-ttl fs-lg fw-eb">Lorem ipsum dolor sit</h3>
					<p class="txt-grd">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias voluptates
						tempora quae debitis molestiae eveniet? Minima blanditiis laudantium commodi necessitatibus dolor, ipsa
						odio nisi perspiciatis ab, aperiam quas eveniet nobis nam molestias beatae exercitationem fugiat ratione
						enim voluptatum dolorem facere qui vel dolores? Vero, totam maiores voluptas, enim laudantium quaerat
						fugit placeat corporis deleniti quo cum, libero sequi! Necessitatibus, quae!</p>
				</div>
			</div>
		</section>

		<section class="card-framed">
			<div class="card-framed__head">
				<div class="card-framed__icon img-box icon-bg">
					<img class="inner-icon"
							 src="./images/icons/icon-dev-21-w.svg"
							 alt="">
				</div>
				<h2 class="card-framed__ttl fw-eb fs-xl">Lorem ipsum</h2>
			</div>
			<div class="card-framed__body">
				<div class="card-framed__txt">
					<h3 class="card-framed__inner-ttl fs-lg fw-eb clr-1b">Lorem ipsum dolor sit</h3>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint unde hic optio officia
						praesentium, blanditiis natus quidem aut laboriosam eveniet alias doloremque molestiae reiciendis iusto
						delectus et provident velit earum totam sit explicabo ea consectetur repudiandae vel. Ipsum praesentium
						consectetur sit nemo ratione rerum libero temporibus nesciunt. Architecto quidem vero nihil, ea eum sint
						asperiores debitis sequi impedit possimus et?</p>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia repellat obcaecati,
						doloribus eaque veniam beatae ut velit deserunt eum labore dolore fugit nostrum voluptatibus, laborum
						odit quas? Similique, magnam repellendus.</p>
				</div>
			</div>
		</section>
	</div>
</article>`,m=`<article class="slide __slide-4 layout-center z-up">
	<div class="slide__top-group">
		<div class="slide-ttl width-x z-up">
			<h1 class="fs-2xl fw-eb">Ordered list</h1>
			<p class="fs-lg txt-grd">Based on plain cards</p>
		</div>
		<a href="#"
			 class="brand-logo"
			 aria-label="home">
			<img src="./images/logo-w.svg"
					 alt="brand-logo">
		</a>
	</div>

	<ol class="grid-x z-up cards-plain ordered-list">
		<li class="card-plain">
			<div class="img-box icon-bg fs-2xl"></div>
			<div class="card-plain__body">
				<h2 class="card-plain__ttl fs-md fw-eb clr-1b">Lorem ipsum dolor</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit aperiam mollitia ducimus veritatis saepe
					similique, iusto nihil totam temporibus?</p>
			</div>
		</li>

		<li class="card-plain -flow-col">
			<div class="img-box icon-bg fs-2xl"></div>
			<div class="card-plain__body">
				<h2 class="card-plain__ttl fs-md fw-eb">Lorem ipsum dolor</h2>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto enim ipsa reprehenderit voluptatum quasi
					autem.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatum quos, repudiandae quidem molestiae
					veniam!</p>
			</div>
		</li>

		<li class="card-plain -ttl-aside">
			<div class="img-box icon-bg fs-2xl"></div>
			<h2 class="card-plain__ttl fs-md fw-eb">Lorem ipsum dolor</h2>
			<div class="card-plain__body">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis enim, nam soluta velit iure, nemo quaerat
					sit ut voluptatum minima esse dolore maiores magnam ea beatae earum blanditiis quasi reiciendis.</p>
			</div>
		</li>

		<li>
			<p class="fs-lg fw-eb txt-bg width-x">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur odio
				maiores odit consectetur magnam ratione dolores hic nesciunt.</p>
		</li>

		<!-- <li class="card-plain -ttl-aside -framed">
			<div class="img-box icon-bg fs-2xl txt-grd"></div>
			<h2 class="card-plain__ttl fs-md fw-eb">Lorem ipsum dolor</h2>
			<div class="card-plain__body">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit aperiam mollitia ducimus veritatis saepe
					similique, iusto nihil totam temporibus?</p>
			</div>
		</li> -->
	</ol>
</article>`,u=`<article class="slide __slide-5 layout-center">
	<div class="slide__top-group">
		<div class="slide-ttl width-x z-up">
			<h1 class="fs-2xl fw-eb">Ordered list</h1>
			<p class="fs-lg txt-grd">Based on framed cards</p>
		</div>
		<a href="#"
			 class="brand-logo"
			 aria-label="home">
			<img src="./images/logo-b.svg"
					 alt="brand-logo">
		</a>
	</div>

	<div class="cards-framed grid-x ordered-list">
		<section class="card-framed">
			<div class="card-framed__head">
				<div class="card-framed__icon img-box icon-bg fs-2xl"></div>
			</div>
			<div class="card-framed__body">
				<div class="card-framed__txt">
					<h2 class="card-framed__inner-ttl fs-lg fw-eb txt-grd">Lorem ipsum dolor sit</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, eum. Maiores
						sapiente tenetur reiciendis eos non eius unde quam officia illum quos, quisquam iste error.</p>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur nisi
						temporibus magnam doloribus tempore, voluptates ullam dicta quod velit at. Perspiciatis voluptates
						laborum maxime doloremque? Libero culpa hic tempora at excepturi rerum dolor deserunt officia assumenda,
						mollitia laborum inventore! Culpa.</p>
					<p class="fs-sm ital">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione optio veniam vel vero.
						Nihil voluptas
						perferendis quis maxime nulla sed sequi magni, consectetur excepturi debitis!</p>
				</div>
			</div>
		</section>

		<section class="card-framed">
			<div class="card-framed__head">
				<h2 class="card-framed__ttl fw-eb">Lorem ipsum dolor sit</h2>
			</div>
			<div class="card-framed__body xs-flow-row">
				<div class="card-framed__icon img-box icon-bg fs-2xl"></div>
				<div class="card-framed__txt">
					<h3 class="card-framed__inner-ttl fs-lg fw-eb">Lorem ipsum dolor sit</h3>
					<p class="txt-grd">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias voluptates
						tempora quae debitis molestiae eveniet? Minima blanditiis laudantium commodi necessitatibus dolor, ipsa
						odio nisi perspiciatis ab, aperiam quas eveniet nobis nam molestias beatae exercitationem fugiat ratione
						enim voluptatum dolorem facere qui vel dolores? Vero, totam maiores voluptas, enim laudantium quaerat
						fugit placeat corporis deleniti quo cum, libero sequi! Necessitatibus, quae!</p>
				</div>
			</div>
		</section>

		<section class="card-framed">
			<div class="card-framed__head">
				<div class="card-framed__icon img-box icon-bg fs-2xl"></div>
				<h2 class="card-framed__ttl fw-eb fs-xl">Lorem ipsum</h2>
			</div>
			<div class="card-framed__body">
				<div class="card-framed__txt">
					<h3 class="card-framed__inner-ttl fs-lg fw-eb clr-1b">Lorem ipsum dolor sit</h3>
					<ul class="list-bullet">
						<li>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, amet.</p>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia doloremque dignissimos veritatis
								iste ratione earum.</p>
						</li>
						<li>
							<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
							<ul class="list-bullet">
								<li class="fs-sm">Lorem ipsum dolor sit amet.</li>
								<li class="fs-sm">Lorem ipsum dolor sit amet consectetur adipisicing.</li>
								<li class="fs-sm">Lorem ipsum dolor sit.</li>
							</ul>
						</li>
						<li>
							<p>Lorem ipsum dolor sit amet consectetur.</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	</div>
</article>`,p=`<article class="slide __slide-6 layout-center z-up">
	<div class="slide__top-group">
		<div class="slide-ttl width-x z-up">
			<h1 class="fs-2xl fw-eb">Unordered list with icons</h1>
			<p class="fs-lg txt-grd">Any icons, with titles / with no titles</p>
		</div>
		<a href="#"
			 class="brand-logo"
			 aria-label="home">
			<img src="./images/logo-w.svg"
					 alt="brand-logo">
		</a>
	</div>

	<div class="grid-x width-x  cards-plain -list-icon">
		<section class="card-plain -flow-col">
			<div class="img-box check-mark">
				<img class="o-fit-cover"
						 loading="lazy"
						 decoding="async"
						 src="./images/icons/icon-check-mark-w.svg"
						 alt="">
			</div>
			<div class="card-plain__body">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

				<ul class="list-bullet">
					<li>
						<p>Lorem ipsum dolor sit amet.</p>
					</li>
					<li>
						<p>Lorem ipsum dolor sit amet consectetur.</p>
					</li>
					<li>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
					</li>
				</ul>
			</div>
		</section>

		<section class="card-plain -flow-col">
			<div class="img-box check-mark">
				<img class="o-fit-cover"
						 loading="lazy"
						 decoding="async"
						 src="./images/icons/icon-check-mark-w.svg"
						 alt="">
			</div>
			<div class="card-plain__body">
				<h2 class="card-plain__ttl fs-md fw-eb">Lorem ipsum dolor</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, aperiam.</p>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, eaque eos minima quibusdam unde magni
					possimus maxime nulla aperiam architecto!</p>
			</div>
		</section>

		<section class="card-plain -flow-col">
			<div class="img-box check-mark">
				<img class="o-fit-cover"
						 loading="lazy"
						 decoding="async"
						 src="./images/icons/icon-check-mark-w.svg"
						 alt="">
			</div>
			<div class="card-plain__body">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis excepturi nesciunt laborum, cumque atque
					voluptatum in a minus blanditiis inventore est sunt labore nostrum impedit odit, asperiores unde! Itaque,
					nulla.</p>
			</div>
		</section>

		<!-- // -->

		<section class="card-plain -flow-col">
			<div class="img-box cross-mark">
				<img class="o-fit-cover"
						 loading="lazy"
						 decoding="async"
						 src="./images/icons/icon-cross-mark-w.svg"
						 alt="">
			</div>
			<div class="card-plain__body">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eligendi ad rem doloribus accusantium quasi
					pariatur, nemo repudiandae beatae quod!</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam velit, expedita amet explicabo aperiam atque!
				</p>
			</div>
		</section>

		<section class="card-plain -flow-col">
			<div class="img-box cross-mark">
				<img class="o-fit-cover"
						 loading="lazy"
						 decoding="async"
						 src="./images/icons/icon-cross-mark-w.svg"
						 alt="">
			</div>
			<div class="card-plain__body">
				<h2 class="card-plain__ttl fs-md fw-eb">Lorem ipsum dolor</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ducimus ad quidem doloribus rem minima.</p>
			</div>
		</section>

		<section class="card-plain -flow-col">
			<div class="img-box cross-mark">
				<img class="o-fit-cover"
						 loading="lazy"
						 decoding="async"
						 src="./images/icons/icon-cross-mark-w.svg"
						 alt="">
			</div>
			<div class="card-plain__body">
				<h2 class="card-plain__ttl fs-md fw-eb">Lorem ipsum dolor</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ducimus ad quidem doloribus rem minima.</p>
				<ul class="list-bullet">
					<li>
						<p>Lorem ipsum dolor sit amet.</p>
					</li>
					<li>
						<p>Lorem ipsum dolor sit.</p>
					</li>
					<li>
						<p>Lorem ipsum dolor.</p>
					</li>
				</ul>
			</div>
		</section>
	</div>
</article>`,g=`<article class="slide __slide-7 layout-center z-up">
	<div class="slide__top-group">
		<div class="slide-ttl width-x z-up">
			<h1 class="fs-2xl fw-eb">Plain cards with images</h1>
			<p class="fs-lg txt-grd">Options: figcaption, icon inside</p>
		</div>
		<a href="#"
			 class="brand-logo"
			 aria-label="home">
			<img src="./images/logo-b.svg"
					 alt="brand-logo">
		</a>
	</div>

	<div class="grid-x z-up cards-plain width-x">
		<section class="card-plain">
			<figure class="img-box card-plain__img">
				<div class="img-box icon-bg z-up">
					<img class="o-fit-cover"
							 loading="lazy"
							 decoding="async"
							 src="./images/icons/icon-usr-38-w.svg"
							 alt="">
				</div>
				<img class="o-fit-cover"
						 loading="lazy"
						 decoding="async"
						 src="./images/img-1.webp"
						 alt="">
				<figcaption>This is figcaption</figcaption>
			</figure>

			<div class="card-plain__body">
				<h2 class="card-plain__ttl fs-md fw-eb">Lorem ipsum dolor</h2>
				<p><a href="#"
						 target="_blank"
						 rel="noopener noreferrer"
						 class="txt-link">Lorem ipsum</a> dolor sit amet consectetur adipisicing elit. Recusandae voluptate
					et voluptatibus reprehenderit
					quibusdam quo, nobis repudiandae blanditiis dolore fuga, nisi voluptates officia facere quia doloribus
					repellat autem, eius eaque accusamus alias. Natus architecto quas quidem fuga amet aspernatur labore nulla,
					fugiat voluptates in, sequi reiciendis et cupiditate, nobis voluptatum.</p>
			</div>
		</section>

		<section class="card-plain">
			<figure class="img-box card-plain__img order-up">
				<div class="img-box icon-bg z-up">
					<img class="o-fit-cover"
							 loading="lazy"
							 decoding="async"
							 src="./images/icons/icon-usr-38-w.svg"
							 alt="">
				</div>
				<img class="o-fit-cover"
						 loading="lazy"
						 decoding="async"
						 src="./images/img-2.webp"
						 alt="">
				<figcaption>This is figcaption</figcaption>
			</figure>

			<div class="card-plain__body">
				<h2 class="card-plain__ttl fs-md fw-eb">Lorem ipsum dolor</h2>
				<p><a href="#"
						 target="_blank"
						 rel="noopener noreferrer"
						 class="txt-link">Lorem ipsum</a> dolor sit amet consectetur adipisicing elit. Recusandae voluptate
					et voluptatibus reprehenderit
					quibusdam quo, nobis repudiandae blanditiis dolore fuga, nisi voluptates officia facere quia doloribus
					repellat autem, eius eaque accusamus alias. Natus architecto quas quidem fuga amet aspernatur labore nulla,
					fugiat voluptates in, sequi reiciendis et cupiditate, nobis voluptatum.</p>
			</div>
		</section>
	</div>
</article>`,s=document.querySelector(".main-content");s.insertAdjacentHTML("beforeend",c);s.insertAdjacentHTML("beforeend",r);s.insertAdjacentHTML("beforeend",d);s.insertAdjacentHTML("beforeend",m);s.insertAdjacentHTML("beforeend",u);s.insertAdjacentHTML("beforeend",p);s.insertAdjacentHTML("beforeend",g);const v=(a,n)=>{document.querySelectorAll(`${a} ${n}`).forEach(e=>{const t=e.closest(`${a}`),i=()=>{e.style.display="none",t.removeEventListener("scrollend",i)};t.addEventListener("scrollend",i)})};v(".main-content",".scroll-down");
