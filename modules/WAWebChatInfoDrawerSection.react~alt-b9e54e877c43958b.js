__d("WAWebChatInfoDrawerSection.react", [
	"WAWebDrawerSection.react",
	"WDSPaddings.stylex",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s = ["ref"], u = ["ref"], c, d = c || (c = o("react")), m = { paddingBlock10: {
		paddingTop: "x889kno",
		paddingBottom: "x1a8lsjc",
		$$css: !0
	} }, p = 10, _ = 11, f = { containerWithoutTitle: {
		paddingTop: "xexx8yu",
		paddingInlineEnd: "x5zjp28",
		paddingBottom: "x18d9i69",
		paddingInlineStart: "x162tt16",
		marginBottom: "xat24cr",
		$$css: !0
	} };
	function g(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = [
			[o("WDSPaddings.stylex").wdsPaddings.paddingHor20, m.paddingBlock10],
			a.title == null && f.containerWithoutTitle,
			a.xstyle
		], l = [a.titleXStyle];
		return d.jsx(r("WAWebDrawerSection.react"), babelHelpers.extends({}, a, {
			xstyle: i,
			titleXStyle: l,
			theme: "refresh-new",
			ref: n,
			children: a.children
		}));
	}
	g.displayName = g.name + " [from " + i.id + "]";
	var h = { drawerSectionContainer: {
		paddingBottom: "x18d9i69",
		$$css: !0
	} };
	function y(e) {
		var t = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, s);
		return d.jsx(g, babelHelpers.extends({}, n, {
			xstyle: [h.drawerSectionContainer, n.xstyle],
			ref: t,
			children: d.jsx("div", { children: n.children })
		}));
	}
	y.displayName = y.name + " [from " + i.id + "]";
	var C = { drawerSectionContainer: {
		paddingTop: "xexx8yu",
		paddingInlineEnd: "xyri2b",
		paddingBottom: "x18d9i69",
		paddingInlineStart: "x1c1uobl",
		$$css: !0
	} };
	function b(e) {
		var t = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, u);
		return d.jsx(g, babelHelpers.extends({}, n, {
			xstyle: [C.drawerSectionContainer, n.xstyle],
			ref: t,
			children: n.children
		}));
	}
	b.displayName = b.name + " [from " + i.id + "]", l.INFO_DRAWER_MAX_ROWS = p, l.INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST = _, l.ChatInfoDrawerSection = g, l.ChatInfoDrawerListSection = y, l.ChatInfoDrawerButtonsSection = b;
}), 98);
