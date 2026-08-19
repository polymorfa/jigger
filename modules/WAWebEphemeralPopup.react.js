__d("WAWebEphemeralPopup.react", [
	"fbt",
	"WAWebAfterReadDurationPopup.react",
	"WAWebAfterReadUtils",
	"WAWebConfirmPopup.react",
	"WAWebEphemeralNux.react",
	"WAWebEphemeralityDurations",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebModalManager",
	"WAWebNux",
	"WAWebRadio.react",
	"WAWebText_DONOTUSE.react",
	"react",
	"react-compiler-runtime",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = {
		explanation: {
			marginBottom: "xcytdqz",
			$$css: !0
		},
		afterReadingWithSubLabel: {
			alignItems: "x1cy8zhl",
			paddingTop: "x1xrf6ya",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(23), n = e.initialDuration, a = e.onDurationSelected, i = c(n), l = i[0], m = i[1], f = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL), g = f[0], h = f[1], y;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (y = function(t) {
			m(t);
		}, t[0] = y) : y = t[0];
		var C = y, b;
		t[1] !== h ? (b = function() {
			h();
		}, t[1] = h, t[2] = b) : b = t[2];
		var v = b, S = _, R;
		t[3] !== l || t[4] !== a ? (R = function() {
			a(l), o("WAWebModalManager").ModalManager.closeSupportOrModal();
		}, t[3] = l, t[4] = a, t[5] = R) : R = t[5];
		var L = R, E = p, k;
		if (g) {
			var I;
			t[6] === Symbol.for("react.memo_cache_sentinel") ? (I = u.jsx(r("WAWebEphemeralNux.react"), { fromMe: !0 }), t[6] = I) : I = t[6], k = I;
		} else {
			var T;
			t[7] === Symbol.for("react.memo_cache_sentinel") ? (T = u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
				xstyle: d.explanation,
				children: s._(
					/*BTDS*/
					""
				)
			}), t[7] = T) : T = t[7];
			var D;
			t[8] !== l ? (D = o("WAWebEphemeralityDurations").getDefaultEphemeralityDurations().map(function(e) {
				var t = e.label, n = e.type, a = e.value;
				if (n === "after_reading") {
					var i = o("WAWebAfterReadUtils").isAfterReadDuration(l);
					return u.jsx(o("WAWebRadio.react").RadioWithLabel, {
						name: "duration",
						value: a,
						label: t,
						secondaryLabel: i ? o("WAWebEphemeralityDurations").durationToLabel(l) : void 0,
						checked: i,
						xstyle: i ? d.afterReadingWithSubLabel : void 0,
						theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.NORMAL,
						onChange: function() {
							o("WAWebModalManager").ModalManager.openSupportModal(u.jsx(r("WAWebAfterReadDurationPopup.react"), {
								initialDuration: o("WAWebAfterReadUtils").isAfterReadDuration(l) ? l : 0,
								onDurationSelected: m
							}));
						}
					}, a);
				}
				return u.jsx(o("WAWebRadio.react").RadioWithLabel, {
					name: "duration",
					value: a,
					label: t,
					checked: a === l,
					onChange: function() {
						return C(a);
					}
				}, a);
			}), t[8] = l, t[9] = D) : D = t[9];
			var x;
			t[10] !== D ? (x = u.jsxs(u.Fragment, { children: [T, D] }), t[10] = D, t[11] = x) : x = t[11], k = x;
		}
		var $;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? ($ = {
			surface: "unknown",
			viewName: "ephemeral-settings"
		}, t[12] = $) : $ = t[12];
		var P;
		t[13] !== g ? (P = g ? void 0 : s._(
			/*BTDS*/
			""
		), t[13] = g, t[14] = P) : P = t[14];
		var N = g ? v : L, M = g ? S : E, w;
		t[15] !== g ? (w = g ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[15] = g, t[16] = w) : w = t[16];
		var A;
		return t[17] !== k || t[18] !== P || t[19] !== N || t[20] !== M || t[21] !== w ? (A = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: $,
			testid: "ephemeral_popup",
			title: P,
			onOK: N,
			onCancel: M,
			cancelText: w,
			children: k
		}), t[17] = k, t[18] = P, t[19] = N, t[20] = M, t[21] = w, t[22] = A) : A = t[22], A;
	}
	function p() {
		o("WAWebModalManager").ModalManager.closeSupportOrModal();
	}
	function _() {
		o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getEphemeralFaqUrl());
	}
	l.default = m;
}), 226);
