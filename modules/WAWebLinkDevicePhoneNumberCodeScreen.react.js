__d("WAWebLinkDevicePhoneNumberCodeScreen.react", [
	"fbt",
	"WALogger",
	"WATimeUtils",
	"WAWebAltDeviceLinkingApi",
	"WAWebAltDeviceLinkingQpl",
	"WAWebAlternateDeviceLinkingLink.react",
	"WAWebClickableLink.react",
	"WAWebCmd",
	"WAWebFlex.react",
	"WAWebLinkDeviceAction",
	"WAWebLinkDeviceCodeView.react",
	"WAWebLinkDeviceCodeViewCodeType",
	"WAWebLinkDeviceEvents",
	"WAWebLinkDevicePhoneNumberCodeCells.react",
	"WAWebPhoneUtils",
	"WAWebRefreshLargeIcon.react",
	"WAWebSpinner.react",
	"WAWebUnstyledButton.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"useWAWebListener",
	"useWAWebOnUnmount",
	"useWAWebStableCallback",
	"useWAWebTimeout"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p, _ = p || (p = o("react")), f = p, g = f.useEffect, h = f.useState, y = { marginInlineEnd10: {
		marginInlineEnd: "x1sa5p1d",
		$$css: !0
	} }, C = 5, b = "link-device-phone-number-code-screen-instructions", v = {
		phoneCodeWarning: {
			backgroundColor: "x1c2u55m",
			color: "x10e1pyi",
			borderStartStartRadius: "x1rgw4pv",
			borderStartEndRadius: "x1vjm0to",
			borderEndEndRadius: "xnqoqkk",
			borderEndStartRadius: "x16lu3ki",
			height: "xng8ra",
			width: "xdzyupr",
			marginTop: "x1rdy4ex",
			$$css: !0
		},
		phoneCodeWarningIcon: {
			color: "x10e1pyi",
			$$css: !0
		},
		errorTitle: {
			lineHeight: "x1u7k74",
			$$css: !0
		},
		errorAction: {
			fontWeight: "x1ny7uwr",
			fontSize: "x1f6kntn",
			$$css: !0
		}
	};
	function S(t) {
		var n = o("react-compiler-runtime").c(57), a = t.code, i = h(0), l = i[0], p = i[1], f = h(!0), y = f[0], v = f[1], S = h(!1), L = S[0], E = S[1], k, I;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (k = function() {
			v(!1), o("WAWebCmd").Cmd.onInitialLoadReadyFromBridge();
		}, I = [], n[0] = k, n[1] = I) : (k = n[0], I = n[1]), g(k, I);
		var T = a == null || l > C, D = h(!1), x = D[0], $ = D[1], P;
		n[2] !== l ? (P = function(n) {
			var t;
			n != null && n.resetRefreshCount ? t = 0 : t = l + 1, p(t), E(!1), $(!1), t <= C && (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["alt pairing: regenerating link code..."]))), o("WAWebLinkDeviceAction").refreshAltLinkingCode());
		}, n[2] = l, n[3] = P) : P = n[3];
		var N = r("useWAWebStableCallback")(P), M;
		n[4] !== N ? (M = function() {
			o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker("primary_hello_expire"), N();
		}, n[4] = N, n[5] = M) : M = n[5];
		var w = o("useWAWebTimeout").useTimeout(M, 1 * o("WATimeUtils").MINUTE_MILLISECONDS), A = w[0], F = w[1], O;
		n[6] !== A ? (O = function() {
			o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["alt pairing: primary hello rcvd, 1min code regen timer"]))), A();
		}, n[6] = A, n[7] = O) : O = n[7], o("useWAWebListener").useListener(o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents, "link_device_events:primary_hello_received", O);
		var B;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (B = function() {
			o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["alt pairing: force manual refresh received"]))), o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker("force_manual_refresh"), E(!0), o("WAWebAltDeviceLinkingApi").initializeAltDeviceLinking();
		}, n[8] = B) : B = n[8], o("useWAWebListener").useListener(o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents, "link_device_events:force_manual_refresh", B);
		var W;
		n[9] !== N ? (W = function() {
			o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["alt pairing: regen code, 6min TTL expired"]))), o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker("code_ttl_expire"), N();
		}, n[9] = N, n[10] = W) : W = n[10];
		var q = o("useWAWebTimeout").useTimeout(W, 3.25 * o("WATimeUtils").MINUTE_MILLISECONDS), U = q[0], V = q[1], H, G;
		n[11] !== T || n[12] !== U ? (H = function() {
			T || U();
		}, G = [U, T], n[11] = T, n[12] = U, n[13] = H, n[14] = G) : (H = n[13], G = n[14]), g(H, G);
		var z;
		n[15] !== F || n[16] !== V ? (z = function() {
			F(), V();
		}, n[15] = F, n[16] = V, n[17] = z) : z = n[17];
		var j = r("useWAWebStableCallback")(z), K;
		n[18] !== j || n[19] !== L || n[20] !== l ? (K = function() {
			if (l > C || L) {
				j(), $(!0);
				return;
			}
		}, n[18] = j, n[19] = L, n[20] = l, n[21] = K) : K = n[21];
		var Q;
		n[22] !== j || n[23] !== L || n[24] !== l || n[25] !== N ? (Q = [
			l,
			L,
			N,
			j
		], n[22] = j, n[23] = L, n[24] = l, n[25] = N, n[26] = Q) : Q = n[26], g(K, Q);
		var X;
		n[27] !== j ? (X = function() {
			o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["alt pairing: canceling link code timers"]))), j();
		}, n[27] = j, n[28] = X) : X = n[28], r("useWAWebOnUnmount")(X);
		var Y;
		if (y || T) {
			var J;
			n[29] === Symbol.for("react.memo_cache_sentinel") ? (J = _.jsx("div", {
				className: "x78zum5 x6s0dn4 xl56j7k x10wjd1d",
				children: _.jsx(o("WAWebSpinner.react").Spinner, {})
			}), n[29] = J) : J = n[29], Y = J;
		} else if (x) {
			var Z;
			n[30] !== N ? (Z = _.jsx(R, { onClick: function() {
				N({ resetRefreshCount: !0 });
			} }), n[30] = N, n[31] = Z) : Z = n[31], Y = Z;
		} else {
			var ee;
			n[32] !== t.code ? (ee = r("nullthrows")(t.code), n[32] = t.code, n[33] = ee) : ee = n[33];
			var te;
			n[34] !== ee ? (te = _.jsx(r("WAWebLinkDevicePhoneNumberCodeCells.react"), {
				code: ee,
				"aria-details": b
			}), n[34] = ee, n[35] = te) : te = n[35], Y = te;
		}
		var ne;
		n[36] !== t.phoneNumber ? (ne = o("WAWebPhoneUtils").formatPhone(t.phoneNumber), n[36] = t.phoneNumber, n[37] = ne) : ne = n[37];
		var re = ne, oe = t.apiCmd, ae;
		n[38] === Symbol.for("react.memo_cache_sentinel") ? (ae = s._(
			/*BTDS*/
			""
		), n[38] = ae) : ae = n[38];
		var ie;
		if (n[39] !== re || n[40] !== t.onClickEditPhoneNumber) {
			var le;
			n[42] !== re ? (le = _.jsx("span", {
				dir: "ltr",
				children: re
			}), n[42] = re, n[43] = le) : le = n[43], ie = s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m2", _.jsx("strong", { children: s._(
					/*BTDS*/
					"",
					[s._param("phone-number", le)]
				) })), s._implicitParam("=m5", _.jsx(r("WAWebClickableLink.react"), {
					className: "x1v5yvga",
					onClick: t.onClickEditPhoneNumber,
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			), n[39] = re, n[40] = t.onClickEditPhoneNumber, n[41] = ie;
		} else ie = n[41];
		var se;
		n[44] !== t.onClickLinkWithQr ? (se = _.jsx(r("WAWebAlternateDeviceLinkingLink.react"), {
			codeType: o("WAWebLinkDeviceCodeViewCodeType").LinkDeviceCodeViewCodeType.PHONE_NUMBER_LINK_CODE,
			onClick: t.onClickLinkWithQr
		}), n[44] = t.onClickLinkWithQr, n[45] = se) : se = n[45];
		var ue;
		n[46] !== T ? (ue = {
			0: { className: "x1n2onr6 x78zum5 x1okw0bk x6s0dn4 xl56j7k" },
			1: { className: "x1n2onr6 x78zum5 x1okw0bk x6s0dn4 xl56j7k x14atkfc" }
		}[!T << 0], n[46] = T, n[47] = ue) : ue = n[47];
		var ce;
		n[48] === Symbol.for("react.memo_cache_sentinel") ? (ce = s._(
			/*BTDS*/
			""
		), n[48] = ce) : ce = n[48];
		var de;
		n[49] !== Y || n[50] !== ue ? (de = _.jsx("div", babelHelpers.extends({}, ue, {
			dir: "ltr",
			"aria-live": "polite",
			"aria-atomic": "true",
			"aria-label": ce,
			children: Y
		})), n[49] = Y, n[50] = ue, n[51] = de) : de = n[51];
		var me;
		return n[52] !== t.apiCmd || n[53] !== ie || n[54] !== se || n[55] !== de ? (me = _.jsx(o("WAWebLinkDeviceCodeView.react").LinkDeviceCodeView, {
			codeType: o("WAWebLinkDeviceCodeViewCodeType").LinkDeviceCodeViewCodeType.PHONE_NUMBER_LINK_CODE,
			apiCmd: oe,
			title: ae,
			subtitle: ie,
			alternativeLinkDeviceMethodHint: se,
			children: de
		}), n[52] = t.apiCmd, n[53] = ie, n[54] = se, n[55] = de, n[56] = me) : me = n[56], me;
	}
	function R(e) {
		var t = o("react-compiler-runtime").c(6), n;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = [
			v.phoneCodeWarning,
			o("WDSMargins.stylex").wdsMargins.marginHorAuto,
			o("WDSPaddings.stylex").wdsPaddings.paddingHor20
		], t[0] = n) : n = t[0];
		var a;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (a = _.jsx(o("WAWebFlex.react").FlexItem, {
			align: "center",
			xstyle: y.marginInlineEnd10,
			children: _.jsx(o("WAWebRefreshLargeIcon.react").RefreshLargeIcon, {
				width: 32,
				height: 32,
				iconXstyle: v.phoneCodeWarningIcon
			})
		}), t[1] = a) : a = t[1];
		var i;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (i = _.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: v.errorTitle,
			children: s._(
				/*BTDS*/
				""
			)
		}), t[2] = i) : i = t[2];
		var l;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (l = _.jsxs(o("WAWebFlex.react").FlexRow, { children: [a, _.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "start",
			justify: "start",
			children: [i, _.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: v.errorAction,
				children: s._(
					/*BTDS*/
					""
				)
			})]
		})] }), t[3] = l) : l = t[3];
		var u;
		return t[4] !== e.onClick ? (u = _.jsx(r("WAWebUnstyledButton.react"), {
			xstyle: n,
			onClick: e.onClick,
			children: l
		}, "expiry"), t[4] = e.onClick, t[5] = u) : u = t[5], u;
	}
	l.default = S;
}), 226);
