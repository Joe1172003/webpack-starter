



import '../css/components.css';
//import webpackLogo from'../assets/img/webpack-logo.png'

export const saludar = ( nombre ) =>{
    console.log('creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText =`Hola ${nombre}`;

    document.body.append( h1 );

    //console.log( webpackLogo );

    //img
/*     const img = document.createElement('img');
    img.src = webpackLogo
    document.body.append( img )
 */


}

