__d("WAWebGroupMemberUpdatesPanel.react", [
	"fbt",
	"WATimeUtils",
	"WAWebABProps",
	"WAWebCollectionConstants",
	"WAWebContactCollection",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebGroupMemberUpdatePastParticipantRow.react",
	"WAWebGroupMemberUpdateUsernameRow.react",
	"WAWebGroupMemberUpdatesLogger",
	"WAWebGroupParticipantsFlow.react",
	"WAWebMsgQueryUtils",
	"WAWebText_DONOTUSE.react",
	"WAWebUsernameGatingUtils",
	"WAWebWamEnumGroupMemberUpdatesActionName",
	"WAWebWid",
	"WDSIllustrationWdsPictoGroup.react",
	"WDSSpinner.react",
	"WDSText.react",
	"WDSTextLayout.react",
	"react",
	"react-compiler-runtime",
	"useWAWebEventTargetValue",
	"useWAWebStableCallback",
	"useWAWebThrottledCallback"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = c.useState, f = 200, g = {
		disclaimer: {
			textAlign: "x2b8uid",
			lineHeight: "x16h55sf",
			$$css: !0
		},
		emptyTitle: {
			textAlign: "x2b8uid",
			lineHeight: "x37zpob",
			paddingBottom: "x1g2khh7",
			$$css: !0
		},
		empty: {
			height: "x5yr21d",
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		headerSection: {
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			paddingLeft: null,
			paddingRight: null,
			paddingTop: "xl7twdi",
			paddingBottom: "xr1496l",
			$$css: !0
		}
	};
	function h(e) {
		var t = o("react-compiler-runtime").c(14), n;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = [], t[0] = n) : n = t[0];
		var r = _(n), a = r[0], i = r[1], l = _(!1), s = l[0], u = l[1], c = _(!1), d = c[0], f = c[1], g = _(!1), h = g[0], y = g[1], C = p(null), b;
		t[1] !== e || t[2] !== s || t[3] !== d ? (b = function() {
			if (!(s || d)) {
				f(!0), y(!1);
				var t = o("WATimeUtils").unixTimeMs();
				o("WAWebMsgQueryUtils").getGroupMemberUpdateMsgs(e, o("WAWebCollectionConstants").PAGE_SIZE, C.current).then(function(e) {
					if (e.length < o("WAWebCollectionConstants").PAGE_SIZE && u(!0), e.length > 0) {
						var n = e[e.length - 1];
						C.current = n.id, i(function(t) {
							return [].concat(t, e);
						}), o("WAWebGroupMemberUpdatesLogger").GroupMemberUpdatesLogger.logOnMemberUpdatesScreen(o("WAWebWamEnumGroupMemberUpdatesActionName").GROUP_MEMBER_UPDATES_ACTION_NAME.FETCH_MEMBER_UPDATES_SUCCESS, e.length, o("WATimeUtils").unixTimeMs() - t);
					} else C.current == null && o("WAWebGroupMemberUpdatesLogger").GroupMemberUpdatesLogger.logOnMemberUpdatesScreen(o("WAWebWamEnumGroupMemberUpdatesActionName").GROUP_MEMBER_UPDATES_ACTION_NAME.FETCH_MEMBER_UPDATES_EMPTY);
					f(!1);
				}).catch(function(e) {
					y(!0), f(!1), o("WAWebGroupMemberUpdatesLogger").GroupMemberUpdatesLogger.logOnMemberUpdatesScreen(o("WAWebWamEnumGroupMemberUpdatesActionName").GROUP_MEMBER_UPDATES_ACTION_NAME.FETCH_MEMBER_UPDATES_FAILURE);
				});
			}
		}, t[1] = e, t[2] = s, t[3] = d, t[4] = b) : b = t[4];
		var v = b, S = p(!1), R, L;
		t[5] !== v ? (R = function() {
			S.current || (S.current = !0, v());
		}, L = [v], t[5] = v, t[6] = R, t[7] = L) : (R = t[6], L = t[7]), m(R, L);
		var E;
		return t[8] !== h || t[9] !== s || t[10] !== d || t[11] !== v || t[12] !== a ? (E = {
			msgs: a,
			isFullyLoaded: s,
			isLoading: d,
			hasError: h,
			loadMore: v
		}, t[8] = h, t[9] = s, t[10] = d, t[11] = v, t[12] = a, t[13] = E) : E = t[13], E;
	}
	var y = function() {
		return s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: o("WAWebFaqUrl").getGroupMemberUpdatesUsernameFaqUrl(),
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		);
	}, C = function() {
		return s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: o("WAWebFaqUrl").getHowToExitAndDeleteGroupsFaq(),
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		);
	};
	function b(e) {
		var t, n = o("react-compiler-runtime").c(51), a = e.chat, i = e.onBack, l = e.onContactInfo, c = e.ref, d = (t = a.groupMetadata) == null ? void 0 : t.pastParticipants, p = h(a.id), _ = p.hasError, f = p.isFullyLoaded, b = p.loadMore, k = p.msgs, I;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (I = [], n[0] = I) : I = n[0], m(L, I);
		var T;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (T = [
			"bulk_add",
			"bulk_remove",
			"reset"
		], n[1] = T) : T = n[1];
		var D;
		n[2] !== d || n[3] !== k ? (D = function() {
			var e, t = (e = d == null ? void 0 : d.getValidRecords().map(R)) != null ? e : [], n = k.map(S);
			return [].concat(t, n).sort(v);
		}, n[2] = d, n[3] = k, n[4] = D) : D = n[4];
		var x;
		n[5] !== k ? (x = [k], n[5] = k, n[6] = x) : x = n[6];
		var $ = r("useWAWebEventTargetValue")(d, T, D, x), P;
		n[7] !== b ? (P = function() {
			b();
		}, n[7] = b, n[8] = P) : P = n[8];
		var N = r("useWAWebStableCallback")(P), M;
		n[9] !== N ? (M = function(t) {
			t.currentTarget && E(t.currentTarget) && N();
		}, n[9] = N, n[10] = M) : M = n[10];
		var w = r("useWAWebThrottledCallback")(M, 100), A;
		n[11] !== l ? (A = function(t) {
			if (l != null) {
				var e = o("WAWebGroupParticipantsFlow.react").getOneToOneContact(t);
				e != null && l(e);
			}
		}, n[11] = l, n[12] = A) : A = n[12];
		var F = A, O;
		n[13] !== F ? (O = function(t) {
			o("WAWebGroupMemberUpdatesLogger").GroupMemberUpdatesLogger.logOnMemberUpdatesScreen(o("WAWebWamEnumGroupMemberUpdatesActionName").GROUP_MEMBER_UPDATES_ACTION_NAME.CLICK_PAST_MEMBER_UPDATE), F(t.contact);
		}, n[13] = F, n[14] = O) : O = n[14];
		var B = O, W;
		n[15] !== F ? (W = function(t) {
			var e;
			o("WAWebGroupMemberUpdatesLogger").GroupMemberUpdatesLogger.logOnMemberUpdatesScreen(o("WAWebWamEnumGroupMemberUpdatesActionName").GROUP_MEMBER_UPDATES_ACTION_NAME.CLICK_USERNAME_UPDATE);
			var n = (e = t.templateParams) != null ? e : [], a = n[2];
			if (a instanceof r("WAWebWid")) {
				var i = o("WAWebContactCollection").ContactCollection.get(a);
				i != null && F(i);
			}
		}, n[15] = F, n[16] = W) : W = n[16];
		var q = W, U = null;
		if (!f) {
			var V;
			n[17] === Symbol.for("react.memo_cache_sentinel") ? (V = u.jsx("div", {
				className: "x78zum5 xl56j7k x6s0dn4 xyamay9 xv54qhq x1l90r2v xf7dkkf",
				children: u.jsx(r("WDSSpinner.react"), {
					stroke: 6,
					size: 24
				})
			}), n[17] = V) : V = n[17], U = V;
		}
		var H;
		n[18] === Symbol.for("react.memo_cache_sentinel") ? (H = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() ? y() : C(), n[18] = H) : H = n[18];
		var G = H, z;
		n[19] === Symbol.for("react.memo_cache_sentinel") ? (z = u.jsx(r("WAWebDrawerSection.react"), {
			xstyle: g.headerSection,
			animation: !1,
			children: u.jsx(o("WAWebFlex.react").FlexRow, {
				justify: "center",
				align: "center",
				children: u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
					size: "14",
					color: "secondary",
					xstyle: g.disclaimer,
					children: G
				})
			})
		}), n[19] = z) : z = n[19];
		var j = z, K = o("WAWebABProps").getABPropConfigValue("wds_web_text_layout"), Q, X = !0;
		if ($.length > 0) {
			var Y;
			if (n[20] !== $ || n[21] !== B || n[22] !== q) {
				var J;
				n[24] !== B || n[25] !== q ? (J = function(t, n) {
					return t.type === "past_participant" ? u.jsx(r("WAWebGroupMemberUpdatePastParticipantRow.react"), {
						participant: t.participant,
						onClick: function() {
							return B(t.participant);
						}
					}, "past_" + t.participant.id.toString() + "_" + n) : u.jsx(r("WAWebGroupMemberUpdateUsernameRow.react"), {
						msg: t.msg,
						onClick: function() {
							return q(t.msg);
						}
					}, "uname_" + t.msg.id.toString() + "_" + n);
				}, n[24] = B, n[25] = q, n[26] = J) : J = n[26], Y = $.map(J), n[20] = $, n[21] = B, n[22] = q, n[23] = Y;
			} else Y = n[23];
			var Z;
			n[27] !== Y ? (Z = u.jsx(r("WAWebDrawerSection.react"), {
				animation: !1,
				children: Y
			}), n[27] = Y, n[28] = Z) : Z = n[28];
			var ee;
			n[29] !== _ ? (ee = _ && u.jsx("div", {
				className: "x2b8uid x1p57kb1 x1ci70gm xb0esv5 xyo0t3i",
				children: u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					children: s._(
						/*BTDS*/
						""
					)
				})
			}), n[29] = _, n[30] = ee) : ee = n[30];
			var te;
			n[31] !== U || n[32] !== Z || n[33] !== ee ? (te = u.jsxs(u.Fragment, { children: [
				Z,
				U,
				ee
			] }), n[31] = U, n[32] = Z, n[33] = ee, n[34] = te) : te = n[34], Q = te;
		} else if (f) if (K) {
			X = !1;
			var ne;
			n[35] === Symbol.for("react.memo_cache_sentinel") ? (ne = { className: "x78zum5 xdt5ytf x1iyjqo2 x6s0dn4 xl56j7k x5yr21d xb0esv5 xyo0t3i" }, n[35] = ne) : ne = n[35];
			var re;
			n[36] === Symbol.for("react.memo_cache_sentinel") ? (re = s._(
				/*BTDS*/
				""
			), n[36] = re) : re = n[36];
			var oe;
			n[37] === Symbol.for("react.memo_cache_sentinel") ? (oe = u.jsx("div", babelHelpers.extends({ "data-testid": "member-changes-empty-container" }, ne, { children: u.jsx(r("WDSTextLayout.react"), {
				headline: re,
				body: G,
				illustration: u.jsx(r("WDSIllustrationWdsPictoGroup.react"), {}),
				testid: "member-changes-empty"
			}) })), n[37] = oe) : oe = n[37], Q = oe;
		} else {
			var ae;
			n[38] === Symbol.for("react.memo_cache_sentinel") ? (ae = u.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: g.empty,
				justify: "center",
				align: "center",
				children: u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
					size: "16",
					xstyle: g.emptyTitle,
					children: s._(
						/*BTDS*/
						""
					)
				})
			}), n[38] = ae) : ae = n[38], Q = ae;
		}
		else {
			var ie;
			n[39] === Symbol.for("react.memo_cache_sentinel") ? (ie = u.jsx("div", {
				className: "x78zum5 xl56j7k x6s0dn4 xyamay9 xv54qhq x1l90r2v xf7dkkf",
				children: u.jsx(r("WDSSpinner.react"), {
					stroke: 6,
					size: 24
				})
			}), n[39] = ie) : ie = n[39], Q = ie;
		}
		var le;
		n[40] === Symbol.for("react.memo_cache_sentinel") ? (le = s._(
			/*BTDS*/
			""
		), n[40] = le) : le = n[40];
		var se;
		n[41] !== i ? (se = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: le,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: i
		}), n[41] = i, n[42] = se) : se = n[42];
		var ue = X && j, ce;
		n[43] !== Q || n[44] !== w || n[45] !== ue ? (ce = u.jsxs(r("WAWebDrawerBody.react"), {
			onScroll: w,
			children: [ue, Q]
		}), n[43] = Q, n[44] = w, n[45] = ue, n[46] = ce) : ce = n[46];
		var de;
		return n[47] !== c || n[48] !== se || n[49] !== ce ? (de = u.jsxs(r("WAWebDrawer.react"), {
			ref: c,
			theme: "invite",
			testid: "member-updates-drawer",
			children: [se, ce]
		}), n[47] = c, n[48] = se, n[49] = ce, n[50] = de) : de = n[50], de;
	}
	function v(e, t) {
		return t.timestamp - e.timestamp;
	}
	function S(e) {
		return {
			type: "username_change",
			timestamp: e.t,
			msg: e
		};
	}
	function R(e) {
		return {
			type: "past_participant",
			timestamp: e.leaveTs,
			participant: e
		};
	}
	function L() {
		o("WAWebGroupMemberUpdatesLogger").GroupMemberUpdatesLogger.startSession(), o("WAWebGroupMemberUpdatesLogger").GroupMemberUpdatesLogger.logOnMemberUpdatesScreen(o("WAWebWamEnumGroupMemberUpdatesActionName").GROUP_MEMBER_UPDATES_ACTION_NAME.VIEW);
	}
	function E(e) {
		return e.scrollTop + f > e.scrollHeight - e.clientHeight;
	}
	l.default = b;
}), 226);
