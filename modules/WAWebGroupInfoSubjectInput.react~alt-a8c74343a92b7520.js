__d("WAWebGroupInfoSubjectInput.react", [
	"fbt",
	"WAWebCmd",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebGroupGatingUtils",
	"WAWebModalManager",
	"WAWebRichTextField.react",
	"react",
	"stylex",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useRef, p = d.useState, _ = {
		containerRefreshed: {
			textAlign: "x2b8uid",
			width: "xh8yej3",
			maxWidth: "x193iq5w",
			$$css: !0
		},
		editing: {
			width: "xh8yej3",
			textAlign: "x1yc453h",
			"@media (max-width: 1441px)_width": "x1enirru",
			$$css: !0
		}
	};
	function f(t) {
		var n = t.direction, a = t.editable, i = t.editRestrictionInfo, l = t.emptyErrorMessage, u = t.focusOnMount, d = u === void 0 ? !1 : u, f = t.onBlur, g = t.onChange, h = t.onSave, y = t.subject, C = t.testid, b = t.xstyle, v = m(), S = p(null), R = S[0], L = S[1], E = p(!1), k = E[0], I = E[1], T = p(d), D = T[0], x = T[1], $ = function() {
			var e, t;
			x(!0), (e = v.current) == null || e.restoreFocus(), (t = v.current) == null || t.triggerSelect();
		};
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "edit_group_subject", $);
		var P = function(t) {
			return t != null && t.trim() !== "";
		}, N = function() {
			x(!0);
		}, M = function(t) {
			var e = t.text;
			D && (L(e), g == null || g(e));
		}, w = async function() {
			if (x(!1), R == null || R === "" || R === y) {
				L(null);
				return;
			}
			I(!0);
			try {
				await h(R);
			} finally {
				I(!1), L(null);
			}
		}, A = function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				onOK: o("WAWebModalManager").closeModalManager,
				okText: r("WAWebFbtCommon")("OK"),
				children: l != null ? l : s._(
					/*BTDS*/
					""
				)
			}));
		}, F = function() {
			x(!1), L(null);
		}, O = [o("WAWebRichTextField.react").TextInputCustomStyleThemes.GroupInfoName, o("WAWebRichTextField.react").TextInputCustomStyleThemes.ChatInfoLargeText], B = R != null ? R : y || String(s._(
			/*BTDS*/
			""
		));
		return c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(_.containerRefreshed, D && _.editing, b), { children: c.jsx(o("WAWebRichTextField.react").RichTextField, {
			ref: v,
			testid: C != null ? C : "group-info-drawer-subject-input",
			title: B,
			value: B,
			pending: k,
			showRemaining: !0,
			validate: P,
			maxLength: o("WAWebGroupGatingUtils").getGroupMaxSubject(),
			onBeginEdit: N,
			onChange: M,
			onSave: w,
			onError: A,
			onCancel: F,
			emojiBtnPosition: "side",
			lockable: !0,
			lowProfile: !0,
			isRefresh: !0,
			constrainedWidth: !0,
			theme: "large",
			customStyleThemes: O,
			showEditOnHover: !0,
			showHighlightOnHover: !0,
			editable: a,
			editRestrictionInfo: i,
			onBlur: f,
			disableLockedLineDirectionInference: !0,
			direction: n,
			focusOnMount: d || D,
			setIsEditing: D,
			startActive: d,
			fieldName: s._(
				/*BTDS*/
				""
			),
			ariaLabel: s._(
				/*BTDS*/
				""
			)
		}) }));
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
