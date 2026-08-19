__d("WAWebCatalogAdTokenRecoveryNeeded.react", [
	"fbt",
	"WAWebBox.react",
	"WAWebButton.react",
	"WAWebCTWABizAccessTokenNonceManager",
	"WAWebCatalogCollection",
	"WAWebConfirmPopup.react",
	"WAWebCopyPasteSelectable.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebQplFlowWrapper",
	"WAWebRequestAdAccountRecoveryCode",
	"WAWebRichTextField.react",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"qpl",
	"react",
	"react-compiler-runtime",
	"useWAWebListener",
	"useWAWebThrottledCallback"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState, p = r("qpl")._(1029378759, "1575"), _ = {
		firstStepBody: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		secondStepHeader: {
			fontSize: "x1aueamr",
			$$css: !0
		},
		secondaryColor: {
			color: "xhslqc4",
			$$css: !0
		},
		marginTop24: {
			marginTop: "x9u28bd",
			$$css: !0
		},
		marginBottom24: {
			marginBottom: "x14mdic9",
			$$css: !0
		},
		paddingHoriz24: {
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		paddingTop32: {
			paddingTop: "x1sk1jro",
			$$css: !0
		},
		paddingBottom24: {
			paddingBottom: "xvg22vi",
			$$css: !0
		},
		paddingTop16: {
			paddingTop: "x1p57kb1",
			$$css: !0
		},
		paddingBottom16: {
			paddingBottom: "xvpt6g3",
			$$css: !0
		}
	};
	function f(e) {
		var t = o("react-compiler-runtime").c(8), n = e.Icon, r = e.emailMask, a = e.handleCodeEntered, i = e.headerDescription, l = e.headerText, s;
		t[0] !== r || t[1] !== a ? (s = function() {
			o("WAWebRequestAdAccountRecoveryCode").requestAdAccountRecoveryCode(), o("WAWebQplFlowWrapper").QPL.markerPoint(p, "recovery_flow_code_requested"), y(r, a);
		}, t[0] = r, t[1] = a, t[2] = s) : s = t[2];
		var c = s, d;
		return t[3] !== n || t[4] !== c || t[5] !== i || t[6] !== l ? (d = u.jsx(g, {
			Icon: n,
			handleVerifyEmailClick: c,
			headerDescription: i,
			headerText: l
		}), t[3] = n, t[4] = c, t[5] = i, t[6] = l, t[7] = d) : d = t[7], d;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(17), n = e.Icon, a = e.handleVerifyEmailClick, i = e.headerDescription, l = e.headerText, c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = [], t[0] = c) : c = t[0], d(h, c);
		var m;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (m = [_.paddingHoriz24, _.paddingTop32], t[1] = m) : m = t[1];
		var p;
		t[2] !== n ? (p = u.jsx(n, {
			iconXstyle: _.secondaryColor,
			directional: !0,
			height: 24,
			width: 24,
			xstyle: _.paddingBottom24
		}), t[2] = n, t[3] = p) : p = t[3];
		var f;
		t[4] !== l ? (f = u.jsxs(o("WAWebText.react").WAWebTextTitle, { children: [
			" ",
			l,
			" "
		] }), t[4] = l, t[5] = f) : f = t[5];
		var g;
		t[6] !== i ? (g = u.jsx(o("WAWebText.react").WAWebTextSmall, {
			xstyle: _.firstStepBody,
			children: i
		}), t[6] = i, t[7] = g) : g = t[7];
		var y;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (y = [_.marginTop24, _.marginBottom24], t[8] = y) : y = t[8];
		var C;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (C = s._(
			/*BTDS*/
			""
		), t[9] = C) : C = t[9];
		var b;
		t[10] !== a ? (b = u.jsx(r("WAWebBox.react"), {
			xstyle: y,
			children: u.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
				onClick: a,
				children: C
			})
		}), t[10] = a, t[11] = b) : b = t[11];
		var v;
		return t[12] !== p || t[13] !== f || t[14] !== g || t[15] !== b ? (v = u.jsxs(r("WAWebBox.react"), {
			align: "center",
			direction: "vertical",
			flex: !0,
			testid: "ad-account-recovery",
			xstyle: m,
			children: [
				p,
				f,
				g,
				b
			]
		}), t[12] = p, t[13] = f, t[14] = g, t[15] = b, t[16] = v) : v = t[16], v;
	}
	function h() {
		o("WAWebQplFlowWrapper").QPL.markerStart(p), o("WAWebQplFlowWrapper").QPL.markerPoint(p, "recovery_flow_welcome");
	}
	function y(e, t) {
		o("WAWebModalManager").ModalManager.open(u.jsx(R, {
			emailMask: e,
			handleCodeEntered: t
		}));
	}
	var C = /^[0-9]{0,6}$/;
	function b(e) {
		return C.test(e);
	}
	var v = function() {
		o("WAWebQplFlowWrapper").QPL.markerPoint(p, "recovery_flow_code_verified"), o("WAWebQplFlowWrapper").QPL.markerEnd(p, 2), o("WAWebModalManager").closeModalManager();
	}, S = function() {
		o("WAWebQplFlowWrapper").QPL.markerPoint(p, "recovery_flow_dialog_dismiss"), o("WAWebModalManager").closeModalManager();
	};
	function R(e) {
		var t = o("react-compiler-runtime").c(35), n = e.emailMask, a = e.handleCodeEntered, i = m(""), l = i[0], c = i[1], d = m(!1), f = d[0], g = d[1], h = m(null), y = h[0], C = h[1], R = r("useWAWebThrottledCallback")(L, 2e3), E;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (E = function(t) {
			g(!1), t === "success" ? v() : t === "incorrect-nonce" ? (o("WAWebQplFlowWrapper").QPL.markerPoint(p, "recovery_flow_incorrect_code"), C("incorrect-nonce")) : C("something-went-wrong");
		}, t[0] = E) : E = t[0];
		var k = E, I;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (I = function(t) {
			k(t.type);
		}, t[1] = I) : I = t[1], o("useWAWebListener").useListener(o("WAWebCatalogCollection").CatalogCollection, "catalog-loaded", I);
		var T;
		t[2] !== y ? (T = function(t) {
			var e = t.text;
			e.length === 6 && (o("WAWebQplFlowWrapper").QPL.markerPoint(p, "recovery_flow_code_entered"), o("WAWebQplFlowWrapper").QPL.markerAnnotate(p, { bool: { validCode: b(e) } })), c(e), y != null && C(null);
		}, t[2] = y, t[3] = T) : T = t[3];
		var D = T, x;
		t[4] !== l || t[5] !== a ? (x = function() {
			o("WAWebQplFlowWrapper").QPL.markerPoint(p, "recovery_flow_code_submitted"), g(!0), o("WAWebCTWABizAccessTokenNonceManager").setNonceFromRecoveryCode(l), a();
		}, t[4] = l, t[5] = a, t[6] = x) : x = t[6];
		var $ = x, P;
		if (y === "incorrect-nonce") {
			var N;
			t[7] === Symbol.for("react.memo_cache_sentinel") ? (N = s._(
				/*BTDS*/
				""
			), t[7] = N) : N = t[7], P = N;
		} else if (y === "something-went-wrong") {
			var M;
			t[8] === Symbol.for("react.memo_cache_sentinel") ? (M = s._(
				/*BTDS*/
				""
			), t[8] = M) : M = t[8], P = M;
		}
		var w;
		t[9] !== l || t[10] !== P ? (w = P == null && !b(l) ? s._(
			/*BTDS*/
			""
		) : null, t[9] = l, t[10] = P, t[11] = w) : w = t[11];
		var A = w, F = l.length !== 6 || A != null, O;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (O = s._(
			/*BTDS*/
			""
		), t[12] = O) : O = t[12];
		var B = O, W;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (W = s._(
			/*BTDS*/
			""
		), t[13] = W) : W = t[13];
		var q = W, U;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (U = [_.paddingHoriz24, _.paddingTop16], t[14] = U) : U = t[14];
		var V;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (V = u.jsx(o("WAWebText.react").WAWebTextTitle, {
			alignSelf: "center",
			xstyle: [_.secondStepHeader, _.paddingBottom16],
			children: s._(
				/*BTDS*/
				""
			)
		}), t[15] = V) : V = t[15];
		var H;
		t[16] !== n ? (H = u.jsx("div", { children: u.jsx(o("WAWebText.react").WAWebTextSmall, {
			as: "span",
			children: s._(
				/*BTDS*/
				"",
				[s._param("email-mask", n)]
			)
		}) }), t[16] = n, t[17] = H) : H = t[17];
		var G;
		t[18] === Symbol.for("react.memo_cache_sentinel") ? (G = [o("WAWebRichTextField.react").TextInputCustomStyleThemes.DigitalCode], t[18] = G) : G = t[18];
		var z = A || P, j;
		t[19] === Symbol.for("react.memo_cache_sentinel") ? (j = s._(
			/*BTDS*/
			""
		), t[19] = j) : j = t[19];
		var K;
		t[20] !== l || t[21] !== D || t[22] !== z ? (K = u.jsx(o("WAWebRichTextField.react").RichTextField, {
			containerXstyle: _.paddingBottom16,
			customStyleThemes: G,
			error: z,
			hideFloatingLabel: !0,
			maxLength: 6,
			onChange: D,
			placeholder: B,
			title: j,
			value: l
		}), t[20] = l, t[21] = D, t[22] = z, t[23] = K) : K = t[23];
		var Q;
		t[24] !== R ? (Q = u.jsx(o("WAWebText.react").WAWebTextSmall, { children: s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m0", u.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
				className: "x1ypdohk",
				onClick: R,
				selectable: !0,
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		) }), t[24] = R, t[25] = Q) : Q = t[25];
		var X;
		t[26] !== H || t[27] !== K || t[28] !== Q ? (X = u.jsxs(r("WAWebBox.react"), {
			direction: "vertical",
			flex: !0,
			xstyle: U,
			children: [
				V,
				H,
				K,
				Q
			]
		}), t[26] = H, t[27] = K, t[28] = Q, t[29] = X) : X = t[29];
		var Y;
		return t[30] !== $ || t[31] !== F || t[32] !== f || t[33] !== X ? (Y = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			okDisabled: F,
			okSpinner: f,
			okText: q,
			onCancel: S,
			onOK: $,
			onOverlayClick: S,
			testid: "ad-account-recovery-enter-code-popup",
			type: o("WAWebModal.react").ModalTheme.AdAccountRecovery,
			children: X
		}), t[30] = $, t[31] = F, t[32] = f, t[33] = X, t[34] = Y) : Y = t[34], Y;
	}
	function L() {
		o("WAWebQplFlowWrapper").QPL.markerPoint(p, "recovery_flow_code_resend_requested"), o("WAWebRequestAdAccountRecoveryCode").requestAdAccountRecoveryCode();
		var e = s._(
			/*BTDS*/
			""
		);
		o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: e }));
	}
	l.default = f;
}), 226);
