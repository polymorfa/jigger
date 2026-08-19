__d("WAWebBizAILeadGenResponsesDrawer.react", [
	"fbt",
	"CometRelay",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebBizAILeadGenEditFieldsModal.react",
	"WAWebBizAILeadGenResponsesDrawer_flow.graphql",
	"WAWebBizAILeadGenUtils",
	"WAWebBizAIModal",
	"WAWebBizAiLeadGenDeleteMutation",
	"WAWebBizAiLeadGenMarkAllSeenMutation",
	"WAWebDetailImage.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDropdownItem.react",
	"WAWebFrontendContactGetters",
	"WAWebModalManager",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WDSButton.react",
	"WDSIconIcCheckCircleFilled.react",
	"WDSIconIcDelete.react",
	"WDSIconIcEdit.react",
	"WDSIconIcMoreVert.react",
	"WDSText.react",
	"compactMap",
	"react",
	"react-compiler-runtime",
	"useWAWebContactValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useMemo, f = d.useRef, g = d.useState, h = { body: {
		paddingInlineStart: "x1iw51ew",
		paddingInlineEnd: "xde1mab",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} };
	function y() {
		o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }));
	}
	function C(e) {
		if (e == null) return "";
		var t = new Date(e * 1e3), n = t.toLocaleDateString(void 0, {
			day: "numeric",
			month: "long",
			year: "numeric"
		});
		return s._(
			/*BTDS*/
			"",
			[s._param("date", n)]
		);
	}
	function b(e) {
		var t, n, a, i, l, u = o("react-compiler-runtime").c(37), d = e.data, m = e.index, p = e.markedAllRead, _ = e.onViewResponseDetail;
		(t = d.consumer_uid) == null || t.pn, (n = d.consumer_uid) == null || n.lid;
		var f = (a = d.consumer_uid) == null ? void 0 : a.pn, g = (i = d.consumer_uid) == null ? void 0 : i.lid, h;
		u[0] !== f || u[1] !== g ? (h = o("WAWebBizAILeadGenUtils").getConsumerWid(f, g), u[0] = f, u[1] = g, u[2] = h) : h = u[2];
		var y = h, b = (l = o("useWAWebContactValues").useOptionalContactValues(y, [o("WAWebFrontendContactGetters").getDisplayName])) != null ? l : [], v = b[0], S;
		if (u[3] !== v || u[4] !== (y == null ? void 0 : y.user)) {
			var R;
			S = (R = v != null ? v : y == null ? void 0 : y.user) != null ? R : s._(
				/*BTDS*/
				""
			), u[3] = v, u[4] = y == null ? void 0 : y.user, u[5] = S;
		} else S = u[5];
		var L = S, E;
		u[6] !== d || u[7] !== _ ? (E = function() {
			_(d);
		}, u[6] = d, u[7] = _, u[8] = E) : E = u[8];
		var k = E, I = "lead-gen-response-item-" + m, T;
		u[9] !== L ? (T = s._(
			/*BTDS*/
			"",
			[s._param("name", L)]
		).toString(), u[9] = L, u[10] = T) : T = u[10];
		var D;
		u[11] !== k ? (D = function(t) {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), k());
		}, u[11] = k, u[12] = D) : D = u[12];
		var x;
		u[13] === Symbol.for("react.memo_cache_sentinel") ? (x = { className: "x6s0dn4 xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x78zum5 x8a3fw1 x1aj3ljl x16ovd2e x12xbjc7 xvtqlqk x1phvje8 x1ubxc9n" }, u[13] = x) : x = u[13];
		var $;
		u[14] !== y ? ($ = y != null ? c.jsx("div", {
			className: "x2lah0s",
			children: c.jsx(o("WAWebDetailImage.react").DetailImage, {
				id: y,
				size: o("WAWebDetailImage.react").DetailImageSize.ExtraSmall
			})
		}) : null, u[14] = y, u[15] = $) : $ = u[15];
		var P;
		u[16] === Symbol.for("react.memo_cache_sentinel") ? (P = { className: "x1iyjqo2 xeuugli x6ikm8r x10wlt62" }, u[16] = P) : P = u[16];
		var N;
		u[17] !== L ? (N = c.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			maxLines: 1,
			children: L
		}), u[17] = L, u[18] = N) : N = u[18];
		var M;
		u[19] !== d.creation_time ? (M = C(d.creation_time), u[19] = d.creation_time, u[20] = M) : M = u[20];
		var w;
		u[21] !== M ? (w = c.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			children: M
		}), u[21] = M, u[22] = w) : w = u[22];
		var A;
		u[23] !== N || u[24] !== w ? (A = c.jsxs("div", babelHelpers.extends({}, P, { children: [N, w] })), u[23] = N, u[24] = w, u[25] = A) : A = u[25];
		var F;
		u[26] !== d.has_seen || u[27] !== p ? (F = d.has_seen !== !0 && p !== !0 ? c.jsx("div", { className: "x1qe8gl4 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x2lah0s xdk7pt x1xc55vz" }) : null, u[26] = d.has_seen, u[27] = p, u[28] = F) : F = u[28];
		var O;
		return u[29] !== k || u[30] !== $ || u[31] !== A || u[32] !== F || u[33] !== I || u[34] !== T || u[35] !== D ? (O = c.jsxs("div", babelHelpers.extends({
			"data-testid": I,
			role: "button",
			tabIndex: 0,
			"aria-label": T,
			onClick: k,
			onKeyDown: D
		}, x, { children: [
			$,
			A,
			F
		] })), u[29] = k, u[30] = $, u[31] = A, u[32] = F, u[33] = I, u[34] = T, u[35] = D, u[36] = O) : O = u[36], O;
	}
	function v(t) {
		var a, i = o("react-compiler-runtime").c(47), l = t.flowRef, u = t.onBack, d = t.onViewResponseDetail, m = t.ref, _ = o("CometRelay").useFragment(e !== void 0 ? e : e = n("WAWebBizAILeadGenResponsesDrawer_flow.graphql"), l), C;
		i[0] === Symbol.for("react.memo_cache_sentinel") ? (C = [], i[0] = C) : C = i[0], p(k, C);
		var v = g(!1), I = v[0], T = v[1], D = g(null), x = D[0], $ = D[1], P = f(null), N = f(!1), M = f(!1), w;
		i[1] !== _ ? (w = function() {
			o("WAWebBizAIModal").openBizAIModal(c.jsx(r("WAWebBizAILeadGenEditFieldsModal.react"), {
				flowRef: _,
				onBack: o("WAWebModalManager").closeModalManager,
				onSaved: o("WAWebModalManager").closeModalManager
			}));
		}, i[1] = _, i[2] = w) : w = i[2];
		var A = w, F;
		if (i[3] !== ((a = _.lead_data) == null ? void 0 : a.edges)) {
			var O, B, W;
			F = r("compactMap")((O = (B = _.lead_data) == null ? void 0 : B.edges) != null ? O : [], E), i[3] = (W = _.lead_data) == null ? void 0 : W.edges, i[4] = F;
		} else F = i[4];
		var q = F, U;
		i[5] !== _.moment_type ? (U = _.moment_type === "READY_TO_BUY" ? s._(
			/*BTDS*/
			""
		) : _.moment_type === "NEW_CHAT_BEGINS" ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), i[5] = _.moment_type, i[6] = U) : U = i[6];
		var V = U, H;
		i[7] !== I || i[8] !== q ? (H = !I && q.some(L), i[7] = I, i[8] = q, i[9] = H) : H = i[9];
		var G = H, z;
		i[10] !== _.id ? (z = function() {
			_.id == null || N.current || (N.current = !0, o("WAWebBizAiLeadGenMarkAllSeenMutation").markAllLeadGenDataAsSeenForFlow(_.id).then(function(e) {
				o("WAWebBizAILargeScreensLogEvents").logApiMarkAllSeenResult(e.isSuccess), e.isSuccess ? (T(!0), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }))) : y();
			}).catch(R).finally(function() {
				N.current = !1;
			}));
		}, i[10] = _.id, i[11] = z) : z = i[11];
		var j = z, K;
		i[12] !== _.id || i[13] !== u ? (K = function() {
			_.id == null || M.current || (M.current = !0, o("WAWebBizAiLeadGenDeleteMutation").deleteLeadGenFlow(_.id).then(function(e) {
				o("WAWebBizAILargeScreensLogEvents").logApiDeleteLeadGenFormResult(e.isSuccess), e.isSuccess ? u() : y();
			}).catch(S).finally(function() {
				M.current = !1;
			}));
		}, i[12] = _.id, i[13] = u, i[14] = K) : K = i[14];
		var Q = K, X;
		i[15] !== Q || i[16] !== A || i[17] !== j || i[18] !== G ? (X = function(t) {
			var e = P.current;
			e != null && $({
				anchor: e,
				autoFocus: t,
				menu: c.jsxs(c.Fragment, { children: [
					c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
						action: function() {
							j(), $(null);
						},
						disabled: !G,
						icon: c.jsx(r("WDSIconIcCheckCircleFilled.react"), {}),
						testid: "lead-gen-mark-all-read",
						children: s._(
							/*BTDS*/
							""
						)
					}),
					c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
						action: function() {
							A(), $(null);
						},
						icon: c.jsx(r("WDSIconIcEdit.react"), {}),
						testid: "lead-gen-edit-flow",
						children: s._(
							/*BTDS*/
							""
						)
					}),
					c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
						action: function() {
							Q(), $(null);
						},
						icon: c.jsx(r("WDSIconIcDelete.react"), {}),
						theme: o("WAWebDropdownItem.react").DropdownItemThemeType.Negative,
						testid: "lead-gen-delete-flow",
						children: s._(
							/*BTDS*/
							""
						)
					})
				] })
			});
		}, i[15] = Q, i[16] = A, i[17] = j, i[18] = G, i[19] = X) : X = i[19];
		var Y = X, J;
		i[20] !== Y ? (J = function() {
			Y();
		}, i[20] = Y, i[21] = J) : J = i[21];
		var Z = J, ee;
		i[22] === Symbol.for("react.memo_cache_sentinel") ? (ee = function() {
			$(null);
		}, i[22] = ee) : ee = i[22];
		var te = ee, ne;
		i[23] === Symbol.for("react.memo_cache_sentinel") ? (ne = s._(
			/*BTDS*/
			""
		).toString(), i[23] = ne) : ne = i[23];
		var re;
		i[24] !== Z ? (re = c.jsx("span", {
			ref: P,
			children: c.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcMoreVert.react"),
				onPress: Z,
				variant: "borderless",
				size: "small",
				"aria-label": ne,
				testid: "lead-gen-more-menu-btn"
			})
		}), i[24] = Z, i[25] = re) : re = i[25];
		var oe;
		i[26] !== u || i[27] !== V || i[28] !== re ? (oe = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: V,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: u,
			rightActionElement: re
		}), i[26] = u, i[27] = V, i[28] = re, i[29] = oe) : oe = i[29];
		var ae;
		i[30] !== x ? (ae = x != null && c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "ResponsesDrawerMenu",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: te,
			children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: {
				anchor: x.anchor,
				autoFocus: x.autoFocus,
				menu: x.menu
			} })
		}), i[30] = x, i[31] = ae) : ae = i[31];
		var ie;
		i[32] === Symbol.for("react.memo_cache_sentinel") ? (ie = { className: "x1nbhmlj x1xrf6ya x1iw51ew xde1mab" }, i[32] = ie) : ie = i[32];
		var le, se;
		i[33] === Symbol.for("react.memo_cache_sentinel") ? (le = c.jsx("div", babelHelpers.extends({}, ie, { children: c.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1Emphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), se = { className: "x12xbjc7 x1iw51ew xde1mab" }, i[33] = le, i[34] = se) : (le = i[33], se = i[34]);
		var ue;
		i[35] === Symbol.for("react.memo_cache_sentinel") ? (ue = c.jsx("div", babelHelpers.extends({}, se, { children: c.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body3",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), i[35] = ue) : ue = i[35];
		var ce;
		i[36] !== I || i[37] !== d || i[38] !== q ? (ce = q.length === 0 ? c.jsx("div", {
			className: "x1h678fw xv6tirj x1iw51ew xde1mab x2b8uid",
			children: c.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}) : q.map(function(e, t) {
			var n;
			return c.jsx(b, {
				data: e,
				index: t,
				markedAllRead: I,
				onViewResponseDetail: d
			}, (n = e.id) != null ? n : String(t));
		}), i[36] = I, i[37] = d, i[38] = q, i[39] = ce) : ce = i[39];
		var de;
		i[40] !== ce ? (de = c.jsxs(r("WAWebDrawerBody.react"), {
			xstyle: h.body,
			children: [
				le,
				ue,
				ce
			]
		}), i[40] = ce, i[41] = de) : de = i[41];
		var me;
		return i[42] !== m || i[43] !== oe || i[44] !== ae || i[45] !== de ? (me = c.jsxs(r("WAWebDrawer.react"), {
			ref: m,
			testid: "biz-ai-lead-gen-responses-drawer",
			children: [
				oe,
				ae,
				de
			]
		}), i[42] = m, i[43] = oe, i[44] = ae, i[45] = de, i[46] = me) : me = i[46], me;
	}
	function S() {
		o("WAWebBizAILargeScreensLogEvents").logApiDeleteLeadGenFormResult(!1), y();
	}
	function R() {
		o("WAWebBizAILargeScreensLogEvents").logApiMarkAllSeenResult(!1), y();
	}
	function L(e) {
		return e.has_seen !== !0;
	}
	function E(e) {
		return e == null ? void 0 : e.node;
	}
	function k() {
		o("WAWebBizAILargeScreensLogEvents").logViewLeadGenCustomerInfoList();
	}
	l.default = v;
}), 226);
