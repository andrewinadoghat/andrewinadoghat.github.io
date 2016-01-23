// goes through all the gernes and generates
// an array of the different gernes used 
function existingGernesList(data) {
  var existingGernes = []
  data.forEach(function getGerneArray(row) {
    if (row.gerne === "") return
    var gerneString = row.gerne
    if (existingGernes.length === 0) existingGernes.push(gerneString)
    if (existingGernes.indexOf(gerneString) > -1) return
    existingGernes.push(gerneString)
  })
  return existingGernes
}

// render the section of the page that 
// lists the tags
function drawGernes(data) {
  var gerne = existingGernesList(data)
  var contents = Sheetsee.ich.gernes({
    rows: gerne
  })
  $('#gernes').html(contents)
}

// render the page title with its
// book count
function pageTitle(data) {
	var amount = data.length
	var contents = Sheetsee.ich.title({
  	numBooks: amount
	})
$('#title').html(contents)
}
