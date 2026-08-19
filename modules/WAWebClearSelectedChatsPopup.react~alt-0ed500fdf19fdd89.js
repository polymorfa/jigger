__d("WAWebClearSelectedChatsPopup.react", [
	"fbt",
	"WAWebBoolFunc",
	"WAWebCheckBox.react",
	"WAWebClearSelectedChatsAction",
	"WAWebConfirmPopup.react",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = { section: {
		fontSize: "x1f6kntn",
		marginTop: "x1nmyh1g",
		$$css: !0
	} };
	function m(e) {
		var t = o("react-compiler-runtime").c(24), n = e.chats, a = e.onComplete, i = n.length, l = c(o("WAWebBoolFunc").returnFalse), m = l[0], p = l[1], _;
		t[0] !== m ? (_ = function() {
			p(!m);
		}, t[0] = m, t[1] = _) : _ = t[1];
		var f = _, g;
		t[2] !== n || t[3] !== m || t[4] !== a ? (g = async function() {
			await o("WAWebClearSelectedChatsAction").clearSelectedChats(n, { keepStarred: m }), o("WAWebModalManager").ModalManager.close(), a == null || a();
		}, t[2] = n, t[3] = m, t[4] = a, t[5] = g) : g = t[5];
		var h = g, y;
		t[6] !== i ? (y = s._(
			/*BTDS*/
			"",
			[s._plural(i, "number")]
		), t[6] = i, t[7] = y) : y = t[7];
		var C = y, b;
		t[8] !== f || t[9] !== m ? (b = u.jsx(o("WAWebCheckBox.react").CheckBox, {
			onChange: f,
			checked: m,
			testid: "keep-starred-checkbox",
			id: "keep-starred-checkbox-id"
		}), t[8] = f, t[9] = m, t[10] = b) : b = t[10];
		var v;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (v = u.jsx("label", {
			htmlFor: "keep-starred-checkbox-id",
			className: "x150mmf0 x1ypdohk",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[11] = v) : v = t[11];
		var S;
		t[12] !== b ? (S = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: d.section,
			children: [b, v]
		}), t[12] = b, t[13] = S) : S = t[13];
		var R = S, L;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (L = u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[14] = L) : L = t[14];
		var E;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (E = u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[15] = E) : E = t[15];
		var k;
		t[16] !== R ? (k = u.jsxs("div", { children: [
			L,
			E,
			R
		] }), t[16] = R, t[17] = k) : k = t[17];
		var I = k, T;
		t[18] === Symbol.for("react.memo_cache_sentinel") ? (T = {
			surface: "unknown",
			viewName: "clear-selected-chats"
		}, t[18] = T) : T = t[18];
		var D;
		t[19] === Symbol.for("react.memo_cache_sentinel") ? (D = s._(
			/*BTDS*/
			""
		), t[19] = D) : D = t[19];
		var x;
		return t[20] !== h || t[21] !== I || t[22] !== C ? (x = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: T,
			title: C,
			onOK: h,
			okText: D,
			okButtonType: "solid-warning",
			onCancel: o("WAWebModalManager").closeModalManager,
			children: I
		}), t[20] = h, t[21] = I, t[22] = C, t[23] = x) : x = t[23], x;
	}
	l.default = m;
}), 226);
