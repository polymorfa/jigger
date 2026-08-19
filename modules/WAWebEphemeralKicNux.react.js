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
	"react-compiler-runtime",
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
		var e = o("react-compiler-runtime").c(3), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = u.jsx(f, {
			icon: u.jsx(r("WDSIconWdsIcDisappearingMessages.react"), {
				width: 24,
				height: 24
			}),
			children: s._(
				/*BTDS*/
				""
			)
		}), e[0] = t) : t = e[0];
		var n;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsx(f, {
			icon: u.jsx(r("WDSIconIcDuration.react"), {
				width: 24,
				height: 24
			}),
			children: s._(
				/*BTDS*/
				""
			)
		}), e[1] = n) : n = e[1];
		var a;
		return e[2] === Symbol.for("react.memo_cache_sentinel") ? (a = u.jsxs(u.Fragment, { children: [
			t,
			n,
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
		] }), e[2] = a) : a = e[2], a;
	}
	function _() {
		var e = o("react-compiler-runtime").c(3), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = u.jsx(f, {
			icon: u.jsx(o("WAWebTimerIcon.react").TimerIcon, {
				displayInline: !0,
				width: 18,
				height: 18
			}),
			children: s._(
				/*BTDS*/
				""
			)
		}), e[0] = t) : t = e[0];
		var n;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsx(f, {
			icon: u.jsx(o("WAWebKeepInChatIcon.react").KeepInChatIcon, {
				displayInline: !0,
				width: 24,
				height: 24
			}),
			children: s._(
				/*BTDS*/
				""
			)
		}), e[1] = n) : n = e[1];
		var a;
		return e[2] === Symbol.for("react.memo_cache_sentinel") ? (a = u.jsxs(u.Fragment, { children: [
			t,
			n,
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
		] }), e[2] = a) : a = e[2], a;
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(8), n = e.children, r = e.icon, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = { className: "xviac27 xhslqc4" }, t[0] = a) : a = t[0];
		var i;
		t[1] !== r ? (i = u.jsx("span", babelHelpers.extends({}, a, {
			"aria-hidden": !0,
			children: r
		})), t[1] = r, t[2] = i) : i = t[2];
		var l;
		t[3] !== n ? (l = u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
			xstyle: d.body,
			children: u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, { children: n })
		}), t[3] = n, t[4] = l) : l = t[4];
		var s;
		return t[5] !== i || t[6] !== l ? (s = u.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
			xstyle: d.container,
			children: [i, l]
		}), t[5] = i, t[6] = l, t[7] = s) : s = t[7], s;
	}
	l.default = m;
}), 226);
