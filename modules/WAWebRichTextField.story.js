__d("WAWebRichTextField.story", [
	"WALogger",
	"WAWebFormatConfiguration",
	"WAWebLinkify",
	"WAWebRichTextField.react",
	"WAWebShowroomUtils",
	"WAWebToast.react",
	"WAWebToastManager",
	"react",
	"react-compiler-runtime",
	"useWAWebCheckbox",
	"useWAWebSelect"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p = m || (m = o("react")), _ = m, f = _.useEffect, g = _.useRef, h = _.useState;
	function y(e) {
		o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, { msg: e }));
	}
	function C() {
		var t, n = (t = o("useWAWebCheckbox")).useCheckBox("Enable bullet points", !0), r = n[0], a = n[1], i = o("useWAWebSelect").useSelect("Emoji button (emojiBtnPosition)", [
			"none",
			"side",
			"footer"
		]), l = i[0], m = i[1], _ = t.useCheckBox("Hide floating label", !1), C = _[0], b = _[1], v = 20, S = t.useCheckBox("Set max length to " + v, !1), R = S[0], L = S[1], E = t.useCheckBox("Visual: Low Profile", !1), k = E[0], I = E[1], T = t.useCheckBox("Select on mount", !1), D = T[0], x = T[1], $ = t.useCheckBox("Focus on mount", !1, D), P = $[0], N = $[1], M = t.useCheckBox("Set min lines to 3", !1), w = M[0], A = M[1], F = t.useCheckBox("Set max lines to 5", !1), O = F[0], B = F[1], W = t.useCheckBox("Locakble (Inline edit mode)", !1), q = W[0], U = W[1], V = t.useCheckBox("Show Remaining", !1, !q), H = V[0], G = V[1], z = t.useCheckBox("Show edit button on hover (false to always show the button)", !1, !q), j = z[0], K = z[1], Q = t.useCheckBox("Editable", !0, !q), X = Q[0], Y = Q[1], J = t.useCheckBox("Show highlighting on hover", !0, !q), Z = J[0], ee = J[1], te = t.useCheckBox("Show edit restriction info (when Editable is off)", !0, X && !q), ne = te[0], re = te[1], oe = o("useWAWebCheckbox").useCheckBox("Show error on save (Incompatible with Low Profile)", !1, k || !q), ae = oe[0], ie = oe[1], le = o("useWAWebCheckbox").useCheckBox("Shown custome title for the Edit button (shown on mouse hover)", !1, !q), se = le[0], ue = le[1], ce = o("useWAWebCheckbox").useCheckBox("Use custome emoji text settings (e.g. set text limit, show read more button)", !1, !q), de = ce[0], me = ce[1], pe = o("useWAWebSelect").useSelect("Theme", [
			"default",
			"small",
			"text-input",
			"invite-message-caption",
			"request-reason"
		]), _e = pe[0], fe = pe[1], ge = h(!1), he = ge[0], ye = ge[1], Ce = h(!1), be = Ce[0], ve = Ce[1], Se = h(""), Re = Se[0], Le = Se[1], Ee = g(""), ke = function(n, r) {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[rich-text-input] onChange"]))), Le(n.text);
		}, Ie = function() {
			o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[rich-text-input] onBlur"])));
		}, Te = function() {
			o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[rich-text-input] onFocus"])));
		}, De = function(t) {
			y("onEnter triggered"), o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[rich-text-input] onEnter"])));
		}, xe = function(t) {
			o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[rich-text-input] onFiles"]))), y("onFiles triggered (see console for output)");
		}, $e = function() {
			y("onSave triggered"), Re !== Ee.current && (ve(!0), self.setTimeout(function() {
				ve(!1);
			}, 3e3));
		}, Pe = function() {
			y("onCancel triggered"), Le(Ee.current);
		}, Ne = function() {
			y("onBeginEdit triggered"), Ee.current = Re;
		}, Me = function() {
			o("WAWebShowroomUtils").showroomConfirm("Only admins can edit this info");
		}, we = {
			title: "Type a group description",
			multiline: !0,
			onFiles: xe,
			onEnter: De,
			onBlur: Ie,
			onFocus: Te,
			emojiBtnPosition: l != null ? l : "none",
			hideFloatingLabel: C,
			maxLength: R ? v : void 0,
			showRemaining: H,
			lowProfile: k,
			theme: _e === "default" ? null : _e
		};
		q ? (we = babelHelpers.extends({}, we, {
			emojiTextSettingsInLockMode: de ? {
				textLimit: he ? 1 / 0 : 20,
				readMoreText: "Read more",
				onReadMore: function() {
					return ye(!0);
				},
				ellipsify: !0,
				multiline: !0,
				direction: "auto",
				inferLinesDirection: !0,
				formatters: o("WAWebFormatConfiguration").TrustedGroupDesc({
					links: o("WAWebLinkify").findLinks(Re),
					bulletPointsEnabled: r
				})
			} : void 0,
			lockable: !0,
			emptyValuePlaceholder: "Add group description",
			editable: X,
			showEditOnHover: j,
			pending: be,
			showHighlightOnHover: Z,
			onBeginEdit: Ne,
			onSave: $e,
			onCancel: Pe,
			editRestrictionInfo: ne ? Me : void 0
		}), se && (we = babelHelpers.extends({}, we, { fieldName: "Group Descripiton" }))) : we = babelHelpers.extends({}, we, { placeholder: "Group description" });
		var Ae = g(0), Fe = h(null), Oe = Fe[0], Be = Fe[1];
		ae && (we = babelHelpers.extends({}, we, {
			error: Oe,
			validate: function() {
				return Be("Failed attempts #" + Ae.current), Ae.current++, !1;
			},
			onError: function() {
				y("onError triggered");
			}
		})), f(function() {
			if (Oe != null) {
				var e = self.setTimeout(function() {
					Be(null);
				}, 3e3);
				return function() {
					return self.clearTimeout(e);
				};
			}
		}, [Oe]);
		var We = String(P) + "-" + String(D);
		f(function() {
			y("Input force re-rendered.");
		}, [We]), f(function() {
			Le("");
		}, [D]);
		var qe = Re;
		D && qe === "" && (qe = "Sample text");
		var Ue = {
			minVisibleLines: w ? 3 : void 0,
			maxVisibleLines: O ? 5 : void 0
		};
		return p.jsxs("div", {
			className: "x9orja2 x5zjp28 xbaz6xv x162tt16",
			children: [
				p.jsx("div", {
					className: "x9orja2 x5zjp28 xbaz6xv x162tt16",
					children: p.jsx(o("WAWebRichTextField.react").RichTextField, babelHelpers.extends({
						value: qe,
						onChange: ke,
						textFormatEnabled: !0,
						bulletPointsEnabled: r,
						selectOnMount: D,
						focusOnMount: P
					}, Ue, we), We)
				}),
				p.jsx("h2", { children: "Options" }),
				m,
				b,
				L,
				I,
				N,
				x,
				A,
				B,
				fe,
				p.jsx("h2", {
					className: "x11fxgd9",
					children: "Inline Edit Options"
				}),
				U,
				Y,
				re,
				ue,
				me,
				K,
				ee,
				G,
				ie,
				p.jsx("h2", {
					className: "x11fxgd9",
					children: "New Options (not avaialble in legacy mode)"
				}),
				a
			]
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b() {
		var e = o("react-compiler-runtime").c(13), t = h(""), n = t[0], r = t[1], a;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = function(t) {
			r(t.text);
		}, e[0] = a) : a = e[0];
		var i = a, l;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (l = function(t) {
			r(t.currentTarget.value);
		}, e[1] = l) : l = e[1];
		var s = l, u, c;
		e[2] === Symbol.for("react.memo_cache_sentinel") ? (u = { className: "x9orja2 x5zjp28 xbaz6xv x162tt16" }, c = { className: "x9orja2 x5zjp28 xbaz6xv x162tt16" }, e[2] = u, e[3] = c) : (u = e[2], c = e[3]);
		var d;
		e[4] !== n ? (d = p.jsx("div", babelHelpers.extends({}, c, { children: p.jsx(o("WAWebRichTextField.react").RichTextField, {
			title: "Type a group description",
			value: n,
			onChange: i,
			managed: !0,
			textFormatEnabled: !0,
			multiline: !0,
			emojiBtnPosition: "side"
		}) })), e[4] = n, e[5] = d) : d = e[5];
		var m, _;
		e[6] === Symbol.for("react.memo_cache_sentinel") ? (m = p.jsx("h2", {
			className: "x11fxgd9",
			children: "Input content will synchronize with the following value"
		}), _ = { className: "xh8yej3 xng8ra x1anpbxc" }, e[6] = m, e[7] = _) : (m = e[6], _ = e[7]);
		var f;
		e[8] !== n ? (f = p.jsx("textarea", babelHelpers.extends({}, _, {
			value: n,
			onChange: s
		})), e[8] = n, e[9] = f) : f = e[9];
		var g;
		return e[10] !== d || e[11] !== f ? (g = p.jsxs("div", babelHelpers.extends({}, u, { children: [
			d,
			m,
			f
		] })), e[10] = d, e[11] = f, e[12] = g) : g = e[12], g;
	}
	var v = {
		storyName: "WAWebRichTextField",
		component: C,
		description: "",
		examples: [{
			title: "Example",
			description: "\n         A wrapper component of RichTextInput that provides additioanl features. Some of them are\n\n         - Lockable state\n         - Save and validation\n         - Additional icons (e.g. emoji and drag buttons)\n         - Floating placeholder\n         - Emoji suggestions (as menu popup)\n       ",
			example: function() {
				return p.jsx(C, {});
			},
			templateStyle: babelHelpers.extends({}, o("WAWebShowroomUtils").widePreview, { minWidth: 560 })
		}, {
			title: "Example 2",
			description: "\n         Managed mode\n         Input's content is synchrnoized with the 'value' prop.\n       ",
			example: function() {
				return p.jsx(b, {});
			},
			templateStyle: babelHelpers.extends({}, o("WAWebShowroomUtils").widePreview, { minWidth: 560 })
		}]
	};
	l.default = v;
}), 98);
