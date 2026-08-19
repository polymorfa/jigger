__d("WAWebExternalLink.react", [
	"$InternalEnum",
	"WALogger",
	"WAUnicodeUtils",
	"WAWebClassnames",
	"WAWebKeyboardIsKeyActivation",
	"WAWebURLUtils",
	"WDSFocusStateStyles",
	"isStringNullOrEmpty",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = ["href"], c = [
		"className",
		"dataTab",
		"dir",
		"rel",
		"target"
	], d, m, p = m || (m = o("react")), _ = m, f = _.memo, g = _.useRef, h = /\u2066|\u2067|\u2068|\u2069|\u202A|\u202B|\u202C|\u202D|\u202E/g, y = 64, C = 32, b = { hoverUnderline: {
		fontWeight: "x1xlr1w8",
		":hover_textDecoration": "xt0b8zv",
		":focus-visible_textDecoration": "xbvygy2",
		":focus-visible_color": "x17f7hit",
		":focus-visible_backgroundColor": "xp30eni",
		":focus-visible_textUnderlineOffset": "xhmieyt",
		$$css: !0
	} };
	function v(e) {
		var t = o("react-compiler-runtime").c(28), n = g(), a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = function(t) {
			if (r("WAWebKeyboardIsKeyActivation")(t)) {
				var e;
				(e = n.current) == null || e.click();
			}
		}, t[0] = a) : a = t[0];
		var i = a, l = e["aria-label"], s = e.children, u = e.className, c = e["data-tab"], m = e.href, _ = e.isLongTemplateUrl, f = e.onClick, h = e.tabIndex, v = e.testid, R = e.xstyle, L;
		t[1] !== u || t[2] !== R ? (L = o("WAWebClassnames").classnamesConvertMeToStylexPlease(u, (d || (d = r("stylex")))(b.hoverUnderline, R)), t[1] = u, t[2] = R, t[3] = L) : L = t[3];
		var E = L;
		if (_) {
			var k;
			t[4] !== m ? (k = o("WAUnicodeUtils").substring(m, 0, y), t[4] = m, t[5] = k) : k = t[5];
			var I;
			t[6] === Symbol.for("react.memo_cache_sentinel") ? (I = p.jsx("span", { children: "…" }), t[6] = I) : I = t[6];
			var T = m.length - C, D;
			t[7] !== m || t[8] !== T ? (D = o("WAUnicodeUtils").substring(m, T, m.length), t[7] = m, t[8] = T, t[9] = D) : D = t[9];
			var x;
			return t[10] !== l || t[11] !== E || t[12] !== c || t[13] !== m || t[14] !== f || t[15] !== k || t[16] !== D || t[17] !== h ? (x = p.jsxs(S, {
				ref: n,
				className: E,
				href: m,
				onClick: f,
				onKeyDown: i,
				"data-tab": c,
				tabIndex: h,
				"aria-label": l,
				children: [
					k,
					I,
					D
				]
			}), t[10] = l, t[11] = E, t[12] = c, t[13] = m, t[14] = f, t[15] = k, t[16] = D, t[17] = h, t[18] = x) : x = t[18], x;
		}
		var $;
		return t[19] !== l || t[20] !== s || t[21] !== E || t[22] !== c || t[23] !== m || t[24] !== f || t[25] !== h || t[26] !== v ? ($ = p.jsx(S, {
			ref: n,
			className: E,
			href: m,
			onClick: f,
			onKeyDown: i,
			"data-testid": v,
			"data-tab": c,
			tabIndex: h,
			"aria-label": l,
			children: s
		}), t[19] = l, t[20] = s, t[21] = E, t[22] = c, t[23] = m, t[24] = f, t[25] = h, t[26] = v, t[27] = $) : $ = t[27], $;
	}
	function S(t) {
		var n = t.href, a = babelHelpers.objectWithoutPropertiesLoose(t, u), i = a.className, l = a.dataTab, s = a.dir, m = a.rel, _ = a.target, f = babelHelpers.objectWithoutPropertiesLoose(a, c);
		if (!r("isStringNullOrEmpty")(n) && !w.includes(n) && !r("WAWebURLUtils").hasValidUrlScheme(n)) return n.toLowerCase().startsWith("javascript:") && o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Bad url: ", ""])), n).sendLogs("URL error"), null;
		var g = n != null ? n.replaceAll(h, "") : null;
		return p.jsx("a", babelHelpers.extends({
			tabIndex: l != null ? 0 : void 0,
			"data-tab": l,
			href: g,
			target: "_blank",
			rel: "noopener noreferrer",
			dir: "ltr",
			className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(i, (d || (d = r("stylex")))(o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus))
		}, f));
	}
	S.displayName = S.name + " [from " + i.id + "]";
	var R = f(v), L = {
		qr_slim_banner: "https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=qr_slim_banner",
		qr_large_banner: "https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=qr_large_banner",
		link_device_banner_3: "https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=link_device_banner",
		intro_panel: "https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=intro_panel",
		chatlist_toastbar: "https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=chatlist_toastbar",
		search_results_toastbar: "https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=search_results_toastbar",
		call_btn_modal_2: "https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=call_btn_modal",
		chatlist_dropdown_menu: "https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=chatlist_dropdown_menu",
		missed_call_modal_2: "https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=missed_call_modal",
		microphone_settings: "ms-settings:privacy-microphone"
	}, E = {
		qr_slim_banner: "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=qr_slim_banner",
		qr_large_banner: "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=qr_large_banner",
		link_device_banner_3: "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=a0269b",
		intro_panel: "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=68a40a",
		chatlist_toastbar: "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=dea681",
		search_results_toastbar: "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=586f03",
		call_btn_modal_2: "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=1f9c76",
		chatlist_dropdown_menu: "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=cc3981",
		missed_call_modal_2: "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=5721b2"
	}, k = {
		microphone_settings: "ms-settings:privacy-microphone",
		startup_apps: "ms-settings:startupapps",
		windows_update: "ms-settings:windowsupdate",
		privacy_webcam: "ms-settings:privacy-webcam"
	}, I = {
		qr_slim_banner: "itms-apps://apps.apple.com/app/id310633997?pt=217218&ct=web2mac_qr_slim_banner&mt=8",
		qr_large_banner: "itms-apps://apps.apple.com/app/id310633997?pt=217218&ct=web2mac_qr_large_banner&mt=8",
		link_device_banner_3: "itms-apps://apps.apple.com/app/id310633997?pt=217218&ct=web2mac_linking_screen_refresh&mt=8",
		intro_panel: "itms-apps://apps.apple.com/app/id310633997?pt=217218&ct=web2mac_empty_state&mt=8",
		chatlist_toastbar: "itms-apps://apps.apple.com/app/id310633997?pt=217218&ct=web2mac_chat_overflow&mt=8",
		search_results_toastbar: "itms-apps://apps.apple.com/app/id310633997?pt=217218&ct=web2mac_search&mt=8",
		call_btn_modal_2: "itms-apps://apps.apple.com/app/id310633997?pt=217218&ct=web2mac_call_button&mt=8",
		chatlist_dropdown_menu: "itms-apps://apps.apple.com/app/id310633997?pt=217218&ct=web2mac_chat_inbox&mt=8",
		missed_call_modal_2: "itms-apps://apps.apple.com/app/id310633997?pt=217218&ct=web2mac_missed_call&mt=8"
	}, T = { touchscreen_overlay: "itms-apps://apps.apple.com/app/id310633997?pt=217218&ct=web2ios_touchscreen_overlay&mt=8" }, D = "munki://detail-WhatsAppCatalyst.html", x = "https://dev-web.whatsapp.com/desktop/mac_native/release/", $ = "https://web.whatsapp.com/desktop/mac_native/release?configuration=Release", P = "https://web.whatsapp.com", N = "whatsapp://send/", M = "https://web.whatsapp.com/desktop/mac_native/release/?configuration=Beta&branch=master", w = [].concat(Object.values(L), Object.values(E), Object.values(k), Object.values(I), Object.values(T), [
		D,
		x,
		$,
		P,
		N,
		M
	]), A = !1;
	function F() {
		return A;
	}
	var O = n("$InternalEnum").Mirrored([
		"NEW_TAB",
		"CURRENT_TAB",
		"DEEPLINK_IN_CURRENT_TAB"
	]);
	function B(e, t) {
		if (!w.includes(e) && !r("WAWebURLUtils").hasValidUrlScheme(e)) {
			e.toLowerCase().startsWith("javascript:") && o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Bad url: ", ""])), e).sendLogs("URL error");
			return;
		}
		var n = t != null ? t : {}, a = n.target, i = a === void 0 ? O.NEW_TAB : a, l = document.createElement("a");
		l.href = e, i === O.NEW_TAB ? l.target = "_blank" : i === O.CURRENT_TAB ? l.target = "_self" : i === O.DEEPLINK_IN_CURRENT_TAB && (A = !0), (t == null ? void 0 : t.allowReferrer) !== !0 && (l.rel = "noopener noreferrer"), l.style.display = "none", (t == null ? void 0 : t.noApiCmdHandling) === !0 && (l.dataset.nohandle = "true"), document.body && document.body.appendChild(l), l.click(), document.body && document.body.removeChild(l), i === O.DEEPLINK_IN_CURRENT_TAB && self.setTimeout(function() {
			A = !1;
		}, 1e3);
	}
	l.ExternalLinkEl = S, l.ExternalLink = R, l.WINDOWS_SIDELOAD_URIS = L, l.WINDOWS_SETTINGS_URIS = k, l.MAC_STORE_URIS = I, l.IOS_STORE_URIS = T, l.MAC_INTERNAL_MSC_STORE_URI = D, l.MAC_EXTERNAL_SIDELOAD_URI = $, l.MAC_EXTERNAL_SIDELOAD_URI_BETA = M, l.isOpeningDeeplinkInCurrentTab = F, l.ExternalLinkTarget = O, l.openExternalLink = B;
}), 98);
