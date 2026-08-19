__d("WAWebMenu.react", ["WAWebMenuController.react", "react"], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s.useState;
	function d(t) {
		var n = t.ref, r = babelHelpers.objectWithoutPropertiesLoose(t, e), a = c(new Map()), i = a[0], l = a[1], s = o("WAWebMenuController.react").useRegister({
			onChange: async function(t) {
				await l(t);
			},
			onOrderChange: async function(t) {
				await l(t);
			}
		});
		return u.jsx(o("WAWebMenuController.react").Register, {
			registerRef: s,
			children: u.jsx(o("WAWebMenuController.react").WAWebMenuController, babelHelpers.extends({ data: i }, r, { ref: n }))
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WAWebMenu = d;
}), 98);
