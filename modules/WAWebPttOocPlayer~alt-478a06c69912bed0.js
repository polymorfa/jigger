__d("WAWebPttOocPlayer", [
	"WAWebAudioFileIcon.react",
	"WAWebAudioStatusIcon.react",
	"WAWebChatEntryPoint",
	"WAWebChatGetters",
	"WAWebChatMessageSearch",
	"WAWebCmd",
	"WAWebDetailImage.react",
	"WAWebElevatedPushNamesFlag",
	"WAWebFrontendChatGetters",
	"WAWebFrontendMsgGetters",
	"WAWebMsgCollection",
	"WAWebMsgGetters",
	"WAWebName.react",
	"WAWebNewsletterName.react",
	"WAWebPttCalculateAudioProgress",
	"WAWebPttCloseButton.react",
	"WAWebPttDailyUtils",
	"WAWebPttOocMarquee",
	"WAWebPttPlayPauseButton.react",
	"WAWebPttPrefs",
	"WAWebPttStatusIconStyleable.react",
	"WAWebPttUseMsgAudioPlaybackController",
	"WAWebTabOrder",
	"WAWebThemeContext",
	"WAWebUnstyledButton.react",
	"WAWebVelocityTransitionGroup",
	"nullthrows",
	"react",
	"useWAWebAnimationFrames",
	"useWAWebListener",
	"useWAWebMeasure",
	"useWAWebModelValues",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useContext, m = u.useEffect, p = u.useRef, _ = u.useState, f = 62, g = 3, h = 26, y = 40, C = 18, b = {
		senderButton: {
			maxWidth: "x193iq5w",
			height: "x5yr21d",
			display: "x78zum5",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			justifyContent: "xl56j7k",
			alignItems: "x6s0dn4",
			":hover_opacity": "x5z6fxw",
			$$css: !0
		},
		senderName: {
			color: "xmzmlnv",
			fontSize: "x1jchvi3",
			$$css: !0
		}
	}, v = {
		outOfChatBg: {
			fill: "xhzorvt",
			$$css: !0
		},
		outOfChatIcon: {
			color: "xll8lwp",
			$$css: !0
		},
		forwardedBg: {
			fill: "xzp0ayt",
			$$css: !0
		},
		forwardedIcon: {
			color: "x17t9dm2",
			$$css: !0
		}
	};
	function S() {
		var e = o("useWAWebModelValues").useModelValues(o("WAWebPttPrefs").PttPrefs, ["outOfChatPlayerMessage"]), t = e.outOfChatPlayerMessage;
		m(function() {
			t && o("WAWebMsgCollection").MsgCollection.gadd(t);
		}, [t]);
		var n = o("WAWebPttUseMsgAudioPlaybackController").useMsgAudioPlaybackController(t), r = function(t) {
			o("WAWebPttPrefs").PttPrefs.outOfChatPlayerMessage = t;
		};
		return t && n ? s.jsx(R, {
			msg: t,
			playbackController: n,
			onPlayNext: r
		}) : null;
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t, n = e.msg, a = e.onPlayNext, i = e.playbackController, l = o("useWAWebMsgValues").useMsgValues(n.id, [o("WAWebFrontendMsgGetters").getAsRevoked, o("WAWebFrontendMsgGetters").getPendingDeleteForMe]), u = l[0], c = l[1], d = o("WAWebFrontendMsgGetters").getChat(n.unsafe()), f = i.audio, g = i.pttPlaybackLogger, h = x(n), y = _(!f.paused), C = y[0], v = y[1], S = p(!1), R = function() {
			return S.current = !1;
		};
		m(function() {
			R();
		}, [n]);
		var k = function() {
			return v(!f.paused);
		};
		(t = o("useWAWebListener")).useListener(f, "playing", function() {
			k();
		}), t.useListener(f, "timeupdate", function() {
			k(), h && (g.markAsPlayedInOoc(), S.current || (S.current = !0, o("WAWebPttDailyUtils").incrementPttDailyCount(o("WAWebPttDailyUtils").PttDailyCountKind.OOC_PLAYBACK, r("nullthrows")(o("WAWebFrontendChatGetters").getKind(d)))));
		}), t.useListener(f, "pause", k), t.useListener(f, "ended", function() {
			k(), h && R();
		}), t.useListener(o("WAWebCmd").Cmd, [
			"status_viewer_open",
			"status_posting_flow",
			"open_lock_screen_modal"
		], function() {
			f.pause();
		}), t.useListener(d, "remove", function() {
			f.pause(), o("WAWebPttPrefs").PttPrefs.closeOocPlayer();
		}), m(function() {
			(u || c) && (f.pause(), o("WAWebPttPrefs").PttPrefs.closeOocPlayer());
		}, [
			u,
			c,
			f
		]);
		var I = function(t) {
			C ? (f.pause(), g.increaseOocPauseCount()) : f.play(), t.preventDefault();
		}, T = function(t) {
			f.pause(), o("WAWebPttPrefs").PttPrefs.closeOocPlayer(), o("WAWebPttPrefs").PttPrefs.setPlayingMessage(null), g.markAsOocClosedByUser(), g.commit(!0), t.preventDefault();
		}, $ = function(t) {
			t.defaultPrevented || (o("WAWebCmd").Cmd.openChatAt({
				chat: d,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.PttOocPlayer,
				msgContext: o("WAWebChatMessageSearch").getSearchContext({
					chat: d,
					msgKey: n.id
				})
			}), g.increaseOocClickToChatCount());
		}, P = h && !u && !c;
		return s.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "ptt-out-of-chat",
			children: P ? s.jsxs("div", {
				className: "x10l6tqk x12xzxwr x78zum5 xh8yej3 x1x0gksc x1xrx4lg xnj6ddq",
				children: [
					s.jsx("div", {
						className: "xfvyar9 x5yr21d x78zum5 xl56j7k x6s0dn4",
						children: s.jsx(r("WAWebPttPlayPauseButton.react"), {
							onConfirm: I,
							paused: !C,
							tabOrder: o("WAWebTabOrder").TAB_ORDER.PTT_OOC_BUTTON,
							theme: "out-of-chat-playback"
						})
					}),
					s.jsx("div", {
						className: "xh8yej3 x5yr21d x6ikm8r x10wlt62 x78zum5 xl56j7k x6s0dn4 x1n2onr6",
						children: s.jsxs(r("WAWebUnstyledButton.react"), {
							dataTab: o("WAWebTabOrder").TAB_ORDER.PTT_OOC_BUTTON,
							xstyle: b.senderButton,
							onClick: $,
							children: [s.jsx(E, { msg: n }), s.jsx(L, {
								author: n.senderObj,
								chat: d
							})]
						})
					}),
					s.jsx("div", {
						className: "xfvyar9 x5yr21d x78zum5 xl56j7k x6s0dn4",
						children: s.jsx(r("WAWebPttCloseButton.react"), {
							onConfirm: T,
							tabOrder: o("WAWebTabOrder").TAB_ORDER.PTT_OOC_BUTTON,
							theme: "out-of-chat-playback"
						})
					}),
					s.jsx(D, {
						audio: f,
						isPlaying: C
					})
				]
			}) : null
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t = e.author, n = e.chat, a = r("useWAWebMeasure")(), i = a[0], l = a[1].width, u = r("useWAWebMeasure")(), c = u[0], d = u[1].width, m = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(n), p;
		o("WAWebChatGetters").getIsGroup(n) ? p = s.jsx(o("WAWebName.react").ContactAndGroupName, {
			contact: t,
			chat: n,
			xstyle: b.senderName
		}) : o("WAWebChatGetters").getIsNewsletter(n) ? p = s.jsx(o("WAWebNewsletterName.react").NewsletterName, {
			chat: n,
			elevatedPushNamesEnabled: m,
			xstyle: b.senderName
		}) : p = s.jsx(o("WAWebName.react").Name, {
			contact: t,
			useShortName: !0,
			xstyle: b.senderName,
			elevatedPushNamesEnabled: m
		});
		var _ = d > l;
		return s.jsxs(s.Fragment, { children: [s.jsx("div", {
			ref: i,
			className: "xoiwuju x5yr21d x6ikm8r x10wlt62 x10l6tqk",
			children: s.jsx("div", {
				ref: c,
				className: "xlshs6z x10l6tqk xomak03 xx7j5b9",
				children: p
			})
		}), s.jsx("div", {
			className: "xuxw1ft xbrixnn x6ikm8r x10wlt62 x193iq5w x5yr21d x78zum5 x6s0dn4",
			children: _ ? s.jsx(r("WAWebPttOocMarquee"), { children: p }) : p
		})] });
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e) {
		var t = e.msg, n = o("useWAWebMsgValues").useMsgValues(t.id, [o("WAWebFrontendMsgGetters").getAsPttLike, o("WAWebMsgGetters").getHasOriginatedFromNewsletter]), r = n[0], a = n[1];
		return r || a ? s.jsx(k, { msg: t }) : t.isForwarded ? s.jsx(I, {}) : s.jsx(T, {});
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		var t = e.msg, n = o("useWAWebMsgValues").useMsgValues(t.id, [o("WAWebFrontendMsgGetters").getMsgSenderId, o("WAWebFrontendMsgGetters").getAsPttLike]), r = n[0], a = n[1], i = t.type === "ptt" || a ? o("WAWebPttStatusIconStyleable.react").PttStatusIconStyleable : o("WAWebAudioStatusIcon.react").AudioStatusIcon;
		return s.jsxs("div", {
			className: "x14iifvp x100vrsf x1vqgdyp x1fns5xo x78zum5 xl56j7k x6s0dn4 x1a02dak x1n2onr6",
			children: [s.jsx(o("WAWebDetailImage.react").DetailImage, {
				id: r,
				size: y
			}), s.jsx("span", {
				className: "x11uqc5h x10l6tqk xuivejd xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x9hgfsb",
				children: s.jsx(i, {
					width: h,
					height: h,
					innerStyles: {
						background: v.outOfChatBg,
						primary: v.outOfChatIcon
					}
				})
			})]
		});
	}
	k.displayName = k.name + " [from " + i.id + "]";
	function I() {
		return s.jsx("div", {
			className: "x14iifvp x100vrsf x1vqgdyp x1fns5xo x78zum5 xl56j7k x6s0dn4 x1a02dak x1n2onr6 xvs2etk xg3wpu6 x1jwbhkm xgg4q86 x6ikm8r x10wlt62 x1aqdfop",
			children: s.jsx(o("WAWebPttStatusIconStyleable.react").PttStatusIconStyleable, {
				width: 20,
				height: 20,
				innerStyles: {
					background: v.forwardedBg,
					primary: v.forwardedIcon
				}
			})
		});
	}
	I.displayName = I.name + " [from " + i.id + "]";
	function T() {
		return s.jsx("div", {
			className: "x14iifvp x100vrsf x1vqgdyp x1fns5xo x78zum5 xl56j7k x6s0dn4 x1a02dak x1n2onr6 xvs2etk xg3wpu6 x1jwbhkm xgg4q86 x6ikm8r x10wlt62",
			children: s.jsx(o("WAWebAudioFileIcon.react").AudioFileIcon, {
				width: y,
				height: y
			})
		});
	}
	T.displayName = T.name + " [from " + i.id + "]";
	function D(e) {
		var t = e.audio, n = e.isPlaying, a = _(o("WAWebPttCalculateAudioProgress").calculateAudioProgress(t)), i = a[0], l = a[1], u = c(function() {
			l(o("WAWebPttCalculateAudioProgress").calculateAudioProgress(t));
		}, [t]);
		r("useWAWebAnimationFrames")(u, { active: n }), o("useWAWebListener").useListener(t, "timeupdate", u), o("useWAWebListener").useListener(t, "ended", function() {
			return l(0);
		});
		var m = d(o("WAWebThemeContext").ThemeContext), p = m.theme;
		return s.jsx("div", {
			className: "xh8yej3 x10l6tqk xef1mmm xuoj239",
			children: s.jsx("div", {
				className: {
					0: "xh8yej3 x5yr21d",
					2: "xh8yej3 x5yr21d x1r1mewj xwq05k6",
					1: "xh8yej3 x5yr21d x1liytr5 xyd83as",
					3: "xh8yej3 x5yr21d x1liytr5 xyd83as"
				}[(p === "light") << 1 | (p === "dark") << 0],
				style: { transform: "translateX(" + (i * 100 - 100) + "%)" }
			})
		});
	}
	D.displayName = D.name + " [from " + i.id + "]";
	function x(e) {
		var t = o("useWAWebModelValues").useModelValues(o("WAWebPttPrefs").PttPrefs, ["isOocPlayerClosedByUser"]), n = t.isOocPlayerClosedByUser, r = o("WAWebFrontendMsgGetters").getChat(e.unsafe()), a = o("useWAWebModelValues").useModelValues(r, ["active"]), i = a.active;
		return !n && !i;
	}
	l.default = S;
}), 98);
