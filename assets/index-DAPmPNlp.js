(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();const l=`<article class="slide __slide-1 layout-center">\r
	<div class="scroll-down">\r
		<div class="scroll-down__chevron"></div>\r
		<div class="scroll-down__chevron"></div>\r
		<div class="scroll-down__chevron"></div>\r
		<span class="scroll-down__text">Scroll down</span>\r
	</div>\r
\r
	<div class="slide__top-group">\r
		<a href="#"\r
			 class="brand-logo"\r
			 aria-label="home">\r
			<img src="./images/logo-w.svg"\r
					 alt="brand-logo">\r
		</a>\r
	</div>\r
\r
	<div class="slide-ttl width-x z-up">\r
		<h1 class="fs-3xl fw-eb">Garda presentation template</h1>\r
		<p class="fs-xl fw-eb">by Nazhdaque</p>\r
	</div>\r
\r
	<div class="grid-x z-up plain-cards -ttl-aside">\r
		<section class="plain-card">\r
			<div class="img-box icon-bg">\r
				<img class="o-fit-cover"\r
						 loading="lazy"\r
						 decoding="async"\r
						 src="./images/icons/icon-dbs-21-w.svg"\r
						 alt="">\r
			</div>\r
			<h2 class="plain-card__ttl fs-md fw-eb">Ready-to-use components</h2>\r
			<div class="plain-card__body">\r
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita optio pariatur distinctio ducimus? Quasi\r
					consectetur, quo fugiat iusto repellendus harum.</p>\r
			</div>\r
		</section>\r
\r
		<section class="plain-card">\r
			<div class="img-box icon-bg">\r
				<img class="o-fit-cover"\r
						 loading="lazy"\r
						 decoding="async"\r
						 src="./images/icons/icon-bus-09-w.svg"\r
						 alt="">\r
			</div>\r
			<h2 class="plain-card__ttl fs-md fw-eb">Responsive layout</h2>\r
			<div class="plain-card__body">\r
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora explicabo nostrum neque, autem delectus\r
					ullam enim est officiis illum alias pariatur, deserunt laboriosam vero eligendi! Eum similique ex nostrum\r
					quisquam.</p>\r
			</div>\r
		</section>\r
\r
		<section class="plain-card">\r
			<div class="img-box icon-bg">\r
				<img class="o-fit-cover"\r
						 loading="lazy"\r
						 decoding="async"\r
						 src="./images/icons/icon-apr-36-w.svg"\r
						 alt="">\r
			</div>\r
			<h2 class="plain-card__ttl fs-md fw-eb">Сorporate style design</h2>\r
			<div class="plain-card__body">\r
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus libero cum blanditiis pariatur odio enim\r
					corrupti tenetur quod aliquam quis officia sequi consectetur voluptas ullam, unde non ab omnis, hic,\r
					accusantium dolorem. Est quae quasi numquam placeat sit autem inventore?</p>\r
			</div>\r
		</section>\r
\r
		<section class="plain-card">\r
			<div class="img-box icon-bg">\r
				<img class="o-fit-cover"\r
						 loading="lazy"\r
						 decoding="async"\r
						 src="./images/icons/icon-usr-38-w.svg"\r
						 alt="">\r
			</div>\r
			<h2 class="plain-card__ttl fs-md fw-eb">Customizable and reusable</h2>\r
			<div class="plain-card__body">\r
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel perferendis et tenetur!</p>\r
			</div>\r
		</section>\r
</article>`,c=`<article class="slide __slide-2 layout-center">\r
	<div class="slide__top-group">\r
		<div class="slide-ttl width-x z-up">\r
			<h1 class="fs-2xl fw-eb">Plain cards</h1>\r
			<p class="fs-lg txt-grd">With icons</p>\r
		</div>\r
		<a href="#"\r
			 class="brand-logo"\r
			 aria-label="home">\r
			<img src="./images/logo-b.svg"\r
					 alt="brand-logo">\r
		</a>\r
	</div>\r
\r
	<div class="grid-x z-up plain-cards width-x">\r
		<section class="plain-card">\r
			<div class="img-box icon-bg">\r
				<img class="o-fit-cover"\r
						 loading="lazy"\r
						 decoding="async"\r
						 src="./images/icons/icon-dbs-21-b.svg"\r
						 alt="">\r
			</div>\r
			<div class="plain-card__body">\r
				<h2 class="plain-card__ttl fs-md fw-eb">Lorem ipsum dolor</h2>\r
				<p><a href="#"\r
						 target="_blank"\r
						 rel="noopener noreferrer"\r
						 class="txt-link">Lorem ipsum</a> dolor sit amet consectetur adipisicing elit. Recusandae voluptate\r
					et voluptatibus reprehenderit\r
					quibusdam quo, nobis repudiandae blanditiis dolore fuga, nisi voluptates officia facere quia doloribus\r
					repellat autem, eius eaque accusamus alias. Natus architecto quas quidem fuga amet aspernatur labore nulla,\r
					fugiat voluptates in, sequi reiciendis et cupiditate, nobis voluptatum.</p>\r
			</div>\r
		</section>\r
\r
		<section class="plain-card -flow-col">\r
			<div class="img-box icon-bg">\r
				<img class="o-fit-cover"\r
						 loading="lazy"\r
						 decoding="async"\r
						 src="./images/icons/icon-bus-09-b.svg"\r
						 alt="">\r
			</div>\r
			<div class="plain-card__body">\r
				<h2 class="plain-card__ttl fs-md fw-eb">Lorem ipsum dolor</h2>\r
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sequi maxime perferendis necessitatibus!\r
					Facilis in fugit beatae fugiat iste! Provident, explicabo quia delectus nostrum ratione similique nobis cum!\r
					Ea, tempore accusantium ab aspernatur inventore perferendis accusamus similique deleniti consequatur sunt.</p>\r
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente illum omnis ab dolores veniam delectus\r
					obcaecati similique, inventore provident dolorum.</p>\r
			</div>\r
		</section>\r
\r
		<section class="plain-card -ttl-aside">\r
			<div class="img-box icon-bg">\r
				<img class="o-fit-cover"\r
						 loading="lazy"\r
						 decoding="async"\r
						 src="./images/icons/icon-apr-36-b.svg"\r
						 alt="">\r
			</div>\r
			<h2 class="plain-card__ttl fs-md fw-eb">Lorem ipsum dolor</h2>\r
			<div class="plain-card__body">\r
				<ul class="bulleted-list">\r
					<li>\r
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, amet.</p>\r
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia doloremque dignissimos veritatis\r
							iste ratione earum.</p>\r
					</li>\r
					<li>\r
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>\r
						<ul class="bulleted-list">\r
							<li class="fs-sm">Lorem ipsum dolor sit amet.</li>\r
							<li class="fs-sm">Lorem ipsum dolor sit amet consectetur adipisicing.</li>\r
							<li class="fs-sm">Lorem ipsum dolor sit.</li>\r
						</ul>\r
					</li>\r
					<li>\r
						<p>Lorem ipsum dolor sit amet consectetur.</p>\r
					</li>\r
				</ul>\r
			</div>\r
		</section>\r
\r
		<!-- <section class="plain-card -framed">\r
			<div class="img-box icon-bg">\r
				<img class="o-fit-cover"\r
						 loading="lazy"\r
						 decoding="async"\r
						 src="./images/icons/icon-usr-38-b.svg"\r
						 alt="">\r
			</div>\r
			<div class="plain-card__body">\r
				<h2 class="plain-card__ttl fs-md fw-eb">Lorem ipsum dolor</h2>\r
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit aperiam mollitia ducimus veritatis saepe\r
					similique, iusto nihil totam temporibus?</p>\r
			</div>\r
		</section> -->\r
	</div>\r
</article>`,d=`<article class="slide __slide-3 layout-center">\r
	<div class="slide__top-group">\r
		<div class="slide-ttl width-x z-up">\r
			<h1 class="fs-2xl fw-eb">Framed cards</h1>\r
			<p class="fs-lg txt-grd">With icons</p>\r
		</div>\r
		<a href="#"\r
			 class="brand-logo"\r
			 aria-label="home">\r
			<img src="./images/logo-w.svg"\r
					 alt="brand-logo">\r
		</a>\r
	</div>\r
\r
	<div class="framed-cards grid-x">\r
		<section class="framed-card">\r
			<div class="framed-card__head">\r
				<div class="framed-card__icon img-box icon-bg">\r
					<img class="inner-icon"\r
							 src="./images/icons/icon-dbs-23-w.svg"\r
							 alt="">\r
				</div>\r
			</div>\r
			<div class="framed-card__body">\r
				<div class="framed-card__txt">\r
					<h2 class="framed-card__inner-ttl fs-lg fw-eb txt-grd">Lorem ipsum dolor sit</h2>\r
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, eum. Maiores\r
						sapiente tenetur reiciendis eos non eius unde quam officia illum quos, quisquam iste error.</p>\r
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur nisi\r
						temporibus magnam doloribus tempore, voluptates ullam dicta quod velit at. Perspiciatis voluptates\r
						laborum maxime doloremque? Libero culpa hic tempora at excepturi rerum dolor deserunt officia assumenda,\r
						mollitia laborum inventore! Culpa.</p>\r
					<p class="fs-sm ital">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione optio veniam vel vero.\r
						Nihil voluptas\r
						perferendis quis maxime nulla sed sequi magni, consectetur excepturi debitis!</p>\r
				</div>\r
			</div>\r
		</section>\r
\r
		<section class="framed-card">\r
			<div class="framed-card__head">\r
				<h2 class="framed-card__ttl fw-eb">Lorem ipsum dolor sit</h2>\r
			</div>\r
			<div class="framed-card__body xs-flow-row">\r
				<div class="framed-card__icon img-box icon-bg">\r
					<img class="inner-icon"\r
							 src="./images/icons/icon-set-03-w.svg"\r
							 alt="">\r
				</div>\r
				<div class="framed-card__txt">\r
					<h3 class="framed-card__inner-ttl fs-lg fw-eb">Lorem ipsum dolor sit</h3>\r
					<p class="txt-grd">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias voluptates\r
						tempora quae debitis molestiae eveniet? Minima blanditiis laudantium commodi necessitatibus dolor, ipsa\r
						odio nisi perspiciatis ab, aperiam quas eveniet nobis nam molestias beatae exercitationem fugiat ratione\r
						enim voluptatum dolorem facere qui vel dolores? Vero, totam maiores voluptas, enim laudantium quaerat\r
						fugit placeat corporis deleniti quo cum, libero sequi! Necessitatibus, quae!</p>\r
				</div>\r
			</div>\r
		</section>\r
\r
		<section class="framed-card">\r
			<div class="framed-card__head">\r
				<div class="framed-card__icon img-box icon-bg">\r
					<img class="inner-icon"\r
							 src="./images/icons/icon-dev-21-w.svg"\r
							 alt="">\r
				</div>\r
				<h2 class="framed-card__ttl fw-eb fs-xl">Lorem ipsum</h2>\r
			</div>\r
			<div class="framed-card__body">\r
				<div class="framed-card__txt">\r
					<h3 class="framed-card__inner-ttl fs-lg fw-eb clr-1b">Lorem ipsum dolor sit</h3>\r
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint unde hic optio officia\r
						praesentium, blanditiis natus quidem aut laboriosam eveniet alias doloremque molestiae reiciendis iusto\r
						delectus et provident velit earum totam sit explicabo ea consectetur repudiandae vel. Ipsum praesentium\r
						consectetur sit nemo ratione rerum libero temporibus nesciunt. Architecto quidem vero nihil, ea eum sint\r
						asperiores debitis sequi impedit possimus et?</p>\r
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia repellat obcaecati,\r
						doloribus eaque veniam beatae ut velit deserunt eum labore dolore fugit nostrum voluptatibus, laborum\r
						odit quas? Similique, magnam repellendus.</p>\r
				</div>\r
			</div>\r
		</section>\r
	</div>\r
</article>`,m=`<article class="slide __slide-4 layout-center">\r
	<div class="slide__top-group">\r
		<div class="slide-ttl width-x z-up">\r
			<h1 class="fs-2xl fw-eb">Plain cards</h1>\r
			<p class="fs-lg txt-grd">Ordered list items</p>\r
		</div>\r
		<a href="#"\r
			 class="brand-logo"\r
			 aria-label="home">\r
			<img src="./images/logo-w.svg"\r
					 alt="brand-logo">\r
		</a>\r
	</div>\r
\r
	<ol class="grid-x z-up plain-cards ordered-list">\r
		<li class="plain-card">\r
			<div class="img-box icon-bg fs-2xl"></div>\r
			<div class="plain-card__body">\r
				<h2 class="plain-card__ttl fs-md fw-eb clr-1b">Lorem ipsum dolor</h2>\r
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit aperiam mollitia ducimus veritatis saepe\r
					similique, iusto nihil totam temporibus?</p>\r
			</div>\r
		</li>\r
\r
		<li class="plain-card -flow-col">\r
			<div class="img-box icon-bg fs-2xl"></div>\r
			<div class="plain-card__body">\r
				<h2 class="plain-card__ttl fs-md fw-eb">Lorem ipsum dolor</h2>\r
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto enim ipsa reprehenderit voluptatum quasi\r
					autem.</p>\r
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatum quos, repudiandae quidem molestiae\r
					veniam!</p>\r
			</div>\r
		</li>\r
\r
		<li class="plain-card -ttl-aside">\r
			<div class="img-box icon-bg fs-2xl"></div>\r
			<h2 class="plain-card__ttl fs-md fw-eb">Lorem ipsum dolor</h2>\r
			<div class="plain-card__body">\r
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis enim, nam soluta velit iure, nemo quaerat\r
					sit ut voluptatum minima esse dolore maiores magnam ea beatae earum blanditiis quasi reiciendis.</p>\r
			</div>\r
		</li>\r
\r
		<li>\r
			<p class="fs-lg fw-eb txt-bg width-x">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur odio\r
				maiores odit consectetur magnam ratione dolores hic nesciunt.</p>\r
		</li>\r
\r
		<!-- <li class="plain-card -ttl-aside -framed">\r
			<div class="img-box icon-bg fs-2xl txt-grd"></div>\r
			<h2 class="plain-card__ttl fs-md fw-eb">Lorem ipsum dolor</h2>\r
			<div class="plain-card__body">\r
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit aperiam mollitia ducimus veritatis saepe\r
					similique, iusto nihil totam temporibus?</p>\r
			</div>\r
		</li> -->\r
	</ol>\r
</article>`,u=`<article class="slide __slide-5 layout-center">\r
	<div class="slide__top-group">\r
		<div class="slide-ttl width-x z-up">\r
			<h1 class="fs-2xl fw-eb">Framed cards</h1>\r
			<p class="fs-lg txt-grd">Ordered list items</p>\r
		</div>\r
		<a href="#"\r
			 class="brand-logo"\r
			 aria-label="home">\r
			<img src="./images/logo-w.svg"\r
					 alt="brand-logo">\r
		</a>\r
	</div>\r
\r
	<div class="framed-cards grid-x ordered-list">\r
		<section class="framed-card">\r
			<div class="framed-card__head">\r
				<div class="framed-card__icon img-box icon-bg fs-2xl"></div>\r
			</div>\r
			<div class="framed-card__body">\r
				<div class="framed-card__txt">\r
					<h2 class="framed-card__inner-ttl fs-lg fw-eb txt-grd">Lorem ipsum dolor sit</h2>\r
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, eum. Maiores\r
						sapiente tenetur reiciendis eos non eius unde quam officia illum quos, quisquam iste error.</p>\r
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur nisi\r
						temporibus magnam doloribus tempore, voluptates ullam dicta quod velit at. Perspiciatis voluptates\r
						laborum maxime doloremque? Libero culpa hic tempora at excepturi rerum dolor deserunt officia assumenda,\r
						mollitia laborum inventore! Culpa.</p>\r
					<p class="fs-sm ital">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione optio veniam vel vero.\r
						Nihil voluptas\r
						perferendis quis maxime nulla sed sequi magni, consectetur excepturi debitis!</p>\r
				</div>\r
			</div>\r
		</section>\r
\r
		<section class="framed-card">\r
			<div class="framed-card__head">\r
				<h2 class="framed-card__ttl fw-eb">Lorem ipsum dolor sit</h2>\r
			</div>\r
			<div class="framed-card__body xs-flow-row">\r
				<div class="framed-card__icon img-box icon-bg fs-2xl"></div>\r
				<div class="framed-card__txt">\r
					<h3 class="framed-card__inner-ttl fs-lg fw-eb">Lorem ipsum dolor sit</h3>\r
					<p class="txt-grd">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias voluptates\r
						tempora quae debitis molestiae eveniet? Minima blanditiis laudantium commodi necessitatibus dolor, ipsa\r
						odio nisi perspiciatis ab, aperiam quas eveniet nobis nam molestias beatae exercitationem fugiat ratione\r
						enim voluptatum dolorem facere qui vel dolores? Vero, totam maiores voluptas, enim laudantium quaerat\r
						fugit placeat corporis deleniti quo cum, libero sequi! Necessitatibus, quae!</p>\r
				</div>\r
			</div>\r
		</section>\r
\r
		<section class="framed-card">\r
			<div class="framed-card__head">\r
				<div class="framed-card__icon img-box icon-bg fs-2xl"></div>\r
				<h2 class="framed-card__ttl fw-eb fs-xl">Lorem ipsum</h2>\r
			</div>\r
			<div class="framed-card__body">\r
				<div class="framed-card__txt">\r
					<h3 class="framed-card__inner-ttl fs-lg fw-eb clr-1b">Lorem ipsum dolor sit</h3>\r
					<ul class="bulleted-list">\r
						<li>\r
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, amet.</p>\r
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia doloremque dignissimos veritatis\r
								iste ratione earum.</p>\r
						</li>\r
						<li>\r
							<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>\r
							<ul class="bulleted-list">\r
								<li class="fs-sm">Lorem ipsum dolor sit amet.</li>\r
								<li class="fs-sm">Lorem ipsum dolor sit amet consectetur adipisicing.</li>\r
								<li class="fs-sm">Lorem ipsum dolor sit.</li>\r
							</ul>\r
						</li>\r
						<li>\r
							<p>Lorem ipsum dolor sit amet consectetur.</p>\r
						</li>\r
					</ul>\r
				</div>\r
			</div>\r
		</section>\r
	</div>\r
</article>`,e=document.querySelector(".main-content");e.insertAdjacentHTML("beforeend",l);e.insertAdjacentHTML("beforeend",c);e.insertAdjacentHTML("beforeend",d);e.insertAdjacentHTML("beforeend",m);e.insertAdjacentHTML("beforeend",u);const p=(n,r)=>{document.querySelectorAll(`${n} ${r}`).forEach(s=>{const t=s.closest(`${n}`),i=()=>{s.style.display="none",t.removeEventListener("scrollend",i)};t.addEventListener("scrollend",i)})};p(".main-content",".scroll-down");
