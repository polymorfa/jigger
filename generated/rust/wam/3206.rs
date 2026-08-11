pub const WAM_GRAPHQL_CATALOG_REQUEST: u32 = 3206;

#[derive(Debug, Default)]
pub struct GraphqlCatalogRequestEvent {
    /// field 1, wire `graphql_catalog_endpoint`
    pub graphql_catalog_endpoint: Option<GRAPHQLCATALOGENDPOINT>,
    /// field 2, wire `graphql_request_result`
    pub graphql_request_result: Option<GRAPHQLREQUESTRESULT>,
    /// field 3, wire `graphql_error_code`
    pub graphql_error_code: Option<i64>,
    /// field 4, wire `business_jid`
    pub business_jid: Option<String>,
    /// field 5, wire `business_type`
    pub business_type: Option<BUSINESSTYPE>,
}