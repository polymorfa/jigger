__d("WAWebBizQueryOrderJob", [
	"WALogger",
	"WAWebBackendErrors",
	"WAWebBizCatalogGatingUtils",
	"WAWebBizQueryOrderJobQuery.graphql",
	"WAWebGetFormattedCatalogJid",
	"WAWebGraphQLServerError",
	"WAWebNetworkStatus",
	"WAWebRelayClient",
	"WAWebUserPrefsMeUser"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = e !== void 0 ? e : e = n("WAWebBizQueryOrderJobQuery.graphql");
	async function c(e) {
		var t = e.directConnectionEncryptedInfo, n = t === void 0 ? null : t, r = e.height, a = e.orderId, i = e.token, l = e.width;
		return o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions() ? Promise.reject(new (o("WAWebBackendErrors")).E451()) : d(a, l, r, i, n);
	}
	async function d(e, t, n, a, i) {
		i === void 0 && (i = null);
		try {
			var l, c, d, m, p, _;
			await r("WAWebNetworkStatus").waitIfOffline();
			var f = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), g = await o("WAWebRelayClient").fetchQuery(u, { request: { order: {
				jid: (l = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(f)) != null ? l : f.toString(),
				token: { sensitive_string_value: a },
				id: e,
				image_dimensions: {
					height: n,
					width: t
				},
				direct_connection_encrypted_info: i
			} } }, { environmentType: "whatsapp_catalog" });
			if ((g == null || (c = g.xwa_checkout_get_order_info) == null ? void 0 : c.order) == null) throw new (o("WAWebBackendErrors")).ServerStatusCodeError(500);
			var h = g.xwa_checkout_get_order_info.order, y = ((d = h.products) != null ? d : []).map(function(e) {
				var t, n, r, o = [];
				return (t = e.variant_info) == null || (t = t.variant_properties) == null || t.forEach(function(e) {
					e.name != null && e.value != null && o.push([e.name, e.value]);
				}), {
					id: e.id,
					name: e.name,
					price: e.price != null ? parseInt(e.price, 10) : null,
					currency: e.currency,
					quantity: e.quantity != null ? parseInt(e.quantity, 10) : null,
					thumbnailId: (n = e.media) == null || (n = n.images) == null || (n = n.at(0)) == null ? void 0 : n.id,
					thumbnailUrl: (r = e.media) == null || (r = r.images) == null || (r = r.at(0)) == null ? void 0 : r.request_image_url,
					properties: o
				};
			});
			return {
				createdAt: h.creation_time_stamp != null ? Number(h.creation_time_stamp) : null,
				currency: (m = h.price_details) == null ? void 0 : m.currency,
				subtotal: ((p = h.price_details) == null ? void 0 : p.subtotal_amount) != null ? parseInt(h.price_details.subtotal_amount, 10) : null,
				tax: null,
				total: ((_ = h.price_details) == null ? void 0 : _.total_amount) != null ? parseInt(h.price_details.total_amount, 10) : null,
				products: y
			};
		} catch (e) {
			if (o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["WAWebBizQueryOrderJob: GraphQL queryOrder failed"]))), e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
				var C, b = (C = e.source.errors[0]) == null ? void 0 : C.code;
				throw b === 451 ? new (o("WAWebBackendErrors")).E451() : new (o("WAWebBackendErrors")).ServerStatusCodeError(b != null ? b : 500);
			}
			throw e;
		}
	}
	l.queryOrder = c;
}), 98);
