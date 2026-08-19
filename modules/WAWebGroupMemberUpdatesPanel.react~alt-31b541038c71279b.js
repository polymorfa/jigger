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
		var t = _([]), n = t[0], r = t[1], a = _(!1), i = a[0], l = a[1], s = _(!1), u = s[0], c = s[1], f = _(!1), g = f[0], h = f[1], y = p(null), C = d(function() {
			if (!(i || u)) {
				c(!0), h(!1);
				var t = o("WATimeUtils").unixTimeMs();
				o("WAWebMsgQueryUtils").getGroupMemberUpdateMsgs(e, o("WAWebCollectionConstants").PAGE_SIZE, y.current).then(function(e) {
					if (e.length < o("WAWebCollectionConstants").PAGE_SIZE && l(!0), e.length > 0) {
						var n = e[e.length - 1];
						y.current = n.id, r(function(t) {
							return [].concat(t, e);
						}), o("WAWebGroupMemberUpdatesLogger").GroupMemberUpdatesLogger.logOnMemberUpdatesScreen(o("WAWebWamEnumGroupMemberUpdatesActionName").GROUP_MEMBER_UPDATES_ACTION_NAME.FETCH_MEMBER_UPDATES_SUCCESS, e.length, o("WATimeUtils").unixTimeMs() - t);
					} else y.current == null && o("WAWebGroupMemberUpdatesLogger").GroupMemberUpdatesLogger.logOnMemberUpdatesScreen(o("WAWebWamEnumGroupMemberUpdatesActionName").GROUP_MEMBER_UPDATES_ACTION_NAME.FETCH_MEMBER_UPDATES_EMPTY);
					c(!1);
				}).catch(function(e) {
					h(!0), c(!1), o("WAWebGroupMemberUpdatesLogger").GroupMemberUpdatesLogger.logOnMemberUpdatesScreen(o("WAWebWamEnumGroupMemberUpdatesActionName").GROUP_MEMBER_UPDATES_ACTION_NAME.FETCH_MEMBER_UPDATES_FAILURE);
				});
			}
		}, [
			e,
			i,
			u
		]), b = p(!1);
		return m(function() {
			b.current || (b.current = !0, C());
		}, [C]), {
			msgs: n,
			isFullyLoaded: i,
			isLoading: u,
			hasError: g,
			loadMore: C
		};
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
		var t, n = e.chat, a = e.onBack, i = e.onContactInfo, l = e.ref, c = (t = n.groupMetadata) == null ? void 0 : t.pastParticipants, d = h(n.id), p = d.hasError, _ = d.isFullyLoaded, f = d.loadMore, b = d.msgs;
		m(function() {
			o("WAWebGroupMemberUpdatesLogger").GroupMemberUpdatesLogger.startSession(), o("WAWebGroupMemberUpdatesLogger").GroupMemberUpdatesLogger.logOnMemberUpdatesScreen(o("WAWebWamEnumGroupMemberUpdatesActionName").GROUP_MEMBER_UPDATES_ACTION_NAME.VIEW);
		}, []);
		var S = r("useWAWebEventTargetValue")(c, [
			"bulk_add",
			"bulk_remove",
			"reset"
		], function() {
			var e, t = (e = c == null ? void 0 : c.getValidRecords().map(function(e) {
				return {
					type: "past_participant",
					timestamp: e.leaveTs,
					participant: e
				};
			})) != null ? e : [], n = b.map(function(e) {
				return {
					type: "username_change",
					timestamp: e.t,
					msg: e
				};
			});
			return [].concat(t, n).sort(function(e, t) {
				return t.timestamp - e.timestamp;
			});
		}, [b]), R = r("useWAWebStableCallback")(function() {
			f();
		}), L = r("useWAWebThrottledCallback")(function(e) {
			e.currentTarget && v(e.currentTarget) && R();
		}, 100), E = function(t) {
			if (i != null) {
				var e = o("WAWebGroupParticipantsFlow.react").getOneToOneContact(t);
				e != null && i(e);
			}
		}, k = function(t) {
			o("WAWebGroupMemberUpdatesLogger").GroupMemberUpdatesLogger.logOnMemberUpdatesScreen(o("WAWebWamEnumGroupMemberUpdatesActionName").GROUP_MEMBER_UPDATES_ACTION_NAME.CLICK_PAST_MEMBER_UPDATE), E(t.contact);
		}, I = function(t) {
			var e;
			o("WAWebGroupMemberUpdatesLogger").GroupMemberUpdatesLogger.logOnMemberUpdatesScreen(o("WAWebWamEnumGroupMemberUpdatesActionName").GROUP_MEMBER_UPDATES_ACTION_NAME.CLICK_USERNAME_UPDATE);
			var n = (e = t.templateParams) != null ? e : [], a = n[2];
			if (a instanceof r("WAWebWid")) {
				var i = o("WAWebContactCollection").ContactCollection.get(a);
				i != null && E(i);
			}
		}, T = null;
		_ || (T = u.jsx("div", {
			className: "x78zum5 xl56j7k x6s0dn4 xyamay9 xv54qhq x1l90r2v xf7dkkf",
			children: u.jsx(r("WDSSpinner.react"), {
				stroke: 6,
				size: 24
			})
		}));
		var D = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() ? y() : C(), x = u.jsx(r("WAWebDrawerSection.react"), {
			xstyle: g.headerSection,
			animation: !1,
			children: u.jsx(o("WAWebFlex.react").FlexRow, {
				justify: "center",
				align: "center",
				children: u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
					size: "14",
					color: "secondary",
					xstyle: g.disclaimer,
					children: D
				})
			})
		}), $ = o("WAWebABProps").getABPropConfigValue("wds_web_text_layout"), P, N = !0;
		return S.length > 0 ? P = u.jsxs(u.Fragment, { children: [
			u.jsx(r("WAWebDrawerSection.react"), {
				animation: !1,
				children: S.map(function(e, t) {
					return e.type === "past_participant" ? u.jsx(r("WAWebGroupMemberUpdatePastParticipantRow.react"), {
						participant: e.participant,
						onClick: function() {
							return k(e.participant);
						}
					}, "past_" + e.participant.id.toString() + "_" + t) : u.jsx(r("WAWebGroupMemberUpdateUsernameRow.react"), {
						msg: e.msg,
						onClick: function() {
							return I(e.msg);
						}
					}, "uname_" + e.msg.id.toString() + "_" + t);
				})
			}),
			T,
			p && u.jsx("div", {
				className: "x2b8uid x1p57kb1 x1ci70gm xb0esv5 xyo0t3i",
				children: u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					children: s._(
						/*BTDS*/
						""
					)
				})
			})
		] }) : _ ? $ ? (N = !1, P = u.jsx("div", {
			"data-testid": "member-changes-empty-container",
			className: "x78zum5 xdt5ytf x1iyjqo2 x6s0dn4 xl56j7k x5yr21d xb0esv5 xyo0t3i",
			children: u.jsx(r("WDSTextLayout.react"), {
				headline: s._(
					/*BTDS*/
					""
				),
				body: D,
				illustration: u.jsx(r("WDSIllustrationWdsPictoGroup.react"), {}),
				testid: "member-changes-empty"
			})
		})) : P = u.jsx(o("WAWebFlex.react").FlexColumn, {
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
		}) : P = u.jsx("div", {
			className: "x78zum5 xl56j7k x6s0dn4 xyamay9 xv54qhq x1l90r2v xf7dkkf",
			children: u.jsx(r("WDSSpinner.react"), {
				stroke: 6,
				size: 24
			})
		}), u.jsxs(r("WAWebDrawer.react"), {
			ref: l,
			theme: "invite",
			testid: "member-updates-drawer",
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: a
			}), u.jsxs(r("WAWebDrawerBody.react"), {
				onScroll: L,
				children: [N && x, P]
			})]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		return e.scrollTop + f > e.scrollHeight - e.clientHeight;
	}
	l.default = b;
}), 226);
