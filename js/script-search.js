var dt = [];
var dt_brojac = 0;
function obrada() {
	$.getJSON("movies.json", function (json) {
		$.each(json, function (key, value) {
			if (key == 10) {
				return false;
			}
			$.getJSON("http://www.omdbapi.com/?apikey=29d892f4&i=" + value.id, function (json_jedan) {
				if (json_jedan.Type == "movie") {
					var type = "Film";
				} else {
					var type = "Serija";
				}
				var jedan = [json_jedan.imdbID, value.rank, json_jedan.Title, json_jedan.Year, type, "<img width='50px' src='" + json_jedan.Poster + "'>"];
				dt.push(jedan);
				dt_brojac++;
				if (dt_brojac == 10) {
					$('table').DataTable({
						data: dt,
						"order": [[1, "asc"]]
					});
				}

			});
		})

	});
}


function pretrazi() {
	var naziv = $("#naziv").val();
	var tip = $("#tip").val();
	if (naziv.length == 0) {
		Swal.fire("Warning", "Enter name", "error");
	} else {
		$.getJSON("http://www.omdbapi.com/?apikey=29d892f4&type=" + tip + "&s=" + naziv, function (json) {
			// console.log(json);
			$("table tbody").empty();
			$.each(json.Search, function (key, value) {
				if (value.Type == "movie") {
					var type = "Film";
				} else {
					var type = "Serija";
				}
				$("table tbody").append("<tr><td>" + value.imdbID + "</td><td>" + value.Title + "</td><td>" + value.Year + "</td><td>" + type + "</td><td><img width='50px' src='" + value.Poster + "'</td></tr>");
			});
		});
	}
}

