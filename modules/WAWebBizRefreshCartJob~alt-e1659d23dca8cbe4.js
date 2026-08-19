__d("WAWebBizRefreshCartJob", [
	"WALogger",
	"WAWebBizGraphQLRefreshCartJob",
	"WAWebGetFormattedCatalogJid",
	"WAWebLidMigrationUtils",
	"err"
], (function(t, n, r, o, a, i, l) {
	var e, s = async function(n, a, i, l, s) {
		var t, u = await o("WAWebBizGraphQLRefreshCartJob").RefreshCart({ cart: {
			jid: (t = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(n)) != null ? t : n.toString(),
			products: a.map(function(e) {
				return { id: e };
			}),
			image_dimensions: {
				width: i,
				height: l
			},
			direct_connection_encrypted_info: s,
			variant_info_fields: "variant_properties"
		} });
		if (u.type === "success") return u.cartResult;
		throw u.type, o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["WAWebBizRefreshCart: error handling flow, Error Type ", ""])), JSON.stringify(u.type)), r("err")("refreshCartGraphQL: error handling flow, Error Type " + JSON.stringify(u.type));
	};
	function u(e) {
		var t, n = e.bizJID, r = e.directConnectionEncryptedInfo, a = e.ids, i = e.imageHeight, l = e.imageWidth, u = (t = o("WAWebLidMigrationUtils").toPn(n)) != null ? t : n;
		return s(u, a, l, i, r);
	}
	l.refreshCart = u;
}), 98);
