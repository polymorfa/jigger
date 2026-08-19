__d("WAWebKicNux.react", [
	"fbt",
	"WAWebChatEphemerality",
	"WAWebChatThreadLogging",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebKeepInChatNuxWamEvent",
	"WAWebModalManager",
	"WAWebNux",
	"WAWebPeopleIcon.react",
	"WAWebText_DONOTUSE.react",
	"WAWebUndoKeepInChatIcon.react",
	"WAWebUserPrefsNuxPreferences",
	"WAWebWamEnumKicNuxActionNameType",
	"WAWebWamEnumTriggerType",
	"WAWebWdsPictoSaveIcon.react",
	"WDSIconIcCalendarMonth.react",
	"WDSIconWdsIcDisappearingMessages.react",
	"react",
	"react-compiler-runtime",
	"useWAWebListener",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useEffect, d = {
		badge: {
			backgroundColor: "xfn3atn",
			borderStartStartRadius: "x1fqc64z",
			borderStartEndRadius: "xs83zq4",
			borderEndEndRadius: "xt6ovg4",
			borderEndStartRadius: "x1ru8ea5",
			color: "x17t9dm2",
			fontSize: "x1f6kntn",
			marginTop: "x1aawmmo",
			paddingTop: "x1iorvi4",
			paddingInlineEnd: "x1icxu4v",
			paddingBottom: "xjkvuk6",
			paddingInlineStart: "x25sj25",
			textTransform: "xtvhhri",
			$$css: !0
		},
		header: {
			fontSize: "x1603h9y",
			fontWeight: "xk50ysn",
			lineHeight: "x1u7k74",
			marginTop: "x1anpbxc",
			textAlign: "x2b8uid",
			color: "x14ug900",
			$$css: !0
		},
		icon: {
			marginInlineEnd: "xviac27",
			color: "xhslqc4",
			$$css: !0
		},
		container: {
			position: "x1n2onr6",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			marginTop: "x1nmyh1g",
			color: "xhslqc4",
			fontSize: "x1nxh6w3",
			$$css: !0
		},
		body: {
			marginTop: "x1rdy4ex",
			color: "xhslqc4",
			fontSize: "x1nxh6w3",
			$$css: !0
		}
	};
	function m(e) {
		return o("WAWebUserPrefsNuxPreferences").shouldShowNUX(o("WAWebNux").NUX.KEEP_IN_CHAT) && o("WAWebChatEphemerality").isEphemeralSettingOn(e);
	}
	function p(e, t) {
		o("WAWebModalManager").ModalManager.open(u.jsx(g, {
			chat: e,
			entryPoint: o("WAWebWamEnumKicNuxActionNameType").KIC_NUX_ACTION_NAME_TYPE.KIC_NUX_IMPRESSION,
			trigger: t
		}));
	}
	function _(e, t) {
		return new Promise(function(n) {
			o("WAWebModalManager").ModalManager.open(u.jsx(g, {
				chat: e,
				entryPoint: o("WAWebWamEnumKicNuxActionNameType").KIC_NUX_ACTION_NAME_TYPE.KIC_NUX_IMPRESSION,
				trigger: t,
				onClose: n
			}));
		});
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(7), n;
		t[0] !== e ? (n = m(e), t[0] = e, t[1] = n) : n = t[1];
		var r;
		t[2] !== e ? (r = function(n) {
			return p(e, n);
		}, t[2] = e, t[3] = r) : r = t[3];
		var a;
		return t[4] !== n || t[5] !== r ? (a = [n, r], t[4] = n, t[5] = r, t[6] = a) : a = t[6], a;
	}
	function g(e) {
		var t = e.chat, n = e.entryPoint, a = e.onClose, i = e.trigger, l = r("useWAWebNux")(o("WAWebNux").NUX.KEEP_IN_CHAT), m = l[1];
		o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", function() {
			m(), a == null || a();
		});
		var p = async function() {
			var e = new (o("WAWebKeepInChatNuxWamEvent")).KeepInChatNuxWamEvent();
			e.set({
				chatEphemeralityDuration: t.ephemeralDuration,
				kicNuxActionName: o("WAWebWamEnumKicNuxActionNameType").KIC_NUX_ACTION_NAME_TYPE.KIC_NUX_LEARN_MORE_TAP,
				threadId: await o("WAWebChatThreadLogging").getChatThreadID(t.id.toJid()),
				trigger: i
			}), e.commit(), o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getKICFaqUrl()), o("WAWebModalManager").ModalManager.close();
		};
		c(function() {
			var e = new (o("WAWebKeepInChatNuxWamEvent")).KeepInChatNuxWamEvent();
			o("WAWebChatThreadLogging").getChatThreadID(t.id.toJid()).then(function(t) {
				t != null && e.set({ threadId: t });
			}).finally(function() {
				e.set({
					chatEphemeralityDuration: t.ephemeralDuration,
					kicNuxActionName: n,
					trigger: i
				}), e.commit();
			});
		}, []);
		var _, f, g, y, C = o("WAWebPeopleIcon.react").PeopleIcon, b = r("WDSIconWdsIcDisappearingMessages.react");
		i === o("WAWebWamEnumTriggerType").TRIGGER_TYPE.USER_MESSAGE_KEPT ? (y = o("WAWebUndoKeepInChatIcon.react").UndoKeepInChatIcon, _ = s._(
			/*BTDS*/
			""
		), f = s._(
			/*BTDS*/
			""
		), g = s._(
			/*BTDS*/
			""
		)) : (y = r("WDSIconIcCalendarMonth.react"), _ = s._(
			/*BTDS*/
			""
		), f = s._(
			/*BTDS*/
			""
		), g = s._(
			/*BTDS*/
			""
		));
		var v = s._(
			/*BTDS*/
			""
		);
		return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "keep-in-chat-nux"
			},
			testid: "kic_nux_modal",
			onOK: o("WAWebModalManager").closeModalManager,
			onCancel: p,
			cancelText: s._(
				/*BTDS*/
				""
			),
			children: [
				u.jsx(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					justify: "center",
					children: u.jsx(r("WAWebFlexItem.react"), { children: u.jsx(o("WAWebWdsPictoSaveIcon.react").WdsPictoSaveIcon, {}) })
				}),
				u.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					children: u.jsx(r("WAWebFlexItem.react"), {
						xstyle: d.badge,
						children: s._(
							/*BTDS*/
							""
						)
					})
				}),
				u.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
					xstyle: d.header,
					children: _
				}),
				u.jsx(h, {
					Icon: y,
					children: f
				}),
				u.jsx(h, {
					Icon: C,
					children: g
				}),
				u.jsx(h, {
					Icon: b,
					children: v
				})
			]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = o("react-compiler-runtime").c(7), n = e.Icon, r = e.children, a;
		t[0] !== n ? (a = u.jsx(n, {
			"aria-hidden": !0,
			displayInline: !0,
			width: 24,
			height: 24,
			xstyle: d.icon
		}), t[0] = n, t[1] = a) : a = t[1];
		var i;
		t[2] !== r ? (i = u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
			xstyle: d.body,
			children: u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, { children: r })
		}), t[2] = r, t[3] = i) : i = t[3];
		var l;
		return t[4] !== a || t[5] !== i ? (l = u.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
			xstyle: d.container,
			children: [a, i]
		}), t[4] = a, t[5] = i, t[6] = l) : l = t[6], l;
	}
	l.shouldShowKicNux = m, l.openKicNux = p, l.openKicNuxAndWaitForClose = _, l.useKicNux = f;
}), 226);
