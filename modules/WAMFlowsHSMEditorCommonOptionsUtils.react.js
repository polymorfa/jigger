__d("WAMFlowsHSMEditorCommonOptionsUtils.react", [], (function(t, n, r, o, a, i) {
	"use strict";
	function e(e, t) {
		return e.toString() + "_" + t.replaceAll(" ", "_");
	}
	var l = function(n) {
		return n.map(function(t, n) {
			return babelHelpers.extends({}, t, { id: e(n, t.title) });
		});
	}, s = function(t, n) {
		return l(n.filter(function(e) {
			return e.id !== t;
		}));
	}, u = function(t) {
		return l([].concat(t, [{
			id: t.length.toString(),
			title: "Option"
		}]));
	};
	i.generateOptionId = e, i.replaceOptionIds = l, i.removeOptionFromDataSource = s, i.addOptionToDataSource = u;
}), 66);
