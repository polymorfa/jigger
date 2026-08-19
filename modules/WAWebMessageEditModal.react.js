__d("WAWebMessageEditModal.react", [
	"fbt",
	"WAWebChatThemeProvider.react",
	"WAWebComposeBoxHasUnsavedChangesInEditModal",
	"WAWebDeleteRevokeMsgFlow.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebFlexItem.react",
	"WAWebFrontendMsgGetters",
	"WAWebMessageEditActionsModal.react",
	"WAWebMessageEditComposer.react",
	"WAWebMessageEditMsgPreview.react",
	"WAWebMessageEditUtils",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebPaymentLink",
	"WAWebPollsGatingUtils",
	"WAWebPortalThemeWrapper.react",
	"WAWebStateUtils",
	"cr:6009",
	"gkx",
	"react",
	"react-compiler-runtime",
	"useWAWebListener",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useMemo, m = c.useRef, p = c.useState;
	function _() {
		return r("gkx")("4985");
	}
	var f = {
		previewContainer: {
			overflowX: "xw2csxc",
			overflowY: "x1odjw0f",
			position: "x1n2onr6",
			zIndex: "x1ja2u2z",
			minHeight: "x2lwn1j",
			maxHeight: "xchkpuk",
			$$css: !0
		},
		drawer: {
			position: "x1n2onr6",
			$$css: !0
		}
	};
	function g(e) {
		var t = o("react-compiler-runtime").c(70), a = e.ref, i = e.msg, l = e.onCancel, c = e.onConfirm, d = i.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION, g;
		if (t[0] !== d || t[1] !== i) {
			var R, L, E;
			g = d ? (R = (L = o("WAWebFrontendMsgGetters").getAsPollCreation(i)) == null ? void 0 : L.pollName) != null ? R : "" : (E = o("WAWebFrontendMsgGetters").getText(i)) != null ? E : "", t[0] = d, t[1] = i, t[2] = g;
		} else g = t[2];
		var k = g, I = p(k), T = I[0], D = I[1], x;
		t[3] !== d || t[4] !== i ? (x = d ? null : S(i), t[3] = d, t[4] = i, t[5] = x) : x = t[5];
		var $ = x, P = p($), N = P[0], M = P[1], w;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (w = {}, t[6] = w) : w = t[6];
		var A = m(w), F = v(T, $, N), O = p(!1), B = O[0], W = O[1], q = p(!1), U = q[0], V = q[1];
		o("WAWebComposeBoxHasUnsavedChangesInEditModal").setHasUnsavedChangesInEditModal(F);
		var H;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (H = ["close_modal"], t[7] = H) : H = t[7], o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, H, y);
		var G;
		t[8] !== d ? (G = function(t) {
			var e, n;
			D(t.text);
			var r = t.text.trim().length === 0;
			V(r && (d || !_())), A.current.mentionedJidList = (e = t.data.mentionedJidList) != null ? e : [], A.current.groupMentions = (n = t.data.groupMentions) != null ? n : [];
		}, t[8] = d, t[9] = G) : G = t[9];
		var z = G, j;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (j = function(t) {
			A.current.linkPreview = t, M(t);
		}, t[10] = j) : j = t[10];
		var K = r("useWAWebStableCallback")(j), Q;
		t[11] !== i ? (Q = function() {
			o("WAWebModalManager").ModalManager.openSupportModal(u.jsx(r("WAWebDeleteRevokeMsgFlow.react"), {
				chat: o("WAWebFrontendMsgGetters").getChat(i),
				msgList: [i.unsafe()].map(o("WAWebStateUtils").unproxy),
				onEnd: h
			}));
		}, t[11] = i, t[12] = Q) : Q = t[12];
		var X = Q, Y;
		t[13] !== X || t[14] !== F || t[15] !== d || t[16] !== i.id || t[17] !== i.t || t[18] !== c || t[19] !== T ? (Y = function() {
			if (T.trim().length === 0) {
				!d && _() && X();
				return;
			}
			if (!F) {
				o("WAWebModalManager").ModalManager.close();
				return;
			}
			if (n("cr:6009") != null && n("cr:6009").messageEditRestrictionEnabled() && !o("WAWebMessageEditUtils").isParentWithinEditProcessingWindow({
				parentTsInSeconds: i.t,
				msgKey: i.id
			})) {
				W(!0), V(!0);
				return;
			}
			c(T, babelHelpers.extends({}, A.current));
		}, t[13] = X, t[14] = F, t[15] = d, t[16] = i.id, t[17] = i.t, t[18] = c, t[19] = T, t[20] = Y) : Y = t[20];
		var J = Y, Z;
		t[21] !== F ? (Z = function() {
			F || o("WAWebModalManager").ModalManager.close();
		}, t[21] = F, t[22] = Z) : Z = t[22];
		var ee = Z, te;
		t[23] !== B ? (te = B ? u.jsx(r("WAWebMessageEditActionsModal.react"), {
			type: o("WAWebModal.react").ModalTheme.MessageActionsModal,
			titleText: s._(
				/*BTDS*/
				""
			),
			okText: s._(
				/*BTDS*/
				""
			),
			onOk: function() {
				W(!1);
			},
			modalText: s._(
				/*BTDS*/
				""
			)
		}) : null, t[23] = B, t[24] = te) : te = t[24];
		var ne = te, re;
		t[25] === Symbol.for("react.memo_cache_sentinel") ? (re = {
			surface: "message-edit",
			viewName: "message-edit"
		}, t[25] = re) : re = t[25];
		var oe;
		t[26] !== d || t[27] !== i ? (oe = C(i, d), t[26] = d, t[27] = i, t[28] = oe) : oe = t[28];
		var ae;
		t[29] !== l || t[30] !== oe ? (ae = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: oe,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
			onCancel: l
		}), t[29] = l, t[30] = oe, t[31] = ae) : ae = t[31];
		var ie;
		t[32] !== i ? (ie = o("WAWebFrontendMsgGetters").getChat(i), t[32] = i, t[33] = ie) : ie = t[33];
		var le;
		t[34] === Symbol.for("react.memo_cache_sentinel") ? (le = "x78zum5 xdt5ytf x1iyjqo2 xs83m0k x2lwn1j xeuugli", t[34] = le) : le = t[34];
		var se = !!N, ue;
		t[35] !== i || t[36] !== se ? (ue = u.jsx(r("WAWebFlexItem.react"), {
			grow: 0,
			shrink: 1,
			basis: "content",
			xstyle: f.previewContainer,
			children: u.jsx(r("WAWebMessageEditMsgPreview.react"), {
				msg: i,
				linkPreviewVisible: se
			})
		}), t[35] = i, t[36] = se, t[37] = ue) : ue = t[37];
		var ce = d ? k : null, de = !d, me = !d, pe;
		t[38] !== d ? (pe = d ? o("WAWebPollsGatingUtils").getMaxPollNameLength() : void 0, t[38] = d, t[39] = pe) : pe = t[39];
		var _e;
		t[40] !== d ? (_e = d ? b() : null, t[40] = d, t[41] = _e) : _e = t[41];
		var fe;
		t[42] !== U || t[43] !== J || t[44] !== z || t[45] !== K || t[46] !== $ || t[47] !== i || t[48] !== ce || t[49] !== de || t[50] !== me || t[51] !== pe || t[52] !== _e ? (fe = u.jsx(o("WAWebMessageEditComposer.react").MessageEditComposer, {
			msg: i,
			initialLinkPreview: $,
			initialText: ce,
			enableMentions: de,
			enableTextFormatting: me,
			maxLength: pe,
			placeholderOverride: _e,
			onInputChange: z,
			onLinkPreviewChange: K,
			onConfirm: J,
			disableConfirmButton: U
		}), t[42] = U, t[43] = J, t[44] = z, t[45] = K, t[46] = $, t[47] = i, t[48] = ce, t[49] = de, t[50] = me, t[51] = pe, t[52] = _e, t[53] = fe) : fe = t[53];
		var ge;
		t[54] !== ue || t[55] !== fe ? (ge = u.jsx(r("WAWebPortalThemeWrapper.react"), { children: u.jsxs(r("WAWebDrawerBody.react"), {
			className: le,
			children: [ue, fe]
		}) }), t[54] = ue, t[55] = fe, t[56] = ge) : ge = t[56];
		var he;
		t[57] !== ie || t[58] !== ge ? (he = u.jsx(r("WAWebChatThemeProvider.react"), {
			chat: ie,
			children: ge
		}), t[57] = ie, t[58] = ge, t[59] = he) : he = t[59];
		var ye;
		t[60] !== ae || t[61] !== he ? (ye = u.jsxs(r("WAWebDrawer.react"), {
			testid: "edit-message-modal",
			xstyle: f.drawer,
			disableNavigationLogging: !0,
			children: [ae, he]
		}, "edit-message-modal"), t[60] = ae, t[61] = he, t[62] = ye) : ye = t[62];
		var Ce;
		t[63] !== ee || t[64] !== a || t[65] !== ye ? (Ce = u.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.MessageEdit,
			ref: a,
			tsNavigationData: re,
			onOverlayClick: ee,
			children: ye
		}), t[63] = ee, t[64] = a, t[65] = ye, t[66] = Ce) : Ce = t[66];
		var be;
		return t[67] !== ne || t[68] !== Ce ? (be = u.jsxs(u.Fragment, { children: [Ce, ne] }), t[67] = ne, t[68] = Ce, t[69] = be) : be = t[69], be;
	}
	function h() {
		return o("WAWebModalManager").ModalManager.close();
	}
	function y() {
		o("WAWebComposeBoxHasUnsavedChangesInEditModal").setHasUnsavedChangesInEditModal(!1);
	}
	function C(e, t) {
		return t ? s._(
			/*BTDS*/
			""
		) : o("WAWebMsgGetters").getIsNewsletterMsg(e) ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b() {
		return s._(
			/*BTDS*/
			""
		);
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e, t, n) {
		var r = e.trim(), o = m(r), a = r.length > 0 && (r !== o.current || (n == null ? void 0 : n.matchedText) !== (t == null ? void 0 : t.matchedText));
		return a;
	}
	function S(e) {
		var t = o("WAWebFrontendMsgGetters").getAsUrl(e.unsafe());
		if (!t) return null;
		var n = null;
		return o("WAWebPaymentLink").shouldDetectInComposer() && (n = o("WAWebPaymentLink").getPSP(t.matchedText)), {
			title: t.title,
			description: t.description,
			matchedText: t.matchedText,
			richPreviewType: t.richPreviewType,
			thumbnail: t.thumbnail,
			thumbnailHQ: t.thumbnailHQ,
			doNotPlayInline: !!t.doNotPlayInline,
			inviteGrpType: t.inviteGrpType,
			mediaKey: t.mediaKey,
			mediaKeyTimestamp: t.mediaKeyTimestamp,
			thumbnailDirectPath: t.thumbnailDirectPath,
			thumbnailSha256: t.thumbnailSha256,
			thumbnailEncSha256: t.thumbnailEncSha256,
			thumbnailHeight: t.thumbnailHeight,
			thumbnailWidth: t.thumbnailWidth,
			psp: n,
			isLoading: !1
		};
	}
	l.default = g;
}), 226);
