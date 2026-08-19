__d("WAWebConnectedPillButtons.story", ["WAWebConnectedPillButtons.react", "react"], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = {
		storyName: "WAWebConnectedPillButtons",
		component: r("WAWebConnectedPillButtons.react"),
		description: "The component with pill buttons adjacent to one another, with the whole unit forming a pill shape",
		examples: [{
			example: function() {
				return s.jsx(d, { pills: [{
					id: "all",
					title: "All"
				}, {
					id: "contacts",
					title: "Contacts"
				}] });
			},
			title: "Connected Pill Buttons, 2 Pills"
		}, {
			example: function() {
				return s.jsx(d, { pills: [
					{
						id: "all",
						title: "All"
					},
					{
						id: "contacts",
						title: "Contacts"
					},
					{
						id: "other",
						title: "Other"
					}
				] });
			},
			title: "Connected Pill Buttons, 3 Pills"
		}]
	};
	function d(e) {
		var t = e.pills, n = u("all"), o = n[0], a = n[1];
		return s.jsx(r("WAWebConnectedPillButtons.react"), {
			currentlySelected: o,
			pills: t,
			onChange: function(t) {
				return a(t.toString());
			}
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	var m = c;
	l.default = m;
}), 98);
