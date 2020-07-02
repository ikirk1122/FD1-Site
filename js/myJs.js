// функция для сердечек- меняет value и отключает зеленый фильтр для img с сердцем
        var elem1 = document.getElementById('count1');
        var imga1 = document.getElementById('count1img');
        var val1 = (document.getElementById('count1')).value;

        var elem2 = document.getElementById('count2');
        var imga2 = document.getElementById('count2img');
        var val2 = (document.getElementById('count2')).value;

        var elem3 = document.getElementById('count3');
        var imga3 = document.getElementById('count3img');
        var val3 = (document.getElementById('count3')).value;

        var elem4 = document.getElementById('count4');
        var imga4 = document.getElementById('count4img');
        var val4 = (document.getElementById('count4')).value;

        function countHeart(a) {
            if (a == "1") {
                elem1.value = parseInt(val1)+1;
                imga1.style ="";
            }
            else if (a == "2") {
                elem2.value = parseInt(val2)+1;
                imga2.style ="";

            }
            else if (a == "3") {
                elem3.value = parseInt(val3)+1;
                imga3.style ="";

            }
            else if (a == "4") {

                elem4.value = parseInt(val4)+1;
                imga4.style ="";
            }
        }



        

        
       
       function up() {  
        var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);  
      if(top > 0) {  
        window.scrollBy(0,((top+100)/-10));  
        t = setTimeout('up()',20);  
      } else clearTimeout(t);  
      return false;  
      } 

      

        

    