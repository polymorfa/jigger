__d("WAWebDoNotDisturbSettings.react", [
	"fbt",
	"WALogger",
	"WATimeUtils",
	"WAWebABProps",
	"WAWebBackgroundSyncReporter",
	"WAWebCmd",
	"WAWebDevOnlyBadge.react",
	"WAWebDrawerButton.react",
	"WAWebDrawerSection.react",
	"WAWebEnvironment",
	"WAWebGuidePopup.react",
	"WAWebModalManager",
	"WAWebMuteCollection",
	"WAWebMuteGetters",
	"WAWebNotificationConstants",
	"WAWebPushNotificationsGatingUtils",
	"WAWebSettingsCheckList.react",
	"WAWebSettingsFBT",
	"WAWebStateUtils",
	"WAWebSubscribePushManagerAction",
	"WAWebText.react",
	"WAWebUserPrefsNotifications",
	"WAWebVoipGatingUtils",
	"WAWebWamEnumOffboardSources",
	"WAWebWamEnumOnboardSources",
	"WDSIconIcCall.react",
	"WDSIconIcChevronRight.react",
	"WDSIconIcGroup.react",
	"WDSIconWdsIcChat.react",
	"WDSIconWdsIcStatus.react",
	"WDSText.react",
	"cr:3176",
	"cr:545",
	"cr:6005",
	"cr:7206",
	"cr:7288",
	"cr:7293",
	"cr:8361",
	"gkx",
	"react",
	"react-compiler-runtime",
	"useWAWebMuteValues",
	"useWAWebSettingSync",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p = m || (m = o("react")), _ = m.useImperativeHandle, f = (e = n("cr:7293")) != null ? e : {}, g = f.getNotificationToneGroupSetting, h = f.getNotificationToneSetting, y = f.setNotificationToneGroupSetting, C = f.setNotificationToneSetting, b = (u = n("cr:7293")) != null ? u : {}, v = b.isNotificationBannerEnabled, S = (c = n("cr:7288")) != null ? c : {}, R = S.isCustomNotificationTonesEnabled, L = {
		drawerTitle: {
			paddingTop: "x134lwj9",
			paddingBottom: "x1i2zvha",
			paddingInlineStart: "x1c1uobl",
			paddingInlineEnd: "xyri2b",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		messagesItem: {
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		settingsItemIcon: {
			width: "xvy4d1p",
			paddingInlineEnd: "xcldk2z",
			$$css: !0
		},
		chevronIconPaddingRight: {
			insetInlineEnd: "x67dgr1",
			left: null,
			right: null,
			$$css: !0
		},
		footerText: {
			paddingTop: "x1h678fw",
			paddingBottom: "xv6tirj",
			$$css: !0
		}
	};
	function E(e) {
		var t = o("react-compiler-runtime").c(216), a = e.isNotificationsEnabledInSystem, i = e.onOpenCalls, l = e.onOpenDirectMessages, u = e.onOpenGroupMessages, c = e.onOpenStatusUpdates, d = e.onShowNotificationBannerClick, m = e.onTaskbarNotificationSettingsClick, f = e.reactionsMute, y = e.ref, C = a === void 0 ? !0 : a, b;
		if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
			var S;
			b = [
				(S = o("WAWebMuteGetters")).getIsMuted,
				S.getExpiration,
				S.getIsCallMuted,
				S.getCallExpiration
			], t[0] = b;
		} else b = t[0];
		var E = o("useWAWebMuteValues").useMuteValues(f.id, b), z = E[0], j;
		if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
			var K;
			j = (K = v == null ? void 0 : v()) != null ? K : !0, t[1] = j;
		} else j = t[1];
		var Q = !j, X = r("useWAWebToggle")(H, G), Y = X[0], J = X[1], Z;
		t[2] !== J ? (Z = function() {
			return { toggleOfflineNotifications: J };
		}, t[2] = J, t[3] = Z) : Z = t[3], _(y, Z);
		var ee = r("useWAWebToggle")(V, U), te = ee[0], ne = ee[1], re = r("useWAWebToggle")(q, W), oe = re[0], ae = re[1], ie = o("useWAWebSettingSync").useSettingSync("isTextPreviewForNotificationEnabled", B), le = r("useWAWebToggle")(O, ie), se = le[0], ue = le[1], ce = o("useWAWebSettingSync").useSettingSync("isCallsNotificationEnabled", F), de = r("useWAWebToggle")(A, ce), me = de[0], pe = de[1], _e = r("useWAWebToggle")(w, M), fe = _e[0], ge = _e[1], he = r("useWAWebToggle")(N, P), ye = he[0], Ce = he[1], be;
		t[4] !== se || t[5] !== z || t[6] !== f || t[7] !== ue ? (be = function(t) {
			var e;
			if (o("WAWebMuteCollection").MuteCollection.setGlobalNotifications(t), t ? (se || ue(), z && o("WAWebCmd").Cmd.muteAllReactions(o("WAWebStateUtils").unproxy(f), !1, !0)) : o("WAWebUserPrefsNotifications").setWebNotificationsBBStatus({
				isDismissed: !0,
				lastDismissTime: o("WATimeUtils").unixTime()
			}), t && !r("WAWebEnvironment").isWindows && ((e = window.Notification) == null ? void 0 : e.permission) !== o("WAWebNotificationConstants").PERMISSION_ALLOWED) {
				var n, a = o("WAWebABProps").getABPropConfigValue("web_notifications_banner_new_logic_enabled");
				if (o("WAWebPushNotificationsGatingUtils").canShowNotificationsBanner((n = window.Notification) == null ? void 0 : n.permission, a)) {
					var i;
					o("WAWebModalManager").ModalManager.open(p.jsx((i = o("WAWebGuidePopup.react")).GuidePopup, {
						messaging: i.Messaging.NOTIFICATIONS,
						onConfirm: i.guideConfirm,
						onCancel: i.notificationGuideLearnMore,
						type: i.GuidePopupType.GUIDE_ALLOW,
						enableNewBannerLogic: a,
						featureSurface: i.FeatureSurface.NOTIFICATION
					}));
				}
				window.Notification.requestPermission($);
			}
		}, t[4] = se, t[5] = z, t[6] = f, t[7] = ue, t[8] = be) : be = t[8];
		var ve = o("useWAWebSettingSync").useSettingSync("isMessagesNotificationEnabled", be), Se = r("useWAWebToggle")(x, ve), Re = Se[0], Le = Se[1], Ee;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (Ee = {
			settingName: "defaultNotificationToneId",
			originalSetter: D,
			toProtobufValue: T
		}, t[9] = Ee) : Ee = t[9];
		var ke = o("useWAWebSettingSync").useMappedSettingSync(Ee), Ie;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (Ie = {
			settingName: "groupDefaultNotificationToneId",
			originalSetter: I,
			toProtobufValue: k
		}, t[10] = Ie) : Ie = t[10];
		var Te = o("useWAWebSettingSync").useMappedSettingSync(Ie), De;
		t[11] !== z || t[12] !== f ? (De = function() {
			o("WAWebCmd").Cmd.muteAllReactions(o("WAWebStateUtils").unproxy(f), !z);
		}, t[11] = z, t[12] = f, t[13] = De) : De = t[13];
		var xe = De, $e = !C || Q, Pe = !Q && Re, Ne, Me;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (Ne = o("WAWebSettingsFBT").messageNotificationsTitle().toString(), Me = o("WAWebSettingsFBT").messageNotificationsSubtitle().toString(), t[14] = Ne, t[15] = Me) : (Ne = t[14], Me = t[15]);
		var we;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (we = o("WAWebSettingsFBT").messageNotificationsTitle(), t[16] = we) : we = t[16];
		var Ae;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (Ae = p.jsx(o("WAWebText.react").WAWebTextMuted, { children: o("WAWebSettingsFBT").messageNotificationsSubtitle() }), t[17] = Ae) : Ae = t[17];
		var Fe;
		t[18] !== Pe || t[19] !== $e || t[20] !== Le ? (Fe = p.jsxs(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
			testid: "option-desktop-notifications",
			id: "desktop-notifications",
			disabled: $e,
			checked: Pe,
			checkboxRightAligned: !0,
			onChange: Le,
			ariaLabel: Ne + ". " + Me,
			children: [we, Ae]
		}), t[18] = Pe, t[19] = $e, t[20] = Le, t[21] = Fe) : Fe = t[21];
		var Oe = Fe, Be;
		t[22] === Symbol.for("react.memo_cache_sentinel") ? (Be = o("WAWebABProps").getABPropConfigValue("wa_web_enable_granular_notifications"), t[22] = Be) : Be = t[22];
		var We = Be, qe = (!Q && Re || We) && se, Ue = (!Re || Q || !C) && !We, Ve;
		t[23] === Symbol.for("react.memo_cache_sentinel") ? (Ve = o("WAWebSettingsFBT").showPreviewsTitle(), t[23] = Ve) : Ve = t[23];
		var He, Ge;
		t[24] === Symbol.for("react.memo_cache_sentinel") ? (He = o("WAWebSettingsFBT").showPreviewsTitle(), Ge = We ? p.jsx(o("WAWebText.react").WAWebTextMuted, { children: o("WAWebSettingsFBT").showPreviewsSubtitle() }) : null, t[24] = He, t[25] = Ge) : (He = t[24], Ge = t[25]);
		var ze;
		t[26] !== qe || t[27] !== Ue || t[28] !== ue ? (ze = p.jsxs(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
			testid: "options-msg-previews",
			id: "msg-previews",
			checked: qe,
			onChange: ue,
			disabled: Ue,
			ariaLabel: Ve,
			checkboxRightAligned: !0,
			children: [He, Ge]
		}), t[26] = qe, t[27] = Ue, t[28] = ue, t[29] = ze) : ze = t[29];
		var je = ze, Ke;
		if (o("WAWebPushNotificationsGatingUtils").canEnableOfflineNotifications() && window.Notification) {
			var Qe, Xe, Ye, Je, Ze, et, tt, nt;
			t[30] !== Y || t[31] !== J ? (Xe = s._(
				/*BTDS*/
				""
			), Qe = o("WAWebSettingsCheckList.react").SettingsCheckListItem, Je = "option-offline-notifications", Ze = "offline-notifications", et = Y, tt = !0, nt = J, Ye = Xe.toString(), t[30] = Y, t[31] = J, t[32] = Qe, t[33] = Xe, t[34] = Ye, t[35] = Je, t[36] = Ze, t[37] = et, t[38] = tt, t[39] = nt) : (Qe = t[32], Xe = t[33], Ye = t[34], Je = t[35], Ze = t[36], et = t[37], tt = t[38], nt = t[39]);
			var rt;
			t[40] === Symbol.for("react.memo_cache_sentinel") ? (rt = o("WAWebSettingsFBT").offlineSyncSubtitle().toString(), t[40] = rt) : rt = t[40];
			var ot;
			t[41] === Symbol.for("react.memo_cache_sentinel") ? (ot = p.jsx(o("WAWebText.react").WAWebTextMuted, { children: o("WAWebSettingsFBT").offlineSyncSubtitle() }), t[41] = ot) : ot = t[41];
			var at;
			t[42] !== Qe || t[43] !== Xe || t[44] !== Je || t[45] !== Ze || t[46] !== et || t[47] !== tt || t[48] !== nt ? (at = p.jsxs(Qe, {
				testid: Je,
				id: Ze,
				checked: et,
				checkboxRightAligned: tt,
				onChange: nt,
				ariaLabel: Ye + ". " + rt,
				children: [Xe, ot]
			}), t[42] = Qe, t[43] = Xe, t[44] = Je, t[45] = Ze, t[46] = et, t[47] = tt, t[48] = nt, t[49] = at) : at = t[49], Ke = at;
		}
		var it;
		if (!r("gkx")("26258")) {
			var lt;
			t[50] === Symbol.for("react.memo_cache_sentinel") ? (lt = s._(
				/*BTDS*/
				""
			), t[50] = lt) : lt = t[50];
			var st = lt, ut;
			t[51] !== ye || t[52] !== Ce ? (ut = p.jsx(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
				testid: "option-collapse-muted",
				id: "collapse-muted",
				checked: ye,
				checkboxRightAligned: !0,
				onChange: Ce,
				ariaLabel: st,
				children: st
			}), t[51] = ye, t[52] = Ce, t[53] = ut) : ut = t[53], it = ut;
		}
		var ct, dt, mt, pt, _t, ft, gt, ht, yt;
		if (t[54] !== te || t[55] !== ne) {
			mt = s._(
				/*BTDS*/
				""
			);
			var Ct;
			t[65] === Symbol.for("react.memo_cache_sentinel") ? (Ct = s._(
				/*BTDS*/
				""
			), t[65] = Ct) : Ct = t[65], dt = Ct, ct = o("WAWebSettingsCheckList.react").SettingsCheckListItem, _t = "option-outgoing-message-sound", ft = "outgoing-message-sound", gt = te, ht = !0, yt = ne, pt = mt.toString(), t[54] = te, t[55] = ne, t[56] = ct, t[57] = dt, t[58] = mt, t[59] = pt, t[60] = _t, t[61] = ft, t[62] = gt, t[63] = ht, t[64] = yt;
		} else ct = t[56], dt = t[57], mt = t[58], pt = t[59], _t = t[60], ft = t[61], gt = t[62], ht = t[63], yt = t[64];
		var bt;
		t[66] === Symbol.for("react.memo_cache_sentinel") ? (bt = o("WAWebSettingsFBT").outgoingAudioToneSubtitle().toString(), t[66] = bt) : bt = t[66];
		var vt;
		t[67] === Symbol.for("react.memo_cache_sentinel") ? (vt = We ? null : p.jsx(o("WAWebText.react").WAWebTextMuted, { children: o("WAWebSettingsFBT").outgoingAudioToneSubtitle() }), t[67] = vt) : vt = t[67];
		var St;
		t[68] !== ct || t[69] !== _t || t[70] !== ft || t[71] !== gt || t[72] !== ht || t[73] !== yt ? (St = p.jsxs(ct, {
			testid: _t,
			id: ft,
			checked: gt,
			checkboxRightAligned: ht,
			onChange: yt,
			ariaLabel: pt + ". " + bt,
			children: [We ? dt : mt, vt]
		}), t[68] = ct, t[69] = _t, t[70] = ft, t[71] = gt, t[72] = ht, t[73] = yt, t[74] = St) : St = t[74];
		var Rt = St, Lt = !Q && Re && !z, Et = !Re || Q || !C, kt, It;
		t[75] === Symbol.for("react.memo_cache_sentinel") ? (kt = o("WAWebSettingsFBT").showReactionsTitle(), It = o("WAWebSettingsFBT").showReactionsTitle(), t[75] = kt, t[76] = It) : (kt = t[75], It = t[76]);
		var Tt;
		t[77] !== xe || t[78] !== Lt || t[79] !== Et ? (Tt = p.jsx(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
			testid: "option-reactions-mute-desktop-notifications",
			id: "reactions-mute-desktop-notifications",
			checked: Lt,
			checkboxRightAligned: !0,
			disabled: Et,
			onChange: xe,
			ariaLabel: kt,
			children: It
		}), t[77] = xe, t[78] = Lt, t[79] = Et, t[80] = Tt) : Tt = t[80];
		var Dt = Tt, xt = !Q && Re && me, $t, Pt;
		t[81] === Symbol.for("react.memo_cache_sentinel") ? ($t = o("WAWebSettingsFBT").showCallsTitle().toString(), Pt = o("WAWebSettingsFBT").showCallsSubtitle().toString(), t[81] = $t, t[82] = Pt) : ($t = t[81], Pt = t[82]);
		var Nt;
		t[83] === Symbol.for("react.memo_cache_sentinel") ? (Nt = o("WAWebSettingsFBT").showCallsTitle(), t[83] = Nt) : Nt = t[83];
		var Mt;
		t[84] === Symbol.for("react.memo_cache_sentinel") ? (Mt = p.jsx(o("WAWebText.react").WAWebTextMuted, { children: o("WAWebSettingsFBT").showCallsSubtitle() }), t[84] = Mt) : Mt = t[84];
		var wt;
		t[85] !== xt || t[86] !== pe ? (wt = p.jsxs(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
			testid: "option-show-calls-notification",
			id: "show-calls-notification",
			checked: xt,
			checkboxRightAligned: !0,
			onChange: pe,
			ariaLabel: $t + ". " + Pt,
			children: [Nt, Mt]
		}), t[85] = xt, t[86] = pe, t[87] = wt) : wt = t[87];
		var At = wt, Ft = !Q && Re && fe, Ot, Bt;
		t[88] === Symbol.for("react.memo_cache_sentinel") ? (Ot = o("WAWebSettingsFBT").playCallRingtoneTitle().toString(), Bt = o("WAWebSettingsFBT").playCallRingtoneSubtitle().toString(), t[88] = Ot, t[89] = Bt) : (Ot = t[88], Bt = t[89]);
		var Wt;
		t[90] === Symbol.for("react.memo_cache_sentinel") ? (Wt = o("WAWebSettingsFBT").playCallRingtoneTitle(), t[90] = Wt) : Wt = t[90];
		var qt;
		t[91] === Symbol.for("react.memo_cache_sentinel") ? (qt = p.jsx(o("WAWebText.react").WAWebTextMuted, { children: o("WAWebSettingsFBT").playCallRingtoneSubtitle() }), t[91] = qt) : qt = t[91];
		var Ut;
		t[92] !== Ft || t[93] !== ge ? (Ut = p.jsxs(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
			testid: "option-play-call-ringtone",
			id: "play-call-ringtone",
			checked: Ft,
			checkboxRightAligned: !0,
			onChange: ge,
			ariaLabel: Ot + ". " + Bt,
			children: [Wt, qt]
		}), t[92] = Ft, t[93] = ge, t[94] = Ut) : Ut = t[94];
		var Vt = Ut, Ht, Gt;
		t[95] === Symbol.for("react.memo_cache_sentinel") ? (Ht = o("WAWebSettingsFBT").soundsTitle().toString(), Gt = o("WAWebSettingsFBT").soundsSubtitle().toString(), t[95] = Ht, t[96] = Gt) : (Ht = t[95], Gt = t[96]);
		var zt;
		t[97] === Symbol.for("react.memo_cache_sentinel") ? (zt = o("WAWebSettingsFBT").soundsTitle(), t[97] = zt) : zt = t[97];
		var jt;
		t[98] === Symbol.for("react.memo_cache_sentinel") ? (jt = p.jsx(o("WAWebText.react").WAWebTextMuted, { children: o("WAWebSettingsFBT").soundsSubtitle() }), t[98] = jt) : jt = t[98];
		var Kt;
		t[99] !== oe || t[100] !== ae ? (Kt = p.jsxs(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
			testid: "option-incoming-message-sounds",
			id: "sounds",
			checked: oe,
			checkboxRightAligned: !0,
			onChange: ae,
			ariaLabel: Ht + ". " + Gt,
			children: [zt, jt]
		}), t[99] = oe, t[100] = ae, t[101] = Kt) : Kt = t[101];
		var Qt = Kt, Xt;
		t[102] === Symbol.for("react.memo_cache_sentinel") ? (Xt = n("cr:6005") ? p.jsx(n("cr:6005"), {}) : null, t[102] = Xt) : Xt = t[102];
		var Yt = Xt, Jt, Zt, en, tn, nn, rn, on, an, ln;
		if (t[103] !== it || t[104] !== C || t[105] !== Te || t[106] !== ke || t[107] !== Re || t[108] !== Ke || t[109] !== i || t[110] !== l || t[111] !== u || t[112] !== c || t[113] !== d || t[114] !== m || t[115] !== Rt || t[116] !== Vt || t[117] !== je || t[118] !== At) {
			ln = Symbol.for("react.early_return_sentinel");
			e: {
				var sn = s._(
					/*BTDS*/
					""
				), un = s._(
					/*BTDS*/
					""
				), cn = function() {
					var e = o("WAWebMuteCollection").MuteCollection.getGlobalNotificationsEnabled();
					return e ? sn : un;
				}, dn = function() {
					var e = o("WAWebMuteCollection").MuteCollection.getGlobalGroupNotificationsEnabled();
					return e ? sn : un;
				}, mn = function() {
					var e = o("WAWebMuteCollection").MuteCollection.getGlobalStatusNotificationsEnabled();
					return e ? sn : un;
				}, pn = function() {
					var e = o("WAWebMuteCollection").MuteCollection.getGlobalCallNotifications();
					return e ? sn : un;
				}, _n;
				t[128] === Symbol.for("react.memo_cache_sentinel") ? (_n = s._(
					/*BTDS*/
					""
				), t[128] = _n) : _n = t[128], tn = _n;
				var fn;
				t[129] === Symbol.for("react.memo_cache_sentinel") ? (fn = s._(
					/*BTDS*/
					""
				), t[129] = fn) : fn = t[129];
				var gn = fn, hn;
				t[130] === Symbol.for("react.memo_cache_sentinel") ? (hn = s._(
					/*BTDS*/
					""
				), t[130] = hn) : hn = t[130], on = hn;
				var yn;
				t[131] === Symbol.for("react.memo_cache_sentinel") ? (yn = p.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, { label: s._(
					/*BTDS*/
					""
				) }), t[131] = yn) : yn = t[131];
				var Cn = yn, bn;
				t[132] !== C || t[133] !== d ? (bn = n("cr:8361") && d ? p.jsx(n("cr:8361"), {
					onClick: d,
					isNotificationsEnabledInSystem: C
				}) : null, t[132] = C, t[133] = d, t[134] = bn) : bn = t[134];
				var vn = bn, Sn;
				t[135] !== m ? (Sn = n("cr:3176") && m ? p.jsx(n("cr:3176"), { onClick: m }) : null, t[135] = m, t[136] = Sn) : Sn = t[136];
				var Rn = Sn, Ln;
				t[137] !== Re ? (Ln = n("cr:545") ? p.jsx(n("cr:545"), { isNotificationEnabled: !Q && Re }) : null, t[137] = Re, t[138] = Ln) : Ln = t[138], an = Ln;
				var En;
				if (t[139] === Symbol.for("react.memo_cache_sentinel")) {
					var kn;
					En = (kn = R == null ? void 0 : R()) != null ? kn : !1, t[139] = En;
				} else En = t[139];
				var In = En, Tn;
				t[140] !== ke ? (Tn = n("cr:7206") && In ? p.jsx(n("cr:7206"), {
					initialTone: h == null ? void 0 : h(),
					onToneSelect: ke,
					title: s._(
						/*BTDS*/
						""
					)
				}) : null, t[140] = ke, t[141] = Tn) : Tn = t[141], nn = Tn;
				var Dn;
				t[142] !== Te ? (Dn = n("cr:7206") && In ? p.jsx(n("cr:7206"), {
					initialTone: g == null ? void 0 : g(),
					onToneSelect: Te,
					title: s._(
						/*BTDS*/
						""
					)
				}) : null, t[142] = Te, t[143] = Dn) : Dn = t[143], rn = Dn;
				var xn;
				t[144] !== vn || t[145] !== Rn ? (xn = p.jsxs(r("WAWebDrawerSection.react"), {
					theme: "padding-small-horizontal-no-vertical",
					titleXStyle: L.drawerTitle,
					animation: !1,
					children: [vn, Rn]
				}), t[144] = vn, t[145] = Rn, t[146] = xn) : xn = t[146], en = xn;
				var $n;
				t[147] !== Vt || t[148] !== At ? ($n = o("WAWebVoipGatingUtils").isCallingEnabled() ? p.jsxs(r("WAWebDrawerSection.react"), {
					theme: "padding-no-vertical",
					title: gn,
					titleXStyle: L.drawerTitle,
					animation: !1,
					children: [At, p.jsx("div", {
						className: "xso031l x1q0q8m5 x120ee7l",
						children: Vt
					})]
				}) : null, t[147] = Vt, t[148] = At, t[149] = $n) : $n = t[149], Jt = $n;
				var Pn;
				if (t[150] !== it ? (Pn = r("gkx")("26258") ? null : p.jsxs(r("WAWebDrawerSection.react"), {
					theme: "padding-no-vertical",
					title: Cn,
					titleXStyle: L.drawerTitle,
					animation: !1,
					children: [Yt, it]
				}), t[150] = it, t[151] = Pn) : Pn = t[151], Zt = Pn, We) {
					var Nn;
					t[152] === Symbol.for("react.memo_cache_sentinel") ? (Nn = s._(
						/*BTDS*/
						""
					), t[152] = Nn) : Nn = t[152];
					var Mn = Nn, wn;
					t[153] === Symbol.for("react.memo_cache_sentinel") ? (wn = s._(
						/*BTDS*/
						""
					), t[153] = wn) : wn = t[153];
					var An = wn, Fn;
					t[154] === Symbol.for("react.memo_cache_sentinel") ? (Fn = s._(
						/*BTDS*/
						""
					), t[154] = Fn) : Fn = t[154];
					var On = Fn, Bn;
					t[155] === Symbol.for("react.memo_cache_sentinel") ? (Bn = s._(
						/*BTDS*/
						""
					), t[155] = Bn) : Bn = t[155];
					var Wn = Bn, qn;
					t[156] === Symbol.for("react.memo_cache_sentinel") ? (qn = p.jsx(r("WDSIconWdsIcChat.react"), {}), t[156] = qn) : qn = t[156];
					var Un;
					t[157] === Symbol.for("react.memo_cache_sentinel") ? (Un = p.jsx(r("WDSIconIcChevronRight.react"), { directional: !0 }), t[157] = Un) : Un = t[157];
					var Vn;
					t[158] !== l ? (Vn = function() {
						l == null || l();
					}, t[158] = l, t[159] = Vn) : Vn = t[159];
					var Hn = p.jsxs(o("WAWebDrawerButton.react").DrawerButtonSimple, {
						testid: "option-direct-messages",
						divider: !1,
						useRoundedStyle: !0,
						xstyle: L.messagesItem,
						icon: qn,
						iconXstyle: L.settingsItemIcon,
						detail: Un,
						detailXstyle: L.chevronIconPaddingRight,
						onClick: Vn,
						children: [Mn, p.jsx(o("WAWebText.react").WAWebTextMuted, { children: cn() })]
					}), Gn;
					t[160] === Symbol.for("react.memo_cache_sentinel") ? (Gn = p.jsx(r("WDSIconIcGroup.react"), {}), t[160] = Gn) : Gn = t[160];
					var zn;
					t[161] === Symbol.for("react.memo_cache_sentinel") ? (zn = p.jsx(r("WDSIconIcChevronRight.react"), { directional: !0 }), t[161] = zn) : zn = t[161];
					var jn;
					t[162] !== u ? (jn = function() {
						u == null || u();
					}, t[162] = u, t[163] = jn) : jn = t[163];
					var Kn = p.jsxs(o("WAWebDrawerButton.react").DrawerButtonSimple, {
						testid: "option-group-messages",
						divider: !1,
						useRoundedStyle: !0,
						xstyle: L.messagesItem,
						icon: Gn,
						iconXstyle: L.settingsItemIcon,
						detail: zn,
						detailXstyle: L.chevronIconPaddingRight,
						onClick: jn,
						children: [An, p.jsx(o("WAWebText.react").WAWebTextMuted, { children: dn() })]
					}), Qn;
					t[164] === Symbol.for("react.memo_cache_sentinel") ? (Qn = p.jsx(r("WDSIconWdsIcStatus.react"), {}), t[164] = Qn) : Qn = t[164];
					var Xn;
					t[165] === Symbol.for("react.memo_cache_sentinel") ? (Xn = p.jsx(r("WDSIconIcChevronRight.react"), { directional: !0 }), t[165] = Xn) : Xn = t[165];
					var Yn;
					t[166] !== c ? (Yn = function() {
						c == null || c();
					}, t[166] = c, t[167] = Yn) : Yn = t[167];
					var Jn = p.jsxs(o("WAWebDrawerButton.react").DrawerButtonSimple, {
						testid: "option-status-updates",
						divider: !1,
						useRoundedStyle: !0,
						xstyle: L.messagesItem,
						icon: Qn,
						iconXstyle: L.settingsItemIcon,
						detail: Xn,
						detailXstyle: L.chevronIconPaddingRight,
						onClick: Yn,
						children: [On, p.jsx(o("WAWebText.react").WAWebTextMuted, { children: mn() })]
					}), Zn = o("WAWebVoipGatingUtils").isCallingEnabled() ? p.jsxs(o("WAWebDrawerButton.react").DrawerButtonSimple, {
						testid: "option-calling",
						divider: !1,
						useRoundedStyle: !0,
						xstyle: L.messagesItem,
						icon: p.jsx(r("WDSIconIcCall.react"), {}),
						iconXstyle: L.settingsItemIcon,
						detail: p.jsx(r("WDSIconIcChevronRight.react"), { directional: !0 }),
						detailXstyle: L.chevronIconPaddingRight,
						onClick: function() {
							i == null || i();
						},
						children: [gn, p.jsx(o("WAWebText.react").WAWebTextMuted, { children: pn() })]
					}) : null, er;
					t[168] !== Hn || t[169] !== Kn || t[170] !== Jn || t[171] !== Zn ? (er = p.jsxs(r("WAWebDrawerSection.react"), {
						theme: "padding-small-horizontal-no-vertical",
						titleXStyle: L.drawerTitle,
						animation: !1,
						children: [
							Hn,
							Kn,
							Jn,
							Zn
						]
					}), t[168] = Hn, t[169] = Kn, t[170] = Jn, t[171] = Zn, t[172] = er) : er = t[172];
					var tr;
					t[173] === Symbol.for("react.memo_cache_sentinel") ? (tr = p.jsx("div", { className: "x178xt8z x13fuv20 xx42vgk" }), t[173] = tr) : tr = t[173];
					var nr;
					t[174] !== Rt || t[175] !== je ? (nr = p.jsxs(r("WAWebDrawerSection.react"), {
						theme: "padding-no-vertical",
						animation: !1,
						children: [
							tr,
							je,
							Rt
						]
					}), t[174] = Rt, t[175] = je, t[176] = nr) : nr = t[176];
					var rr, or;
					t[177] === Symbol.for("react.memo_cache_sentinel") ? (rr = p.jsx("div", { className: "x178xt8z x13fuv20 xx42vgk" }), or = { className: "xso031l x1q0q8m5 x120ee7l" }, t[177] = rr, t[178] = or) : (rr = t[177], or = t[178]);
					var ar;
					t[179] !== Ke ? (ar = p.jsxs(r("WAWebDrawerSection.react"), {
						theme: "padding-no-vertical",
						animation: !1,
						children: [rr, p.jsx("div", babelHelpers.extends({}, or, { children: Ke }))]
					}), t[179] = Ke, t[180] = ar) : ar = t[180];
					var ir;
					t[181] !== Zt ? (ir = r("WAWebEnvironment").isWindows ? null : p.jsxs(r("WAWebDrawerSection.react"), {
						theme: "padding-no-vertical",
						animation: !1,
						children: [Zt != null ? p.jsx("div", { className: "x178xt8z x13fuv20 xx42vgk" }) : null, p.jsx(r("WDSText.react"), {
							type: "Body3",
							colorName: "contentDeemphasized",
							xstyle: L.footerText,
							children: Wn
						})]
					}), t[181] = Zt, t[182] = ir) : ir = t[182];
					var lr;
					t[183] !== Zt || t[184] !== en || t[185] !== er || t[186] !== nr || t[187] !== ar || t[188] !== ir ? (lr = p.jsxs("div", { children: [
						en,
						er,
						nr,
						ar,
						Zt,
						ir
					] }), t[183] = Zt, t[184] = en, t[185] = er, t[186] = nr, t[187] = ar, t[188] = ir, t[189] = lr) : lr = t[189], ln = lr;
					break e;
				}
			}
			t[103] = it, t[104] = C, t[105] = Te, t[106] = ke, t[107] = Re, t[108] = Ke, t[109] = i, t[110] = l, t[111] = u, t[112] = c, t[113] = d, t[114] = m, t[115] = Rt, t[116] = Vt, t[117] = je, t[118] = At, t[119] = Jt, t[120] = Zt, t[121] = en, t[122] = tn, t[123] = nn, t[124] = rn, t[125] = on, t[126] = an, t[127] = ln;
		} else Jt = t[119], Zt = t[120], en = t[121], tn = t[122], nn = t[123], rn = t[124], on = t[125], an = t[126], ln = t[127];
		if (ln !== Symbol.for("react.early_return_sentinel")) return ln;
		var sr = Ke, ur;
		t[190] === Symbol.for("react.memo_cache_sentinel") ? (ur = { className: "xso031l x1q0q8m5 x120ee7l" }, t[190] = ur) : ur = t[190];
		var cr;
		t[191] !== an ? (cr = p.jsx("div", babelHelpers.extends({}, ur, { children: an })), t[191] = an, t[192] = cr) : cr = t[192];
		var dr;
		t[193] !== Oe || t[194] !== tn || t[195] !== Ke || t[196] !== je || t[197] !== Dt || t[198] !== cr ? (dr = p.jsxs(r("WAWebDrawerSection.react"), {
			theme: "padding-no-vertical",
			title: tn,
			titleXStyle: L.drawerTitle,
			animation: !1,
			children: [
				Oe,
				je,
				Dt,
				sr,
				cr
			]
		}), t[193] = Oe, t[194] = tn, t[195] = Ke, t[196] = je, t[197] = Dt, t[198] = cr, t[199] = dr) : dr = t[199];
		var mr;
		t[200] !== nn ? (mr = nn && p.jsx("div", {
			className: "x134lwj9 x1i2zvha",
			children: nn
		}), t[200] = nn, t[201] = mr) : mr = t[201];
		var pr;
		t[202] !== rn ? (pr = rn && p.jsx("div", {
			className: "x134lwj9 x1i2zvha",
			children: rn
		}), t[202] = rn, t[203] = pr) : pr = t[203];
		var _r;
		t[204] !== on || t[205] !== Rt || t[206] !== Qt || t[207] !== mr || t[208] !== pr ? (_r = p.jsxs(r("WAWebDrawerSection.react"), {
			theme: "padding-no-vertical",
			animation: !1,
			title: on,
			titleXStyle: L.drawerTitle,
			children: [
				Qt,
				Rt,
				mr,
				pr
			]
		}), t[204] = on, t[205] = Rt, t[206] = Qt, t[207] = mr, t[208] = pr, t[209] = _r) : _r = t[209];
		var fr;
		return t[210] !== Jt || t[211] !== Zt || t[212] !== en || t[213] !== dr || t[214] !== _r ? (fr = p.jsxs("div", { children: [
			en,
			dr,
			Jt,
			_r,
			Zt
		] }), t[210] = Jt, t[211] = Zt, t[212] = en, t[213] = dr, t[214] = _r, t[215] = fr) : fr = t[215], fr;
	}
	function k(e) {
		return e;
	}
	function I(e) {
		y == null || y(e);
	}
	function T(e) {
		return e;
	}
	function D(e) {
		C == null || C(e);
	}
	function x() {
		return o("WAWebMuteCollection").MuteCollection.getGlobalNotifications();
	}
	function $(e) {
		o("WAWebCmd").Cmd.onNotificationPermissionChange();
	}
	function P(e) {
		return o("WAWebMuteCollection").MuteCollection.setCollapseMuted(e);
	}
	function N() {
		return o("WAWebMuteCollection").MuteCollection.getCollapseMuted();
	}
	function M(e) {
		return o("WAWebMuteCollection").MuteCollection.setGlobalCallRingtone(e);
	}
	function w() {
		return o("WAWebMuteCollection").MuteCollection.getGlobalCallRingtone();
	}
	function A() {
		return o("WAWebMuteCollection").MuteCollection.getGlobalCallNotifications();
	}
	function F(e) {
		return o("WAWebMuteCollection").MuteCollection.setGlobalCallNotifications(e);
	}
	function O() {
		return o("WAWebMuteCollection").MuteCollection.getGlobalPreviews();
	}
	function B(e) {
		return o("WAWebMuteCollection").MuteCollection.setGlobalPreviews(e);
	}
	function W(e) {
		return o("WAWebMuteCollection").MuteCollection.setGlobalSounds(e);
	}
	function q() {
		return o("WAWebMuteCollection").MuteCollection.getGlobalSounds();
	}
	function U(e) {
		return o("WAWebMuteCollection").MuteCollection.setOutgoingMessageSound(e);
	}
	function V() {
		return o("WAWebMuteCollection").MuteCollection.getOutgoingMessageSound();
	}
	function H() {
		return o("WAWebMuteCollection").MuteCollection.getGlobalOfflineNotifications();
	}
	function G(e) {
		var t;
		if (o("WAWebMuteCollection").MuteCollection.setGlobalOfflineNotifications(e), e && ((t = window.Notification) == null ? void 0 : t.permission) !== o("WAWebNotificationConstants").PERMISSION_ALLOWED) {
			var n;
			if (((n = window.Notification) == null ? void 0 : n.permission) === o("WAWebNotificationConstants").PERMISSION_DEFAULT) {
				var r;
				o("WAWebModalManager").ModalManager.open(p.jsx((r = o("WAWebGuidePopup.react")).GuidePopup, {
					messaging: r.Messaging.BACKGROUND_SYNC,
					onConfirm: r.guideConfirm,
					onCancel: r.notificationGuideLearnMore,
					type: r.GuidePopupType.GUIDE_ALLOW,
					featureSurface: r.FeatureSurface.NOTIFICATION
				}));
			}
			window.Notification.requestPermission(function(t) {
				o("WAWebCmd").Cmd.onNotificationPermissionChange(), t === o("WAWebNotificationConstants").PERMISSION_ALLOWED ? o("WAWebSubscribePushManagerAction").handleOfflineNotifications(e) : o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[push-notif] subscribe failed, perm denied: ", ""])), t), o("WAWebBackgroundSyncReporter").logBackgroundSyncAdoptionEvent({
					offboardSource: null,
					onboardSource: o("WAWebWamEnumOnboardSources").ONBOARD_SOURCES.IN_APP_SETTING
				});
			});
		} else e ? o("WAWebBackgroundSyncReporter").logBackgroundSyncAdoptionEvent({
			offboardSource: null,
			onboardSource: o("WAWebWamEnumOnboardSources").ONBOARD_SOURCES.IN_APP_SETTING
		}) : (o("WAWebUserPrefsNotifications").setOfflineNotificationsBBStatus({ isDismissed: !0 }), o("WAWebUserPrefsNotifications").setOfflineNotificationsEnabledOnce(), o("WAWebBackgroundSyncReporter").logBackgroundSyncAdoptionEvent({
			offboardSource: o("WAWebWamEnumOffboardSources").OFFBOARD_SOURCES.IN_APP_SETTING,
			onboardSource: null
		})), o("WAWebSubscribePushManagerAction").handleOfflineNotifications(e);
	}
	l.default = E;
}), 226);
