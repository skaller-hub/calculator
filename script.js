function fun1() //fun1 Объем готовой жидкости
    {
        var tab_1 = document.getElementById("tab-1");
        var tab_2 = document.getElementById("tab-2");
        var aromatype = document.getElementById("aromatype");
        var rangeInput = document.getElementById("textP1");
        var textN = document.getElementById("textN");

        if (tab_1.checked) {
            aromatype.innerHTML = tab_1.value;
            rangeInput.max = 100;
        } else if (tab_2.checked) {
            aromatype.innerHTML = tab_2.value;
            rangeInput.max = 70;
        }
        var rng_ml = document.getElementById('textP1'); //rng_ml - это Input объема от 10 до 110
        var rng_n = document.getElementById('textP3');
        var text1 = document.getElementById('textN'); // text1 - вывод значений 
        var text2 = document.getElementById('textN2');
        var text3 = document.getElementById('textN3');
        var strongn = document.getElementById('strongn');
        var aroma = document.getElementById('aroma');
        var base = document.getElementById('base');
        text1.innerHTML = rng_ml.value + "ml"; //объем
        text2.innerHTML = rng_ml.value + "ml"; //аромка
        text3.innerHTML = rng_n.value + "mg"; //никотин
        strongn.innerHTML = rng_ml.value / 20 * rng_n.value + "ml"; // никотин рецепт
        aroma.innerHTML = rng_ml.value / 10 + "ml"; //аромка рецепт
        base.innerHTML = rng_ml.value - (rng_ml.value / 10) - rng_ml.value / 20 * rng_n.value + "ml"; //база рецепт

    }

    function fun2() //fun2 Range pg vg
    {
        var rng_pg = document.getElementById('textP2');
        var text2_1 = document.getElementById('textN2.1');
        var text2_2 = document.getElementById('textN2.2');
        var text2_3 = document.getElementById('textN2.3');
        var text2_4 = document.getElementById('textN2.4');
        text2_3.innerHTML = rng_pg.value;
        text2_4.innerHTML = 100 - rng_pg.value;
        text2_1.innerHTML = rng_pg.value;
        text2_2.innerHTML = 100 - rng_pg.value;
    }


    document.getElementById('textP3').addEventListener('change', function fun4() {
        if (this.value != 0) {
            document.getElementById('shel').disabled = false;
            document.getElementById('sol').disabled = false;
            //document.getElementById('gibrid').disabled = false;
        } else {
            document.getElementById('shel').disabled = true;
            document.getElementById('sol').disabled = true;
            //document.getElementById('gibrid').disabled = true;
        }
    });


    function hideDiv() {
        var rangeValue = document.getElementById("textP3").value;
        if (rangeValue != 0) {
            document.getElementById("textnicuse").classList.remove("hidenull");
        } else {
            document.getElementById("textnicuse").classList.add("hidenull");
        }
    }


    function displayWord() {
        var shel = document.getElementById("shel");
        var sol = document.getElementById("sol");
        var textnicuse = document.getElementById("textnicuse");

        if (shel.checked) {
            textnicuse.innerHTML = shel.value;
        } else if (sol.checked) {
            textnicuse.innerHTML = sol.value;
        }
    }
