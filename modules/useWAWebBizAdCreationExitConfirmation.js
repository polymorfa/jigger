__d("useWAWebBizAdCreationExitConfirmation", [
	"fbt",
	"FBLogger",
	"Promise",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebToast.react",
	"WAWebToastManager",
	"WDSText.react",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"react",
	"react-compiler-runtime",
	"useWAWebBeforeUnload"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useRef, _ = d.useState;
	function f(e, t) {
		var a = p(!1), i = m(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			if (a.current) return "cancelled";
			a.current = !0;
			try {
				var e = t.saveCallbackRef.current;
				if (e != null) return yield y(e);
				var n = yield o("WAWebConfirmPopup.react").waitForConfirmPopup({
					children: c.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body2",
						children: s._(
							/*BTDS*/
							""
						)
					}),
					okText: s._(
						/*BTDS*/
						""
					),
					title: s._(
						/*BTDS*/
						""
					)
				});
				return n ? "discarded" : "cancelled";
			} finally {
				a.current = !1;
			}
		}), [t]);
		return r("useWAWebBeforeUnload")(m(function() {
			return { showConfirmationDialog: e };
		}, [e])), { showExitConfirmation: i };
	}
	function g() {
		o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
			id: o("WAWebToast.react").genId(),
			msg: s._(
				/*BTDS*/
				""
			)
		}));
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(20), a = e.onResult, i = e.saveDraft, l = _(!1), u = l[0], d = l[1], m;
		t[0] !== a || t[1] !== i ? (m = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				d(!0);
				try {
					var e = yield i();
					e.success ? a("saved") : (r("FBLogger")("wa_ctwa_web").mustfix("Draft save on exit returned failure"), g(), a("discarded"));
				} catch (e) {
					var t = e;
					r("FBLogger")("wa_ctwa_web").catching(r("getErrorSafe")(t)).mustfix("Draft save on exit failed"), g(), a("discarded");
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), t[0] = a, t[1] = i, t[2] = m) : m = t[2];
		var p = m, f;
		t[3] !== a ? (f = function() {
			a("discarded");
		}, t[3] = a, t[4] = f) : f = t[4];
		var h = f, y;
		t[5] !== a ? (y = function() {
			a("cancelled");
		}, t[5] = a, t[6] = y) : y = t[6];
		var C = y, b;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (b = s._(
			/*BTDS*/
			""
		), t[7] = b) : b = t[7];
		var v;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (v = s._(
			/*BTDS*/
			""
		), t[8] = v) : v = t[8];
		var S;
		t[9] !== h || t[10] !== u ? (S = {
			disabled: u,
			onClick: h,
			text: v
		}, t[9] = h, t[10] = u, t[11] = S) : S = t[11];
		var R;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (R = s._(
			/*BTDS*/
			""
		), t[12] = R) : R = t[12];
		var L;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (L = s._(
			/*BTDS*/
			""
		), t[13] = L) : L = t[13];
		var E;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (E = c.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[14] = E) : E = t[14];
		var k;
		return t[15] !== C || t[16] !== p || t[17] !== u || t[18] !== S ? (k = c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			cancelDisabled: u,
			cancelText: b,
			extraButtonProps: S,
			okDisabled: u,
			okSpinner: u,
			okText: R,
			onCancel: C,
			onOK: p,
			splitLayout: !0,
			title: L,
			children: E
		}), t[15] = C, t[16] = p, t[17] = u, t[18] = S, t[19] = k) : k = t[19], k;
	}
	function y(e) {
		return C.apply(this, arguments);
	}
	function C() {
		return C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			return new (e || (e = (n("Promise"))))(function(e) {
				var n = function() {
					o("WAWebModalManager").ModalManager.off("close_modal", n), e("cancelled");
				};
				o("WAWebModalManager").ModalManager.on("close_modal", n), o("WAWebModalManager").ModalManager.open(c.jsx(h, {
					onResult: function(r) {
						o("WAWebModalManager").ModalManager.off("close_modal", n), o("WAWebModalManager").ModalManager.close(), e(r);
					},
					saveDraft: t
				}), { blockClose: !0 });
			});
		}), C.apply(this, arguments);
	}
	l.default = f;
}), 226);
