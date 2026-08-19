__d("WAWebBizBroadcastsConfirmDeleteDialog.react", [
	"fbt",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebModal.react",
	"WDSButton.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useEffect, d = { controlsStyle: {
		paddingInlineEnd: "xyri2b",
		paddingInlineStart: "x1c1uobl",
		paddingTop: "xl7twdi",
		$$css: !0
	} };
	function m(e) {
		var t = o("react-compiler-runtime").c(19), n = e.entryPoint, a = e.onPrimaryPress, i = e.onSecondaryPress, l, m;
		t[0] !== n ? (l = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.confirmDeleteAllErrorContactViewed(n);
		}, m = [n], t[0] = n, t[1] = l, t[2] = m) : (l = t[1], m = t[2]), c(l, m);
		var p;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (p = { className: "x78zum5 x1f0uite xs2akgl x7v6yn8 xh8yej3" }, t[3] = p) : p = t[3];
		var _;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		), t[4] = _) : _ = t[4];
		var f;
		t[5] !== i ? (f = u.jsx(r("WDSButton.react"), {
			label: _,
			variant: "borderless",
			onPress: i,
			testid: "biz-broadcasts-delete-all-modal-cancel"
		}), t[5] = i, t[6] = f) : f = t[6];
		var g;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
			/*BTDS*/
			""
		), t[7] = g) : g = t[7];
		var h;
		t[8] !== a ? (h = u.jsx(r("WDSButton.react"), {
			label: g,
			variant: "filled",
			type: "destructive",
			onPress: a,
			testid: "biz-broadcasts-delete-all-modal-confirm"
		}), t[8] = a, t[9] = h) : h = t[9];
		var y;
		t[10] !== f || t[11] !== h ? (y = u.jsxs("div", babelHelpers.extends({}, p, { children: [f, h] })), t[10] = f, t[11] = h, t[12] = y) : y = t[12];
		var C;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (C = { className: "x78zum5 xdt5ytf x1f0uite xs2akgl xh8yej3" }, t[13] = C) : C = t[13];
		var b;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (b = u.jsx(r("WDSText.react"), {
			type: "Headline2",
			colorName: "contentDefault",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[14] = b) : b = t[14];
		var v;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (v = u.jsxs("div", babelHelpers.extends({}, C, { children: [b, u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				""
			)
		})] })), t[15] = v) : v = t[15];
		var S;
		return t[16] !== i || t[17] !== y ? (S = u.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Small,
			actions: y,
			onOverlayClick: i,
			testid: "biz-broadcasts-delete-all-modal",
			controlsStyle: d.controlsStyle,
			children: v
		}), t[16] = i, t[17] = y, t[18] = S) : S = t[18], S;
	}
	l.default = m;
}), 226);
