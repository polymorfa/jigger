__d("WAWebBizBroadcastProScheduleModal.react", [
	"fbt",
	"WATimeUtils",
	"WAWeb-moment",
	"WAWebDateInput.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebFlex.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebModal.react",
	"WAWebTimeInput.react",
	"WDSButton.react",
	"WDSText.react",
	"fbs",
	"react",
	"react-compiler-runtime",
	"useWAWebInterval"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useMemo, p = c.useState, _ = 30, f = _ * o("WATimeUtils").DAY_SECONDS, g = 1e3, h = {
		drawer: {
			backgroundColor: "x1280gxy",
			position: "x1n2onr6",
			$$css: !0
		},
		drawerBody: {
			boxSizing: "x9f619",
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			flexBasis: "xdl72j9",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			paddingTop: "xexx8yu",
			paddingBottom: "xvpt6g3",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			rowGap: "x1f0uite",
			$$css: !0
		},
		footer: {
			boxSizing: "x9f619",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			width: "xh8yej3",
			$$css: !0
		}
	};
	function y(e) {
		var t = o("react-compiler-runtime").c(60), n = e.isSubmitting, a = e.onCancel, i = e.onSchedule, l = n === void 0 ? !1 : n, c = p(C), d = c[0], m = c[1], f;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (f = function() {
			m(o("WATimeUtils").unixTime());
		}, t[0] = f) : f = t[0];
		var y;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (y = { immediate: !0 }, t[1] = y) : y = t[1], r("useWAWebInterval")(f, g, y);
		var E;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (E = b(), t[2] = E) : E = t[2];
		var k = E, I;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (I = function() {
			return v(k);
		}, t[3] = I) : I = t[3];
		var T = p(I), D = T[0], x = T[1], $;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? ($ = function() {
			return S(k);
		}, t[4] = $) : $ = t[4];
		var P = p($), N = P[0], M = P[1], w = p(!1), A = w[0], F = w[1], O;
		t[5] !== d ? (O = v(d), t[5] = d, t[6] = O) : O = t[6];
		var B = O, W;
		t[7] !== B ? (W = r("WAWeb-moment")(B, "YYYY-MM-DD").locale("en").add(_, "days").format("YYYY-MM-DD"), t[7] = B, t[8] = W) : W = t[8];
		var q = W, U;
		t[9] !== q || t[10] !== B ? (U = function() {
			return [B, q];
		}, t[9] = q, t[10] = B, t[11] = U) : U = t[11];
		var V = U, H;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (H = function(t) {
			t.length !== 0 && (F(!1), x(t));
		}, t[12] = H) : H = t[12];
		var G = H, z;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (z = function(t) {
			t.length !== 0 && (F(!1), M(t));
		}, t[13] = z) : z = t[13];
		var j = z, K;
		t[14] !== d || t[15] !== D || t[16] !== N ? (K = L(R(D, N), d), t[14] = d, t[15] = D, t[16] = N, t[17] = K) : K = t[17];
		var Q = K, X;
		t[18] !== i || t[19] !== D || t[20] !== N ? (X = function() {
			var e = R(D, N), t = o("WATimeUtils").unixTime();
			e != null && L(e, t) ? (F(!1), i(e)) : (m(t), F(!0));
		}, t[18] = i, t[19] = D, t[20] = N, t[21] = X) : X = t[21];
		var Y = X, J;
		t[22] !== a ? (J = { esc: function(t) {
			t.stopPropagation(), a();
		} }, t[22] = a, t[23] = J) : J = t[23];
		var Z;
		t[24] === Symbol.for("react.memo_cache_sentinel") ? (Z = s._(
			/*BTDS*/
			""
		), t[24] = Z) : Z = t[24];
		var ee;
		t[25] === Symbol.for("react.memo_cache_sentinel") ? (ee = s._(
			/*BTDS*/
			""
		), t[25] = ee) : ee = t[25];
		var te;
		t[26] !== a ? (te = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: ee,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
			onCancel: a
		}), t[26] = a, t[27] = te) : te = t[27];
		var ne;
		t[28] === Symbol.for("react.memo_cache_sentinel") ? (ne = r("fbs")._(
			/*BTDS*/
			""
		), t[28] = ne) : ne = t[28];
		var re;
		t[29] === Symbol.for("react.memo_cache_sentinel") ? (re = u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			textAlign: "start",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[29] = re) : re = t[29];
		var oe;
		t[30] === Symbol.for("react.memo_cache_sentinel") ? (oe = s._(
			/*BTDS*/
			""
		), t[30] = oe) : oe = t[30];
		var ae;
		t[31] !== V || t[32] !== D ? (ae = u.jsx(o("WAWebFlex.react").FlexItem, {
			grow: 1,
			basis: 0,
			children: u.jsx(o("WAWebDateInput.react").DateInput, {
				theme: "event",
				name: "bb-pro-schedule-date",
				testid: "bb_pro_schedule_date_input",
				ariaLabel: oe,
				displayFormat: "MM/DD/YYYY",
				value: D,
				onChange: G,
				getDateBoundaries: V
			})
		}), t[31] = V, t[32] = D, t[33] = ae) : ae = t[33];
		var ie;
		t[34] === Symbol.for("react.memo_cache_sentinel") ? (ie = s._(
			/*BTDS*/
			""
		), t[34] = ie) : ie = t[34];
		var le;
		t[35] !== N ? (le = u.jsx(o("WAWebFlex.react").FlexItem, {
			grow: 1,
			basis: 0,
			children: u.jsx(o("WAWebTimeInput.react").TimeInput, {
				theme: "event",
				name: "bb-pro-schedule-time",
				testid: "bb_pro_schedule_time_input",
				ariaLabel: ie,
				value: N,
				onChange: j
			})
		}), t[35] = N, t[36] = le) : le = t[36];
		var se;
		t[37] !== ae || t[38] !== le ? (se = u.jsxs(o("WAWebFlex.react").FlexRow, {
			as: "section",
			columnGap: 16,
			children: [ae, le]
		}), t[37] = ae, t[38] = le, t[39] = se) : se = t[39];
		var ue;
		t[40] !== A ? (ue = A ? u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			textAlign: "start",
			children: s._(
				/*BTDS*/
				""
			)
		}) : null, t[40] = A, t[41] = ue) : ue = t[41];
		var ce;
		t[42] !== se || t[43] !== ue ? (ce = u.jsxs(r("WAWebDrawerBody.react"), {
			xstyle: h.drawerBody,
			ariaRole: "form",
			ariaLabel: ne,
			children: [
				re,
				se,
				ue
			]
		}), t[42] = se, t[43] = ue, t[44] = ce) : ce = t[44];
		var de = !Q || l, me;
		t[45] === Symbol.for("react.memo_cache_sentinel") ? (me = s._(
			/*BTDS*/
			""
		), t[45] = me) : me = t[45];
		var pe;
		t[46] !== Y || t[47] !== l || t[48] !== de ? (pe = u.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "end",
			xstyle: h.footer,
			children: u.jsx(r("WDSButton.react"), {
				variant: "filled",
				size: "medium",
				disabled: de,
				loading: l,
				onPress: Y,
				testid: "bb_pro_schedule_to_send",
				label: me
			})
		}), t[46] = Y, t[47] = l, t[48] = de, t[49] = pe) : pe = t[49];
		var _e;
		t[50] !== te || t[51] !== ce || t[52] !== pe ? (_e = u.jsxs(r("WAWebDrawer.react"), {
			xstyle: h.drawer,
			testid: "bb_pro_schedule_modal",
			children: [
				te,
				ce,
				pe
			]
		}), t[50] = te, t[51] = ce, t[52] = pe, t[53] = _e) : _e = t[53];
		var fe;
		t[54] !== a || t[55] !== _e ? (fe = u.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.EventCreation,
			onOverlayClick: a,
			ariaLabel: Z,
			children: _e
		}), t[54] = a, t[55] = _e, t[56] = fe) : fe = t[56];
		var ge;
		return t[57] !== J || t[58] !== fe ? (ge = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			handlers: J,
			children: fe
		}), t[57] = J, t[58] = fe, t[59] = ge) : ge = t[59], ge;
	}
	function C() {
		return o("WATimeUtils").unixTime();
	}
	function b() {
		var e, t = (e = o("WATimeUtils")).unixTime() + e.MINUTE_SECONDS;
		return Math.ceil(t / e.MINUTE_SECONDS) * e.MINUTE_SECONDS;
	}
	function v(e) {
		return r("WAWeb-moment").unix(e).locale("en").format("YYYY-MM-DD");
	}
	function S(e) {
		return r("WAWeb-moment").unix(e).locale("en").format("HH:mm");
	}
	function R(e, t) {
		var n = r("WAWeb-moment")(e + "T" + t);
		return n.isValid() ? Math.floor(n.valueOf() / 1e3) : null;
	}
	function L(e, t) {
		if (e == null) return !1;
		var n = e - t;
		return n > 0 && n <= f;
	}
	l.default = y;
}), 226);
