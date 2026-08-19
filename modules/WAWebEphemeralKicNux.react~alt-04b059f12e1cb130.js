__d("WAWebEphemeralKicNux.react", [
	"fbt",
	"WAWebAfterReadUtils",
	"WAWebChatThreadLogging",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebKeepInChatIcon.react",
	"WAWebKeepInChatNuxWamEvent",
	"WAWebModalManager",
	"WAWebNux",
	"WAWebText_DONOTUSE.react",
	"WAWebTimerIcon.react",
	"WAWebWamEnumKicNuxActionNameType",
	"WAWebWamEnumTriggerType",
	"WAWebWdsPictoDisappearingMessagesIcon.react",
	"WDSIconIcBackHand.react",
	"WDSIconIcDuration.react",
	"WDSIconWdsIcDisappearingMessages.react",
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useEffect, d = {
		header: {
			fontSize: "x1603h9y",
			fontWeight: "xk50ysn",
			lineHeight: "x1u7k74",
			marginTop: "x9u28bd",
			textAlign: "x2b8uid",
			color: "x14ug900",
			$$css: !0
		},
		subtitle: {
			marginTop: "x98l61r",
			fontSize: "x1f6kntn",
			textAlign: "x2b8uid",
			marginBottom: "xvl6max",
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
			fontSize: "x1nxh6w3",
			color: "xhslqc4",
			$$css: !0
		}
	};
	function m(e) {
		var t = e.chat, a = e.fromMe, i = e.onOk, l = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL), m = l[1], f = r("useWAWebNux")(o("WAWebNux").NUX.KEEP_IN_CHAT), g = f[1], h = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL_AFTER_READ), y = h[1], C = a && o("WAWebAfterReadUtils").isAfterReadOptionAvailable(), b = function() {
			m(), g(), C && y(), o("WAWebModalManager").ModalManager.closeSupportOrModal(), i && i();
		}, v = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				m(), g(), C && y();
				var e = new (o("WAWebKeepInChatNuxWamEvent")).KeepInChatNuxWamEvent({
					kicNuxActionName: o("WAWebWamEnumKicNuxActionNameType").KIC_NUX_ACTION_NAME_TYPE.KIC_NUX_LEARN_MORE_TAP,
					trigger: o("WAWebWamEnumTriggerType").TRIGGER_TYPE.CHAT_ENTRY
				});
				t && e.set({
					chatEphemeralityDuration: t.ephemeralDuration,
					threadId: yield o("WAWebChatThreadLogging").getChatThreadID(t.id.toJid())
				}), e.commit(), o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getEphemeralFaqUrl());
			});
			return function() {
				return e.apply(this, arguments);
			};
		})();
		c(function() {
			var e = new (o("WAWebKeepInChatNuxWamEvent")).KeepInChatNuxWamEvent({
				kicNuxActionName: o("WAWebWamEnumKicNuxActionNameType").KIC_NUX_ACTION_NAME_TYPE.FIRST_DM_NUX_IMPRESSION,
				trigger: o("WAWebWamEnumTriggerType").TRIGGER_TYPE.CHAT_ENTRY
			});
			if (t == null) {
				e.commit();
				return;
			}
			o("WAWebChatThreadLogging").getChatThreadID(t.id.toJid()).then(function(n) {
				e.set({
					chatEphemeralityDuration: t.ephemeralDuration,
					threadId: n
				});
			}).finally(function() {
				e.commit();
			});
		}, []);
		var S = a ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
		return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "ephemeral-kic-nux"
			},
			testid: "ephemeral-kic-nux-modal",
			onOK: b,
			onCancel: v,
			cancelText: s._(
				/*BTDS*/
				""
			),
			children: [
				u.jsx(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					justify: "center",
					children: u.jsx(r("WAWebFlexItem.react"), { children: u.jsx(o("WAWebWdsPictoDisappearingMessagesIcon.react").WdsPictoDisappearingMessagesIcon, { height: 88 }) })
				}),
				u.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
					xstyle: d.header,
					children: S
				}),
				u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
					xstyle: d.subtitle,
					children: s._(
						/*BTDS*/
						""
					)
				}),
				C ? u.jsx(p, {}) : u.jsx(_, {})
			]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {
		return u.jsxs(u.Fragment, { children: [
			u.jsx(f, {
				icon: u.jsx(r("WDSIconWdsIcDisappearingMessages.react"), {
					width: 24,
					height: 24
				}),
				children: s._(
					/*BTDS*/
					""
				)
			}),
			u.jsx(f, {
				icon: u.jsx(r("WDSIconIcDuration.react"), {
					width: 24,
					height: 24
				}),
				children: s._(
					/*BTDS*/
					""
				)
			}),
			u.jsx(f, {
				icon: u.jsx(r("WDSIconIcBackHand.react"), {
					width: 24,
					height: 24
				}),
				children: s._(
					/*BTDS*/
					""
				)
			})
		] });
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _() {
		return u.jsxs(u.Fragment, { children: [
			u.jsx(f, {
				icon: u.jsx(o("WAWebTimerIcon.react").TimerIcon, {
					displayInline: !0,
					width: 18,
					height: 18
				}),
				children: s._(
					/*BTDS*/
					""
				)
			}),
			u.jsx(f, {
				icon: u.jsx(o("WAWebKeepInChatIcon.react").KeepInChatIcon, {
					displayInline: !0,
					width: 24,
					height: 24
				}),
				children: s._(
					/*BTDS*/
					""
				)
			}),
			u.jsx(f, {
				icon: u.jsx(r("WDSIconIcBackHand.react"), {
					displayInline: !0,
					width: 24,
					height: 24
				}),
				children: s._(
					/*BTDS*/
					""
				)
			})
		] });
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.children, n = e.icon;
		return u.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
			xstyle: d.container,
			children: [u.jsx("span", {
				className: "xviac27 xhslqc4",
				"aria-hidden": !0,
				children: n
			}), u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
				xstyle: d.body,
				children: u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, { children: t })
			})]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = m;
}), 226);
