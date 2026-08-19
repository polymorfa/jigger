__d("WAWebBizQuickRepliesModal.react", [
	"fbt",
	"$InternalEnum",
	"WAWebAddQuickReplyAction",
	"WAWebEditQuickReplyAction",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebQuickReplyCollection",
	"WAWebQuickReplyLogging",
	"WAWebQuickReplyShortcutRegex",
	"WAWebRichTextField.react",
	"WAWebSavePopup.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"err",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = n("$InternalEnum").Mirrored([
		"ShortcutAlreadyInUse",
		"ShortcutEmpty",
		"ShortcutInvalid",
		"MessageEmpty",
		"SaveFailed"
	]), m = 25;
	function p(e) {
		return e.trim() === "" ? d.ShortcutEmpty : r("WAWebQuickReplyShortcutRegex").test(e) ? null : d.ShortcutInvalid;
	}
	function _(e) {
		return e.trim() === "" ? d.MessageEmpty : null;
	}
	function f(e) {
		switch (e) {
			case d.ShortcutAlreadyInUse: return s._(
				/*BTDS*/
				""
			);
			case d.ShortcutEmpty: return s._(
				/*BTDS*/
				""
			);
			case d.ShortcutInvalid: return s._(
				/*BTDS*/
				""
			);
			case d.MessageEmpty: return s._(
				/*BTDS*/
				""
			);
			case d.SaveFailed: return s._(
				/*BTDS*/
				""
			);
		}
	}
	function g(e) {
		var t, n, a = o("react-compiler-runtime").c(31), i = e.quickReply, l = c((t = i == null ? void 0 : i.shortcut) != null ? t : ""), g = l[0], S = l[1], R = c((n = i == null ? void 0 : i.message) != null ? n : ""), L = R[0], E = R[1], k = c(null), I = k[0], T = k[1], D = c(null), x = D[0], $ = D[1], P;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (P = function(t) {
			var e = p(t);
			S(t), T(e ? f(e) : null);
		}, a[0] = P) : P = a[0];
		var N = P, M;
		a[1] === Symbol.for("react.memo_cache_sentinel") ? (M = function(t) {
			var e = _(t);
			E(t), $(e ? f(e) : null);
		}, a[1] = M) : M = a[1];
		var w = M, A;
		a[2] !== L || a[3] !== i || a[4] !== g ? (A = async function() {
			if (g !== (i == null ? void 0 : i.shortcut) && o("WAWebQuickReplyCollection").QuickReplyCollection.some(function(e) {
				return g === e.shortcut;
			})) throw r("err")(d.ShortcutAlreadyInUse);
			i ? await o("WAWebEditQuickReplyAction").editQuickReplyAction({
				count: i.count,
				id: i.id,
				keywords: i.keywords,
				message: L,
				shortcut: g
			}) : await o("WAWebAddQuickReplyAction").addQuickReplyAction(g, L);
		}, a[2] = L, a[3] = i, a[4] = g, a[5] = A) : A = a[5];
		var F = A, O = b, B = C, W;
		a[6] !== L || a[7] !== x || a[8] !== g || a[9] !== I ? (W = function() {
			var e = [g, L], t = [I, x];
			return e.every(y) && !t.some(h);
		}, a[6] = L, a[7] = x, a[8] = g, a[9] = I, a[10] = W) : W = a[10];
		var q = W, U;
		a[11] === Symbol.for("react.memo_cache_sentinel") ? (U = s._(
			/*BTDS*/
			""
		), a[11] = U) : U = a[11];
		var V = q(), H;
		a[12] === Symbol.for("react.memo_cache_sentinel") ? (H = { type: o("WAWebModal.react").ModalTheme.QuickReplies }, a[12] = H) : H = a[12];
		var G;
		a[13] === Symbol.for("react.memo_cache_sentinel") ? (G = s._(
			/*BTDS*/
			""
		), a[13] = G) : G = a[13];
		var z;
		a[14] === Symbol.for("react.memo_cache_sentinel") ? (z = function(t) {
			var e = t.text;
			return N(e);
		}, a[14] = z) : z = a[14];
		var j;
		a[15] !== g || a[16] !== I ? (j = u.jsx(o("WAWebRichTextField.react").RichTextField, {
			maxLength: m,
			placeholder: G,
			value: g,
			error: I,
			onChange: z,
			showRemaining: !0,
			focusOnMount: !0,
			testid: "quick-replies-modal-shortcut"
		}), a[15] = g, a[16] = I, a[17] = j) : j = a[17];
		var K;
		a[18] === Symbol.for("react.memo_cache_sentinel") ? (K = s._(
			/*BTDS*/
			""
		), a[18] = K) : K = a[18];
		var Q;
		a[19] === Symbol.for("react.memo_cache_sentinel") ? (Q = function(t) {
			var e = t.text;
			return w(e);
		}, a[19] = Q) : Q = a[19];
		var X;
		a[20] !== L || a[21] !== x ? (X = u.jsx(o("WAWebRichTextField.react").RichTextField, {
			placeholder: K,
			value: L,
			error: x,
			multiline: !0,
			emojiBtnPosition: "side",
			onChange: Q,
			theme: "contact-us",
			testid: "quick-replies-modal-message"
		}), a[20] = L, a[21] = x, a[22] = X) : X = a[22];
		var Y;
		a[23] !== X || a[24] !== j ? (Y = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			children: [j, X]
		}), a[23] = X, a[24] = j, a[25] = Y) : Y = a[25];
		var J;
		return a[26] !== F || a[27] !== e.tsNavigationData || a[28] !== Y || a[29] !== V ? (J = u.jsx(r("WAWebSavePopup.react"), {
			title: U,
			onCancel: v,
			doSave: F,
			afterSave: O,
			onError: B,
			isValid: V,
			modalConfig: H,
			tsNavigationData: e.tsNavigationData,
			children: Y
		}), a[26] = F, a[27] = e.tsNavigationData, a[28] = Y, a[29] = V, a[30] = J) : J = a[30], J;
	}
	function h(e) {
		return e;
	}
	function y(e) {
		return e;
	}
	function C(e) {
		var t, n = (t = d.cast(e.message)) != null ? t : d.SaveFailed;
		o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: f(n) }));
	}
	function b() {
		o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }));
	}
	function v() {
		o("WAWebQuickReplyLogging").logQuickReplyAddAbandonEvent();
	}
	l.default = g;
}), 226);
