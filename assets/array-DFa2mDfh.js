Array.prototype.shuffle=function(){for(let t=this.length-1;t>0;t--){const h=Math.floor(Math.random()*(t+1));[this[t],this[h]]=[this[h],this[t]]}return this};
