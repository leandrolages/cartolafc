var cartolaBM = function() {
   if (typeof jQuery('#jogadores-lista table').get(0) == 'undefined') {
      alert('Você precisa está na página de seu time para que o app funcione. A página é http://cartolafc.globo.com/#!/time');
      return
   }
   var e = jQuery('.ultima');
   var t = jQuery('.ultima').prev();
   var n = 0;
   var r = 0;
   for (var i = 0; i < e.length; i++) {
      n = n + parseFloat(e[i].innerHTML);
      r = r + parseFloat(t[i].innerHTML)
   }
   jQuery('#jogadores-lista table').append('<tr><td style=\'color:black; font-size:13px; background-color: #efefef\' colspan=\'7\'><strong>Soma da média / soma da última</strong></td><td>' + r.toFixed(2) + '</td><td colspan\'2\'>' + n.toFixed(2) + '</td>')
}();