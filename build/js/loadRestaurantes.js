const insertaRestaurante=({nombre:e,imagen:t,informacion:a})=>{console.log(e,t,a);const n=document.querySelector(".favoritos__grid"),o=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div"),c=document.createElement("img"),r=document.createElement("div"),l=document.createElement("img"),m=document.createElement("h3"),s=document.createElement("p");o.className="favorito",i.className="favorito__grid",d.className="favorito__imagen",r.className="favorito__contenido",m.className="favorito__nombre",s.className="favorito__descripcion",c.src=t,c.alt="logo del restaurante "+e,d.appendChild(c),l.src="build/img/estrellas.png",l.alt="Calificacion del restaurante "+e,m.textContent=e,s.textContent=a,r.appendChild(l),r.appendChild(m),r.appendChild(s),i.appendChild(d),i.appendChild(r),o.appendChild(i),n.appendChild(o)};export{insertaRestaurante};
//# sourceMappingURL=loadRestaurantes.js.map