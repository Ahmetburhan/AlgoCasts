$(function(undefined) {
  var count = 50000,

      // The second parameter is the seed, remove it to get a different
      // set and order on page refresh. That is:
      // var nodes = generateNodes(50000);
      nodes = generateNodes(50000, 1234567),
      content = '';
      totalEdges = _.reduce(nodes, function(count, value) {
          return count + _.size(value);
      }, 0),
      averageEdgeCount = (totalEdges / count).toFixed(2);

  content = [
    'There are a total of',
    totalEdges.toLocaleString(), 'total edges',
    'for', count.toLocaleString(), 'nodes.',
    'This averages to', averageEdgeCount, 'edges per node'
  ].join(' ');

  


  $('.content').html(content);
});

$(document).ready(function () {
  $('#styraNodes').DataTable();
});


$("#seedCount").on('click', function (e) {
  // alert("Handler for .submit() called.");

  e.preventDefault();
  console.log(countInput.value);
  console.log(seedInput.value);
  let count = parseInt(countInput.value);
  let seed = parseInt(seedInput.value);

  let result = generateNodes(count, seed);
  console.log(result);
  for(let node in result){
    let nodeName = node;
    let eachNode = result[node];
      console.log(nodeName, eachNode);
      // document.getElementById('td1').innerHTML = `<td>${nodeName}</td>`;

      $('#td1').parent().append(`<tr>${nodeName}</tr>`);

      for (let el in eachNode) {
        let key = el;
        let value = eachNode[el];
        console.log(key,value)
        $('#td1').parent().append(`<td>${nodeName} => ${key} ${value}</td>`);

      }
    }
  
     
  



});


