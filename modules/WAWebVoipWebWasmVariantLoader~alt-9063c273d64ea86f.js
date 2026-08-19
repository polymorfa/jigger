__d("WAWebVoipWebWasmVariantLoader", [
	"JSResourceForInteraction",
	"WALogger",
	"WAWebABProps",
	"WAWebABPropsConfigs",
	"WAWebCoreActionsODS",
	"WAWebVoipGatingUtils",
	"WAWebVoipWebWasmMemory",
	"cr:12201"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _ = "prod-nonlab", f = new Set([
		"prod-nonlab",
		"prod-lab",
		"prod-labvideo"
	]), g = 20, h = 0;
	function y(t) {
		if (t) return o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: ThreadPoolManager: Using legacy pthread pool size ", " (WebKit browser)"])), g), g;
		try {
			var n = o("WAWebABProps").getABPropConfigValue("web_voip_dynamic_thread_preallocate_count");
			if (typeof n == "number" && n > 0) return o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["voip: ThreadPoolManager: Using on-demand worker startup with target pool size ", ""])), n), h;
		} catch (e) {}
		return o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: ThreadPoolManager: Using legacy pthread pool size ", ""])), g), g;
	}
	function C() {
		var e = o("WAWebVoipGatingUtils").isWebKitBrowser(), t = y(e), n = o("WAWebVoipWebWasmMemory").createVoipWasmMemoryOverride(e);
		return n == null ? { pthreadPoolSizeOverride: t } : {
			pthreadPoolSizeOverride: t,
			wasmMemory: n
		};
	}
	async function b(e) {
		o("WAWebCoreActionsODS").logCallVoipInitWasmArtifactUnversionedLoadAttempt();
		var t = await r("JSResourceForInteraction")("WAWebVoipWebWasmLoader").__setRef("WAWebVoipWebWasmVariantLoader").load(), n = await t(e != null ? e : C());
		return o("WAWebCoreActionsODS").logCallVoipInitWasmArtifactUnversionedLoadSuccess(), n;
	}
	async function v(e) {
		o("WAWebCoreActionsODS").logCallVoipInitWasmArtifactContentAddressedLoadAttempt();
		var t = await r("JSResourceForInteraction")("WAWebVoipWebWasmLoader_ContentAddressed_internal").__setRef("WAWebVoipWebWasmVariantLoader").load(), n = await t(e != null ? e : C());
		return o("WAWebCoreActionsODS").logCallVoipInitWasmArtifactContentAddressedLoadSuccess(), n;
	}
	function S(e) {
		if (typeof e == "string") {
			for (var t of f) if (e === t) return t;
		}
		return e !== _ && o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
			"voip: Invalid WASM variant '",
			"', falling back to '",
			"'"
		])), String(e), _), _;
	}
	function R(e) {
		switch (e) {
			case "prod-nonlab": return null;
			case "prod-lab": return "prod-lab";
			case "prod-labvideo": return "prod-labvideo";
			default: return null;
		}
	}
	async function L(e, t, n) {
		return t ? v(n) : b(n);
	}
	async function E(e) {
		e === void 0 && (e = !1);
		var t = o("WAWebABPropsConfigs").ABPropConfigs.web_voip_load_wasm_variant;
		if (t == null) return L(_, e);
		var r = null;
		try {
			r = o("WAWebABProps").getABPropConfigValue("web_voip_load_wasm_variant");
		} catch (t) {
			return L(_, e);
		}
		if (r == null) return L(_, e);
		var a = S(r);
		if (o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
			"voip: AB prop set to '",
			"', validated variant: '",
			"'"
		])), String(r), a), !f.has(a)) return o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["voip: Variant '", "' not available, using default loader"])), a), L(_, e);
		var i = C(), l = R(a);
		if (l != null && n("cr:12201") != null) try {
			return await n("cr:12201").tryLoadLabVariant(l, i);
		} catch (t) {
			return o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
				"voip: Failed to load variant '",
				"': ",
				", falling back to default"
			])), a, String(t)), L(_, e);
		}
		return L(a, e, i);
	}
	l.loadVoipWasmVariant = E;
}), 98);
