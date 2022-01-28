// 1

var sayac = 0;
for(var i=0; i<objects.length; i++){
if(objects[i].x == objects[i].y) {
    sayac++;
}
}
return sayac;

// 2

let n = 0;
for(let o of objects) {
    n += (o.x == o.y);
}
return n;


//3
return objects.filter(function(o){return o.x==o.y}).length
