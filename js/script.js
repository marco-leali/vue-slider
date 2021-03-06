/* 
Descrizione:
Partendo dal markup fornito in allegato, implementare la logica per far funzionare lo slider:
Deve essere possibile scorrere le immagini cliccando sulle freccette.
I pallini in basso devono illuminarsi in base all'immagine che sto visualizzando.
Far si che cliccando i pallini, venga selezionata l'immagine corrispondente.
Note:  scegliamo una delle due seguenti soluzioni per le freccette:
Se stiamo visualizzando la prima immagine, la freccetta di sinistra può:
scomparire
passare all'ultima immagine
Se stiamo visualizzando l'ultima immagine, la freccetta  a destra può:
scomparire
passare alla prima immagine
Siate coerenti: o scompaiono o continuano a navigare, no a soluzioni miste!!
Bonus:
1- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
2- quando il mouse va in hover sulle freccette o sui pallini l'autoplay si interrompe
3 - l'autoplay riparte quando il mouse lascia le freccette o i pallini
 */

Vue.config.devtools = true;

var app5 = new Vue({
    el: '#root',
    data: {
      indexSlider:0,
      slider:'',
      imagesUri:[
        'img/image1.jpg',
        'img/image2.jpg',
        'img/image3.jpg',
        'img/image4.jpg'      
      ]
    },
    methods:
      {
         setIndexSlider(index)
         {
            this.indexSlider = index;
         },
         isActive(index)
         {
            return index === this.indexSlider;
         },
         nextPic()
         {
            this.indexSlider === this.imagesUri.length - 1 ? this.indexSlider = 0 : this.indexSlider++;
         },
         prevPic()
         {
            this.indexSlider === 0 ? this.indexSlider = this.imagesUri.length - 1 : this.indexSlider--;
         },
         createInterval()
         {
          this.slider = setInterval(()=>{
            this.nextPic();
           },3000);
         },
         clearInterval()
         {
           clearInterval(this.slider);
         }
      },
      created: function(){
       this.createInterval();
    }
  })