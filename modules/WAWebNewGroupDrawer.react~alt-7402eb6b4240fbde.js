__d("WAWebNewGroupDrawer.react", [
	"fbt",
	"WALogger",
	"WAWebChevronIcon.react",
	"WAWebClickable.react",
	"WAWebCommunityGetParticipantInfoText",
	"WAWebContactCollection",
	"WAWebDrawer.react",
	"WAWebDrawerBlock.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebDrawerUtils",
	"WAWebEphemeralKicNux.react",
	"WAWebEphemeralL10N",
	"WAWebEphemeralPopup.react",
	"WAWebEphemeralityResolver",
	"WAWebGroupGatingUtils",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebNux",
	"WAWebPhotoPickerConstants",
	"WAWebPhotoPickerLoadable.react",
	"WAWebRichTextField.react",
	"WAWebRound.react",
	"WAWebSpinner.react",
	"WAWebTabOrder",
	"WAWebText.react",
	"WAWebUserPrefsNuxPreferences",
	"WAWebVelocityTransitionGroup",
	"WDSColorStyles.stylex",
	"WDSIconIcCheck.react",
	"react",
	"useWAWebCallbackOnce"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = ["ref"], c, d = c || (c = o("react")), m = c.useState, p = {
		header: {
			marginBottom: "x13m54ha",
			$$css: !0
		},
		chevronIcon: {
			color: "xhslqc4",
			$$css: !0
		}
	}, _ = { surface: "group-creation" };
	function f(e) {
		var t = e.ephemeralDuration, n = e.handleEphemeralDurationClick, a;
		t > 0 ? a = o("WAWebEphemeralL10N").getDisappearingMessageDurationString(t) : a = s._(
			/*BTDS*/
			""
		);
		var i = d.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
			xstyle: p.chevronIcon,
			directional: !0,
			height: 21
		});
		return d.jsx(r("WAWebDrawerSection.react"), { children: d.jsxs(r("WAWebDrawerBlock.react"), {
			tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
			testid: "ephemeral-duration-block",
			onClick: n,
			side: i,
			ariaLabel: s._(
				/*BTDS*/
				"",
				[s._param("duration", a)]
			).toString(),
			multiline: !0,
			children: [d.jsx("div", {
				className: "x13m54ha",
				children: d.jsx(o("WAWebText.react").WAWebTextTitle, {
					as: "h3",
					children: s._(
						/*BTDS*/
						""
					)
				})
			}), d.jsx(o("WAWebText.react").WAWebTextMuted, {
				as: "p",
				children: a
			})]
		}) });
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.onGroupPermissions, n = d.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
			xstyle: p.chevronIcon,
			directional: !0,
			height: 21
		});
		return d.jsx(r("WAWebDrawerSection.react"), { children: d.jsx(r("WAWebDrawerBlock.react"), {
			tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
			testid: "group-permissions-block",
			onClick: t,
			side: n,
			ariaLabel: s._(
				/*BTDS*/
				""
			).toString(),
			multiline: !0,
			children: d.jsx("div", {
				className: "x13m54ha",
				children: d.jsx(o("WAWebText.react").WAWebTextTitle, {
					as: "h3",
					children: s._(
						/*BTDS*/
						""
					)
				})
			})
		}) });
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.onAddParticipants, n = e.participants, a = o("WAWebCommunityGetParticipantInfoText").getParticipantInfoText(n);
		return d.jsx(r("WAWebDrawerSection.react"), { children: d.jsxs(r("WAWebDrawerBlock.react"), {
			tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
			onClick: t,
			side: d.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
				xstyle: p.chevronIcon,
				directional: !0,
				height: 21
			}),
			ariaLabel: s._(
				/*BTDS*/
				""
			).toString(),
			multiline: !0,
			children: [d.jsx(o("WAWebText.react").WAWebTextTitle, {
				as: "h3",
				xstyle: p.header,
				children: s._(
					/*BTDS*/
					""
				)
			}), d.jsx(o("WAWebText.react").WAWebTextMuted, {
				as: "p",
				children: a
			})]
		}) });
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, u);
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["WAWebNewGroupDrawer"])));
		var i = a.participants, l = i === void 0 ? [] : i, c = a.onSubmit, p = a.allowUnnamedGroup, y = a.parentGroupId, C = a.shortenedCreationFlow, b = a.onAddParticipants, v = a.onGroupPermissions, S = a.loading, R = S === void 0 ? !1 : S, L = m(a.subject || ""), E = L[0], k = L[1], I = m(a.thumb), T = I[0], D = I[1], x = m(a.full), $ = x[0], P = x[1], N = m(function() {
			if (a.ephemeralDuration != null) return a.ephemeralDuration;
			var e = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(o("WAWebContactCollection").ContactCollection.getMeContact());
			return e != null ? e : 0;
		}), M = N[0], w = N[1], A = function(t, n) {
			D(t), P(n), a.handleLiftGroupInfo == null || a.handleLiftGroupInfo({
				thumb: t,
				full: n
			});
		}, F = r("useWAWebCallbackOnce")(function() {
			var e = E.trim();
			c({
				ephemeralDuration: M,
				full: $,
				participants: l,
				subject: e,
				thumb: T
			});
		}), O = function(t) {
			k(t), a.handleLiftGroupInfo == null || a.handleLiftGroupInfo({ text: t });
		}, B = function(t) {
			w(t), a.handleLiftGroupInfo == null || a.handleLiftGroupInfo({ ephemeralDuration: t });
		}, W = function() {
			o("WAWebModalManager").ModalManager.openSupportModal(d.jsx(r("WAWebEphemeralPopup.react"), {
				initialDuration: M,
				onDurationSelected: B
			}));
		}, q = function() {
			o("WAWebUserPrefsNuxPreferences").shouldShowNUX(o("WAWebNux").NUX.EPHEMERAL) ? o("WAWebModalManager").ModalManager.openSupportModal(d.jsx(r("WAWebEphemeralKicNux.react"), {
				fromMe: !0,
				onOk: W
			})) : W();
		}, U = function() {
			return y || p !== !0 ? E.trim().length > 0 : !0;
		}, V = !y && p === !0 ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), H = d.jsx(f, {
			ephemeralDuration: M,
			handleEphemeralDurationClick: q
		}), G = C === !0 && b ? d.jsx(h, {
			participants: l,
			onAddParticipants: b
		}) : null, z = d.jsx(g, { onGroupPermissions: v }), j = U() === !0 ? d.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "btn",
			children: d.jsx("div", {
				className: "xhtitgo x78zum5 x1l1ennw x17r0vjz x178dpqu x2b8uid",
				children: d.jsx(o("WAWebClickable.react").Clickable, {
					onClick: F,
					"data-tab": o("WAWebTabOrder").TAB_ORDER.DRAWER_FOOTER,
					children: d.jsx(o("WAWebRound.react").Round, {
						testid: "create-group-btn",
						label: s._(
							/*BTDS*/
							""
						),
						children: R ? d.jsx(o("WAWebSpinner.react").Spinner, {
							color: "white",
							size: 30
						}) : d.jsx(r("WDSIconIcCheck.react"), { iconXstyle: o("WDSColorStyles.stylex").WDSColorStyles.contentOnAccent })
					})
				})
			})
		}) : null, K = o("WAWebDrawerUtils").getDrawerHeaderType(a.viewType);
		return d.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			testid: "new-group-drawer-submit",
			viewType: a.viewType,
			tsNavigationData: _,
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: K,
				onBack: a.onBack,
				onCancel: a.onCancel
			}), d.jsxs(r("WAWebDrawerBody.react"), { children: [
				d.jsxs(r("WAWebDrawerSection.react"), { children: [d.jsx("div", {
					className: "x178dpqu x1ulvn4e xc8tqf8 x1laec3j",
					children: d.jsx(o("WAWebPhotoPickerLoadable.react").PhotoPickerLoadable, {
						type: o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP,
						attachToChat: !1,
						startImage: $,
						onImageSet: A,
						dataTab: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT
					})
				}), d.jsx("div", {
					"data-testid": "group-subject",
					className: "x178dpqu x1ulvn4e xc8tqf8 x1laec3j",
					children: d.jsx(o("WAWebRichTextField.react").RichTextField, {
						value: E,
						maxLength: o("WAWebGroupGatingUtils").getGroupMaxSubject(),
						showRemaining: !0,
						onChange: function(t) {
							O(t.text);
						},
						title: V,
						placeholder: V,
						onEnter: U() ? F : r("WAWebNoop"),
						emojiBtnPosition: "side",
						focusOnMount: !0,
						tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT
					})
				})] }),
				H,
				z,
				G,
				j
			] })]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);
