var ciudades = [
    {name:'0-19 años',population:32783},
    {name:'20-29 años',population:82579},
    {name:'30-64 años',population:110689},
    {name:'65-110 años',population:2202}
  ];
  //seleccionar todos los "circle" en el documento  
  d3.selectAll('circle')
    .data(ciudades)
    .attr('fill','#EFBBFF')
    .attr('r', function(d) {
      return d.population *5/ 8000;
    })
  //seleccionar todos los "text" en el documento      
  d3.selectAll('text')
    .data(ciudades)
    .attr('fill','#222222')                      
    .text(function(d) {
      return ". " + d.name;
    });