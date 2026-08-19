__d("WAWebDebugParticipantsListModal.react", [
	"WAWebApiContact",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebWidFactory",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(2), n = e.participants, a;
		return t[0] !== n ? (a = s.jsx(r("WDSMenuItem.react"), {
			title: "Show participants",
			onPress: function() {
				return o("WAWebModalManager").ModalManager.open(s.jsx(c, { participants: n }));
			},
			testid: "mi-show-participants"
		}), t[0] = n, t[1] = a) : a = t[1], a;
	}
	function c(e) {
		var t = o("react-compiler-runtime").c(26), n = e.participants, r, a, i, l, u, c, g, h, y, C;
		if (t[0] !== n) {
			var b = n.map(f), v = b.filter(_), S = b.filter(p);
			r = o("WAWebConfirmPopup.react").ConfirmPopup, h = "Debug Participants List", y = "Close", C = o("WAWebModalManager").closeModalManager, t[11] === Symbol.for("react.memo_cache_sentinel") ? (a = { className: "x1jn0hjm x14aock7 x1rife3k" }, t[11] = a) : a = t[11], i = s.jsxs("h2", { children: [
				"Phone JIDs (",
				v.length,
				")"
			] }), l = v.map(m), t[12] === Symbol.for("react.memo_cache_sentinel") ? (u = s.jsx("br", {}), t[12] = u) : u = t[12], c = s.jsxs("h2", { children: [
				"LID JIDs (",
				S.length,
				")"
			] }), g = S.map(d), t[0] = n, t[1] = r, t[2] = a, t[3] = i, t[4] = l, t[5] = u, t[6] = c, t[7] = g, t[8] = h, t[9] = y, t[10] = C;
		} else r = t[1], a = t[2], i = t[3], l = t[4], u = t[5], c = t[6], g = t[7], h = t[8], y = t[9], C = t[10];
		var R;
		t[13] !== a || t[14] !== i || t[15] !== l || t[16] !== u || t[17] !== c || t[18] !== g ? (R = s.jsxs("div", babelHelpers.extends({}, a, { children: [
			i,
			l,
			u,
			c,
			g
		] })), t[13] = a, t[14] = i, t[15] = l, t[16] = u, t[17] = c, t[18] = g, t[19] = R) : R = t[19];
		var L;
		return t[20] !== r || t[21] !== R || t[22] !== h || t[23] !== y || t[24] !== C ? (L = s.jsx(r, {
			title: h,
			okText: y,
			onOK: C,
			children: R
		}), t[20] = r, t[21] = R, t[22] = h, t[23] = y, t[24] = C, t[25] = L) : L = t[25], L;
	}
	function d(e, t) {
		return s.jsx("div", { children: g(e) }, t);
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e, t) {
		return s.jsx("div", { children: e.toString() }, t);
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		return e.isLid();
	}
	function _(e) {
		return !e.isLid();
	}
	function f(e) {
		return o("WAWebWidFactory").asUserWidOrThrow(e.id);
	}
	function g(e) {
		var t, n, r = (t = (n = o("WAWebApiContact").getPhoneNumber(e)) == null ? void 0 : n.toString()) != null ? t : "N/A";
		return s.jsxs(s.Fragment, { children: [s.jsx("span", {
			className: "x1rg5ohu x1oysuqx",
			children: e.toString()
		}), s.jsxs("span", { children: ["phone: ", r] })] });
	}
	l.default = u;
}), 98);
