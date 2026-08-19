__d("WAWebManagedAccountModal.react", [
	"fbt",
	"WAWebFeatureControlCache",
	"WAWebModal.react",
	"WAWebModalManager",
	"WDSIconIcAlternateEmail.react",
	"WDSIconIcCall.react",
	"WDSIconIcCategory.react",
	"WDSIconIcClose.react",
	"WDSIconIcDelete.react",
	"WDSIconIcDescription.react",
	"WDSIconIcDuration.react",
	"WDSIconIcGridOn.react",
	"WDSIconIcHistory.react",
	"WDSIconIcInfo.react",
	"WDSIconIcMail.react",
	"WDSIconIcPerson.react",
	"WDSIconIcPhotoCamera.react",
	"WDSIconIcPublic.react",
	"WDSIconIcShieldVerified.react",
	"WDSIconIcShoppingBag.react",
	"WDSIconWdsBusinessDirectoryLocation.react",
	"WDSIconWdsIcAi.react",
	"WDSIconWdsIcTransferOwnership.react",
	"WDSIllustrationWdsIllTogglesPrivacyNotifications.react",
	"WDSText.react",
	"isStringNotNullAndNotWhitespaceOnly",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = 20, d = { rowIcon: {
		color: "xhslqc4",
		flexShrink: "x2lah0s",
		$$css: !0
	} }, m = [
		{
			key: "META_VERIFIED",
			Icon: r("WDSIconIcShieldVerified.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			key: "MAIBA",
			Icon: r("WDSIconWdsIcAi.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			key: "CATALOG_MANAGEMENT",
			Icon: r("WDSIconIcGridOn.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			key: "BUSINESS_DIRECTORY",
			Icon: r("WDSIconWdsBusinessDirectoryLocation.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			key: "ORDERS",
			Icon: r("WDSIconIcShoppingBag.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			key: "FB_IG_LINKING",
			Icon: r("WDSIconIcAlternateEmail.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			key: "DISAPPEARING_MESSAGES",
			Icon: r("WDSIconIcDuration.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		}
	];
	function p(e) {
		return e == null ? [] : m.filter(function(t) {
			return e.entries[t.key] === "DISABLED";
		});
	}
	var _ = [
		{
			key: "transfer_chats",
			Icon: r("WDSIconWdsIcTransferOwnership.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			key: "chat_history",
			Icon: r("WDSIconIcHistory.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			key: "change_phone_number",
			Icon: r("WDSIconIcCall.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			key: "delete_account",
			Icon: r("WDSIconIcDelete.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		}
	], f = [
		{
			key: "name",
			Icon: r("WDSIconIcPerson.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			key: "username",
			Icon: r("WDSIconIcAlternateEmail.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			key: "cover_photo",
			Icon: r("WDSIconIcPhotoCamera.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			key: "business_category",
			Icon: r("WDSIconIcCategory.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			key: "business_description",
			Icon: r("WDSIconIcDescription.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			key: "business_email",
			Icon: r("WDSIconIcMail.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			key: "business_website",
			Icon: r("WDSIconIcPublic.react"),
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		}
	];
	function g(e) {
		var t = o("react-compiler-runtime").c(8), n = e.Icon, a = e.children, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = { className: "x6s0dn4 x78zum5 x8a3fw1 x1aj3ljl x1xrf6ya xscbp6u" }, t[0] = i) : i = t[0];
		var l;
		t[1] !== n ? (l = u.jsx(n, {
			width: c,
			height: c,
			iconXstyle: d.rowIcon
		}), t[1] = n, t[2] = l) : l = t[2];
		var s;
		t[3] !== a ? (s = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			children: a
		}), t[3] = a, t[4] = s) : s = t[4];
		var m;
		return t[5] !== l || t[6] !== s ? (m = u.jsxs("div", babelHelpers.extends({}, i, { children: [l, s] })), t[5] = l, t[6] = s, t[7] = m) : m = t[7], m;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(41), n, a, i, l, c, d, m, h;
		if (t[0] !== e.parentCompanyName) {
			var v = o("WAWebFeatureControlCache").getPolicy(), S = p(v), R = r("isStringNotNullAndNotWhitespaceOnly")(e.parentCompanyName) ? e.parentCompanyName : s._(
				/*BTDS*/
				""
			);
			n = o("WAWebModal.react").Modal, m = o("WAWebModalManager").closeModalManager;
			var L;
			t[9] === Symbol.for("react.memo_cache_sentinel") ? (L = s._(
				/*BTDS*/
				""
			), t[9] = L) : L = t[9], t[10] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("button", {
				type: "button",
				"aria-label": L,
				onClick: o("WAWebModalManager").closeModalManager,
				"data-testid": "managed_account_modal_close_btn",
				className: "x6s0dn4 x11g6tue x1ejq31n x18oe1m7 x1sy0etr xstzfhl xhslqc4 x1ypdohk x78zum5 x10w6t97 x67dgr1 xugynej xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x10l6tqk x1td3qas x1vjfegm",
				children: u.jsx(r("WDSIconIcClose.react"), {
					width: 20,
					height: 20
				})
			}), t[10] = h) : h = t[10], a = "managed_account_modal";
			var E, k, I;
			t[11] === Symbol.for("react.memo_cache_sentinel") ? (i = { className: "x12f24lm x1odjw0f x181vq82 x1uc92m x1rohswg xfk6m8" }, k = { className: "x6s0dn4 x78zum5 xdt5ytf x1xrf6ya xscbp6u x2b8uid" }, I = u.jsx(r("WDSIllustrationWdsIllTogglesPrivacyNotifications.react"), {}), E = { className: "x1de0gy" }, t[11] = i, t[12] = E, t[13] = k, t[14] = I) : (i = t[11], E = t[12], k = t[13], I = t[14]);
			var T, D;
			t[15] === Symbol.for("react.memo_cache_sentinel") ? (T = u.jsx("div", babelHelpers.extends({}, E, { children: u.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Headline1",
				children: s._(
					/*BTDS*/
					""
				)
			}) })), D = { className: "xav9cv8" }, t[15] = T, t[16] = D) : (T = t[15], D = t[16]), t[17] !== R ? (l = u.jsxs("div", babelHelpers.extends({}, k, { children: [
				I,
				T,
				u.jsx("div", babelHelpers.extends({}, D, { children: u.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body1",
					children: s._(
						/*BTDS*/
						"",
						[s._param("company_name", R)]
					)
				}) }))
			] })), t[17] = R, t[18] = l) : l = t[18];
			var x, $;
			t[19] === Symbol.for("react.memo_cache_sentinel") ? (x = { className: "x1nmyh1g" }, $ = { className: "xefnzgg" }, t[19] = x, t[20] = $) : (x = t[19], $ = t[20]);
			var P;
			t[21] === Symbol.for("react.memo_cache_sentinel") ? (P = u.jsx("div", babelHelpers.extends({}, $, { children: u.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Body1Emphasized",
				children: s._(
					/*BTDS*/
					""
				)
			}) })), t[21] = P) : P = t[21], t[22] !== R ? (c = u.jsxs("div", babelHelpers.extends({ "data-testid": "managed_account_modal_capabilities_section" }, x, { children: [P, u.jsx(g, {
				Icon: r("WDSIconIcInfo.react"),
				children: s._(
					/*BTDS*/
					"",
					[s._param("company_name", R)]
				)
			})] })), t[22] = R, t[23] = c) : c = t[23], d = S.length > 0 ? u.jsxs("div", {
				"data-testid": "managed_account_modal_tools_section",
				className: "x1nmyh1g",
				children: [u.jsx("div", {
					className: "xefnzgg",
					children: u.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body1Emphasized",
						children: s._(
							/*BTDS*/
							""
						)
					})
				}), S.map(b)]
			}) : null, t[0] = e.parentCompanyName, t[1] = n, t[2] = a, t[3] = i, t[4] = l, t[5] = c, t[6] = d, t[7] = m, t[8] = h;
		} else n = t[1], a = t[2], i = t[3], l = t[4], c = t[5], d = t[6], m = t[7], h = t[8];
		var N, M;
		t[24] === Symbol.for("react.memo_cache_sentinel") ? (N = { className: "x1nmyh1g" }, M = { className: "xefnzgg" }, t[24] = N, t[25] = M) : (N = t[24], M = t[25]);
		var w;
		t[26] === Symbol.for("react.memo_cache_sentinel") ? (w = u.jsxs("div", babelHelpers.extends({ "data-testid": "managed_account_modal_settings_section" }, N, { children: [u.jsx("div", babelHelpers.extends({}, M, { children: u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1Emphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), _.map(C)] })), t[26] = w) : w = t[26];
		var A, F;
		t[27] === Symbol.for("react.memo_cache_sentinel") ? (A = { className: "x1nmyh1g" }, F = { className: "xefnzgg" }, t[27] = A, t[28] = F) : (A = t[27], F = t[28]);
		var O;
		t[29] === Symbol.for("react.memo_cache_sentinel") ? (O = u.jsxs("div", babelHelpers.extends({ "data-testid": "managed_account_modal_profile_fields_section" }, A, { children: [u.jsx("div", babelHelpers.extends({}, F, { children: u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1Emphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), f.map(y)] })), t[29] = O) : O = t[29];
		var B;
		t[30] !== a || t[31] !== i || t[32] !== l || t[33] !== c || t[34] !== d ? (B = u.jsxs("div", babelHelpers.extends({ "data-testid": a }, i, { children: [
			l,
			c,
			d,
			w,
			O
		] })), t[30] = a, t[31] = i, t[32] = l, t[33] = c, t[34] = d, t[35] = B) : B = t[35];
		var W;
		return t[36] !== n || t[37] !== B || t[38] !== m || t[39] !== h ? (W = u.jsxs(n, {
			onOverlayClick: m,
			children: [h, B]
		}), t[36] = n, t[37] = B, t[38] = m, t[39] = h, t[40] = W) : W = t[40], W;
	}
	function y(e) {
		return u.jsx(g, {
			Icon: e.Icon,
			children: e.label()
		}, e.key);
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		return u.jsx(g, {
			Icon: e.Icon,
			children: e.label()
		}, e.key);
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		return u.jsx(g, {
			Icon: e.Icon,
			children: e.label()
		}, e.key);
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = h;
}), 226);
