__d("WAWebLabelChatHeaderButton.react", [
	"fbt",
	"WAJids",
	"WAWebCommonCTWADataSharing",
	"WAWebHeader.react",
	"WAWebIcLabelFilledIcon.react",
	"WAWebLabelCollection",
	"WAWebLabelGetters",
	"WAWebLabelOutlineIcon.react",
	"WAWebLabelStackIcon.react",
	"WAWebLabels.react",
	"WAWebLeadListConstants",
	"WAWebLeadStage",
	"WAWebLeadStageNames",
	"WAWebLeadSublistGating",
	"WAWebListIconStacked.react",
	"WAWebListPeopleIcon.react",
	"WAWebListsGatingUtils",
	"WAWebListsIntroPopupLoadable",
	"WAWebMobilePlatforms",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebNux",
	"WAWebSMBListsIntroPopup.react",
	"WAWebScreenWidthThresholds",
	"WAWebSmbDataSharingOptInModalDialog",
	"WAWebTabOrder",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebUnstyledButton.react",
	"WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
	"WDSIconIcArrowDropDown.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebEventTargetValue",
	"useWAWebLeadStageForChat",
	"useWAWebNux",
	"useWAWebWindowSize"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = c.useState, f = {
		button: {
			alignItems: "x6s0dn4",
			backgroundColor: "x1280gxy",
			borderTopColor: "xnj1f2r",
			borderInlineEndColor: "x2uibgs",
			borderBottomColor: "xkveyfu",
			borderInlineStartColor: "x12llq9",
			borderStartStartRadius: "xhpystz",
			borderStartEndRadius: "xhmftvz",
			borderEndEndRadius: "x11v37me",
			borderEndStartRadius: "x1tw5c3r",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			cursor: "x1ypdohk",
			display: "x78zum5",
			columnGap: "x1s70e7g",
			height: "x10kmny3",
			paddingInlineStart: "x12w63v0",
			paddingInlineEnd: "x1nzty39",
			paddingLeft: null,
			paddingRight: null,
			":hover_backgroundColor": "x1ubxc9n",
			$$css: !0
		},
		icon: {
			color: "x14ug900",
			height: "x8lyb6r",
			width: "x1mzsije",
			$$css: !0
		},
		listPeopleIcon: {
			color: "x14ug900",
			height: "x8lyb6r",
			marginInlineStart: "x150mmf0",
			width: "x1mzsije",
			$$css: !0
		},
		labelStackIcon: {
			position: "x10l6tqk",
			top: "x16xtl6x",
			$$css: !0
		}
	};
	function g(e) {
		if (e.length === 0) return {
			primaryLabel: null,
			secondaryLabel: null
		};
		var t = e.map(function(e) {
			return parseInt(e, 10);
		}).filter(function(e) {
			return !Number.isNaN(e);
		}), n;
		t.length >= 2 ? (t.sort(function(e, t) {
			return t - e;
		}), n = t.map(function(e) {
			return e.toString();
		})) : n = e;
		var r = n[0], a = o("WAWebLabelCollection").LabelCollection.get(r), i = {
			id: r,
			model: a,
			color: a ? o("WAWebLabelGetters").getHexColor(a) : null
		}, l = null;
		if (n.length >= 2) {
			var s = n[1], u = o("WAWebLabelCollection").LabelCollection.get(s);
			l = {
				id: s,
				model: u,
				color: u ? o("WAWebLabelGetters").getHexColor(u) : null
			};
		}
		return {
			primaryLabel: i,
			secondaryLabel: l
		};
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(54), n = e.chat, a = p(null), i = _(null), l = i[0], c = i[1], d = _(null), h = d[0], b = d[1], v = r("useWAWebWindowSize")(), S = v.width < o("WAWebScreenWidthThresholds").NARROW_SCREEN_THRESHOLD, R;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (R = o("WAWebListsGatingUtils").isListsEnabled(), t[0] = R) : R = t[0];
		var L = R, E = o("WAWebMobilePlatforms").isSMB() ? o("WAWebNux").NUX.SMB_LISTS_INTRO : o("WAWebNux").NUX.ADD_TO_LISTS, k = r("useWAWebNux")(E), I = k[0], T = k[1], D;
		if (t[1] !== n.labels) {
			var x;
			D = (x = n.labels) != null ? x : [], t[1] = n.labels, t[2] = D;
		} else D = t[2];
		var $;
		t[3] !== D ? ($ = D.map(y), t[3] = D, t[4] = $) : $ = t[4];
		var P, N;
		t[5] !== n.labels ? (P = function() {
			return C(n.labels);
		}, N = [n.labels], t[5] = n.labels, t[6] = P, t[7] = N) : (P = t[6], N = t[7]);
		var M = r("useWAWebEventTargetValue")(o("WAWebLabelCollection").LabelCollection, $, P, N), w;
		if (t[8] !== M) {
			var A;
			w = (M == null ? void 0 : M.labelId) != null && ((A = o("WAWebLabelCollection").LabelCollection.get(M.labelId)) == null ? void 0 : A.predefinedId) === o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID, t[8] = M, t[9] = w;
		} else w = t[9];
		var F = w, O;
		t[10] !== n.id ? (O = o("WAJids").unsafeCoerceToChatJid(n.id.toString()), t[10] = n.id, t[11] = O) : O = t[11];
		var B;
		t[12] !== n || t[13] !== F ? (B = F && o("WAWebLeadSublistGating").isChatEligibleForLeadSublist(n), t[12] = n, t[13] = F, t[14] = B) : B = t[14];
		var W = r("useWAWebLeadStageForChat")(O, B), q = W.stage, U;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (U = function(t) {
			if (L) return u.jsx("div", {
				className: "x6s0dn4 x78zum5 x8lyb6r x150mmf0 x1n2onr6 x1mzsije",
				children: u.jsx(r("WAWebListIconStacked.react"), { labelIds: t })
			});
			var e = g(t), n = e.primaryLabel, a = e.secondaryLabel;
			return u.jsxs("div", {
				className: "x8lyb6r x1n2onr6 x1mzsije x7g7pl8 x1qfufaz",
				children: [u.jsx(o("WAWebIcLabelFilledIcon.react").IcLabelFilledIcon, {
					width: 18,
					height: 18,
					style: (n == null ? void 0 : n.color) != null ? { color: n.color } : {},
					xstyle: f.labelStackIcon
				}), u.jsx(o("WAWebLabelStackIcon.react").LabelStackIcon, {
					width: 18,
					height: 18,
					style: (a == null ? void 0 : a.color) != null ? { color: a.color } : {},
					xstyle: f.labelStackIcon
				})]
			});
		}, t[15] = U) : U = t[15];
		var V = U, H;
		t[16] !== F || t[17] !== M || t[18] !== q || t[19] !== S ? (H = function() {
			return S ? null : (M == null ? void 0 : M.name) != null ? F && q != null && q !== o("WAWebLeadStage").LeadStage.NONE ? s._(
				/*BTDS*/
				"",
				[s._param("lead list name", M.name), s._param("lead stage name", o("WAWebLeadStageNames").getLeadStageName(q))]
			) : M.name : (M == null ? void 0 : M.count) != null ? s._(
				/*BTDS*/
				"",
				[s._param("labelCount", M.count)]
			) : L ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		}, t[16] = F, t[17] = M, t[18] = q, t[19] = S, t[20] = H) : H = t[20];
		var G = H, z;
		t[21] !== n.labels || t[22] !== M ? (z = function() {
			return (M == null ? void 0 : M.labelId) != null ? u.jsx(o("WAWebLabels.react").Labels, {
				labels: [M.labelId],
				showName: !1,
				isListsFeatureEnabled: L
			}) : (M == null ? void 0 : M.count) != null && n.labels != null ? V(n.labels) : L ? u.jsx(o("WAWebListPeopleIcon.react").ListPeopleIcon, { iconXstyle: f.listPeopleIcon }) : u.jsx(o("WAWebLabelOutlineIcon.react").LabelOutlineIcon, { iconXstyle: f.icon });
		}, t[21] = n.labels, t[22] = M, t[23] = z) : z = t[23];
		var j = z, K;
		t[24] === Symbol.for("react.memo_cache_sentinel") ? (K = function() {
			b(null);
		}, t[24] = K) : K = t[24];
		var Q = K, X = p(r("WAWebNoop")), Y;
		t[25] !== n || t[26] !== l ? (Y = function(t) {
			var e = babelHelpers.extends({}, o("WAWebHeader.react").createLabelsDropdownMenu(n, function(e) {
				return X.current(e);
			}, t), {
				anchor: l,
				anchorRef: a
			});
			b(e);
		}, t[25] = n, t[26] = l, t[27] = Y) : Y = t[27];
		var J = Y, Z, ee;
		t[28] !== J ? (Z = function() {
			X.current = J;
		}, ee = [J], t[28] = J, t[29] = Z, t[30] = ee) : (Z = t[29], ee = t[30]), m(Z, ee);
		var te;
		t[31] !== n || t[32] !== h || t[33] !== J || t[34] !== I || t[35] !== T ? (te = function(t) {
			if (t.preventDefault(), t.stopPropagation(), n) if (h != null) Q();
			else if (I && L) {
				var e = o("WAWebMobilePlatforms").isSMB() ? o("WAWebSMBListsIntroPopup.react").SMBListsIntroPopup : o("WAWebListsIntroPopupLoadable").ListsIntroPopupLoadable;
				o("WAWebModalManager").ModalManager.open(u.jsx(e, { onContinue: function() {
					T(), r("WAWebSmbDataSharingOptInModalDialog").maybeShowLabelDataSharingDialog({
						cb: function() {
							J();
						},
						chats: [n],
						entrypoint: o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.LABEL_CHAT,
						target: o("WAWebCommonCTWADataSharing").SmbDataSharingLabelTargetValues.CHAT
					});
				} }));
			} else r("WAWebSmbDataSharingOptInModalDialog").maybeShowLabelDataSharingDialog({
				cb: function() {
					J();
				},
				chats: [n],
				entrypoint: o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.LABEL_CHAT,
				target: o("WAWebCommonCTWADataSharing").SmbDataSharingLabelTargetValues.CHAT
			});
		}, t[31] = n, t[32] = h, t[33] = J, t[34] = I, t[35] = T, t[36] = te) : te = t[36];
		var ne = te, re;
		if (h != null) {
			var oe;
			t[37] !== h ? (oe = u.jsx(o("WAWebUimUie.react").UIE, {
				displayName: "LabelChatDropdownMenu",
				escapable: !0,
				popable: !0,
				dismissOnWindowResize: !0,
				requestDismiss: Q,
				children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: h })
			}), t[37] = h, t[38] = oe) : oe = t[38], re = oe;
		}
		var ae;
		t[39] === Symbol.for("react.memo_cache_sentinel") ? (ae = { className: "x150mmf0" }, t[39] = ae) : ae = t[39];
		var ie;
		t[40] === Symbol.for("react.memo_cache_sentinel") ? (ie = L ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[40] = ie) : ie = t[40];
		var le;
		t[41] !== j ? (le = j(), t[41] = j, t[42] = le) : le = t[42];
		var se;
		t[43] !== G || t[44] !== S ? (se = !S && u.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			textAlign: "center",
			colorName: "contentDefault",
			children: G()
		}), t[43] = G, t[44] = S, t[45] = se) : se = t[45];
		var ue;
		t[46] === Symbol.for("react.memo_cache_sentinel") ? (ue = u.jsx(r("WDSIconIcArrowDropDown.react"), { iconXstyle: f.icon }), t[46] = ue) : ue = t[46];
		var ce;
		t[47] !== ne || t[48] !== le || t[49] !== se ? (ce = u.jsx("div", babelHelpers.extends({ ref: c }, ae, { children: u.jsxs(r("WAWebUnstyledButton.react"), {
			ref: a,
			testid: "label-chat-header-button",
			dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
			xstyle: f.button,
			onClick: ne,
			"aria-label": ie,
			children: [
				le,
				se,
				ue
			]
		}) })), t[47] = ne, t[48] = le, t[49] = se, t[50] = ce) : ce = t[50];
		var de;
		return t[51] !== ce || t[52] !== re ? (de = u.jsxs(u.Fragment, { children: [ce, re] }), t[51] = ce, t[52] = re, t[53] = de) : de = t[53], de;
	}
	function y(e) {
		return "label_updated_" + e;
	}
	function C(e) {
		if (e == null || e.length === 0) return null;
		if (e.length === 1) {
			var t = e[0], n = o("WAWebLabelCollection").LabelCollection.get(t);
			return n == null ? null : {
				name: n.name,
				labelId: t
			};
		}
		return { count: e.length };
	}
	l.getLabelStackInfo = g, l.LabelChatHeaderButton = h;
}), 226);
