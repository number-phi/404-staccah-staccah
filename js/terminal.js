(function(doc, win) {

    if(!doc.querySelector) {
        return alert('Your browser sucks. Sorry.');
    }

    var list = doc.querySelector('ul'),
        all = list.children,
        i = all.length,
        html = [];

    while(i--) {
        html[i] = all[i].innerHTML;
        all[i].innerHTML = '';
    }

    var animate = function(i) {
        var me = all[i],

            add = 'dollar',

            //  C = character delay
            //  D = line delay
            c = 0, d = 0;

        me.className = add;
        list.style.marginTop = '-' + (((i + 1) * 25) / 2) + 'px';

        var inty = setInterval(function() {
            me.innerHTML = html[i].substr(0, c) + '<span class="typing">|</span>';
            c++;

            if(html[i].length < c) {
                clearInterval(inty);
                i++;


                if(all[i]) {
                    setTimeout(function() {
                        me.innerHTML = html[i - 1];
                        animate(i);
                    }, 400);
                }
            }

            if(i== all.length)
            {
                // setInterval(function(){
                    var options = {
                        "animate": true,
                        "patternWidth": 500,
                        "patternHeight": 500,
                        "grainOpacity": 1,
                        "grainDensity": 1,
                        "grainWidth": 1,
                        "grainHeight": 1
                    }
                    grained("#container", options);
                // }, 100);

                list = doc.querySelector('ul');
                all = list.children;
                i = all.length;
                html = [];

                while(i--) {
                    html[i] = all[i].innerHTML;
                    all[i].innerHTML = '';
                }
                $( "<p>404</p>" ).insertAfter( "ul" );                
            }

        }, 75);
    };

    animate(0);

})(document, window);