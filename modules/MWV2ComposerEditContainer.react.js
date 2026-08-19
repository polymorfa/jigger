__d("MWV2ComposerEditContainer.react", [
	"fbt",
	"LSMessagingThreadTypeUtil",
	"Lexical",
	"LexicalText",
	"MAWEditMessageContext.react",
	"MAWVault",
	"MWLSThreadDisplayContext",
	"MWPActor.react",
	"MWXComposer.react",
	"MWXComposerEmojiButton.react",
	"MWXIconCheckmarkCircle",
	"MWXIconCross",
	"ReQL",
	"ReQLSuspense",
	"isStringNullOrEmpty",
	"react",
	"react-compiler-runtime",
	"useLogMAWEditMessage",
	"useMAWGetSendEditActionForSecure",
	"useMAWGetSendEditActionforOpen",
	"useMWComposerEmojiTransform",
	"useMWXComposerClearAndSendOnEnter",
	"useMWXLexicalEditor",
	"usePrepopulateLexicalEditor",
	"useReStore"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useContext, p = d.useEffect, _ = d.useMemo, f = d.useState, g = "x122imku-B", h = { editMessageContainer: {
		animationDuration: "x4afe7t",
		animationName: "x1axgj95",
		animationTimingFunction: "x1debuo4",
		boxSizing: "x9f619",
		height: "x1dqyrwa",
		$$css: !0
	} };
	function y(t) {
		var n = o("react-compiler-runtime").c(64), a = t.confirmationText, l = t.contentEditableProps, u = t.editMessageData, d = t.headerText, _ = t.onEditCancelCallback, g = t.onEditTriggerCallback, y = a === void 0 ? null : a, b = d === void 0 ? null : d, v = _ === void 0 ? null : _, S = g === void 0 ? null : g, R = (e || (e = r("useReStore")))(), L = m(o("MAWEditMessageContext.react").Context), E = L.setEditMessageData, k = o("MWPActor.react").useActor(), I;
		n[0] !== R.tables.messages || n[1] !== (u == null ? void 0 : u.messageId) || n[2] !== (u == null ? void 0 : u.threadKey) || n[3] !== (u == null ? void 0 : u.timestampMs) ? (I = function() {
			return o("ReQL").fromTableAscending(R.tables.messages).getKeyRange(u == null ? void 0 : u.threadKey, u == null ? void 0 : u.timestampMs, u == null ? void 0 : u.messageId);
		}, n[0] = R.tables.messages, n[1] = u == null ? void 0 : u.messageId, n[2] = u == null ? void 0 : u.threadKey, n[3] = u == null ? void 0 : u.timestampMs, n[4] = I) : I = n[4];
		var T = u == null ? void 0 : u.messageId, D = u == null ? void 0 : u.threadKey, x = u == null ? void 0 : u.timestampMs, $;
		n[5] !== R || n[6] !== T || n[7] !== D || n[8] !== x ? ($ = [
			R,
			T,
			D,
			x
		], n[5] = R, n[6] = T, n[7] = D, n[8] = x, n[9] = $) : $ = n[9];
		var P = o("ReQLSuspense").useFirst(I, $, i.id + ":77"), N = r("useMAWGetSendEditActionforOpen")(), M = r("useMAWGetSendEditActionForSecure")(P == null ? void 0 : P.threadKey);
		P == null || P.text;
		var w;
		if (n[10] !== (P == null ? void 0 : P.text)) {
			var A;
			w = o("MAWVault").unvault((A = P == null ? void 0 : P.text) != null ? A : "").trim(), n[10] = P == null ? void 0 : P.text, n[11] = w;
		} else w = n[11];
		var F = w, O = r("useLogMAWEditMessage")(), B = o("useMWXLexicalEditor").useMWXLexicalEditor(), W = B.editor, q;
		n[12] !== k || n[13] !== u || n[14] !== W || n[15] !== O || n[16] !== (P == null ? void 0 : P.messageId) || n[17] !== S || n[18] !== N || n[19] !== M || n[20] !== F || n[21] !== E ? (q = function() {
			var e = W.getEditorState().read(o("LexicalText").$rootTextContent).trim();
			return r("isStringNullOrEmpty")(e) || e === F ? !1 : (o("LSMessagingThreadTypeUtil").isArmadilloSecure(u.threadType) ? M(P == null ? void 0 : P.messageId, e) : N(u.messageId, e), O(u.threadType, u.threadKey, u.messageId, k, "EDIT_MESSAGE"), E(null), S && S(), !0);
		}, n[12] = k, n[13] = u, n[14] = W, n[15] = O, n[16] = P == null ? void 0 : P.messageId, n[17] = S, n[18] = N, n[19] = M, n[20] = F, n[21] = E, n[22] = q) : q = n[22];
		var U = q;
		C(W, E, v);
		var V;
		n[23] !== W || n[24] !== U ? (V = {
			clearReplyState: null,
			editor: W,
			onSend: U
		}, n[23] = W, n[24] = U, n[25] = V) : V = n[25], r("useMWXComposerClearAndSendOnEnter")(V);
		var H = f(!1), G = H[0], z = H[1], j, K;
		n[26] !== W || n[27] !== F ? (j = function() {
			return W.registerTextContentListener(function(e) {
				var t = e.trim();
				z(!r("isStringNullOrEmpty")(t) && t !== F);
			});
		}, K = [W, F], n[26] = W, n[27] = F, n[28] = j, n[29] = K) : (j = n[28], K = n[29]), p(j, K), r("usePrepopulateLexicalEditor")(W, F, !0), r("useMWComposerEmojiTransform")(W);
		var Q = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(), X = Q === "Inbox" ? 32 : 24, Y;
		n[30] !== b ? (Y = b != null ? b : s._(
			/*BTDS*/
			""
		), n[30] = b, n[31] = Y) : Y = n[31];
		var J;
		n[32] === Symbol.for("react.memo_cache_sentinel") ? (J = s._(
			/*BTDS*/
			""
		), n[32] = J) : J = n[32];
		var Z;
		n[33] !== v || n[34] !== E ? (Z = function() {
			E(null), v && v();
		}, n[33] = v, n[34] = E, n[35] = Z) : Z = n[35];
		var ee;
		n[36] !== X || n[37] !== Z ? (ee = c.jsx(o("MWXComposer.react").Button, {
			color: "primary",
			icon: r("MWXIconCross"),
			label: J,
			onPress: Z,
			size: X
		}), n[36] = X, n[37] = Z, n[38] = ee) : ee = n[38];
		var te;
		n[39] !== Y || n[40] !== ee ? (te = c.jsx(o("MWXComposer.react").Header, {
			hasTopBorder: !0,
			headlineText: Y,
			rightAddon: ee,
			xstyle: h.editMessageContainer
		}, 0), n[39] = Y, n[40] = ee, n[41] = te) : te = n[41];
		var ne;
		n[42] === Symbol.for("react.memo_cache_sentinel") ? (ne = s._(
			/*BTDS*/
			""
		), n[42] = ne) : ne = n[42];
		var re;
		n[43] === Symbol.for("react.memo_cache_sentinel") ? (re = s._(
			/*BTDS*/
			""
		), n[43] = re) : re = n[43];
		var oe;
		n[44] !== l ? (oe = c.jsx(o("MWXComposer.react").TextEditor, {
			ariaLabel: ne,
			contentEditableProps: l,
			placeholderText: String(re),
			testid: void 0
		}), n[44] = l, n[45] = oe) : oe = n[45];
		var ae;
		n[46] === Symbol.for("react.memo_cache_sentinel") ? (ae = c.jsx(r("MWXComposerEmojiButton.react"), {}), n[46] = ae) : ae = n[46];
		var ie;
		n[47] !== oe ? (ie = c.jsxs(o("MWXComposer.react").InputArea, { children: [oe, ae] }), n[47] = oe, n[48] = ie) : ie = n[48];
		var le = !G, se;
		n[49] !== y ? (se = y != null ? y : s._(
			/*BTDS*/
			""
		), n[49] = y, n[50] = se) : se = n[50];
		var ue;
		n[51] !== U ? (ue = function() {
			U();
		}, n[51] = U, n[52] = ue) : ue = n[52];
		var ce;
		n[53] !== le || n[54] !== se || n[55] !== ue ? (ce = c.jsx(o("MWXComposer.react").Button, {
			disabled: le,
			icon: r("MWXIconCheckmarkCircle"),
			label: se,
			onPress: ue,
			testid: void 0
		}), n[53] = le, n[54] = se, n[55] = ue, n[56] = ce) : ce = n[56];
		var de;
		n[57] !== ie || n[58] !== ce ? (de = c.jsxs(o("MWXComposer.react").Row, { children: [ie, ce] }), n[57] = ie, n[58] = ce, n[59] = de) : de = n[59];
		var me;
		return n[60] !== W || n[61] !== te || n[62] !== de ? (me = c.jsx(o("MWXComposer.react").Composer, {
			editor: W,
			header: te,
			children: de
		}), n[60] = W, n[61] = te, n[62] = de, n[63] = me) : me = n[63], me;
	}
	function C(e, t, n) {
		var r = o("react-compiler-runtime").c(5), a = n === void 0 ? null : n, i, l;
		r[0] !== e || r[1] !== a || r[2] !== t ? (i = function() {
			return e.registerCommand(o("Lexical").KEY_ESCAPE_COMMAND, function(e) {
				return e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation(), t(null), a && a(), !0;
			}, o("Lexical").COMMAND_PRIORITY_CRITICAL);
		}, l = [
			e,
			t,
			a
		], r[0] = e, r[1] = a, r[2] = t, r[3] = i, r[4] = l) : (i = r[3], l = r[4]), p(i, l);
	}
	l.default = y;
}), 226);
