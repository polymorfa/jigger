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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useId, d = { controlsContainer: {
		rowGap: "x1qvou4u",
		columnGap: "x1s70e7g",
		$$css: !0
	} };
	function m(e) {
		var t = o("react-compiler-runtime").c(13), n = e.handlePlayPauseButton, a = e.isPaused, i = c(), l;
		t[0] !== a ? (l = a ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[0] = a, t[1] = l) : l = t[1];
		var d = l, m;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (m = { className: "x78zum5 x6s0dn4 xl56j7k xsdox4t" }, t[2] = m) : m = t[2];
		var p = r(a ? "WDSIconIcPlayArrowFilled.react" : "WDSIconIcPauseFilled.react"), _ = a ? "status-play" : "status-pause", f;
		t[3] !== n || t[4] !== d || t[5] !== p || t[6] !== _ || t[7] !== i ? (f = u.jsx(r("WDSButton.react"), {
			Icon: p,
			variant: "borderless",
			type: "media",
			size: "medium",
			onPress: n,
			testid: _,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.STATUS_HEADER_SECTION,
			"aria-describedby": i,
			"aria-label": d
		}), t[3] = n, t[4] = d, t[5] = p, t[6] = _, t[7] = i, t[8] = f) : f = t[8];
		var g;
		return t[9] !== d || t[10] !== f || t[11] !== i ? (g = u.jsx("div", babelHelpers.extends({}, m, { children: u.jsx(r("WDSTooltip.react"), {
			id: i,
			label: d,
			children: f
		}) })), t[9] = d, t[10] = f, t[11] = i, t[12] = g) : g = t[12], g;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(8), n = e.handleMuteButton, a = e.hasAudio, i = e.isMuted, l = c(), d;
		t[0] !== i ? (d = i ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[0] = i, t[1] = d) : d = t[1];
		var m = d, p;
		return t[2] !== n || t[3] !== a || t[4] !== i || t[5] !== m || t[6] !== l ? (p = a ? u.jsx("div", {
			className: "x78zum5 x6s0dn4 xl56j7k xsdox4t",
			children: u.jsx(r("WDSTooltip.react"), {
				id: l,
				label: m,
				children: u.jsx(r("WDSButton.react"), {
					Icon: r(i ? "WDSIconIcVolumeOffFilled.react" : "WDSIconIcVolumeUp.react"),
					variant: "borderless",
					type: "media",
					size: "medium",
					onPress: n,
					testid: i ? "status-unmute" : "status-mute",
					tabOrder: o("WAWebTabOrder").TAB_ORDER.STATUS_HEADER_SECTION,
					"aria-describedby": l,
					"aria-label": m
				})
			})
		}) : u.jsx("div", {
			className: "x78zum5 x6s0dn4 xl56j7k x100vrsf x1vqgdyp x1ks1olk x17t9dm2",
			"data-testid": "status-no-audio",
			children: u.jsx(o("WAWebStatusMediaControlsNoSoundIcon.react").StatusMediaControlsNoSoundIcon, {})
		}), t[2] = n, t[3] = a, t[4] = i, t[5] = m, t[6] = l, t[7] = p) : p = t[7], p;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(23), n = e.contact, a = e.crosspostingInfo, i = e.msg, l = e.onAddAiContentLabel, s = e.onAddPaidPartnershipLabel, c = e.onCrosspost, d = e.onDelete, m = e.onDownload, p = e.onForward, _ = e.onMuteOrUnmute, f = e.onOverflowMenuDismissed, g = e.onOverflowMenuShown, h = e.onReport;
		if (o("WAWebMsgGetters").getIsNewsletterStatus(i)) {
			var y;
			return t[0] !== n || t[1] !== i || t[2] !== l || t[3] !== s || t[4] !== d || t[5] !== m || t[6] !== p || t[7] !== _ || t[8] !== f || t[9] !== g || t[10] !== h ? (y = u.jsx(r("WAWebChannelStatusPlayerOverflowMenu.react"), {
				onOverflowMenuShown: g,
				onOverflowMenuDismissed: f,
				contact: n,
				msg: i,
				onDelete: d,
				onDownload: m,
				onForward: p,
				onHideOrUnhide: _,
				onReport: h,
				onAddAiContentLabel: l,
				onAddPaidPartnershipLabel: s
			}), t[0] = n, t[1] = i, t[2] = l, t[3] = s, t[4] = d, t[5] = m, t[6] = p, t[7] = _, t[8] = f, t[9] = g, t[10] = h, t[11] = y) : y = t[11], y;
		}
		var C;
		return t[12] !== n || t[13] !== a || t[14] !== i || t[15] !== c || t[16] !== d || t[17] !== m || t[18] !== _ || t[19] !== f || t[20] !== g || t[21] !== h ? (C = u.jsx(r("WAWebStatusPlayerOverflowMenu.react"), {
			onOverflowMenuShown: g,
			onOverflowMenuDismissed: f,
			contact: n,
			msg: i,
			onReport: h,
			onDelete: d,
			onDownload: m,
			onCrosspost: c,
			onMuteOrUnmute: _,
			crosspostingInfo: a
		}), t[12] = n, t[13] = a, t[14] = i, t[15] = c, t[16] = d, t[17] = m, t[18] = _, t[19] = f, t[20] = g, t[21] = h, t[22] = C) : C = t[22], C;
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(33), n = e.contact, r = e.crosspostingInfo, a = e.hasAudio, i = e.isMuted, l = e.isPaused, s = e.msg, c = e.onAddAiContentLabel, f = e.onAddPaidPartnershipLabel, g = e.onCrosspost, h = e.onDelete, y = e.onDownload, C = e.onForward, b = e.onMute, v = e.onMuteOrUnmute, S = e.onOverflowMenuDismissed, R = e.onOverflowMenuShown, L = e.onPauseButtonClick, E = e.onPlay, k = e.onReport, I = e.onUnmute, T;
		t[0] !== l || t[1] !== L || t[2] !== E ? (T = function() {
			l ? E() : L();
		}, t[0] = l, t[1] = L, t[2] = E, t[3] = T) : T = t[3];
		var D = T, x;
		t[4] !== i || t[5] !== b || t[6] !== I ? (x = function() {
			i ? I() : b();
		}, t[4] = i, t[5] = b, t[6] = I, t[7] = x) : x = t[7];
		var $ = x, P;
		t[8] !== D || t[9] !== l ? (P = u.jsx(m, {
			isPaused: l,
			handlePlayPauseButton: D
		}), t[8] = D, t[9] = l, t[10] = P) : P = t[10];
		var N;
		t[11] !== $ || t[12] !== a || t[13] !== i ? (N = u.jsx(p, {
			hasAudio: a,
			isMuted: i,
			handleMuteButton: $
		}), t[11] = $, t[12] = a, t[13] = i, t[14] = N) : N = t[14];
		var M;
		t[15] !== n || t[16] !== r || t[17] !== s || t[18] !== c || t[19] !== f || t[20] !== g || t[21] !== h || t[22] !== y || t[23] !== C || t[24] !== v || t[25] !== S || t[26] !== R || t[27] !== k ? (M = u.jsx(_, {
			onOverflowMenuShown: R,
			onOverflowMenuDismissed: S,
			contact: n,
			msg: s,
			onReport: k,
			onDelete: h,
			onDownload: y,
			onForward: C,
			onCrosspost: g,
			onMuteOrUnmute: v,
			crosspostingInfo: r,
			onAddAiContentLabel: c,
			onAddPaidPartnershipLabel: f
		}), t[15] = n, t[16] = r, t[17] = s, t[18] = c, t[19] = f, t[20] = g, t[21] = h, t[22] = y, t[23] = C, t[24] = v, t[25] = S, t[26] = R, t[27] = k, t[28] = M) : M = t[28];
		var w;
		return t[29] !== P || t[30] !== N || t[31] !== M ? (w = u.jsx("div", {
			onClick: o("WAWebStopEvent").stopPropagation,
			children: u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: d.controlsContainer,
				children: [
					P,
					N,
					M
				]
			})
		}), t[29] = P, t[30] = N, t[31] = M, t[32] = w) : w = t[32], w;
	}
	l.default = f;
}), 226);
