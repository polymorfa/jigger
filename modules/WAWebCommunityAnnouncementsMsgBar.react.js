__d("WAWebCommunityAnnouncementsMsgBar.react", [
	"fbt",
	"WALogger",
	"WAWebClickable.react",
	"WAWebCmd",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebKeyboardIsKeyActivation",
	"WAWebMsgBarActions",
	"WAWebTabOrder",
	"WDSTextualLink.react",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = { wrapper: {
		width: "xh8yej3",
		marginTop: "x16z1lm9",
		marginBottom: "x11tup63",
		$$css: !0
	} };
	function m(t) {
		var n = o("react-compiler-runtime").c(14), a = t.groupMetadata, i;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (i = [
			"participants",
			"parentGroup",
			"id"
		], n[0] = i) : i = n[0];
		var l = o("useWAWebModelValues").useModelValues(a, i), u = l.parentGroup;
		if (!u) return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["CommunityAnnouncementsMsgBar null parent"]))), null;
		var m;
		n[1] !== l ? (m = function(t) {
			t.stopPropagation(), o("WAWebMsgBarActions").handleMsgAdmin(l, s._(
				/*BTDS*/
				""
			));
		}, n[1] = l, n[2] = m) : m = n[2];
		var _ = m, f = p, g;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
			/*BTDS*/
			""
		), n[3] = g) : g = n[3];
		var h;
		n[4] !== _ ? (h = c.jsx(r("WDSTextualLink.react"), {
			"data-tab": o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
			onClick: _,
			onKeyDown: f,
			children: g
		}), n[4] = _, n[5] = h) : h = n[5];
		var y = h, C;
		n[6] !== u ? (C = function() {
			o("WAWebCmd").Cmd.openCommunityHome(u);
		}, n[6] = u, n[7] = C) : C = n[7];
		var b;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (b = { className: "x126k92a" }, n[8] = b) : b = n[8];
		var v;
		n[9] !== y ? (v = c.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			children: c.jsx(r("WAWebFlexItem.react"), { children: c.jsx("span", babelHelpers.extends({}, b, { children: s._(
				/*BTDS*/
				"",
				[s._param("community admins link", y)]
			) })) })
		}), n[9] = y, n[10] = v) : v = n[10];
		var S;
		return n[11] !== C || n[12] !== v ? (S = c.jsx(o("WAWebClickable.react").Clickable, {
			onClick: C,
			xstyle: d.wrapper,
			children: v
		}), n[11] = C, n[12] = v, n[13] = S) : S = n[13], S;
	}
	function p(e) {
		r("WAWebKeyboardIsKeyActivation")(e) && e.stopPropagation();
	}
	l.default = m;
}), 226);
