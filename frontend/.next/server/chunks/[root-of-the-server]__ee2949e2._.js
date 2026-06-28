module.exports = [
"[externals]/node:inspector [external] (node:inspector, cjs, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/[externals]_node:inspector_7a4283c6._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[externals]/node:inspector [external] (node:inspector, cjs)");
    });
});
}),
"[project]/Desktop/my-learning/theChat/thechat/frontend/sentry.server.config.ts [instrumentation] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/Desktop_my-learning_theChat_thechat_frontend_sentry_server_config_ts_9c4e7bf2._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/Desktop/my-learning/theChat/thechat/frontend/sentry.server.config.ts [instrumentation] (ecmascript)");
    });
});
}),
];