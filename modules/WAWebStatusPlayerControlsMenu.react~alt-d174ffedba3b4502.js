__d("WAWebStatusPlayerControlsMenu.react", [
	"fbt",
	"WAWebChannelStatusPlayerOverflowMenu.react",
	"WAWebFlex.react",
	"WAWebMsgGetters",
	"WAWebStatusMediaControlsNoSoundIcon.react",
	"WAWebStatusPlayerOverflowMenu.react",
	"WAWebStopEvent",
	"WAWebTabOrder",
	"WDSButton.react",
	"WDSIconIcPauseFilled.react",
	"WDSIconIcPlayArrowFilled.react",
	"WDSIconIcVolumeOffFilled.react",
	"WDSIconIcVolumeUp.react",
	"WDSTooltip.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useId, d = { controlsContainer: {
		rowGap: "x1qvou4u",
		columnGap: "x1s70e7g",
		$$css: !0
	} };
	function m(e) {
		var t = e.handlePlayPauseButton, n = e.isPaused, a = c(), i = n ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
		return u.jsx("div", {
			className: "x78zum5 x6s0dn4 xl56j7k xsdox4t",
			children: u.jsx(r("WDSTooltip.react"), {
				id: a,
				label: i,
				children: u.jsx(r("WDSButton.react"), {
					Icon: r(n ? "WDSIconIcPlayArrowFilled.react" : "WDSIconIcPauseFilled.react"),
					variant: "borderless",
					type: "media",
					size: "medium",
					onPress: t,
					testid: n ? "status-play" : "status-pause",
					tabOrder: o("WAWebTabOrder").TAB_ORDER.STATUS_HEADER_SECTION,
					"aria-describedby": a,
					"aria-label": i
				})
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.handleMuteButton, n = e.hasAudio, a = e.isMuted, i = c(), l = a ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
		return n ? u.jsx("div", {
			className: "x78zum5 x6s0dn4 xl56j7k xsdox4t",
			children: u.jsx(r("WDSTooltip.react"), {
				id: i,
				label: l,
				children: u.jsx(r("WDSButton.react"), {
					Icon: r(a ? "WDSIconIcVolumeOffFilled.react" : "WDSIconIcVolumeUp.react"),
					variant: "borderless",
					type: "media",
					size: "medium",
					onPress: t,
					testid: a ? "status-unmute" : "status-mute",
					tabOrder: o("WAWebTabOrder").TAB_ORDER.STATUS_HEADER_SECTION,
					"aria-describedby": i,
					"aria-label": l
				})
			})
		}) : u.jsx("div", {
			className: "x78zum5 x6s0dn4 xl56j7k x100vrsf x1vqgdyp x1ks1olk x17t9dm2",
			"data-testid": "status-no-audio",
			children: u.jsx(o("WAWebStatusMediaControlsNoSoundIcon.react").StatusMediaControlsNoSoundIcon, {})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.contact, n = e.crosspostingInfo, a = e.msg, i = e.onAddAiContentLabel, l = e.onAddPaidPartnershipLabel, s = e.onCrosspost, c = e.onDelete, d = e.onDownload, m = e.onForward, p = e.onMuteOrUnmute, _ = e.onOverflowMenuDismissed, f = e.onOverflowMenuShown, g = e.onReport;
		return o("WAWebMsgGetters").getIsNewsletterStatus(a) ? u.jsx(r("WAWebChannelStatusPlayerOverflowMenu.react"), {
			onOverflowMenuShown: f,
			onOverflowMenuDismissed: _,
			contact: t,
			msg: a,
			onDelete: c,
			onDownload: d,
			onForward: m,
			onHideOrUnhide: p,
			onReport: g,
			onAddAiContentLabel: i,
			onAddPaidPartnershipLabel: l
		}) : u.jsx(r("WAWebStatusPlayerOverflowMenu.react"), {
			onOverflowMenuShown: f,
			onOverflowMenuDismissed: _,
			contact: t,
			msg: a,
			onReport: g,
			onDelete: c,
			onDownload: d,
			onCrosspost: s,
			onMuteOrUnmute: p,
			crosspostingInfo: n
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.contact, n = e.crosspostingInfo, r = e.hasAudio, a = e.isMuted, i = e.isPaused, l = e.msg, s = e.onAddAiContentLabel, c = e.onAddPaidPartnershipLabel, f = e.onCrosspost, g = e.onDelete, h = e.onDownload, y = e.onForward, C = e.onMute, b = e.onMuteOrUnmute, v = e.onOverflowMenuDismissed, S = e.onOverflowMenuShown, R = e.onPauseButtonClick, L = e.onPlay, E = e.onReport, k = e.onUnmute, I = function() {
			i ? L() : R();
		}, T = function() {
			a ? k() : C();
		};
		return u.jsx("div", {
			onClick: o("WAWebStopEvent").stopPropagation,
			children: u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: d.controlsContainer,
				children: [
					u.jsx(m, {
						isPaused: i,
						handlePlayPauseButton: I
					}),
					u.jsx(p, {
						hasAudio: r,
						isMuted: a,
						handleMuteButton: T
					}),
					u.jsx(_, {
						onOverflowMenuShown: S,
						onOverflowMenuDismissed: v,
						contact: t,
						msg: l,
						onReport: E,
						onDelete: g,
						onDownload: h,
						onForward: y,
						onCrosspost: f,
						onMuteOrUnmute: b,
						crosspostingInfo: n,
						onAddAiContentLabel: s,
						onAddPaidPartnershipLabel: c
					})
				]
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
