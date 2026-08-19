__d("WAWebProfileDrawer.react", [
	"fbt",
	"$InternalEnum",
	"WAFilteredCatch",
	"WALogger",
	"WAWebBackendErrors",
	"WAWebBizProfileDrawer.react",
	"WAWebCatalogCollection",
	"WAWebCatalogManagementFlowLoadable",
	"WAWebConfirmPopup.react",
	"WAWebConnModel",
	"WAWebContactGetters",
	"WAWebCreateUsernameDrawer.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerContext",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManagerGlobalContext",
	"WAWebDrawerSection.react",
	"WAWebFbtCommon",
	"WAWebFrontendContactGetters",
	"WAWebKeyboardHotKeys.react",
	"WAWebKeyboardRotateFocus.react",
	"WAWebKeyboardTabUtils",
	"WAWebMerchantDetailsFormFlowLoadable",
	"WAWebModalManager",
	"WAWebProductCatalogContext",
	"WAWebProductCatalogSession",
	"WAWebProfileDrawerCoverPhoto.react",
	"WAWebProfileDrawerPhoneNumber.react",
	"WAWebProfileDrawerUsername.react",
	"WAWebProfilePicPicker.react",
	"WAWebProfileQuickPromotionSurface.react",
	"WAWebPushnameConstants",
	"WAWebQuickPromotionGating",
	"WAWebRichTextField.react",
	"WAWebSetPushnameConnAction",
	"WAWebSettingGatingUtils",
	"WAWebStatusContactAction",
	"WAWebTextStatusGatingUtils",
	"WAWebTextStatusSection",
	"WAWebUserPrefsMeUser",
	"WAWebUsernameCreationActionLogger",
	"WAWebUsernameCreationInfoDrawer.react",
	"WAWebUsernameManagementDrawer.react",
	"WAWebUsernameTypes",
	"WAWebUsernameWorkerCompatibleGatingUtils",
	"WAWebUtilsLogQplEvents",
	"WAWebWamEnumBizPlatform",
	"WAWebWamEnumCatalogEntryPoint",
	"WAWebWamEnumUsernameCreationActionName",
	"WAWebWamEnumUsernameCreationCurrentScreen",
	"WAWebWamEnumUsernameCreationFlowType",
	"WDSMargins.stylex",
	"WDSText.react",
	"isStringNullOrEmpty",
	"react",
	"stylex",
	"useWAWebContactValues",
	"useWAWebFlow",
	"useWAWebFocusOnMount",
	"useWAWebModelValues",
	"useWAWebUIM",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d, m, p, _ = p || (p = o("react")), f = p, g = f.useContext, h = f.useEffect, y = f.useRef, C = f.useState, b = 139, v = 256, S = { surface: o("WAWebConnModel").Conn.isSMB ? "smb-business-profile" : "self-profile" }, R = n("$InternalEnum").Mirrored([
		"Profile",
		"MerchantDetails",
		"CatalogManagement",
		"UsernameCreationInfo",
		"CreateUsername",
		"EditUsername"
	]), L = { photoPickerWrapper: {
		display: "x78zum5",
		flexGrow: "x1c4vz4f",
		flexShrink: "x2lah0s",
		flexBasis: "xdl72j9",
		justifyContent: "xl56j7k",
		$$css: !0
	} };
	function E(e) {
		var t = e.aboutPromptKey, n = e.conn, a = e.contact, i = e.entryPoint, l = e.isInitialStep, s = e.onClose, d = e.profilePicThumb, m = e.ref, p = e.status, f = C(), g = f[0], h = f[1], y = C(), b = y[0], v = y[1], S = r("useWAWebFocusOnMount")(), L = o("useWAWebFlow").useFlow(R.Profile, {
			transitions: o("useWAWebFlow").FlowTransitions.None,
			onEnd: s
		}), E = L[0], k = L[1];
		if (k.step == null) return o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[WAWebProfileDrawer] Returning null: flow.step is null"]))), null;
		var I;
		switch (k.step) {
			case R.Profile: {
				var T = function() {
					k.push(R.MerchantDetails);
				}, x = function(t) {
					o("WAWebUtilsLogQplEvents").qplStartCatalogCollectionsView("Profile"), o("WAWebCatalogManagementFlowLoadable").createCatalogManagementFlowObject(function(e, n, r) {
						r === !0 && !n ? o("WAWebCatalogManagementFlowLoadable").showSelfCatalogLoadErrorToast() : (h(e), v(t), k.push(R.CatalogManagement));
					});
				}, $ = function() {
					o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.resetSessionId(), k.push(R.UsernameCreationInfo);
				}, P = function() {
					o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.resetSessionId(), k.push(R.EditUsername);
				};
				I = _.jsx(D, {
					aboutPromptKey: t,
					openMerchantDetailsForm: T,
					openCatalogDetailsForm: x,
					openCreateUsernameDrawer: $,
					openEditUsernameDrawer: P,
					conn: n,
					contact: a,
					profilePicThumb: d,
					entryPoint: i,
					status: p,
					onClose: function() {
						return k.pop();
					},
					isInitialStep: l
				});
				break;
			}
			case R.MerchantDetails: {
				var N = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
				I = _.jsx(o("WAWebMerchantDetailsFormFlowLoadable").MerchantDetailsFormFlowLoadable, {
					contactId: N,
					onBack: function() {
						return k.pop();
					}
				});
				break;
			}
			case R.CatalogManagement:
				if (!g) return o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[WAWebProfileDrawer] null: no user in CatalogManagement"]))), null;
				I = _.jsx(o("WAWebCatalogManagementFlowLoadable").CatalogManagementFlowLoadable, {
					catalogId: g,
					product: b,
					onBack: function() {
						return k.pop();
					},
					isInitialStep: !1
				});
				break;
			case R.UsernameCreationInfo:
				o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
					usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_EDUCATION,
					usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.VIEW,
					usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.CREATION
				}), I = _.jsx(r("WAWebUsernameCreationInfoDrawer.react"), {
					onContinue: function() {
						k.push(R.CreateUsername), o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
							usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_EDUCATION,
							usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.CLICK_CREATE_USERNAME,
							usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.CREATION
						});
					},
					onBack: function() {
						k.pop(), o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.logBackClicked(o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_EDUCATION, o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.CREATION);
					},
					ref: m
				});
				break;
			case R.CreateUsername:
				I = _.jsx(r("WAWebCreateUsernameDrawer.react"), {
					contactId: a.id,
					ref: m,
					onBack: function() {
						k.pop(), o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.logBackClicked(o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_EDUCATION, o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.CREATION);
					}
				});
				break;
			case R.EditUsername: I = (a == null ? void 0 : a.username) != null ? _.jsx(r("WAWebUsernameManagementDrawer.react"), {
				contactId: a.id,
				username: o("WAWebUsernameTypes").serializeUsername(a.username),
				onBack: function() {
					o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.logBackClicked(o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_MANAGE, o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT), k.pop();
				}
			}) : null;
		}
		return _.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			ref: S,
			children: _.jsx(E, {
				ref: m,
				flow: k,
				children: I
			})
		});
	}
	E.displayName = E.name + " [from " + i.id + "]";
	var k = {
		ellipsify: !0,
		multiline: !0,
		direction: "auto",
		inferLinesDirection: !0
	};
	function I(e) {
		var t, n = e.aboutInput, a = e.contact, i = e.openCreateUsernameDrawer, l = e.openEditUsernameDrawer, u = e.unmountSignal, c = y(null), d = y(!1), m = o("useWAWebModelValues").useModelValues(e.conn, ["pushname"]), p = C(m.pushname), f = p[0], g = p[1], h = C(!1), b = h[0], v = h[1], S = function() {
			d.current = !0;
		}, R = function(t) {
			o("WAWebModalManager").ModalManager.open(_.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				tsNavigationData: {
					surface: "unknown",
					viewName: "profile-error"
				},
				onOK: o("WAWebModalManager").closeModalManager,
				okText: r("WAWebFbtCommon")("OK"),
				children: t
			}));
		}, L = function() {
			var e, t = f, n = /[\u2714\u2705\u2611]/g;
			if (t = (t || "").trim(), !t) e = s._(
				/*BTDS*/
				""
			);
			else if (n.test(t)) e = s._(
				/*BTDS*/
				""
			);
			else if (t.startsWith("@")) e = s._(
				/*BTDS*/
				""
			);
			else return !0;
			return R(e), !1;
		}, E = function() {
			if (d.current = !1, !!o("WAWebConnModel").Conn.canSetMyPushname()) {
				var e = f;
				e = (e || "").trim();
				var t = m.pushname;
				if (e !== t) {
					var n = function() {
						var e;
						(e = c.current) == null || e.focusEditBtn();
					};
					v(!0), o("WAWebSetPushnameConnAction").setPushname(e, n).then(function() {
						u.aborted || v(!1);
					});
				}
			}
		}, I = function(t) {
			g(t);
		}, T = function() {
			d.current = !1, g(m.pushname);
		}, D = o("WAWebUsernameWorkerCompatibleGatingUtils").usernameCreationOrReservationEnabled(), x = d.current || b ? f : m.pushname, $;
		o("WAWebConnModel").Conn.isSMB ? $ = s._(
			/*BTDS*/
			""
		) : $ = "";
		var P = o("WAWebUserPrefsMeUser").getMaybeMePnUser(), N = D && _.jsx(r("WAWebProfileDrawerUsername.react"), { onClick: (a == null ? void 0 : a.username) != null ? l : i }), M = !o("WAWebTextStatusGatingUtils").sendTextStatusEnabled() && !r("isStringNullOrEmpty")((t = e.aboutValue) == null ? void 0 : t.trim()) && _.jsx(r("WAWebDrawerSection.react"), {
			titleTestId: "about-section",
			title: s._(
				/*BTDS*/
				""
			),
			theme: "padding",
			animation: !1,
			children: n
		}), w = s._(
			/*BTDS*/
			""
		);
		return _.jsxs(_.Fragment, { children: [
			o("WAWebTextStatusGatingUtils").sendTextStatusEnabled() && _.jsx(r("WAWebTextStatusSection"), { promptKey: e.aboutPromptKey }),
			_.jsx(r("WAWebDrawerSection.react"), {
				titleTestId: "pushname-section",
				title: s._(
					/*BTDS*/
					""
				),
				theme: "padding",
				animation: !1,
				children: _.jsx(o("WAWebRichTextField.react").RichTextField, {
					ref: c,
					testid: "pushname-input",
					value: x,
					editable: o("WAWebConnModel").Conn.canSetMyPushname(),
					pending: b,
					showRemaining: !0,
					validate: L,
					maxLength: o("WAWebPushnameConstants").MAX_PUSHNAME_LENGTH,
					onBeginEdit: S,
					onChange: function(t) {
						var e = t.text;
						return I(e);
					},
					onSave: E,
					onCancel: T,
					emojiBtnPosition: "side",
					lockable: !0,
					lowProfile: !0,
					constrainedWidth: !0,
					emojiTextSettingsInLockMode: k,
					ariaLabel: w,
					fieldName: w,
					blockFocusOnLock: !0
				})
			}),
			_.jsx("div", {
				"data-testid": "pushname-description",
				className: "xyorhqc x2pibh5 xymharo",
				children: _.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					children: $
				})
			}),
			M,
			N,
			P != null ? _.jsx(r("WAWebProfileDrawerPhoneNumber.react"), { myPn: P }) : null
		] });
	}
	I.displayName = I.name + " [from " + i.id + "]";
	function T(e) {
		var t = e.profilePicThumb;
		return o("WAWebSettingGatingUtils").isMeTabEnabled() ? _.jsx(r("WAWebProfileDrawerCoverPhoto.react"), { profilePicThumb: t }) : _.jsx("div", babelHelpers.extends({}, (m || (m = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginVer28, L.photoPickerWrapper), { children: _.jsx(r("WAWebProfilePicPicker.react"), { profilePicThumb: t }) }));
	}
	T.displayName = T.name + " [from " + i.id + "]";
	function D(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.contact, l = a.isInitialStep, u = a.onClose, c = a.openCatalogDetailsForm, m = a.openCreateUsernameDrawer, p = a.openEditUsernameDrawer, f = a.openMerchantDetailsForm, R = r("useWAWebUIM")(), L = y(null), E = o("useWAWebModelValues").useModelValues(a.status, ["status"]), D = C(E.status), x = D[0], $ = D[1], P = C(!1), N = P[0], M = P[1], w = y(!1), A = g(o("WAWebDrawerContext").DrawerContext), F = r("useWAWebUnmountSignal")(), O = o("useWAWebContactValues").useContactValues(a.contact.id, [
			o("WAWebFrontendContactGetters").getBusinessProfile,
			o("WAWebContactGetters").getId,
			o("WAWebContactGetters").getStatusMute
		]), B = O[0], W = O[1], q = O[2], U = o("useWAWebModelValues").useModelValues(a.profilePicThumb, ["imgFull", "id"]), V = C(null), H = V[0], G = V[1], z = o("WAWebConnModel").Conn.isSMB ? o("WAWebProductCatalogContext").getProductCatalogContext(A) : {}, j = z.session;
		h(function() {
			if (o("WAWebConnModel").Conn.isSMB && (o("WAWebCatalogCollection").CatalogCollection.findCarouselCatalog(o("WAWebUserPrefsMeUser").getMeUserOrThrow()).then(function(e) {
				var t = Array.isArray(e) ? e[0] : e;
				G({
					catalog: t,
					catalogError: !1
				});
			}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
				e.status === "not_found" || e.status === 404 ? G({
					catalog: null,
					catalogError: !1
				}) : G({
					catalog: null,
					catalogError: !0
				});
			})).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").AdAccountRecoveryRequiredError, function(e) {
				G({
					catalog: null,
					catalogError: !1
				});
			})).catch(function() {
				G({
					catalog: null,
					catalogError: !1
				});
			}), j != null && j.isAccidental())) {
				var e;
				(e = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("left")) == null || e.updateContext(o("WAWebProductCatalogContext").buildProductCatalogContext(new (o("WAWebProductCatalogSession")).ProductCatalogSession(), o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.SMB, o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_SETTINGS));
			}
		}, []), o("WAWebConnModel").Conn.isSMB && j != null && j.isAccidental() && o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[WAWebProfileDrawer] SMB accidental session - awaiting ctx"])));
		var K = function() {
			u ? u() : R == null || R.requestDismiss();
		}, Q = function(t) {
			return !!(t || "").trim();
		}, X = function() {
			w.current = !0;
		}, Y = function() {
			o("WAWebModalManager").ModalManager.open(_.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				tsNavigationData: {
					surface: "unknown",
					viewName: "profile-error"
				},
				onOK: o("WAWebModalManager").closeModalManager,
				okText: r("WAWebFbtCommon")("OK"),
				children: s._(
					/*BTDS*/
					""
				)
			}));
		}, J = function() {
			w.current = !1, $(E.status);
		}, Z = function() {
			if (x == null) {
				J();
				return;
			}
			w.current = !1;
			var e = E.status, t = x;
			if (t !== e) {
				var n = function() {
					var e;
					(e = L.current) == null || e.focusEditBtn();
				};
				M(!0), o("WAWebStatusContactAction").setMyStatus(x, n).then(function() {
					F.aborted || M(!1);
				});
			}
		}, ee = function(t) {
			$(t);
		}, te = w.current || N ? x : E.status, ne = s._(
			/*BTDS*/
			""
		), re = _.jsx(o("WAWebRichTextField.react").RichTextField, {
			testid: "about-input",
			value: te,
			editable: !1,
			pending: N,
			showRemaining: !0,
			validate: Q,
			maxLength: b,
			maxCodeUnits: v,
			onBeginEdit: X,
			onChange: function(t) {
				var e = t.text;
				return ee(e);
			},
			onSave: Z,
			onError: Y,
			onCancel: J,
			theme: "text-input",
			fieldName: ne,
			ariaLabel: ne,
			emojiBtnPosition: "side",
			lockable: !0,
			lowProfile: !0,
			constrainedWidth: !0,
			emojiTextSettingsInLockMode: k,
			blockFocusOnLock: !0,
			ref: L
		}), oe = o("WAWebConnModel").Conn.isSMB ? _.jsx(o("WAWebBizProfileDrawer.react").CoverPhotoDrawerSection, {
			contact: i,
			profilePicThumb: U
		}) : _.jsx(T, { profilePicThumb: a.profilePicThumb }), ae = o("WAWebConnModel").Conn.isSMB ? _.jsx(o("WAWebBizProfileDrawer.react").EditBizProfileEditSection, {
			contact: i,
			openMerchantDetailsForm: f,
			businessProfile: B,
			openCatalogDetailsForm: c,
			catalogResult: H,
			aboutInput: re,
			aboutValue: te,
			openCreateUsernameDrawer: m,
			openEditUsernameDrawer: p,
			entryPoint: a.entryPoint,
			isRefreshed: !0
		}) : _.jsx(I, {
			aboutPromptKey: a.aboutPromptKey,
			conn: a.conn,
			aboutInput: re,
			aboutValue: te,
			contact: i,
			unmountSignal: F,
			openCreateUsernameDrawer: m,
			openEditUsernameDrawer: p
		}), ie = o("WAWebSettingGatingUtils").isMeTabEnabled() ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), le = l ? o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB : o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL;
		return _.jsx(r("WAWebDrawer.react"), {
			ref: n,
			testid: "profile-drawer",
			tsNavigationData: S,
			children: _.jsx(o("WAWebKeyboardRotateFocus.react").RotateFocus, {
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
				children: _.jsxs("div", {
					className: "x1rife3k x78zum5 xdt5ytf x5yr21d",
					children: [_.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
						testid: "drawer-title-profile",
						title: ie,
						onBack: K,
						type: le,
						focusBackOrCancel: !0
					}), _.jsxs(r("WAWebDrawerBody.react"), { children: [
						oe,
						ae,
						o("WAWebQuickPromotionGating").profilePrivacyTipsEnabled() && _.jsx(r("WAWebProfileQuickPromotionSurface.react"), {}),
						_.jsx("div", { className: "xexx8yu xyri2b xefzj8c x1c1uobl" })
					] })]
				})
			})
		});
	}
	D.displayName = D.name + " [from " + i.id + "]", l.default = E;
}), 226);
