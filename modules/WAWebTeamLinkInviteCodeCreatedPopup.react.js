__d("WAWebTeamLinkInviteCodeCreatedPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(10), n = e.nonceCode, a = e.onDone, i, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
			/*BTDS*/
			""
		), l = s._(
			/*BTDS*/
			""
		), t[0] = i, t[1] = l) : (i = t[0], l = t[1]);
		var c;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (c = { className: "x78zum5 xdt5ytf x1qvou4u x17upfok" }, t[2] = c) : c = t[2];
		var d;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (d = u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[3] = d) : d = t[3];
		var m;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (m = { className: "x1ey7xld xl5zsmt" }, t[4] = m) : m = t[4];
		var p;
		t[5] !== n ? (p = u.jsxs("div", babelHelpers.extends({}, c, { children: [d, u.jsx(r("WDSText.react"), {
			type: "Headline2",
			colorName: "contentDefault",
			testid: "teamlink-invite-code",
			children: u.jsx("span", babelHelpers.extends({}, m, { children: n }))
		})] })), t[5] = n, t[6] = p) : p = t[6];
		var _;
		return t[7] !== a || t[8] !== p ? (_ = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: i,
			okText: l,
			onOK: a,
			testid: "teamlink-invite-created-dialog",
			children: p
		}), t[7] = a, t[8] = p, t[9] = _) : _ = t[9], _;
	}
	l.default = c;
}), 226);
