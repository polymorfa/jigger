__d("WAWebVideoPlayerXBasicControls.react", [
	"fbt",
	"VideoPlayerHooks",
	"WAWebClock",
	"WAWebStopEvent",
	"WDSIconIcArrowBack.react",
	"WDSIconIcCheck.react",
	"WDSIconIcFullscreen.react",
	"WDSIconIcMoreVert.react",
	"WDSIconIcPauseFilled.react",
	"WDSIconIcPictureInPictureAlt.react",
	"WDSIconIcPlayArrowFilled.react",
	"WDSIconIcVolumeOffFilled.react",
	"WDSIconIcVolumeUp.react",
	"react",
	"react-compiler-runtime",
	"useVideoPlayerDefaultControlsVisibility",
	"useWAWebOnUnmount"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = e || (e = o("react")), d = e, m = d.useCallback, p = d.useEffect, _ = d.useRef, f = d.useState;
	function g(e, t) {
		(e.key === "Enter" || e.key === " ") && (e.preventDefault(), t());
	}
	var h = "x1xkg3e2-B", y = [
		.25,
		.5,
		.75,
		1,
		1.25,
		1.5,
		1.75,
		2
	], C = 20, b = 20;
	function v(e) {
		var t = o("react-compiler-runtime").c(3), n;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = c.jsx("path", { d: "M13.05 9.79L10 7.5v9l3.05-2.29L16 12l-2.95-2.21zm0 0L10 7.5v9l3.05-2.29L16 12l-2.95-2.21zm0 0L10 7.5v9l3.05-2.29L16 12l-2.95-2.21zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69A7.941 7.941 0 0111 4.07zM5.69 7.1L4.26 5.68A9.949 9.949 0 002.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43A7.868 7.868 0 014.07 13zm1.61 6.74A9.981 9.981 0 0011 21.95v-2.02a7.941 7.941 0 01-3.9-1.62l-1.42 1.43zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12z" }), t[0] = n) : n = t[0];
		var r;
		return t[1] !== e ? (r = c.jsx("svg", babelHelpers.extends({
			"aria-hidden": "true",
			viewBox: "0 0 24 24",
			fill: "currentColor"
		}, e, { children: n })), t[1] = e, t[2] = r) : r = t[2], r;
	}
	function S(e) {
		var t = o("react-compiler-runtime").c(3), n;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = c.jsx("path", { d: "M19 7H5v10h14V7zm4 12V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z" }), t[0] = n) : n = t[0];
		var r;
		return t[1] !== e ? (r = c.jsx("svg", babelHelpers.extends({
			"aria-hidden": "true",
			viewBox: "0 0 24 24",
			fill: "currentColor"
		}, e, { children: n })), t[1] = e, t[2] = r) : r = t[2], r;
	}
	var R = {
		iconBlock: {
			display: "x1lliihq",
			$$css: !0
		},
		menuCheckmark: {
			color: "x1v5yvga",
			flexShrink: "x2lah0s",
			height: "x1qx5ct2",
			marginInlineStart: "xvc5jky",
			width: "xw4jnvo",
			$$css: !0
		},
		menuHeaderIcon: {
			flexShrink: "x2lah0s",
			height: "x1qx5ct2",
			width: "xw4jnvo",
			$$css: !0
		},
		menuItemIcon: {
			flexShrink: "x2lah0s",
			height: "xxk0z11",
			width: "xvy4d1p",
			$$css: !0
		}
	}, L = 5;
	function E() {
		var e = o("react-compiler-runtime").c(189), t = r("useVideoPlayerDefaultControlsVisibility")(), n = t.isControlsVisible, a = (u || (u = o("VideoPlayerHooks"))).useController(), i = u.usePaused(), l = u.useEnded(), d = u.useMuted(), m = u.useVolume(), h = u.useCurrentTimeThrottled(250), E = u.useDuration(), k = u.usePlaybackRate(), I = f(null), T = I[0], D = I[1], x = _(null), $ = _(h), P = f(!1), N = P[0], M = P[1], w = f(!1), A = w[0], F = w[1], O = f(!1), B = O[0], W = O[1], q = f(!1), U = q[0], V = q[1], H = f(!1), G = H[0], z = H[1], j = _(null), K = f(!1), Q = K[0], X = K[1], Y = f("main"), J = Y[0], Z = Y[1], ee = _(null), te, ne;
		e[0] !== J ? (te = function() {
			if (!(J !== "speed" || ee.current == null)) {
				var e = ee.current.querySelector("[data-active]");
				e != null && e.scrollIntoView({ block: "center" });
			}
		}, ne = [J], e[0] = J, e[1] = te, e[2] = ne) : (te = e[1], ne = e[2]), p(te, ne);
		var re, oe;
		e[3] !== Q ? (re = function() {
			if (Q) {
				var e = function(t) {
					var e = t.target;
					ee.current != null && e instanceof Node && !ee.current.contains(e) && (X(!1), Z("main"));
				};
				return document.addEventListener("mousedown", e), (function() {
					return document.removeEventListener("mousedown", e);
				});
			}
		}, oe = [Q], e[3] = Q, e[4] = re, e[5] = oe) : (re = e[4], oe = e[5]), p(re, oe);
		var ae, ie;
		e[6] !== h || e[7] !== T ? (ae = function() {
			T != null && x.current == null && h !== $.current && D(null), $.current = h;
		}, ie = [h, T], e[6] = h, e[7] = T, e[8] = ae, e[9] = ie) : (ae = e[8], ie = e[9]), p(ae, ie);
		var le, se;
		e[10] === Symbol.for("react.memo_cache_sentinel") ? (le = function() {
			var e = j.current;
			if (e != null) {
				var t = new ResizeObserver(function(e) {
					for (var t of e) z(t.contentRect.width > 80);
				});
				return t.observe(e), (function() {
					return t.disconnect();
				});
			}
		}, se = [], e[10] = le, e[11] = se) : (le = e[10], se = e[11]), p(le, se);
		var ue = T != null ? T : h, ce;
		e[12] !== a || e[13] !== l ? (ce = function() {
			l && a.getCurrentState().duration === a.getPlayheadPosition() && a.seek(0), a.play("user_initiated");
		}, e[12] = a, e[13] = l, e[14] = ce) : ce = e[14];
		var de = ce, me;
		e[15] !== a ? (me = function() {
			a.pause("user_initiated");
		}, e[15] = a, e[16] = me) : me = e[16];
		var pe = me, _e;
		e[17] !== a ? (_e = function(t) {
			a.scrubBegin();
		}, e[17] = a, e[18] = _e) : _e = e[18];
		var fe = _e, ge;
		e[19] !== a || e[20] !== h ? (ge = function(t) {
			var e, n = (e = x.current) != null ? e : h;
			a.scrubEnd(n), x.current = null;
		}, e[19] = a, e[20] = h, e[21] = ge) : ge = e[21];
		var he = ge, ye;
		e[22] !== a ? (ye = function(t) {
			var e = parseFloat(t.target.value);
			x.current = e, D(e), a.seek(e);
		}, e[22] = a, e[23] = ye) : ye = e[23];
		var Ce = ye, be;
		e[24] !== a || e[25] !== ue || e[26] !== E ? (be = function(t) {
			var e = ue, n = t.key === "ArrowRight" || t.key === "ArrowUp" ? Math.min(E, e + L) : t.key === "ArrowLeft" || t.key === "ArrowDown" ? Math.max(0, e - L) : t.key === "Home" ? 0 : t.key === "End" ? E : null;
			n != null && (t.preventDefault(), t.stopPropagation(), D(n), a.seek(n));
		}, e[24] = a, e[25] = ue, e[26] = E, e[27] = be) : be = e[27];
		var ve = be, Se;
		e[28] !== a ? (Se = function() {
			a.setMuted(!0, "user_initiated");
		}, e[28] = a, e[29] = Se) : Se = e[29];
		var Re = Se, Le;
		e[30] !== a ? (Le = function() {
			a.setMuted(!1, "user_initiated");
		}, e[30] = a, e[31] = Le) : Le = e[31];
		var Ee = Le, ke;
		e[32] !== a || e[33] !== d ? (ke = function(t) {
			a.setVolume(t), t > 0 && d && a.setMuted(!1, "user_initiated");
		}, e[32] = a, e[33] = d, e[34] = ke) : ke = e[34];
		var Ie = ke, Te;
		e[35] === Symbol.for("react.memo_cache_sentinel") ? (Te = function() {
			X(function(e) {
				return e && Z("main"), !e;
			});
		}, e[35] = Te) : Te = e[35];
		var De = Te, xe = f(!1), $e = xe[0], Pe = xe[1], Ne = document.pictureInPictureEnabled === !0, Me, we;
		e[36] !== a ? (Me = function() {
			if (Ne) {
				var e = null, t = function(n) {
					var t = function() {
						return Pe(!0);
					}, r = function() {
						return Pe(!1);
					};
					n.addEventListener("enterpictureinpicture", t), n.addEventListener("leavepictureinpicture", r), e = function() {
						n.removeEventListener("enterpictureinpicture", t), n.removeEventListener("leavepictureinpicture", r);
					};
				}, n = a.internal_getVideoElement();
				if (n != null) return t(n), (function() {
					return e == null ? void 0 : e();
				});
				var r = null;
				return r = a.subscribe(function() {
					var e = a.internal_getVideoElement();
					if (e != null) {
						var n;
						(n = r) == null || n.remove(), t(e);
					}
				}), (function() {
					var t;
					(t = r) == null || t.remove(), e == null || e();
				});
			}
		}, we = [a, Ne], e[36] = a, e[37] = Me, e[38] = we) : (Me = e[37], we = e[38]), p(Me, we);
		var Ae;
		e[39] !== a || e[40] !== $e ? (Ae = function() {
			$e && a.exitPictureInPicture();
		}, e[39] = a, e[40] = $e, e[41] = Ae) : Ae = e[41], r("useWAWebOnUnmount")(Ae);
		var Fe;
		e[42] !== a || e[43] !== $e ? (Fe = function() {
			$e ? a.exitPictureInPicture() : a.requestPictureInPicture(), X(!1), Z("main");
		}, e[42] = a, e[43] = $e, e[44] = Fe) : Fe = e[44];
		var Oe = Fe, Be;
		e[45] !== a ? (Be = function(t) {
			a.setPlaybackRate == null || a.setPlaybackRate(t), X(!1), Z("main");
		}, e[45] = a, e[46] = Be) : Be = e[46];
		var We = Be, qe = E > 0 ? ue / E : 0;
		qe > 1 && (qe = 1);
		var Ue = qe * 100 + "%", Ve = !i && !l, He = Math.ceil(ue) >= E && E > 0, Ge;
		e[47] !== He ? (Ge = He ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), e[47] = He, e[48] = Ge) : Ge = e[48];
		var ze = Ge, je = d || m === 0, Ke = je ? 0 : m, Qe;
		e[49] !== je ? (Qe = je ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), e[49] = je, e[50] = Qe) : Qe = e[50];
		var Xe = Qe, Ye = B, Je;
		e[51] === Symbol.for("react.memo_cache_sentinel") ? (Je = { className: "x13vifvy xtijo5x x1ey2m1c x1o0tod x10l6tqk" }, e[51] = Je) : Je = e[51];
		var Ze;
		e[52] !== n ? (Ze = {
			0: { className: "x183btaf x1ey2m1c xjp8j0k x1o0tod x10l6tqk xh8yej3 xg01cxk x47corl x1d8287x x19991ni" },
			1: { className: "x183btaf x1ey2m1c xjp8j0k x1o0tod x47corl x10l6tqk xh8yej3 x1hc1fzr x1d8287x x19991ni" }
		}[!!n << 0], e[52] = n, e[53] = Ze) : Ze = e[53];
		var et;
		e[54] !== Ze ? (et = c.jsx("div", babelHelpers.extends({}, Ze)), e[54] = Ze, e[55] = et) : et = e[55];
		var tt;
		e[56] !== n ? (tt = {
			0: { className: "x1ey2m1c x17t9dm2 x78zum5 xdt5ytf xtijo5x x1o0tod x12xbjc7 x10l6tqk xg01cxk x47corl x1d8287x x19991ni" },
			1: { className: "x1ey2m1c x17t9dm2 x78zum5 xdt5ytf xtijo5x x1o0tod x12xbjc7 x10l6tqk x1hc1fzr x1d8287x x19991ni" }
		}[!!n << 0], e[56] = n, e[57] = tt) : tt = e[57];
		var nt;
		e[58] === Symbol.for("react.memo_cache_sentinel") ? (nt = { className: "x6s0dn4 x78zum5 x1q0g3np x1a8lsjc xf159sx xmzvs34 x1n2onr6" }, e[58] = nt) : nt = e[58];
		var rt;
		e[59] === Symbol.for("react.memo_cache_sentinel") ? (rt = { className: "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1yrsyyn x1icxu4v x10b6aqq x25sj25 xtr8le0" }, e[59] = rt) : rt = e[59];
		var ot;
		e[60] === Symbol.for("react.memo_cache_sentinel") ? (ot = { className: "x11g6tue x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1heor9g x1ypdohk x78zum5 xexx8yu xyri2b x18d9i69 x1c1uobl" }, e[60] = ot) : ot = e[60];
		var at;
		e[61] !== Ve || e[62] !== ze ? (at = Ve ? s._(
			/*BTDS*/
			""
		) : ze, e[61] = Ve, e[62] = ze, e[63] = at) : at = e[63];
		var it = Ve ? pe : de, lt;
		e[64] !== Ve ? (lt = Ve ? c.jsx(r("WDSIconIcPauseFilled.react"), {
			height: C,
			width: C,
			iconXstyle: R.iconBlock
		}) : c.jsx(r("WDSIconIcPlayArrowFilled.react"), {
			height: C,
			width: C,
			iconXstyle: R.iconBlock
		}), e[64] = Ve, e[65] = lt) : lt = e[65];
		var st;
		e[66] !== at || e[67] !== it || e[68] !== lt ? (st = c.jsx("div", babelHelpers.extends({}, rt, {
			onMouseUp: o("WAWebStopEvent").stopPropagation,
			children: c.jsx("button", babelHelpers.extends({}, ot, {
				"aria-label": at,
				onClick: it,
				type: "button",
				children: lt
			}))
		})), e[66] = at, e[67] = it, e[68] = lt, e[69] = st) : st = e[69];
		var ut;
		e[70] === Symbol.for("react.memo_cache_sentinel") ? (ut = { className: "x1iyjqo2 xeuugli" }, e[70] = ut) : ut = e[70];
		var ct;
		e[71] !== ue || e[72] !== E || e[73] !== G ? (ct = G ? c.jsxs("div", {
			className: "x17t9dm2 x1f6kntn xmzvs34 xuxw1ft",
			children: [
				o("WAWebClock").Clock.durationStr(ue),
				" / ",
				o("WAWebClock").Clock.durationStr(E)
			]
		}) : null, e[71] = ue, e[72] = E, e[73] = G, e[74] = ct) : ct = e[74];
		var dt;
		e[75] !== ct ? (dt = c.jsx("div", babelHelpers.extends({ ref: j }, ut, { children: ct })), e[75] = ct, e[76] = dt) : dt = e[76];
		var mt;
		e[77] === Symbol.for("react.memo_cache_sentinel") ? (mt = { className: "x6s0dn4 x78zum5 xiyxwb5" }, e[77] = mt) : mt = e[77];
		var pt;
		e[78] !== Ye ? (pt = {
			0: { className: "x6s0dn4 xamitd3 xt8t1vi x1xc408v x129tdwq x15urzxu x78zum5 x1n2onr6" },
			1: { className: "x6s0dn4 xamitd3 xt8t1vi x1xc408v x129tdwq x15urzxu x78zum5 x1n2onr6 x1rk1j4g" }
		}[!!Ye << 0], e[78] = Ye, e[79] = pt) : pt = e[79];
		var _t, ft, gt;
		e[80] === Symbol.for("react.memo_cache_sentinel") ? (_t = { transition: "background-color 0.2s" }, ft = function() {
			return W(!0);
		}, gt = function() {
			return W(!1);
		}, e[80] = _t, e[81] = ft, e[82] = gt) : (_t = e[80], ft = e[81], gt = e[82]);
		var ht;
		e[83] !== Ye ? (ht = {
			0: { className: "x6s0dn4 x78zum5 x1qx5ct2 x1m189uc x6ikm8r x10wlt62 x1vjfegm" },
			1: { className: "x6s0dn4 x78zum5 x1qx5ct2 x6ikm8r x10wlt62 x1vjfegm x1chcg4z xf159sx xf7dkkf" }
		}[!!Ye << 0], e[83] = Ye, e[84] = ht) : ht = e[84];
		var yt, Ct, bt, vt, St;
		e[85] === Symbol.for("react.memo_cache_sentinel") ? (yt = { transition: "max-width 0.2s ease, padding 0.2s ease" }, Ct = function() {
			return V(!0);
		}, bt = function() {
			return V(!1);
		}, vt = { className: "x1ers9ju xbrszos xea3l6g x18isctg x2q3nzr xqu0tyb x1n2onr6 xvni27" }, St = { className: "x1p8t8ri xbrszos xea3l6g x18isctg x2q3nzr x5yr21d x10l6tqk x13vifvy" }, e[85] = yt, e[86] = Ct, e[87] = bt, e[88] = vt, e[89] = St) : (yt = e[85], Ct = e[86], bt = e[87], vt = e[88], St = e[89]);
		var Rt = Ke * 100 + "%", Lt;
		e[90] !== Rt ? (Lt = c.jsx("div", babelHelpers.extends({}, St, { style: { width: Rt } })), e[90] = Rt, e[91] = Lt) : Lt = e[91];
		var Et;
		e[92] === Symbol.for("react.memo_cache_sentinel") ? (Et = { className: "x1p8t8ri x1c9tyrk xeusxvb x1pahc9y x1ertn4p x6w4g8m x47corl x10l6tqk xwa60dl x11lhmoz x10vfzb2 x1vjfegm" }, e[92] = Et) : Et = e[92];
		var kt = Ke * 100 + "%", It = U ? 1 : 0, Tt;
		e[93] !== kt || e[94] !== It ? (Tt = c.jsx("div", babelHelpers.extends({}, Et, { style: {
			left: kt,
			opacity: It,
			transition: "opacity 0.15s"
		} })), e[93] = kt, e[94] = It, e[95] = Tt) : Tt = e[95];
		var Dt;
		e[96] === Symbol.for("react.memo_cache_sentinel") ? (Dt = { className: "x1ypdohk x1qx5ct2 x1o0tod xdj266r x14z9mp xat24cr x1lziwak xg01cxk x10l6tqk xwa60dl x1cb1t30 xh8yej3" }, e[96] = Dt) : Dt = e[96];
		var xt;
		e[97] !== Ie ? (xt = function(t) {
			Ie(parseFloat(t.target.value));
		}, e[97] = Ie, e[98] = xt) : xt = e[98];
		var $t;
		e[99] !== Ke || e[100] !== xt ? ($t = c.jsx("input", babelHelpers.extends({ tabIndex: -1 }, Dt, {
			dir: "ltr",
			max: 1,
			min: "0",
			onChange: xt,
			step: "any",
			type: "range",
			value: Ke
		})), e[99] = Ke, e[100] = xt, e[101] = $t) : $t = e[101];
		var Pt;
		e[102] !== Lt || e[103] !== Tt || e[104] !== $t ? (Pt = c.jsxs("div", babelHelpers.extends({}, vt, { children: [
			Lt,
			Tt,
			$t
		] })), e[102] = Lt, e[103] = Tt, e[104] = $t, e[105] = Pt) : Pt = e[105];
		var Nt;
		e[106] !== ht || e[107] !== Pt ? (Nt = c.jsx("div", babelHelpers.extends({}, ht, {
			style: yt,
			onMouseEnter: Ct,
			onMouseLeave: bt,
			children: Pt
		})), e[106] = ht, e[107] = Pt, e[108] = Nt) : Nt = e[108];
		var Mt, wt;
		e[109] === Symbol.for("react.memo_cache_sentinel") ? (Mt = { className: "x1yrsyyn x1icxu4v x10b6aqq x25sj25" }, wt = { className: "x11g6tue x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1heor9g x1ypdohk x78zum5 xexx8yu xyri2b x18d9i69 x1c1uobl" }, e[109] = Mt, e[110] = wt) : (Mt = e[109], wt = e[110]);
		var At = je ? Ee : Re, Ft;
		e[111] !== je ? (Ft = je ? c.jsx(r("WDSIconIcVolumeOffFilled.react"), {
			height: 22,
			width: 22,
			iconXstyle: R.iconBlock
		}) : c.jsx(r("WDSIconIcVolumeUp.react"), {
			height: 22,
			width: 22,
			iconXstyle: R.iconBlock
		}), e[111] = je, e[112] = Ft) : Ft = e[112];
		var Ot;
		e[113] !== At || e[114] !== Ft || e[115] !== Xe ? (Ot = c.jsx("div", babelHelpers.extends({}, Mt, { children: c.jsx("button", babelHelpers.extends({}, wt, {
			"aria-label": Xe,
			onClick: At,
			tabIndex: 0,
			type: "button",
			children: Ft
		})) })), e[113] = At, e[114] = Ft, e[115] = Xe, e[116] = Ot) : Ot = e[116];
		var Bt;
		e[117] !== pt || e[118] !== Nt || e[119] !== Ot ? (Bt = c.jsxs("div", babelHelpers.extends({}, pt, {
			style: _t,
			onMouseEnter: ft,
			onMouseLeave: gt,
			children: [Nt, Ot]
		})), e[117] = pt, e[118] = Nt, e[119] = Ot, e[120] = Bt) : Bt = e[120];
		var Wt, qt, Ut;
		e[121] === Symbol.for("react.memo_cache_sentinel") ? (Wt = { className: "x1c9tyrk xeusxvb x1pahc9y x1ertn4p xt0e3qv x1yrsyyn x1icxu4v x10b6aqq x25sj25 x47corl" }, qt = { className: "x11g6tue x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1heor9g x78zum5 xexx8yu xyri2b x18d9i69 x1c1uobl xt0e3qv xbyyjgo" }, Ut = s._(
			/*BTDS*/
			""
		), e[121] = Wt, e[122] = qt, e[123] = Ut) : (Wt = e[121], qt = e[122], Ut = e[123]);
		var Vt, Ht, Gt, zt;
		e[124] === Symbol.for("react.memo_cache_sentinel") ? (Vt = c.jsx("div", babelHelpers.extends({}, Wt, { children: c.jsx("button", babelHelpers.extends({}, qt, {
			"aria-label": Ut,
			disabled: !0,
			type: "button",
			children: c.jsx(r("WDSIconIcFullscreen.react"), {
				height: C,
				width: C,
				iconXstyle: R.iconBlock
			})
		})) })), Ht = { className: "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1yrsyyn x1icxu4v x10b6aqq x25sj25 xtr8le0" }, Gt = { className: "x11g6tue x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1heor9g x1ypdohk x78zum5 xexx8yu xyri2b x18d9i69 x1c1uobl" }, zt = s._(
			/*BTDS*/
			""
		), e[124] = Vt, e[125] = Ht, e[126] = Gt, e[127] = zt) : (Vt = e[124], Ht = e[125], Gt = e[126], zt = e[127]);
		var jt;
		e[128] === Symbol.for("react.memo_cache_sentinel") ? (jt = c.jsx("div", babelHelpers.extends({}, Ht, { children: c.jsx("button", babelHelpers.extends({}, Gt, {
			"aria-label": zt,
			onClick: De,
			type: "button",
			children: c.jsx(r("WDSIconIcMoreVert.react"), {
				height: C,
				width: C,
				iconXstyle: R.iconBlock
			})
		})) })), e[128] = jt) : jt = e[128];
		var Kt;
		e[129] !== Oe || e[130] !== We || e[131] !== Q || e[132] !== $e || e[133] !== J || e[134] !== k ? (Kt = Q ? c.jsx("div", {
			ref: ee,
			className: "xtsvl71 x1wpzwpe xa3vuyk x1p8t8ri xyi3aci xwf5gio x1p453bz x1suzm8a xqo3gd xpj8aza xxx7yvo xl8z2ie xfb3i0g x6ikm8r x1odjw0f x10l6tqk x6ow6l x1n327nk",
			onClick: o("WAWebStopEvent").stopPropagation,
			role: "menu",
			tabIndex: -1,
			children: J === "main" ? c.jsxs(c.Fragment, { children: [c.jsxs("div", {
				className: "x6s0dn4 x1lljey2 x1ypdohk x78zum5 x1pg5gke xtqikln xsdox4t xv54qhq xf7dkkf x1xub2uj",
				onClick: function() {
					return Z("speed");
				},
				onKeyDown: function(t) {
					return g(t, function() {
						return Z("speed");
					});
				},
				role: "menuitem",
				tabIndex: 0,
				children: [c.jsx(v, { className: "x2lah0s xxk0z11 xvy4d1p" }), c.jsx("span", {
					className: "x1iyjqo2",
					children: s._(
						/*BTDS*/
						""
					)
				})]
			}), Ne ? c.jsxs("div", {
				className: "x6s0dn4 x1lljey2 x1ypdohk x78zum5 x1pg5gke xtqikln xsdox4t xv54qhq xf7dkkf x1xub2uj",
				onClick: Oe,
				onKeyDown: function(t) {
					return g(t, Oe);
				},
				role: "menuitem",
				tabIndex: 0,
				children: [$e ? c.jsx(S, { className: "x2lah0s xxk0z11 xvy4d1p" }) : c.jsx(r("WDSIconIcPictureInPictureAlt.react"), {
					height: 24,
					width: 24,
					xstyle: R.menuItemIcon,
					iconXstyle: R.iconBlock
				}), c.jsx("span", {
					className: "x1iyjqo2",
					children: $e ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					)
				})]
			}) : null] }) : c.jsxs(c.Fragment, { children: [c.jsxs("div", {
				className: "x6s0dn4 x1lljey2 x1ypdohk x78zum5 x1pg5gke xtqikln xsdox4t xv54qhq xf7dkkf x1xub2uj",
				onClick: function() {
					return Z("main");
				},
				onKeyDown: function(t) {
					return g(t, function() {
						return Z("main");
					});
				},
				role: "menuitem",
				tabIndex: 0,
				children: [c.jsx(r("WDSIconIcArrowBack.react"), {
					height: b,
					width: b,
					xstyle: R.menuHeaderIcon,
					iconXstyle: R.iconBlock,
					directional: !0
				}), c.jsx("span", { children: s._(
					/*BTDS*/
					""
				) })]
			}), y.map(function(e) {
				var t = Math.abs(k - e) < .01;
				return c.jsxs("div", {
					className: "x6s0dn4 x1lljey2 x1ypdohk x78zum5 x1pg5gke xtqikln xsdox4t xv54qhq xf7dkkf x1xub2uj",
					"data-active": t ? "" : void 0,
					onClick: function() {
						return We(e);
					},
					onKeyDown: function(n) {
						return g(n, function() {
							return We(e);
						});
					},
					role: "menuitemradio",
					"aria-checked": t,
					tabIndex: 0,
					children: [
						c.jsx("div", { className: "x2lah0s x1qx5ct2 xlshs6z xw4jnvo" }),
						c.jsx("span", { children: e === 1 ? s._(
							/*BTDS*/
							""
						) : String(e) }),
						t ? c.jsx(r("WDSIconIcCheck.react"), {
							height: 20,
							width: 20,
							xstyle: R.menuCheckmark,
							iconXstyle: R.iconBlock
						}) : null
					]
				}, e);
			})] })
		}) : null, e[129] = Oe, e[130] = We, e[131] = Q, e[132] = $e, e[133] = J, e[134] = k, e[135] = Kt) : Kt = e[135];
		var Qt;
		e[136] !== Bt || e[137] !== Kt ? (Qt = c.jsxs("div", babelHelpers.extends({}, mt, { children: [
			Bt,
			Vt,
			jt,
			Kt
		] })), e[136] = Bt, e[137] = Kt, e[138] = Qt) : Qt = e[138];
		var Xt;
		e[139] !== st || e[140] !== dt || e[141] !== Qt ? (Xt = c.jsxs("div", babelHelpers.extends({}, nt, {
			onClick: o("WAWebStopEvent").stopPropagation,
			onMouseDown: o("WAWebStopEvent").stopPropagation,
			children: [
				st,
				dt,
				Qt
			]
		})), e[139] = st, e[140] = dt, e[141] = Qt, e[142] = Xt) : Xt = e[142];
		var Yt;
		e[143] === Symbol.for("react.memo_cache_sentinel") ? (Yt = { className: "x1hshjfz xpdmqnj x1g0dm76 x1n2onr6" }, e[143] = Yt) : Yt = e[143];
		var Jt, Zt;
		e[144] === Symbol.for("react.memo_cache_sentinel") ? (Jt = function() {
			return M(!0);
		}, Zt = function() {
			return M(!1);
		}, e[144] = Jt, e[145] = Zt) : (Jt = e[144], Zt = e[145]);
		var en;
		e[146] === Symbol.for("react.memo_cache_sentinel") ? (en = s._(
			/*BTDS*/
			""
		), e[146] = en) : en = e[146];
		var tn;
		e[147] === Symbol.for("react.memo_cache_sentinel") ? (tn = { className: "xjbqb8w x1ypdohk x5yr21d x1o0tod xdj266r x14z9mp xat24cr x1lziwak xg01cxk x10l6tqk x13vifvy xh8yej3 xhtitgo" }, e[147] = tn) : tn = e[147];
		var nn;
		e[148] !== E ? (nn = E > 0 ? E.toLocaleString("en-US", {
			minimumFractionDigits: 0,
			maximumFractionDigits: 2,
			roundingMode: "trunc",
			useGrouping: !1
		}) : 0, e[148] = E, e[149] = nn) : nn = e[149];
		var rn;
		e[150] === Symbol.for("react.memo_cache_sentinel") ? (rn = function() {
			return F(!1);
		}, e[150] = rn) : rn = e[150];
		var on;
		e[151] === Symbol.for("react.memo_cache_sentinel") ? (on = function() {
			return F(!0);
		}, e[151] = on) : on = e[151];
		var an;
		e[152] !== ue || e[153] !== Ce || e[154] !== ve || e[155] !== fe || e[156] !== he || e[157] !== nn ? (an = c.jsx("input", babelHelpers.extends({
			tabIndex: 0,
			"aria-label": en,
			"data-testid": "progress"
		}, tn, {
			dir: "ltr",
			max: nn,
			min: "0",
			onBlur: rn,
			onChange: Ce,
			onFocus: on,
			onKeyDown: ve,
			onMouseDown: fe,
			onMouseUp: he,
			step: "any",
			type: "range",
			value: ue
		})), e[152] = ue, e[153] = Ce, e[154] = ve, e[155] = fe, e[156] = he, e[157] = nn, e[158] = an) : an = e[158];
		var ln, sn;
		e[159] === Symbol.for("react.memo_cache_sentinel") ? (ln = { className: "x47corl x1n2onr6 xh8yej3" }, sn = c.jsx("div", { className: "xqu0tyb x1o0tod x10l6tqk xwa60dl x1cb1t30 xh8yej3 xki6t65 xbrszos xea3l6g x18isctg x2q3nzr" }), e[159] = ln, e[160] = sn) : (ln = e[159], sn = e[160]);
		var un;
		e[161] !== qe ? (un = {
			0: { className: "xqu0tyb x1o0tod x10l6tqk xwa60dl x1cb1t30 xh8yej3 x1p8t8ri x1e7945m x2q3nzr x17un8ov xbrszos" },
			1: { className: "xqu0tyb x1o0tod x10l6tqk xwa60dl x1cb1t30 xh8yej3 x1p8t8ri xbrszos xea3l6g x18isctg x2q3nzr" }
		}[(qe === 1) << 0], e[161] = qe, e[162] = un) : un = e[162];
		var cn;
		e[163] !== Ue ? (cn = { width: Ue }, e[163] = Ue, e[164] = cn) : cn = e[164];
		var dn;
		e[165] !== un || e[166] !== cn ? (dn = c.jsx("div", babelHelpers.extends({ "data-testid": "progressbar-progress" }, un, { style: cn })), e[165] = un, e[166] = cn, e[167] = dn) : dn = e[167];
		var mn;
		e[168] !== A ? (mn = {
			0: { className: "x1p8t8ri x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1kpxq89 x47corl x10l6tqk xwa60dl x11lhmoz xx6bhzk x19991ni xsmyaan xk3oba8" },
			1: { className: "x1p8t8ri x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1kpxq89 x47corl x10l6tqk xwa60dl x11lhmoz xx6bhzk x19991ni xsmyaan xk3oba8 xbdehr" }
		}[!!A << 0], e[168] = A, e[169] = mn) : mn = e[169];
		var pn = N || A ? 1 : 0, _n;
		e[170] !== Ue || e[171] !== pn ? (_n = {
			left: Ue,
			opacity: pn
		}, e[170] = Ue, e[171] = pn, e[172] = _n) : _n = e[172];
		var fn;
		e[173] !== mn || e[174] !== _n ? (fn = c.jsx("div", babelHelpers.extends({}, mn, { style: _n })), e[173] = mn, e[174] = _n, e[175] = fn) : fn = e[175];
		var gn;
		e[176] !== dn || e[177] !== fn ? (gn = c.jsxs("div", babelHelpers.extends({}, ln, { children: [
			sn,
			dn,
			fn
		] })), e[176] = dn, e[177] = fn, e[178] = gn) : gn = e[178];
		var hn;
		e[179] !== an || e[180] !== gn ? (hn = c.jsxs("div", babelHelpers.extends({}, Yt, {
			onClick: o("WAWebStopEvent").stopPropagation,
			onMouseDown: o("WAWebStopEvent").stopPropagation,
			onMouseEnter: Jt,
			onMouseLeave: Zt,
			children: [an, gn]
		})), e[179] = an, e[180] = gn, e[181] = hn) : hn = e[181];
		var yn;
		e[182] !== tt || e[183] !== Xt || e[184] !== hn ? (yn = c.jsxs("div", babelHelpers.extends({}, tt, { children: [Xt, hn] })), e[182] = tt, e[183] = Xt, e[184] = hn, e[185] = yn) : yn = e[185];
		var Cn;
		return e[186] !== et || e[187] !== yn ? (Cn = c.jsxs("div", babelHelpers.extends({}, Je, { children: [et, yn] })), e[186] = et, e[187] = yn, e[188] = Cn) : Cn = e[188], Cn;
	}
	l.default = E;
}), 226);
