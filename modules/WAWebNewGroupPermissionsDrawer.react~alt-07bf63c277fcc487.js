__d("WAWebNewGroupPermissionsDrawer.react", [
	"fbt",
	"WAWebActionToast.react",
	"WAWebChatInfoDrawerRow.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebDrawerUtils",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebGroupConstants",
	"WAWebGroupGatingUtils",
	"WAWebGroupHistoryGating",
	"WAWebPendingParticipantsIcon.react",
	"WAWebSetPropertyGroupAction",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WDSIconIcEdit.react",
	"WDSIconIcHistory.react",
	"WDSIconIcLink.react",
	"WDSIconIcPersonAdd.react",
	"WDSIconWdsIcChat.react",
	"WDSSwitch.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = { secondary: {
		color: "xhslqc4",
		$$css: !0
	} };
	function m(e) {
		var t = o("react-compiler-runtime").c(16), n = e.icon, a = e.secondaryTitle, i = e.settingType, l = e.setValue, s = e.title, u = e.value, d = u === !0 ? "off" : "on", m;
		t[0] !== d || t[1] !== l || t[2] !== i ? (m = async function(t) {
			l(!t);
			var e = o("WAWebActionToast.react").genId(), n = o("WAWebSetPropertyGroupAction").getActionString(i, d)[1];
			o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
				id: e,
				msg: n
			}));
		}, t[0] = d, t[1] = l, t[2] = i, t[3] = m) : m = t[3];
		var p = m, _;
		t[4] !== p || t[5] !== u ? (_ = function() {
			return void p(u);
		}, t[4] = p, t[5] = u, t[6] = _) : _ = t[6];
		var f;
		t[7] !== _ || t[8] !== s || t[9] !== u ? (f = c.jsx(r("WDSSwitch.react"), {
			"aria-label": s,
			value: u,
			onChange: _
		}), t[7] = _, t[8] = s, t[9] = u, t[10] = f) : f = t[10];
		var g = f, h;
		return t[11] !== n || t[12] !== a || t[13] !== s || t[14] !== g ? (h = c.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRow, {
			icon: n,
			side: g,
			title: s,
			secondaryTitle: a,
			spaced: !0
		}), t[11] = n, t[12] = a, t[13] = s, t[14] = g, t[15] = h) : h = t[15], h;
	}
	function p(t) {
		var n = o("react-compiler-runtime").c(70), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, u = l.announce, p = l.memberAddMode, _ = l.memberLinkMode, f = l.memberShareGroupHistoryMode, g = l.membershipApprovalMode, h = l.onBack, y = l.onCancel, C = l.participantCount, b = l.restrict, v = l.setAnnounce, S = l.setMemberAddMode, R = l.setMemberLinkMode, L = l.setMemberShareGroupHistoryMode, E = l.setMembershipApprovalMode, k = l.setRestrict, I;
		n[3] !== a.viewType ? (I = o("WAWebDrawerUtils").getDrawerHeaderType(a.viewType), n[3] = a.viewType, n[4] = I) : I = n[4];
		var T = I, D;
		n[5] !== p || n[6] !== C ? (D = p === !0 && !(o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsM2Enabled() && C != null && C > o("WAWebGroupGatingUtils").ANYONE_CAN_LINK_M2_PARTICIPANT_THRESHOLD), n[5] = p, n[6] = C, n[7] = D) : D = n[7];
		var x = D, $;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? ($ = o("WAWebGroupHistoryGating").isGroupHistorySettingsDecoupleEnabled(), n[8] = $) : $ = n[8];
		var P = $, N;
		n[9] !== p ? (N = o("WAWebGroupHistoryGating").isGroupHistorySettingsToggleUIEnabled() && (P || p === !0), n[9] = p, n[10] = N) : N = n[10];
		var M = N, w;
		n[11] !== f || n[12] !== L || n[13] !== M ? (w = M ? c.jsx(m, {
			value: f,
			setValue: L,
			icon: c.jsx(r("WDSIconIcHistory.react"), {
				testid: "group_message_history_setting_icon",
				xstyle: d.secondary
			}),
			settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_SHARE_GROUP_HISTORY_MODE,
			title: s._(
				/*BTDS*/
				""
			),
			secondaryTitle: c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
				/*BTDS*/
				""
			) })
		}) : null, n[11] = f, n[12] = L, n[13] = M, n[14] = w) : w = n[14];
		var A = w, F;
		n[15] !== _ || n[16] !== S || n[17] !== R ? (F = function(t) {
			S(t), t === !1 && _ === !0 && R(!1);
		}, n[15] = _, n[16] = S, n[17] = R, n[18] = F) : F = n[18];
		var O = F, B = a.viewType, W;
		n[19] === Symbol.for("react.memo_cache_sentinel") ? (W = {
			surface: "unknown",
			viewName: "new-group-permissions"
		}, n[19] = W) : W = n[19];
		var q;
		n[20] === Symbol.for("react.memo_cache_sentinel") ? (q = s._(
			/*BTDS*/
			""
		), n[20] = q) : q = n[20];
		var U;
		n[21] !== T || n[22] !== h || n[23] !== y ? (U = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: q,
			type: T,
			onBack: h,
			onCancel: y
		}), n[21] = T, n[22] = h, n[23] = y, n[24] = U) : U = n[24];
		var V;
		n[25] === Symbol.for("react.memo_cache_sentinel") ? (V = { className: "xymharo x2pibh5 x1anpbxc xyorhqc" }, n[25] = V) : V = n[25];
		var H;
		n[26] === Symbol.for("react.memo_cache_sentinel") ? (H = c.jsx("div", babelHelpers.extends({}, V, { children: c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
			/*BTDS*/
			""
		) }) })), n[26] = H) : H = n[26];
		var G;
		n[27] === Symbol.for("react.memo_cache_sentinel") ? (G = c.jsx(r("WDSIconIcEdit.react"), {
			viewBox: {
				x: 0,
				y: 0,
				width: 24,
				height: 24
			},
			width: 18,
			height: 18,
			xstyle: d.secondary
		}), n[27] = G) : G = n[27];
		var z;
		n[28] === Symbol.for("react.memo_cache_sentinel") ? (z = s._(
			/*BTDS*/
			""
		), n[28] = z) : z = n[28];
		var j;
		n[29] === Symbol.for("react.memo_cache_sentinel") ? (j = c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
			/*BTDS*/
			""
		) }), n[29] = j) : j = n[29];
		var K;
		n[30] !== b || n[31] !== k ? (K = c.jsx(m, {
			value: b,
			setValue: k,
			icon: G,
			settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.RESTRICT,
			title: z,
			secondaryTitle: j
		}), n[30] = b, n[31] = k, n[32] = K) : K = n[32];
		var Q;
		n[33] === Symbol.for("react.memo_cache_sentinel") ? (Q = c.jsx(r("WDSIconWdsIcChat.react"), {
			width: 20,
			height: 20,
			xstyle: d.secondary
		}), n[33] = Q) : Q = n[33];
		var X;
		n[34] === Symbol.for("react.memo_cache_sentinel") ? (X = s._(
			/*BTDS*/
			""
		), n[34] = X) : X = n[34];
		var Y;
		n[35] !== u || n[36] !== v ? (Y = c.jsx(m, {
			value: u,
			setValue: v,
			icon: Q,
			settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.ANNOUNCEMENT,
			title: X
		}), n[35] = u, n[36] = v, n[37] = Y) : Y = n[37];
		var J;
		n[38] === Symbol.for("react.memo_cache_sentinel") ? (J = c.jsx(r("WDSIconIcPersonAdd.react"), {
			width: 22,
			height: 22,
			xstyle: d.secondary
		}), n[38] = J) : J = n[38];
		var Z;
		n[39] === Symbol.for("react.memo_cache_sentinel") ? (Z = s._(
			/*BTDS*/
			""
		), n[39] = Z) : Z = n[39];
		var ee;
		n[40] !== O || n[41] !== p ? (ee = c.jsx(m, {
			value: p,
			setValue: O,
			icon: J,
			settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_ADD_MODE,
			title: Z
		}), n[40] = O, n[41] = p, n[42] = ee) : ee = n[42];
		var te = !P && A, ne;
		n[43] !== _ || n[44] !== R || n[45] !== x ? (ne = x && c.jsx(m, {
			value: _,
			setValue: R,
			icon: c.jsx(r("WDSIconIcLink.react"), {
				testid: "ic-link",
				xstyle: d.secondary
			}),
			settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_LINK_MODE,
			title: s._(
				/*BTDS*/
				""
			)
		}), n[43] = _, n[44] = R, n[45] = x, n[46] = ne) : ne = n[46];
		var re = P && A, oe;
		n[47] !== K || n[48] !== Y || n[49] !== ee || n[50] !== te || n[51] !== ne || n[52] !== re ? (oe = c.jsxs(r("WAWebDrawerSection.react"), {
			animation: !1,
			children: [
				K,
				Y,
				ee,
				te,
				ne,
				re
			]
		}), n[47] = K, n[48] = Y, n[49] = ee, n[50] = te, n[51] = ne, n[52] = re, n[53] = oe) : oe = n[53];
		var ae;
		n[54] === Symbol.for("react.memo_cache_sentinel") ? (ae = { className: "xymharo x2pibh5 x1anpbxc xyorhqc" }, n[54] = ae) : ae = n[54];
		var ie;
		n[55] === Symbol.for("react.memo_cache_sentinel") ? (ie = c.jsx("div", babelHelpers.extends({}, ae, { children: c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
			/*BTDS*/
			""
		) }) })), n[55] = ie) : ie = n[55];
		var le;
		n[56] === Symbol.for("react.memo_cache_sentinel") ? (le = c.jsx(o("WAWebPendingParticipantsIcon.react").PendingParticipantsIcon, {
			width: 19,
			height: 19,
			xstyle: d.secondary
		}), n[56] = le) : le = n[56];
		var se;
		n[57] === Symbol.for("react.memo_cache_sentinel") ? (se = s._(
			/*BTDS*/
			""
		), n[57] = se) : se = n[57];
		var ue;
		n[58] === Symbol.for("react.memo_cache_sentinel") ? (ue = c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: o("WAWebFaqUrl").getMembershipApprovalModeFaqUrl(),
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		) }), n[58] = ue) : ue = n[58];
		var ce;
		n[59] !== g || n[60] !== E ? (ce = c.jsxs(c.Fragment, { children: [ie, c.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			children: c.jsx(m, {
				value: g,
				setValue: E,
				icon: le,
				settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBERSHIP_APPROVAL_MODE,
				title: se,
				secondaryTitle: ue
			})
		})] }), n[59] = g, n[60] = E, n[61] = ce) : ce = n[61];
		var de;
		n[62] !== oe || n[63] !== ce ? (de = c.jsxs(r("WAWebDrawerBody.react"), { children: [
			H,
			oe,
			ce
		] }), n[62] = oe, n[63] = ce, n[64] = de) : de = n[64];
		var me;
		return n[65] !== a.viewType || n[66] !== i || n[67] !== U || n[68] !== de ? (me = c.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			theme: "striped",
			testid: "group-settings-drawer",
			viewType: B,
			tsNavigationData: W,
			children: [U, de]
		}), n[65] = a.viewType, n[66] = i, n[67] = U, n[68] = de, n[69] = me) : me = n[69], me;
	}
	l.default = p;
}), 226);
