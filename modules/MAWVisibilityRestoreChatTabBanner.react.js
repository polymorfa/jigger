__d("MAWVisibilityRestoreChatTabBanner.react", [
	"fbt",
	"BaseTextContext",
	"FBLogger",
	"MAWEncryptedBackupsRestoreDialog.entrypoint",
	"MWChatEncryptedBackupsQPLEvents",
	"MWChatEncryptedBackupsQPLSource.enum",
	"MWEBEntrypointsKillswitch.enum",
	"MWEBODSCategory",
	"MWEncryptedBackupsRetrieveQplLoggingAnnotations",
	"MWLSThreadDisplayContext",
	"MWXLink.react",
	"MWXText.react",
	"ODS",
	"QPLUserFlow",
	"getErrorSafe",
	"react",
	"react-compiler-runtime",
	"requireDeferred",
	"useAsyncReStore",
	"useLabyrinthLogging",
	"useMWEBBackupState",
	"useMWEBGetUpsellState",
	"useMWXEntryPointDialog",
	"useVisibilityObserver"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = e || (e = o("react")), d = e, m = d.useCallback, p = d.useRef, _ = r("requireDeferred")("mwEBCheckIfEBKeysExistInDisk").__setRef("MAWVisibilityRestoreChatTabBanner.react");
	function f() {
		var e = o("react-compiler-runtime").c(2), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = { className: "xi81zsa x1lliihq x2lah0s" }, e[0] = t) : t = e[0];
		var n;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = c.jsxs("svg", babelHelpers.extends({ "aria-hidden": "true" }, t, {
			fill: "none",
			focusable: "false",
			height: "16",
			viewBox: "0 0 40 40",
			width: "16",
			xmlns: "http://www.w3.org/2000/svg",
			children: [c.jsx("path", {
				d: "M10.483 9.52989C11.0041 10.3487 12.1434 10.4802 12.9378 9.92265C14.9369 8.51965 17.3723 7.69615 20 7.69615C26.6684 7.69615 32.0982 12.9994 32.3018 19.6184C32.3083 19.8307 32.1355 20.0038 31.9231 20.0038H29.7457C28.734 20.0038 28.1209 21.1207 28.6641 21.9742L33.1491 29.0222C33.6529 29.8139 34.8086 29.8139 35.3124 29.0222L39.7975 21.9742C40.3406 21.1207 39.7275 20.0038 38.7159 20.0038H36.5385C36.326 20.0038 36.1543 19.8304 36.1493 19.6181C35.9444 10.8748 28.7926 3.85 20 3.85C16.4166 3.85 13.1057 5.01679 10.4265 6.99118C9.81395 7.4426 9.69628 8.29358 10.1048 8.93555L10.483 9.52989Z",
				fill: "currentColor"
			}), c.jsx("path", {
				d: "M29.517 30.4778C28.9959 29.659 27.8566 29.5275 27.0622 30.085C25.0631 31.488 22.6277 32.3115 20 32.3115C13.3316 32.3115 7.90184 27.0083 7.69823 20.3893C7.69169 20.177 7.8645 20.0038 8.07692 20.0038H10.2543C11.266 20.0038 11.8791 18.887 11.3359 18.0335L6.85086 10.9855C6.34707 10.1938 5.1914 10.1938 4.6876 10.9855L0.202517 18.0335C-0.340622 18.887 0.272479 20.0038 1.28414 20.0038H3.46154C3.67395 20.0038 3.84569 20.1773 3.85067 20.3896C4.05558 29.1329 11.2074 36.1577 20 36.1577C23.5834 36.1577 26.8943 34.9909 29.5735 33.0165C30.1861 32.5651 30.3037 31.7141 29.8952 31.0721L29.517 30.4778Z",
				fill: "currentColor"
			})]
		})), e[1] = n) : n = e[1], n;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(23), n = e.isShown, a = r("useMWEBGetUpsellState")(), i = a.isRestoreUpsellsDismissed, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = { entrypoint: r("MWEBEntrypointsKillswitch.enum").IN_THREAD_SCROLL_BANNER }, t[0] = l) : l = t[0];
		var d = r("useMWEBBackupState")(l), m = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(), g = r("useAsyncReStore")(), y;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (y = {}, t[1] = y) : y = t[1];
		var C = r("useMWXEntryPointDialog")(r("MAWEncryptedBackupsRestoreDialog.entrypoint"), y), b = C[0], v = o("useLabyrinthLogging").useLabyrinthLoggingFlow(), S = v.startFlow, R = p(!1), L = p(!1), E = r("MWChatEncryptedBackupsQPLSource.enum").CHAT_TAB_SCROLL_BANNER, k;
		t[2] !== g || t[3] !== S ? (k = function(t) {
			g.then(function(e) {
				o("MWEncryptedBackupsRetrieveQplLoggingAnnotations").encryptedBackupsRetrieveQplLoggingAnnotations({
					db: e,
					onFetch: function(n) {
						var e = n.ebsmWiped, a = n.firstUpsellTime, i = n.hasEbKeysLocally, l = n.hasEBSM, s = n.hasPDB, u = n.hasUserRestoredBefore, c = n.hasUserRestoredBeforeTemp;
						S({
							additionalAnnotations: {
								eb_session_identifier: a,
								ebsm_wiped: e,
								has_eb_keys_locally: i,
								has_ebsm: l,
								has_pdb: s,
								has_user_restored_before: u,
								has_user_restored_before_temp: c,
								restore_upsell_first_impression_time: a
							},
							event: o("MWChatEncryptedBackupsQPLEvents").restoreQplEvent,
							source: E
						}), r("QPLUserFlow").addPoint(o("MWChatEncryptedBackupsQPLEvents").restoreQplEvent, t), r("QPLUserFlow").addAnnotations(o("MWChatEncryptedBackupsQPLEvents").restoreQplEvent, { string: { attempted_restore_type: "not_yet_selected" } }), R.current === !1 && (R.current = !0, _.load().then(function(e) {
							return e(i);
						}));
					}
				});
			}).catch(h);
		}, t[2] = g, t[3] = S, t[4] = k) : k = t[4];
		var I = k, T;
		t[5] !== I ? (T = { onVisible: function() {
			L.current === !1 && (L.current = !0, (u || (u = o("ODS"))).bumpEntityKey(r("MWEBODSCategory"), "maw_eb_tmv_visibility_placeholder", "scroll_banner.visible_impression.chat_tab")), I("RESTORE_CHAT_TAB_SCROLL_BANNER_IMPRESSION");
		} }, t[5] = I, t[6] = T) : T = t[6];
		var D = r("useVisibilityObserver")(T);
		if (!n || m !== "ChatTab" || d !== 4 || i) return null;
		var x;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (x = { className: "x6s0dn4 xkh2ocl xfpmyvw x9f619 x17zd0t2 x78zum5 x1q0g3np x2lah0s x10w6t97 xl56j7k x1g0dm76 xpdmqnj xh8yej3" }, t[7] = x) : x = t[7];
		var $;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? ($ = c.jsx(f, {}), t[8] = $) : $ = t[8];
		var P;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (P = s._(
			/*BTDS*/
			""
		), t[9] = P) : P = t[9];
		var N;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (N = { className: "xt0psk2" }, t[10] = N) : N = t[10];
		var M;
		t[11] !== b || t[12] !== I ? (M = function() {
			(u || (u = o("ODS"))).bumpEntityKey(r("MWEBODSCategory"), "maw_eb_tmv_visibility_placeholder", "scroll_banner.cta_click.chat_tab"), I("RESTORE_CHAT_TAB_SCROLL_BANNER_CTA_CLICKED"), b({ source: E });
		}, t[11] = b, t[12] = I, t[13] = M) : M = t[13];
		var w;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (w = c.jsx(r("MWXText.react"), {
			color: "blueLink",
			type: "bodyLink4",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[14] = w) : w = t[14];
		var A;
		t[15] !== M ? (A = c.jsx(o("BaseTextContext").BaseTextContextProvider, {
			nested: !0,
			children: c.jsxs(r("MWXText.react"), {
				color: "secondary",
				type: "meta4",
				children: [
					P,
					" ",
					c.jsx("span", babelHelpers.extends({}, N, { children: c.jsx(r("MWXLink.react"), {
						onClick: M,
						target: "_blank",
						testid: void 0,
						children: w
					}) }))
				]
			})
		}), t[15] = M, t[16] = A) : A = t[16];
		var F;
		t[17] !== D || t[18] !== A ? (F = c.jsxs("div", babelHelpers.extends({}, x, {
			ref: D,
			children: [$, A]
		})), t[17] = D, t[18] = A, t[19] = F) : F = t[19];
		var O;
		t[20] === Symbol.for("react.memo_cache_sentinel") ? (O = c.jsx("div", { className: "xkh2ocl x14nfmen x2lah0s xjm9jq1 xh8yej3" }), t[20] = O) : O = t[20];
		var B;
		return t[21] !== F ? (B = c.jsxs(c.Fragment, { children: [F, O] }), t[21] = F, t[22] = B) : B = t[22], B;
	}
	function h(e) {
		r("FBLogger")("messenger_web").catching(r("getErrorSafe")(e)).warn("Unable to prepare visibility restore chat tab banner logging");
	}
	l.default = g;
}), 226);
