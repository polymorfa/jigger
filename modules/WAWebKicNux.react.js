__d("WAWebKicNux.react", [
	"fbt",
	"Promise",
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
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"useWAWebListener",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useEffect, m = {
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
	function p(e) {
		return o("WAWebUserPrefsNuxPreferences").shouldShowNUX(o("WAWebNux").NUX.KEEP_IN_CHAT) && o("WAWebChatEphemerality").isEphemeralSettingOn(e);
	}
	function _(e, t) {
		o("WAWebModalManager").ModalManager.open(c.jsx(h, {
			chat: e,
			entryPoint: o("WAWebWamEnumKicNuxActionNameType").KIC_NUX_ACTION_NAME_TYPE.KIC_NUX_IMPRESSION,
			trigger: t
		}));
	}
	function f(t, r) {
		return new (e || (e = (n("Promise"))))(function(e) {
			o("WAWebModalManager").ModalManager.open(c.jsx(h, {
				chat: t,
				entryPoint: o("WAWebWamEnumKicNuxActionNameType").KIC_NUX_ACTION_NAME_TYPE.KIC_NUX_IMPRESSION,
				trigger: r,
				onClose: e
			}));
		});
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(7), n;
		t[0] !== e ? (n = p(e), t[0] = e, t[1] = n) : n = t[1];
		var r;
		t[2] !== e ? (r = function(n) {
			return _(e, n);
		}, t[2] = e, t[3] = r) : r = t[3];
		var a;
		return t[4] !== n || t[5] !== r ? (a = [n, r], t[4] = n, t[5] = r, t[6] = a) : a = t[6], a;
	}
	function h(e) {
		var t = e.chat, a = e.entryPoint, i = e.onClose, l = e.trigger, u = r("useWAWebNux")(o("WAWebNux").NUX.KEEP_IN_CHAT), p = u[1];
		o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", function() {
			p(), i == null || i();
		});
		var _ = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = new (o("WAWebKeepInChatNuxWamEvent")).KeepInChatNuxWamEvent();
				e.set({
					chatEphemeralityDuration: t.ephemeralDuration,
					kicNuxActionName: o("WAWebWamEnumKicNuxActionNameType").KIC_NUX_ACTION_NAME_TYPE.KIC_NUX_LEARN_MORE_TAP,
					threadId: yield o("WAWebChatThreadLogging").getChatThreadID(t.id.toJid()),
					trigger: l
				}), e.commit(), o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getKICFaqUrl()), o("WAWebModalManager").ModalManager.close();
			});
			return function() {
				return e.apply(this, arguments);
			};
		})();
		d(function() {
			var e = new (o("WAWebKeepInChatNuxWamEvent")).KeepInChatNuxWamEvent();
			o("WAWebChatThreadLogging").getChatThreadID(t.id.toJid()).then(function(t) {
				t != null && e.set({ threadId: t });
			}).finally(function() {
				e.set({
					chatEphemeralityDuration: t.ephemeralDuration,
					kicNuxActionName: a,
					trigger: l
				}), e.commit();
			});
		}, []);
		var f, g, h, C, b = o("WAWebPeopleIcon.react").PeopleIcon, v = r("WDSIconWdsIcDisappearingMessages.react");
		l === o("WAWebWamEnumTriggerType").TRIGGER_TYPE.USER_MESSAGE_KEPT ? (C = o("WAWebUndoKeepInChatIcon.react").UndoKeepInChatIcon, f = s._(
			/*BTDS*/
			""
		), g = s._(
			/*BTDS*/
			""
		), h = s._(
			/*BTDS*/
			""
		)) : (C = r("WDSIconIcCalendarMonth.react"), f = s._(
			/*BTDS*/
			""
		), g = s._(
			/*BTDS*/
			""
		), h = s._(
			/*BTDS*/
			""
		));
		var S = s._(
			/*BTDS*/
			""
		);
		return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "keep-in-chat-nux"
			},
			testid: "kic_nux_modal",
			onOK: o("WAWebModalManager").closeModalManager,
			onCancel: _,
			cancelText: s._(
				/*BTDS*/
				""
			),
			children: [
				c.jsx(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					justify: "center",
					children: c.jsx(r("WAWebFlexItem.react"), { children: c.jsx(o("WAWebWdsPictoSaveIcon.react").WdsPictoSaveIcon, {}) })
				}),
				c.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					children: c.jsx(r("WAWebFlexItem.react"), {
						xstyle: m.badge,
						children: s._(
							/*BTDS*/
							""
						)
					})
				}),
				c.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
					xstyle: m.header,
					children: f
				}),
				c.jsx(y, {
					Icon: C,
					children: g
				}),
				c.jsx(y, {
					Icon: b,
					children: h
				}),
				c.jsx(y, {
					Icon: v,
					children: S
				})
			]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = o("react-compiler-runtime").c(7), n = e.Icon, r = e.children, a;
		t[0] !== n ? (a = c.jsx(n, {
			"aria-hidden": !0,
			displayInline: !0,
			width: 24,
			height: 24,
			xstyle: m.icon
		}), t[0] = n, t[1] = a) : a = t[1];
		var i;
		t[2] !== r ? (i = c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
			xstyle: m.body,
			children: c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, { children: r })
		}), t[2] = r, t[3] = i) : i = t[3];
		var l;
		return t[4] !== a || t[5] !== i ? (l = c.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
			xstyle: m.container,
			children: [a, i]
		}), t[4] = a, t[5] = i, t[6] = l) : l = t[6], l;
	}
	l.shouldShowKicNux = p, l.openKicNux = _, l.openKicNuxAndWaitForClose = f, l.useKicNux = g;
}), 226);
